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

function cleanDescription(text) {
  if (!text) return '';
  let cleaned = text
    .replace(/```[\s\S]*?```/g, '') // Remove multiline code blocks
    .replace(/```[a-zA-Z0-9_-]*/g, '') // In case an unmatched code fence exists
    .replace(/`([^`]+)`/g, '$1') // Remove backticks
    .replace(/`+/g, '') // Remove dangling backticks
    .replace(/<[^>]+>[\s\S]*?<\/[^>]+>/g, '') // Remove JSX blocks
    .replace(/<[^>]+>/g, '') // Remove HTML/JSX tags
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove markdown links
    .replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, '$1') // Remove bold/italics
    .replace(/^>\s*(\[!.*\])?\s*/gm, '') // Remove blockquotes
    .replace(/^#+\s+.*/gm, '') // Remove headings
    .replace(/\|.*?\|/g, '') // Remove table rows
    .replace(/^[-\*\+]\s+/gm, '') // Remove list bullets
    .replace(/\s+/g, ' ') // Collapse spaces
    .trim();
  
  if (cleaned.length > 160) {
    cleaned = cleaned.slice(0, 157) + '...';
  }
  return cleaned;
}

function extractFirstParagraph(content) {
  // Strip code blocks, JSX elements, and imports first
  const cleanBody = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<Preview[\s\S]*?\/>/g, '')
    .replace(/<[^>]+>[\s\S]*?<\/[^>]+>/g, '')
    .replace(/import\s+[^;]+;/g, '');
    
  const paragraphs = cleanBody.split(/\n\s*\n/);
  for (const p of paragraphs) {
    const cleaned = cleanDescription(p);
    if (cleaned && !cleaned.startsWith('#') && !cleaned.startsWith('<') && cleaned.length > 20) {
      return cleaned;
    }
  }
  return '';
}

function extractSectionParagraph(content, headingTitle) {
  const escaped = headingTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const sectionRegex = new RegExp('^##\\s+' + escaped + '[\\r\\n]+([\\s\\S]*?)(?=^##|\\Z)', 'm');
  const match = content.match(sectionRegex);
  if (!match) return '';

  const sectionBody = match[1]
    .replace(/```[\s\S]*?```/g, '')
    .replace(/<Preview[\s\S]*?\/>/g, '')
    .replace(/<[^>]+>[\s\S]*?<\/[^>]+>/g, '')
    .replace(/<[^>]+>/g, '');

  const lines = sectionBody.split(/\n+/);
  for (const line of lines) {
    const cleaned = cleanDescription(line);
    if (cleaned && cleaned.length > 15 && !cleaned.startsWith('#') && !cleaned.startsWith('<') && !cleaned.startsWith('import ')) {
      return cleaned;
    }
  }
  return '';
}

const appDir = path.join(process.cwd(), 'src', 'app');
const mdxFiles = walk(appDir);

// Package base priority: NUI (1) -> NUICSS (2) -> Locale (3) -> Utils (4) -> Markon (5)
const PKG_PRIORITY = {
  nui: 1,
  nuicss: 2,
  locale: 3,
  utils: 4,
  markon: 5,
};

function getFilePriority(relativePath, pkg) {
  // Curated top-level ecosystem hubs
  if (relativePath === '/nui') return 1;
  if (relativePath === '/nui/getting-started') return 2;
  if (relativePath === '/nuicss') return 3;
  if (relativePath === '/nuicss/installation') return 4;
  if (relativePath === '/nui/theming') return 5;
  if (relativePath === '/nui/programmatic') return 6;

  const basePriority = (PKG_PRIORITY[pkg] || 9) * 10;
  
  // Main component pages
  if (relativePath.includes('/components/')) return basePriority + 4;
  
  return basePriority + 8;
}

const index = [];
const seenUrls = new Set();

const IGNORED_HEADINGS = new Set([
  'api reference',
  'props',
  'props reference',
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
  'components',
  'subcomponents'
]);

for (const file of mdxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  const relativePath = file.replace(appDir, '').replace(/\\/g, '/').replace(/\/page\.mdx$/, '');
  const pkg = relativePath.split('/')[1] || 'docs';
  const pagePriority = getFilePriority(relativePath, pkg);

  // 1. Index the main page (H1)
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) {
    const mainTitle = h1Match[1].trim();
    let mainDesc = extractFirstParagraph(content);
    if (!mainDesc) {
      mainDesc = `${mainTitle} component and documentation for ${pkg === 'nui' ? 'NUI' : pkg === 'nuicss' ? 'NUICSS' : pkg.toUpperCase()}.`;
    }
    
    if (!seenUrls.has(relativePath)) {
      seenUrls.add(relativePath);
      index.push({
        title: mainTitle,
        description: mainDesc,
        href: relativePath,
        pkg,
        priority: pagePriority,
      });
    }
  }

  // 2. Index sub-sections (H2)
  const h2Regex = /^##\s+(.+)$/gm;
  let match;
  const slugCounts = new Map();

  const slugify = (str) => {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  while ((match = h2Regex.exec(content)) !== null) {
    const rawTitle = match[1].trim();
    const cleanTitle = rawTitle.replace(/^\d+\.\s*/, '').replace(/[`*]/g, '');
    if (IGNORED_HEADINGS.has(cleanTitle.toLowerCase()) || IGNORED_HEADINGS.has(rawTitle.toLowerCase())) continue;
    
    let description = extractSectionParagraph(content, rawTitle);
    if (!description) {
      description = `${cleanTitle} section in ${h1Match ? h1Match[1].trim() : pkg} documentation.`;
    }

    let id = slugify(cleanTitle);
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
        title: `${cleanTitle} (${h1Match ? h1Match[1].trim() : pkg})`,
        description,
        href: itemUrl,
        pkg,
        priority: pagePriority + 0.5,
      });
    }
  }
}

// Sort index by priority ascending (NUI root/getting-started first, then NUICSS, then subpages)
index.sort((a, b) => {
  if (a.priority !== b.priority) {
    return a.priority - b.priority;
  }
  return a.title.localeCompare(b.title);
});

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}
fs.writeFileSync(path.join(outDir, 'search-index.json'), JSON.stringify(index, null, 2));

console.log(`Generated search index with ${index.length} entries. Prioritized NUI and NUICSS.`);
