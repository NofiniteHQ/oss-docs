import fs from 'fs';
import path from 'path';

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, fileList);
    } else if (filePath.endsWith('.mdx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const appDir = path.join(process.cwd(), 'src', 'app');
const mdxFiles = walk(appDir);

const index = [];
const seenUrls = new Set();

const IGNORED_HEADINGS = new Set([
  'api reference',
  'props',
  'usage',
  'basic usage',
  'basic example',
  'variants',
  'sizes',
  'design tokens',
  'accessibility',
  'keyboard navigation',
  'guidelines',
  'states',
  'best practices',
  'next steps',
  'all component docs in this category',
  'components'
]);

for (const file of mdxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  const relativePath = file.replace(appDir, '').replace(/\\/g, '/').replace(/\/page\.mdx$/, '');
  const pkg = relativePath.split('/')[1] || 'docs';

  // 1. Index the main page (H1)
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    const mainTitle = h1Match[1].trim();
    const paragraphMatch = content.match(/^#\s+.+?\n\n([^#\n<][^\n]+)/m);
    const mainDesc = paragraphMatch ? paragraphMatch[1].trim() : '';
    
    if (!seenUrls.has(relativePath)) {
      seenUrls.add(relativePath);
      index.push({
        title: mainTitle,
        description: mainDesc,
        href: relativePath,
        pkg
      });
    }
  }

  // 2. Index sub-sections (H2/H3) with unique meaningful content
  const h2Regex = /^##\s+(.+)$/gm;
  let match;
  const slugCounts = new Map();

  const slugify = (str) => {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  while ((match = h2Regex.exec(content)) !== null) {
    const title = match[1].trim();
    if (IGNORED_HEADINGS.has(title.toLowerCase())) continue;
    
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const snippetRegex = new RegExp('^##\\s+' + escapedTitle + '\\s*\\n+([^#\\n<][^\\n]+)', 'm');
    const snippetMatch = content.match(snippetRegex);
    const description = snippetMatch ? snippetMatch[1].trim() : '';

    let id = slugify(title);
    if (!id) continue;

    if (slugCounts.has(id)) {
      const count = slugCounts.get(id) + 1;
      slugCounts.set(id, count);
      id = `${id}-${count - 1}`;
    } else {
      slugCounts.set(id, 1);
    }

    const itemUrl = `${relativePath}#${id}`;
    if (!seenUrls.has(itemUrl)) {
      seenUrls.add(itemUrl);
      index.push({
        title: `${title} (${h1Match ? h1Match[1].trim() : pkg})`,
        description: description,
        href: itemUrl,
        pkg
      });
    }
  }
}

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'search-index.json'), JSON.stringify(index, null, 2));

console.log(`Generated search index with ${index.length} entries.`);
