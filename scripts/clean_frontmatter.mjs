import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const APP_DIR = path.resolve(__dirname, '../src/app');

function getAllMdxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getAllMdxFiles(fullPath));
    } else if (item.name.endsWith('.mdx')) {
      results.push(fullPath);
    }
  }
  return results;
}

function cleanFrontmatter() {
  console.log('Scanning all MDX files in src/app for raw YAML frontmatter...');
  const files = getAllMdxFiles(APP_DIR);
  let cleanedCount = 0;

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf-8');

    // Check for YAML frontmatter
    const frontmatterMatch = content.match(/^---[\r\n]+([\s\S]*?)[\r\n]+---[\r\n]*/);
    if (frontmatterMatch) {
      const frontmatterText = frontmatterMatch[1];
      const titleMatch = frontmatterText.match(/title:\s*['"]?([^'"\r\n]+)['"]?/);
      const title = titleMatch ? titleMatch[1].trim() : '';

      // Strip frontmatter
      let strippedContent = content.replace(/^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]*/, '').trimStart();

      // If document doesn't start with an H1 heading and we found a title in frontmatter, add it
      if (title && !strippedContent.startsWith('# ')) {
        strippedContent = `# ${title}\n\n${strippedContent}`;
      }

      // Replace any relative .md links with clean Next.js routes
      strippedContent = strippedContent.replace(/\]\(([^)]+)\.md\)/g, ']($1)');

      fs.writeFileSync(file, strippedContent, 'utf-8');
      cleanedCount++;
      console.log(`Cleaned frontmatter in: ${path.relative(APP_DIR, file)}`);
    }
  }

  console.log(`Successfully cleaned frontmatter from ${cleanedCount} MDX files.`);
}

cleanFrontmatter();
