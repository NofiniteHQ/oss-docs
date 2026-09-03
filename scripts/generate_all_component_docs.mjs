import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STACK_DOCS_DIR = path.resolve(__dirname, '../../stack/packages/nui/docs/components');
const OSS_LEGACY_DOCS_DIR = path.resolve(__dirname, '../docs/nui/components');
const OUT_COMPONENTS_DIR = path.resolve(__dirname, '../src/app/nui/components');
const OUT_APP_DIR = path.resolve(__dirname, '../src/app/nui');

const categories = {
  'general': {
    title: 'General & Actions',
    description: 'Fundamental interactive elements and action triggers.',
    components: ['button', 'badge', 'chip', 'kbd', 'watermark']
  },
  'layout-and-structure': {
    title: 'Layout & Structure',
    description: 'Components for organizing page structure, layout grids, and content containers.',
    components: ['accordion', 'card', 'collapsible', 'divider', 'layout', 'resizable', 'scrollarea']
  },
  'inputs-and-forms': {
    title: 'Inputs & Forms',
    description: 'Components for user input, form controls, and data capture.',
    components: ['checkbox', 'colorpicker', 'fileuploader', 'form', 'input', 'numberinput', 'passwordinput', 'pininput', 'radiogroup', 'rating', 'slider', 'switch', 'textarea']
  },
  'pickers-and-selects': {
    title: 'Pickers & Selects',
    description: 'Components for selection menus, search dropdowns, and date/time pickers.',
    components: ['calendar', 'combobox', 'datepicker', 'daterangepicker', 'multiselect', 'select', 'timepicker', 'timerangepicker']
  },
  'navigation': {
    title: 'Navigation',
    description: 'Components for hierarchical routing, breadcrumbs, menus, and pagination.',
    components: ['breadcrumbs', 'link', 'megamenu', 'pagination', 'segmentedcontrol', 'stepper', 'tabs', 'treeview']
  },
  'overlays-and-dialogs': {
    title: 'Overlays & Dialogs',
    description: 'Contextual overlays, modal windows, drawers, and floating panels.',
    components: ['contextmenu', 'dialog', 'drawer', 'dropdown', 'hovercard', 'modal', 'popover', 'tooltip']
  },
  'indicators-and-buttons': {
    title: 'Indicators & Feedback',
    description: 'Components for progress tracking, notifications, banners, and loading states.',
    components: ['alert', 'progress', 'skeleton', 'spinner', 'toast']
  },
  'data-display': {
    title: 'Data Display & Media',
    description: 'Components for rendering structured data, media players, code, and avatars.',
    components: ['attachment', 'avatar', 'carousel', 'clipboard', 'codeblock', 'emptystate', 'image', 'statcard', 'table', 'timeline', 'transferlist', 'video', 'virtuallist']
  }
};

const titleCase = (str) => {
  const map = {
    'codeblock': 'CodeBlock',
    'colorpicker': 'ColorPicker',
    'datepicker': 'DatePicker',
    'daterangepicker': 'DateRangePicker',
    'emptystate': 'EmptyState',
    'fileuploader': 'FileUploader',
    'hovercard': 'HoverCard',
    'kbd': 'Kbd',
    'megamenu': 'MegaMenu',
    'multiselect': 'MultiSelect',
    'nuiprovider': 'NUIProvider',
    'numberinput': 'NumberInput',
    'passwordinput': 'PasswordInput',
    'pininput': 'PinInput',
    'radiogroup': 'RadioGroup',
    'scrollarea': 'ScrollArea',
    'segmentedcontrol': 'SegmentedControl',
    'statcard': 'StatCard',
    'timeline': 'Timeline',
    'timepicker': 'TimePicker',
    'timerangepicker': 'TimeRangePicker',
    'transferlist': 'TransferList',
    'treeview': 'TreeView',
    'video': 'VideoPlayer',
    'virtuallist': 'VirtualList',
    'watermark': 'Watermark'
  };
  return map[str.toLowerCase()] || (str.charAt(0).toUpperCase() + str.slice(1));
};

function sanitizeTokens(markdown) {
  let res = markdown;
  res = res.replace(/--nui-bg-surface/g, '--bg-surface');
  res = res.replace(/--nui-bg-subtle/g, '--bg-subtle');
  res = res.replace(/--nui-bg-page/g, '--bg-page');
  res = res.replace(/--nui-bg-muted/g, '--bg-muted');
  res = res.replace(/--nui-bg-accent/g, '--bg-accent');
  res = res.replace(/--nui-fg-default/g, '--fg-default');
  res = res.replace(/--nui-fg-subtle/g, '--fg-subtle');
  res = res.replace(/--nui-fg-muted/g, '--fg-muted');
  res = res.replace(/--nui-fg-accent/g, '--fg-accent');
  res = res.replace(/--nui-fg-disabled/g, '--fg-disabled');
  res = res.replace(/--nui-fg-inverse/g, '--fg-inverse');
  res = res.replace(/--nui-border-default/g, '--border-default');
  res = res.replace(/--nui-border-strong/g, '--border-strong');
  res = res.replace(/--nui-border-subtle/g, '--border-subtle');
  res = res.replace(/--nui-border-hover/g, '--border-hover');
  res = res.replace(/--nui-border-focus/g, '--border-focus');
  res = res.replace(/--nui-brand-600/g, '--color-primary');
  res = res.replace(/--nui-brand-700/g, '--color-primary-hover');
  res = res.replace(/--nui-brand-primary/g, '--color-primary');
  res = res.replace(/--nui-color-danger/g, '--color-danger');
  res = res.replace(/--nui-color-success/g, '--color-success');
  res = res.replace(/--nui-color-warning/g, '--color-warning');
  res = res.replace(/--nui-color-info/g, '--color-info');
  res = res.replace(/--nui-radius-sm/g, '--radius-sm');
  res = res.replace(/--nui-radius-md/g, '--radius-md');
  res = res.replace(/--nui-radius-lg/g, '--radius-lg');
  res = res.replace(/--nui-radius-full/g, '--radius-full');
  res = res.replace(/--nui-font-sans/g, '--font-sans');
  res = res.replace(/--nui-font-mono/g, '--font-mono');
  res = res.replace(/--nui-text-xs/g, 'text-xs');
  res = res.replace(/--nui-text-sm/g, 'text-sm');
  res = res.replace(/--nui-text-base/g, 'text-base');
  res = res.replace(/--nui-text-lg/g, 'text-lg');
  res = res.replace(/--nui-space-/g, '--space-');
  res = res.replace(/--nui-/g, '--');
  return res;
}

function generateComponentMdx(compName, categoryKey) {
  const ossPath = path.join(OSS_LEGACY_DOCS_DIR, `${compName}.md`);
  const stackPath = path.join(STACK_DOCS_DIR, `${compName}.md`);

  let content = '';
  let description = '';
  let propsCompName = titleCase(compName);
  let importName = titleCase(compName);

  if (compName === 'layout') {
    importName = 'Container';
    propsCompName = 'Container';
  } else if (compName === 'video') {
    importName = 'VideoPlayer';
    propsCompName = 'VideoPlayer';
  }

  // 1. Prefer rich legacy doc if available, otherwise use stack doc
  if (fs.existsSync(ossPath)) {
    const raw = fs.readFileSync(ossPath, 'utf-8');
    
    // Extract description (first paragraph after title)
    const descMatch = raw.match(/^#[^\n]*\n+([^#\n-][^\n]+)/m);
    if (descMatch) description = descMatch[1].trim();

    // Cleanse frontmatter and existing props table in raw markdown
    let body = raw.replace(/^---[\s\S]*?---/, '');
    body = body.replace(/^#\s+[^\n]+/m, '');
    body = body.replace(/^##\s+Props[\s\S]*?(?=^##\s+|^---|\Z)/gm, '');

    body = sanitizeTokens(body);

    body = body.replace(/```tsx\s*(?:id="[^"]*")?\n([\s\S]*?)```/g, (match, codeString) => {
      const cleanCode = codeString.trim();
      return `\`\`\`tsx\n${cleanCode}\n\`\`\``;
    });

    content = `# ${titleCase(compName)}

${description || `A composable, accessible ${titleCase(compName)} component for modern React applications.`}

\`\`\`tsx
import { ${importName} } from '@nofinite/nui';
\`\`\`

---

## Interactive Preview

<Preview name="${compName}" />

---

${body.trim()}

---

## API Reference

<PropsTable name="${propsCompName}" />
`;
  } else if (fs.existsSync(stackPath)) {
    let raw = fs.readFileSync(stackPath, 'utf-8');
    raw = sanitizeTokens(raw);
    
    content = `# ${titleCase(compName)}

A fully accessible, token-driven ${titleCase(compName)} component built with strict WAI-ARIA compliance.

\`\`\`tsx
import { ${importName} } from '@nofinite/nui';
\`\`\`

---

## Interactive Preview

<Preview name="${compName}" />

---

## Usage

### Basic Example

\`\`\`tsx
import { ${importName} } from '@nofinite/nui';

<${importName} />
\`\`\`

---

## API Reference

<PropsTable name="${propsCompName}" />

---

## Design Tokens & Theming

In NUI v3, this component is styled using semantic tokens from \`@nofinite/nuicss\`:

| Token | Usage |
| --- | --- |
| \`--bg-surface\` | Default surface background |
| \`--bg-subtle\` | Hover and muted background |
| \`--fg-default\` | Primary text color |
| \`--fg-muted\` | Secondary text color |
| \`--border-default\` | Default border color |
| \`--color-primary\` | Primary brand emphasis |
| \`--radius-md\` | Border radius |

---

## Accessibility & Guidelines

- **Semantic Tokens:** Built strictly using Nuicss semantic tokens (\`bg-surface\`, \`text-default\`, \`border-subtle\`, \`bg-primary\`).
- **Keyboard Navigation:** Adheres to strict WAI-ARIA standards.
- **Screen Reader Support:** Includes semantic roles and live regions where appropriate.
`;
  } else {
    content = `# ${titleCase(compName)}

A composable ${titleCase(compName)} component for React.

\`\`\`tsx
import { ${importName} } from '@nofinite/nui';
\`\`\`

---

## Interactive Preview

<Preview name="${compName}" />

---

## API Reference

<PropsTable name="${propsCompName}" />
`;
  }

  // Ensure preview and props table are present
  if (!content.includes('<Preview')) {
    content = content.replace(/(```tsx\nimport[^\n]+\n```)/, `$1\n\n---\n\n## Interactive Preview\n\n<Preview name="${compName}" />`);
  }
  if (!content.includes('<PropsTable')) {
    content += `\n\n## API Reference\n\n<PropsTable name="${propsCompName}" />\n`;
  }

  content = sanitizeTokens(content);

  const outDir = path.join(OUT_COMPONENTS_DIR, compName);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'page.mdx'), content, 'utf-8');
  console.log(`Generated component page with StackBlitz preview: /nui/components/${compName}`);
}

function generateCategoryHubs() {
  for (const [catKey, catData] of Object.entries(categories)) {
    let hubMdx = `# ${catData.title}

${catData.description}

---

## Components

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
`;

    for (const comp of catData.components) {
      const title = titleCase(comp);
      const compDir = path.join(OUT_COMPONENTS_DIR, comp);
      let compDesc = `Interactive and accessible ${title} component.`;
      
      const pageFile = path.join(compDir, 'page.mdx');
      if (fs.existsSync(pageFile)) {
        const pageContent = fs.readFileSync(pageFile, 'utf-8');
        const descMatch = pageContent.match(/^#[^\n]*\n+([^#\n-`][^\n]+)/m);
        if (descMatch) compDesc = descMatch[1].trim();
      }

      hubMdx += `  <a 
    href="/nui/components/${comp}" 
    className="group block p-6 rounded-xl border border-default bg-surface hover:border-primary/50 hover:shadow-md transition-all duration-200"
  >
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-bold text-default group-hover:text-primary transition-colors">${title}</h3>
      <span className="text-xs text-muted font-mono bg-subtle px-2 py-0.5 rounded">v3.0.5</span>
    </div>
    <p className="text-sm text-muted line-clamp-2 mb-4">${compDesc}</p>
    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
      View Documentation & API →
    </span>
  </a>
`;
    }

    hubMdx += `</div>

---

## All Component Docs in this Category

`;

    for (const comp of catData.components) {
      hubMdx += `- [${titleCase(comp)}](/nui/components/${comp})\n`;
    }

    const catFolder = path.join(OUT_APP_DIR, catKey);
    fs.mkdirSync(catFolder, { recursive: true });
    fs.writeFileSync(path.join(catFolder, 'page.mdx'), hubMdx, 'utf-8');
    console.log(`Generated category hub: /nui/${catKey}`);
  }
}

function main() {
  console.log('Regenerating all 68 component docs with StackBlitz interactive previews...');
  
  for (const [catKey, catData] of Object.entries(categories)) {
    for (const comp of catData.components) {
      generateComponentMdx(comp, catKey);
    }
  }
  generateComponentMdx('nuiprovider', 'getting-started');

  console.log('\nGenerating visual Category Hub pages...');
  generateCategoryHubs();

  console.log('\nAll 68 component pages now equipped with interactive StackBlitz previews!');
}

main();
