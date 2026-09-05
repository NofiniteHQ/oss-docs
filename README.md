# Nofinite Open Source Documentation (`oss-docs`)

The official documentation platform for the **Nofinite Open Source Ecosystem**, built with modern web technologies: **Next.js 16 (Turbopack)**, **`@nofinite/nui`**, and **`@nofinite/nuicss`**.

---

## 🌟 Overview

`oss-docs` provides comprehensive guides, interactive component playgrounds, and API references for all open-source libraries maintained by Nofinite:

- **[NUI (`@nofinite/nui`)](https://nofinite.com/nui)**: A complete, accessible React component library featuring 68+ UI primitives, compound components, and headless hooks.
- **[NUICSS (`@nofinite/nuicss`)](https://nofinite.com/nuicss)**: Modern, high-performance atomic utility CSS engine with zero-runtime overhead.
- **[Locale (`@nofinite/locale`)](https://nofinite.com/locale)**: Ultra-fast country metadata, flag icons, phone codes, and internationalization utilities.
- **[Utils (`@nofinite/utils`)](https://nofinite.com/utils)**: Production-grade isomorphic helpers for cryptography, token verification, string formatting, and system utilities.
- **[Markon (`@nofinite/markon`)](https://nofinite.com/markon)**: High-speed Markdown parser and formatting pipeline.

---

## 🚀 Architecture & Tech Stack

This documentation platform is engineered for maximum performance, SEO, and static hosting compatibility:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
- **UI Components**: [`@nofinite/nui`](https://github.com/NofiniteHQ/stack/tree/main/packages/nui)
- **Styling**: [`@nofinite/nuicss`](https://github.com/NofiniteHQ/stack/tree/main/packages/nuicss)
- **Content Engine**: Native `@next/mdx` with `mdxRs` compiler acceleration
- **Search**: Fast client-side fuzzy search powered by [Fuse.js](https://fusejs.io/) with build-time indexing
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (UI) & [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (Code)
- **Static Hosting**: 100% prerendered static pages compatible with **Cloudflare Pages**, **Vercel**, or standard CDNs.

---

## 📁 Repository Structure

```text
oss-docs/
├── public/                 # Static assets, favicon, generated versions.json & search index
├── scripts/                # Automated build-time generators:
│   ├── build-search.mjs            # Generates fuzzy search index (370+ entries)
│   ├── build_versions.mjs          # Statically resolves current package versions
│   ├── build_registry.mjs          # Generates component playground registry
│   ├── extract_props.mjs           # Extracts TypeScript props from component types
│   └── generate_ai_docs.mjs        # Generates llms.txt and llms-full.txt for AI agents
├── src/
│   ├── app/                # Next.js App Router routes & MDX pages
│   │   ├── nui/            # NUI component documentation & guides
│   │   ├── nuicss/         # NUICSS utility classes & architecture guides
│   │   ├── locale/         # Locale documentation & country lookups
│   │   ├── utils/          # Utility helpers documentation
│   │   ├── markon/         # Markon parser guides
│   │   ├── globals.css     # Design tokens, Electric Indigo palette & font definitions
│   │   └── layout.tsx      # Root application layout with NUIProvider & font setup
│   ├── components/         # Reusable docs components:
│   │   ├── DocsLayout.tsx          # Responsive sticky sidebar, breadcrumbs & navigation
│   │   ├── Navbar.tsx              # Top navigation bar with package selector & theme toggle
│   │   ├── ComponentPreview.tsx    # Interactive live component preview with code toggle
│   │   ├── PropsTable.tsx          # Extracted TypeScript prop tables
│   │   └── DocSearch.tsx           # Global search dialog (Ctrl+K)
│   ├── registry/           # Interactive live preview examples for all 68+ components
│   └── utils/              # Navigation tree definitions & shared helpers
├── nuicss.config.ts        # NUICSS compiler configuration & content scanning pipeline
└── package.json            # Project dependencies & npm scripts
```

---

## 🛠️ Development

### Prerequisites

- **Node.js**: `v20+`
- **Package Manager**: `pnpm` (recommended), `npm`, or `yarn`

### Installation

```bash
# Clone the repository
git clone https://github.com/NofiniteHQ/oss-docs.git
cd oss-docs

# Install dependencies
pnpm install
```

### Running Locally

```bash
pnpm run dev
```

The dev script automatically runs the pre-build pipeline (version generator, prop extractor, registry builder, and search indexer) and starts the Next.js Turbopack development server on [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
pnpm run build
```

Generates an optimized, fully prerendered static build of all 120+ pages in seconds.

---

## 📄 License

This documentation and all associated Nofinite open-source packages are licensed under the [MIT License](LICENSE).
