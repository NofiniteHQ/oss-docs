<div align="center">

# Nofinite Open Source

**Documentation for Nofinite's open-source libraries.**

**[opensource.nofinite.com](https://opensource.nofinite.com)**

</div>

---

## Overview

This repository houses the documentation website for the entire Nofinite open-source ecosystem. It provides comprehensive guides, API references, and installation instructions for our core libraries.

> **Note:** This repository contains *only* the documentation website. The actual source code for these libraries is maintained in their respective repositories.

### Documented Libraries

* **NUI:** A high-performance React UI library featuring accessible, composable component primitives.
* **NUI CSS:** A utility-first CSS framework built for rapid styling and semantic consistency.
* **Utils:** High-performance logic and security helpers for authentication, encryption, and environment handling.
* **Locale:** A lightweight localization library providing SVG flags, accurate country metadata, and international dialing codes.
* **Markon:** A lightweight JavaScript library designed for easy content formatting, styling, and text manipulation.

---

## Local Development

This website is built using [Docusaurus v3](https://docusaurus.io/), a modern static website generator. We use `pnpm` for package management.

### Prerequisites
* Node.js (v18 or newer)
* pnpm (v8 or newer)

### Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start the local development server:**
   ```bash
   pnpm start
   ```
   This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

3. **Build for production:**
   ```bash
   pnpm build
   ```
   This command generates static content into the `build` directory and can be served using any static hosting service.

---

## Repository Structure

* `/docs` - Contains the Markdown (`.md` and `.mdx`) files for all library documentation. 
* `/src/pages` - Custom React pages, including the main landing page (`index.tsx`).
* `/static` - Static assets like images, icons, and logos.
* `docusaurus.config.ts` - The main configuration file for the site navigation, theme, and plugins.
* `sidebars.ts` - Dictates the sidebar routing and document hierarchy.

---

## Deployment

This documentation hub is automatically built and deployed to **Cloudflare Pages**, and is served live at **[opensource.nofinite.com](https://opensource.nofinite.com)**. 

Any pushes or merged Pull Requests to the `main` branch will trigger an automated production deployment via Cloudflare's GitHub integration. No manual deployment commands are required.

---

## License

The documentation content and website source code in this repository are distributed under the [Apache License, Version 2.0](./LICENSE).
