import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEGACY_DIR = path.resolve(__dirname, '../docs/nui/components');
const OUT_DIR = path.resolve(__dirname, '../src/app/nui');

const pageMappings = [
  {
    folder: 'inputs-and-forms',
    title: 'Inputs and Forms',
    description: 'Components for capturing user input and building forms.',
    files: ['input', 'textarea', 'checkbox', 'radiogroup', 'switch', 'slider', 'rating', 'fileuploader']
  },
  {
    folder: 'pickers-and-selects',
    title: 'Pickers and Selects',
    description: 'Components for selecting from lists or picking dates and times.',
    files: ['select', 'combobox', 'datepicker', 'daterangepicker', 'timepicker', 'timerangepicker']
  },
  {
    folder: 'overlays-and-dialogs',
    title: 'Overlays and Dialogs',
    description: 'Components that appear over the main UI.',
    files: ['modal', 'dialog', 'drawer', 'popover', 'tooltip', 'hovercard', 'contextmenu', 'dropdown', 'commandpalette']
  },
  {
    folder: 'data-display',
    title: 'Data Display',
    description: 'Components for rendering structured data.',
    files: ['table', 'datagrid', 'virtuallist', 'avatar']
  },
  {
    folder: 'layout-and-structure',
    title: 'Layout and Structure',
    description: 'Components for structuring the page layout.',
    files: ['card', 'accordion', 'tabs', 'layout', 'resizable']
  },
  {
    folder: 'navigation',
    title: 'Navigation',
    description: 'Components for navigating through the application.',
    files: ['breadcrumbs', 'link', 'pagination', 'stepper', 'megamenu', 'treeview']
  },
  {
    folder: 'indicators-and-buttons',
    title: 'Indicators and Buttons',
    description: 'Components for interactions and status indication.',
    files: ['button', 'badge', 'chip', 'spinner', 'progress', 'skeleton', 'toast', 'alert']
  }
];

function transformContent(content, componentName) {
  let result = content.replace(/^---[\s\S]*?---/, '');
  result = result.replace(/^#+\s+Props\s*\n[\s\S]*?(?=^#+\s|^---)/gm, '');
  result = result.replace(/^#+\s+Props\s*\n[\s\S]*?$/gm, '');

  const TitleCasedComp = componentName.charAt(0).toUpperCase() + componentName.slice(1);
  result += `\n\n## API Reference\n\n<PropsTable name="${TitleCasedComp}" />\n\n---\n\n`;

  const codeBlockRegex = /```tsx\s*(?:id="[^"]*")?\n([\s\S]*?)```/g;
  result = result.replace(codeBlockRegex, (match, codeString) => {
    // safely escape for MDX string literal
    const safeCode = codeString.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<Preview code={\`\n${safeCode}\`}/>`;
  });

  result = result.replace(/^#\s+(.+)$/gm, '## $1');

  return result;
}

console.log('Merging legacy components into consolidated MDX pages...');

pageMappings.forEach(mapping => {
  let combinedMdx = `# ${mapping.title}\n\n${mapping.description}\n\n---\n\n`;
  
  mapping.files.forEach(compFile => {
    const filePath = path.join(LEGACY_DIR, compFile + '.md');
    if (fs.existsSync(filePath)) {
      const rawContent = fs.readFileSync(filePath, 'utf-8');
      const transformed = transformContent(rawContent, compFile);
      combinedMdx += transformed;
    } else {
      console.warn('Missing legacy file:', filePath);
    }
  });

  const destPath = path.join(OUT_DIR, mapping.folder, 'page.mdx');
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, combinedMdx, 'utf-8');
  console.log('Generated:', destPath);
});
