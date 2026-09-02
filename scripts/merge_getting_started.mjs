import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.resolve(__dirname, '../src/app/nui/getting-started');

const filesToMerge = [
  path.resolve(__dirname, '../docs/nui/index.md'),
  path.resolve(__dirname, '../docs/nui/getting-started/installation.md'),
  path.resolve(__dirname, '../docs/nui/getting-started/setup.md'),
  path.resolve(__dirname, '../docs/nui/themeswitcher.md'),
  path.resolve(__dirname, '../docs/nui/getting-started/customtheme.md'),
  path.resolve(__dirname, '../docs/nui/getting-started/themetokens.md'),
  path.resolve(__dirname, '../docs/nui/getting-started/utilities.md')
];

let combined = '# Getting Started\n\nEverything you need to install and set up NUI.\n\n---\n\n';

for (const filePath of filesToMerge) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // strip frontmatter
    content = content.replace(/^---[\s\S]*?---/, '');
    // turn root headers into secondary headers
    content = content.replace(/^#\s+(.+)$/gm, '## ');
    combined += content + '\n\n---\n\n';
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'page.mdx'), combined, 'utf-8');
console.log('Generated getting-started');
