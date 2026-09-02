import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REGISTRY_DIR = path.resolve(__dirname, '../src/registry');
const INDEX_FILE = path.join(REGISTRY_DIR, 'index.ts');

const VALID_NUI_EXPORTS = new Set([
  'Accordion', 'Alert', 'Attachment', 'Avatar', 'Badge', 'Breadcrumbs', 'Button', 
  'Calendar', 'Card', 'Carousel', 'Checkbox', 'Chip', 'Clipboard', 'CodeBlock', 
  'Collapsible', 'ColorPicker', 'Combobox', 'ContextMenu', 'DatePicker', 'DateRangePicker', 
  'DialogProvider', 'useDialog', 'Divider', 'Drawer', 'Dropdown', 'EmptyState', 
  'FileUploader', 'Form', 'HoverCard', 'Image', 'Input', 'Kbd', 'Container', 'Link', 
  'MegaMenu', 'Modal', 'MultiSelect', 'NUIProvider', 'useTheme', 'NumberInput', 
  'Pagination', 'PasswordInput', 'PinInput', 'Popover', 'Progress', 'RadioGroup', 
  'Rating', 'Resizable', 'ScrollArea', 'SegmentedControl', 'Select', 'Skeleton', 
  'Slider', 'Spinner', 'StatCard', 'Stepper', 'Switch', 'Table', 'Tabs', 'Textarea', 
  'Timeline', 'TimePicker', 'TimeRangePicker', 'Toast', 'ToastProvider', 'useToast', 
  'Tooltip', 'TransferList', 'TreeView', 'VideoPlayer', 'VirtualList', 'Watermark',
  'cn'
]);

function cleanRegistry() {
  console.log('Sanitizing and rebuilding all registry snippet files...');
  const files = fs.readdirSync(REGISTRY_DIR).filter(f => f.endsWith('.tsx') && f !== 'index.ts');

  const entries = [];

  for (const file of files) {
    const fullPath = path.join(REGISTRY_DIR, file);
    const raw = fs.readFileSync(fullPath, 'utf-8');

    // Extract the function Example definition
    const funcMatch = raw.match(/(export\s+(?:default\s+)?function\s+Example[\s\S]*)$/);
    let funcBody = '';

    if (funcMatch) {
      funcBody = funcMatch[1].trim();
    } else {
      funcBody = `export default function Example() {\n  return <div>Component Example</div>;\n}`;
    }

    // Clean any imports trapped inside the function
    funcBody = funcBody.replace(/import\s+[^;]+;/g, '');
    
    // Replace non-existent component tags
    funcBody = funcBody.replace(/<DataGrid\b/g, '<Table ').replace(/<\/DataGrid>/g, '</Table>');
    funcBody = funcBody.replace(/<Flex\b/g, '<div className="flex gap-2" ').replace(/<\/Flex>/g, '</div>');
    funcBody = funcBody.replace(/<Grid\b/g, '<div className="grid grid-cols-2 gap-2" ').replace(/<\/Grid>/g, '</div>');
    funcBody = funcBody.replace(/<CommandPalette\b/g, '<Combobox ').replace(/<\/CommandPalette>/g, '</Combobox>');

    // Extract used component names to generate clean imports
    const usedImports = new Set();
    for (const comp of VALID_NUI_EXPORTS) {
      if (funcBody.includes(`<${comp}`) || funcBody.includes(`${comp}.`)) {
        usedImports.add(comp);
      }
    }
    if (usedImports.size === 0) {
      usedImports.add('Button');
    }

    const fileContent = `// @ts-nocheck
import React, { useState } from 'react';
import { ${Array.from(usedImports).join(', ')} } from '@nofinite/nui';
import * as FaIcons from 'react-icons/fa';

const data = [
  { id: '1', name: 'Alice', age: 28, status: 'Active', price: 99.99 },
  { id: '2', name: 'Bob', age: 34, status: 'Inactive', price: 149.50 },
  { id: '3', name: 'Charlie', age: 22, status: 'Active', price: 29.99 },
];
const employees = data;
const items = ['Item 1', 'Item 2', 'Item 3'];
const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];
const date = new Date();
const r = { start: new Date(), end: new Date() };

${funcBody}
`;

    fs.writeFileSync(fullPath, fileContent, 'utf-8');

    // Extract code snippet for code tab
    const key = file.replace(/\.tsx$/, '');
    const returnMatch = funcBody.match(/return\s*\(\s*<div[^>]*>([\s\S]*?)<\/div>\s*\);/);
    let codeSnippet = '';
    if (returnMatch) {
      codeSnippet = returnMatch[1].trim();
    } else {
      codeSnippet = funcBody;
    }

    const safeCode = codeSnippet.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');

    entries.push(`  "${key}": {
    component: dynamic(() => import("./${key}"), {
      loading: () => React.createElement("div", { className: "text-sm text-muted p-4 animate-pulse" }, "Loading preview...")
    }),
    code: \`${safeCode}\`
  }`);
  }

  const indexContent = `import dynamic from "next/dynamic";
import React from "react";

export const registry: Record<string, { component: React.ComponentType<any>; code: string }> = {
${entries.join(',\n')}
};
`;

  fs.writeFileSync(INDEX_FILE, indexContent, 'utf-8');
  console.log(`Successfully sanitized ${files.length} snippet files and generated ${INDEX_FILE}`);
}

cleanRegistry();
