"use client";

import React, { useState } from 'react';
import { Tabs, CodeBlock } from '@nofinite/nui';
import { registry } from '@/registry';
import { ExternalLink } from 'lucide-react';
import sdk from '@stackblitz/sdk';

export interface PreviewProps {
  name?: string;
  code?: string;
  children?: React.ReactNode;
  hideCode?: boolean;
}

export function Preview({ name, code: customCode, children, hideCode }: PreviewProps) {
  const item = name ? (registry as any)[name] : null;
  const Component = item?.component;
  const rawCode = customCode || item?.code || '';

  if (hideCode) {
    return (
      <div className="my-8 rounded-lg border border-default overflow-hidden shadow-sm bg-page flex flex-col">
        <div className="p-6 md:p-10 flex items-center justify-center min-h-[200px] relative transition-colors bg-page text-default">
          <div 
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
            style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
          />
          <div className="relative z-10 w-full flex justify-center items-center gap-4 flex-wrap">
            {children ? children : Component ? <Component /> : <div className="text-muted text-sm">Preview not available</div>}
          </div>
        </div>
      </div>
    );
  }

  const openInStackBlitz = () => {
    let appJs = rawCode.replace(/import .* from '.*';\n/g, '').trim();
    
    const comps = [
      'Accordion', 'Alert', 'Attachment', 'Avatar', 'Badge', 'Breadcrumbs', 'Button', 
      'Calendar', 'Card', 'Carousel', 'Checkbox', 'Chip', 'Clipboard', 'CodeBlock', 
      'Collapsible', 'ColorPicker', 'Combobox', 'ContextMenu', 'DatePicker', 'DateRangePicker', 
      'Divider', 'Drawer', 'Dropdown', 'EmptyState', 'FileUploader', 'Form', 'HoverCard', 
      'Image', 'Input', 'Kbd', 'Container', 'Link', 'MegaMenu', 'Modal', 'MultiSelect', 
      'NumberInput', 'Pagination', 'PasswordInput', 'PinInput', 'Popover', 'Progress', 
      'RadioGroup', 'Rating', 'Resizable', 'ScrollArea', 'SegmentedControl', 'Select', 
      'Skeleton', 'Slider', 'Spinner', 'StatCard', 'Stepper', 'Switch', 'Table', 'Tabs', 
      'Textarea', 'Timeline', 'TimePicker', 'TimeRangePicker', 'Toast', 'Tooltip', 
      'TransferList', 'TreeView', 'VideoPlayer', 'VirtualList', 'Watermark'
    ];
    const usedComps = comps.filter(c => rawCode.includes(`<${c}`) || rawCode.includes(`${c}.`));
    
    let imports = `import React, { useState } from 'react';\nimport { ${usedComps.join(', ') || 'Button'} } from '@nofinite/nui';\nimport * as FaIcons from 'react-icons/fa';\nimport '@nofinite/nui/styles.css';\n\n`;
    
    let dummyScope = `
const data = [
  { id: '1', name: 'Alice', age: 28, status: 'Active', price: 99.99 },
  { id: '2', name: 'Bob', age: 34, status: 'Inactive', price: 149.50 },
  { id: '3', name: 'Charlie', age: 22, status: 'Active', price: 29.99 },
];
const items = ['Item 1', 'Item 2', 'Item 3'];
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];
const date = new Date();
const r = { start: new Date(), end: new Date() };
`;

    let finalAppJs = imports + dummyScope;

    if (appJs.includes('render(')) {
      finalAppJs += appJs.replace(/render\(\s*(<[\s\S]*>)\s*\)/, 'export default function App() { return $1; }');
    } else if (appJs.includes('function ') && !appJs.includes('export default')) {
      finalAppJs += appJs.replace(/export function/, 'function').replace(/function ([A-Za-z0-9_]+)/, 'export default function App');
    } else if (!appJs.includes('export default function')) {
      let matchFirstTag = appJs.match(/(<[\s\S]*>)/);
      if (matchFirstTag) {
        let statements = appJs.substring(0, matchFirstTag.index);
        let jsx = matchFirstTag[0];
        finalAppJs += `export default function App() {\n  ${statements}\n  return (\n    <div className="p-8 w-full min-h-screen bg-[#0d1117] flex flex-wrap gap-4 items-center justify-center text-white">\n      ${jsx}\n    </div>\n  );\n}`;
      } else {
        finalAppJs += `export default function App() {\n  return (\n    <div className="p-8 w-full min-h-screen bg-[#0d1117] flex flex-wrap gap-4 items-center justify-center text-white">\n      ${appJs}\n    </div>\n  );\n}`;
      }
    } else {
      finalAppJs += appJs;
    }

    finalAppJs = finalAppJs.replace(/;\s*<\/div>/g, '</div>');

    const packageJson = {
      name: "nui-preview",
      version: "0.0.0",
      type: "module",
      private: true,
      dependencies: {
        "react": "^19.0.0",
        "react-dom": "^19.0.0",
        "@nofinite/nui": "latest",
        "@nofinite/nuicss": "latest",
        "lucide-react": "latest",
        "react-icons": "latest",
        "framer-motion": "latest",
        "clsx": "latest",
        "tailwind-merge": "latest"
      },
      scripts: {
        "dev": "vite",
        "build": "vite build"
      },
      devDependencies: {
        "vite": "^5.0.0",
        "@vitejs/plugin-react": "^4.0.0",
        "typescript": "^5.0.0",
        "@types/react": "^18.2.0",
        "@types/react-dom": "^18.2.0",
        "postcss": "^8.4.0"
      }
    };

    sdk.openProject({
      title: 'Nofinite UI Preview',
      description: 'Interactive NUI component preview',
      template: 'node',
      files: {
        'index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>NUI Component Preview</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
        'src/main.tsx': `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import '@nofinite/nui/styles.css';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);`,
        'src/App.tsx': finalAppJs,
        'src/index.css': `@nuicss;

body {
  background-color: #0d1117;
  color: #fff;
  margin: 0;
  padding: 0;
}`,
        'vite.config.ts': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});`,
        'package.json': JSON.stringify(packageJson, null, 2)
      }
    }, { openFile: 'src/App.tsx' });
  };

  return (
    <div className="my-8 rounded-lg border border-default overflow-hidden shadow-sm bg-page flex flex-col">
      <Tabs defaultValue="preview">
        <div className="border-b border-default px-4 bg-subtle/30 flex items-center justify-between overflow-x-auto gap-4">
          <Tabs.List className="!border-none !bg-transparent !gap-6 !h-11 !p-0 !rounded-none">
            <Tabs.Trigger 
              value="preview" 
              className="!rounded-none !h-full !px-4 !text-sm !font-medium !border-b-2 !border-transparent !bg-transparent !shadow-none text-muted hover:text-default data-[state=active]:!border-primary data-[state=active]:!text-default"
            >
              Preview
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="code" 
              className="!rounded-none !h-full !px-4 !text-sm !font-medium !border-b-2 !border-transparent !bg-transparent !shadow-none text-muted hover:text-default data-[state=active]:!border-primary data-[state=active]:!text-default"
            >
              Code
            </Tabs.Trigger>
          </Tabs.List>
          
          <button 
            onClick={openInStackBlitz} 
            className="text-muted hover:text-default text-xs flex items-center gap-1.5 transition-colors font-medium whitespace-nowrap"
          >
            <ExternalLink size={14} /> Open in StackBlitz
          </button>
        </div>
        
        <Tabs.Content value="preview" className="!m-0 !p-0 !border-none !outline-none focus-visible:!outline-none">
          <div className="p-6 md:p-10 flex items-center justify-center min-h-[250px] relative transition-colors bg-page text-default">
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
              style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
            />
            <div className="relative z-10 w-full flex justify-center items-center gap-4 flex-wrap">
              {children ? children : Component ? <Component /> : <div className="text-muted text-sm">Preview not available</div>}
            </div>
          </div>
        </Tabs.Content>
        
        <Tabs.Content value="code" className="!m-0 !p-0 !border-none !outline-none focus-visible:!outline-none">
          <div className="relative max-h-[500px] overflow-auto">
            <CodeBlock code={rawCode} language="tsx" readOnlyLanguage />
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}
