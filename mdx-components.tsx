import React, { cache } from 'react';
import type { MDXComponents } from 'mdx/types';
import { CodeBlock, Alert } from '@nofinite/nui';
import { Preview } from '@/components/Preview';
import { PropsTable } from '@/components/PropsTable';

// A wrapper for sequential steps
const Steps = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-12 ml-4 border-l border-default pl-8 [counter-reset:step]">
    {children}
  </div>
);

// We can intercept H3s inside Steps if we want, but it's easier to just let users write normal markdown inside.

// Create a per-request slug tracker to deduplicate heading IDs
const getSlugTracker = cache(() => new Map<string, number>());

function extractText(node: any): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractText).join('');
  }
  if (React.isValidElement(node)) {
    return extractText((node.props as any).children);
  }
  return '';
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const slugify = (str: string) => {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const getUniqueId = (children: any) => {
    const text = extractText(children);
    let id = slugify(text);
    if (!id) return undefined;
    
    // In Server Components, getSlugTracker is scoped to the request.
    // (If this somehow runs in a client component, React.cache falls back safely in modern React, or we could handle it, but MDX pages are RSC).
    try {
      const tracker = getSlugTracker();
      if (tracker.has(id)) {
        const count = tracker.get(id)! + 1;
        tracker.set(id, count);
        id = `${id}-${count - 1}`;
      } else {
        tracker.set(id, 1);
      }
    } catch (e) {
      // Fallback if cache() is not available (e.g. client side rendering)
    }
    
    return id;
  };

  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-extrabold tracking-tight mb-6 mt-8">{children}</h1>
    ),
    h2: ({ children }) => {
      const id = getUniqueId(children);
      return <h2 id={id} className="text-2xl font-semibold tracking-tight mb-4 mt-12 pb-2 border-b border-default scroll-mt-24">{children}</h2>;
    },
    h3: ({ children, className }) => {
      const id = getUniqueId(children);
      return <h3 id={id} className={`text-xl font-semibold tracking-tight mb-4 mt-8 scroll-mt-24 ${className || ''}`}>{children}</h3>;
    },
    p: ({ children }) => (
      <p className="text-default leading-7 mb-6 text-[15px]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-[15px]">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-[15px]">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="text-default leading-7">{children}</li>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-primary hover:underline font-medium decoration-primary/30 underline-offset-4">
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-default">{children}</strong>
    ),
    code: ({ className, children, ...props }: any) => {
      // If className exists (e.g. from shiki or rehype), do not apply our inline markdown styles
      // because it's part of a fenced code block or an external component like CodeBlock
      if (className) {
        return <code className={className} {...props}>{children}</code>;
      }
      return <code className="bg-subtle text-default px-1.5 py-0.5 rounded-md text-[13px] font-mono border border-default/50" {...props}>{children}</code>;
    },
    pre: ({ children }) => {
      let codeString = '';
      let language = 'text';

      if (React.isValidElement(children) && children.props) {
        const childProps = children.props as any;
        if (typeof childProps.children === 'string') {
          codeString = childProps.children.trim();
        }
        if (childProps.className && childProps.className.startsWith('language-')) {
          language = childProps.className.replace('language-', '');
        }
      } else if (typeof children === 'string') {
        codeString = children.trim();
      }

      return (
        <div className="mb-6 mt-6 rounded-lg overflow-hidden border border-default shadow-sm">
          <CodeBlock code={codeString} language={language as any} readOnlyLanguage={true} className="!m-0 !border-0" />
        </div>
      );
    },
    table: ({ children }) => (
      <div className="w-full overflow-x-auto mb-8 border border-default rounded-lg shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-subtle/50 border-b border-default">{children}</thead>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-default bg-page">{children}</tbody>
    ),
    tr: ({ children }) => (
      <tr className="transition-colors hover:bg-subtle/30">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3.5 font-semibold text-default whitespace-nowrap">{children}</th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3.5 text-muted align-top">{children}</td>
    ),
    blockquote: ({ children }) => {
      // We can map blockquote to an Alert component for a premium look
      return (
        <div className="mb-6 mt-6">
          <Alert variant="info" className="bg-subtle/50">
            {children}
          </Alert>
        </div>
      );
    },
    Steps,
    Preview,
    PropsTable,
    Callout: ({ children, variant = 'info', title }: { children: React.ReactNode, variant?: any, title?: string }) => (
      <div className="mb-6 mt-6">
        <Alert variant={variant} title={title}>
          {children}
        </Alert>
      </div>
    ),
    ...components,
  };
}
