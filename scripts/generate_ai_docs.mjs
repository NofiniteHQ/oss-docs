import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const APP_DIR = path.resolve(__dirname, '../src/app');
const PROPS_FILE = path.resolve(__dirname, '../src/data/component-props.json');

const PACKAGES = [
  {
    name: 'nui',
    pkgName: '@nofinite/nui',
    title: 'NUI Component Library',
    description: 'Accessible, composable React UI primitives with strict semantic design tokens.',
    instructions: `You are an expert React engineer using @nofinite/nui.
Rules:
1. Always import components from '@nofinite/nui'.
2. Use semantic color tokens (e.g., bg-surface, text-default, border-subtle, text-danger) from @nofinite/nuicss instead of raw tailwind colors.
3. For routing polymorphism, use \`asChild\` (e.g. <Button asChild><Link href="...">Text</Link></Button>).
4. Read the exact API Reference before constructing props.`
  },
  {
    name: 'nuicss',
    pkgName: '@nofinite/nuicss',
    title: 'Nuicss Design Token & Utility Engine',
    description: 'Semantic CSS utility framework and runtime-less design token engine.',
    instructions: `You are an expert CSS developer using @nofinite/nuicss.
Rules:
1. Use semantic design tokens: bg-surface, text-default, border-default, bg-primary, etc.
2. Supports dark mode through theme classes (.dark).`
  },
  {
    name: 'locale',
    pkgName: '@nofinite/locale',
    title: 'Locale Utilities & Country Data',
    description: 'Lightweight localization, country lookups, dialing codes, and flag utilities.',
    instructions: `You are using @nofinite/locale for localization, currencies, and country lookups.`
  },
  {
    name: 'markon',
    pkgName: '@nofinite/markon',
    title: 'Markon Markdown Parser & Renderer',
    description: 'High-speed AST-based Markdown and MDX processing toolkit.',
    instructions: `You are using @nofinite/markon for syntax parsing and document conversion.`
  },
  {
    name: 'utils',
    pkgName: '@nofinite/utils',
    title: 'Nofinite Shared Utilities',
    description: 'Shared TypeScript helpers, class name merge (cn), formatters, and custom hooks.',
    instructions: `You are using @nofinite/utils. Use \`cn(...classes)\` for conditional class joining.`
  }
];

function cleanseMdx(content) {
  let cleaned = content;
  // Remove React component tags like <PropsTable ... /> and <Preview ... />
  cleaned = cleaned.replace(/<PropsTable\s+name="[^"]*"\s*\/>/g, '');
  cleaned = cleaned.replace(/<Preview\s+name="[^"]*"\s*\/>/g, '');
  cleaned = cleaned.replace(/<Preview\s+code={`([\s\S]*?)`}\s*\/?>/g, '```tsx\n$1\n```');
  cleaned = cleaned.replace(/<Preview[\s\S]*?<\/Preview>/g, '');
  cleaned = cleaned.replace(/<div[\s\S]*?<\/div>/g, '');
  return cleaned.trim();
}

function collectMarkdown(dir) {
  let collected = '';
  if (!fs.existsSync(dir)) return collected;

  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && (entry.name.endsWith('.mdx') || entry.name.endsWith('.md'))) {
        const fileContent = fs.readFileSync(fullPath, 'utf-8');
        const relative = path.relative(APP_DIR, fullPath).replace(/\\/g, '/');
        collected += `\n\n### Document: ${relative}\n\n${cleanseMdx(fileContent)}\n\n---\n`;
      }
    }
  }

  walk(dir);
  return collected;
}

function generateAiDocs() {
  console.log('Generating multi-package AI/LLM documentation...');

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  let unifiedFull = `# NOFINITE OPEN-SOURCE ECOSYSTEM (Unified LLM Documentation)

This document contains complete documentation for all @nofinite open-source libraries.
Available Packages: ${PACKAGES.map(p => p.pkgName).join(', ')}

================================================================================
`;

  let rootIndex = `# Nofinite Open Source Documentation Index

Welcome to the LLM index for Nofinite Open-Source libraries.

## Package Documentation
`;

  for (const pkg of PACKAGES) {
    const pkgDir = path.join(APP_DIR, pkg.name);
    const pkgPublicDir = path.join(PUBLIC_DIR, pkg.name);
    fs.mkdirSync(pkgPublicDir, { recursive: true });

    let pkgFull = `# PACKAGE: ${pkg.pkgName}\n\n${pkg.description}\n\n${pkg.instructions}\n\n---\n\n`;

    // If NUI, inject extracted props table
    if (pkg.name === 'nui' && fs.existsSync(PROPS_FILE)) {
      pkgFull += `## TypeScript API Reference (Props)\n\n`;
      const propsData = JSON.parse(fs.readFileSync(PROPS_FILE, 'utf-8'));
      for (const [comp, props] of Object.entries(propsData)) {
        pkgFull += `### ${comp}\n`;
        props.forEach(p => {
          pkgFull += `- \`${p.name}${p.required ? ' (required)' : ''}: ${p.type || 'any'}\` (Default: ${p.defaultValue || 'none'})\n`;
          if (p.description) pkgFull += `  ${p.description}\n`;
        });
        pkgFull += '\n';
      }
      pkgFull += `\n---\n\n`;
    }

    const mdxContent = collectMarkdown(pkgDir);
    pkgFull += mdxContent;

    // Write package-specific files: public/[pkg]/llms.txt and public/[pkg]/llms-full.txt
    const pkgIndex = `# ${pkg.pkgName} Documentation

${pkg.description}

## Resources
- [Full ${pkg.pkgName} Context Bundle](/${pkg.name}/llms-full.txt)
- [Nofinite Ecosystem Index](/llms.txt)

## Guidelines
${pkg.instructions}
`;

    fs.writeFileSync(path.join(pkgPublicDir, 'llms.txt'), pkgIndex, 'utf-8');
    fs.writeFileSync(path.join(pkgPublicDir, 'llms-full.txt'), pkgFull, 'utf-8');

    // Append to unified full bundle
    unifiedFull += `\n\n# ================================================================================\n# PACKAGE: ${pkg.pkgName}\n# ================================================================================\n\n${pkgFull}\n`;

    // Append to root index
    rootIndex += `- [${pkg.title} (/${pkg.name})](/${pkg.name}/llms.txt): ${pkg.description}\n`;
  }

  rootIndex += `\n## Global Bundles\n- [Unified Ecosystem Bundle (All Packages)](/llms-full.txt)\n`;

  // Write root files: public/llms.txt and public/llms-full.txt
  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms.txt'), rootIndex, 'utf-8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'llms-full.txt'), unifiedFull, 'utf-8');

  console.log('Successfully generated multi-package llms.txt & llms-full.txt files in public/ directory!');
}

generateAiDocs();
