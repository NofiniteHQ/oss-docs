<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Guidelines

- **Temporary Files:** ALL AI-generated scratch scripts, temporary HTML/JS testing files, data parsing scripts, or any other temporary garbage files MUST be placed in the /temp/ directory. Do not place them in the root directory. The /temp/ directory is gitignored and ensures the workspace stays clean.
- **Implementation Plans:** Always write an implementation_plan.md for major architectural changes, complex bugs, or work affecting multiple files/areas before modifying any code. You may skip the plan ONLY for trivial or minor bug fixes.
- **Compulsory Git Commits:** You MUST make a local git commit immediately after making ANY changes (even minor bug fixes). This acts as a crucial save point so we can revert if something breaks. Do not rely solely on remote pushes; local commits are compulsory after every change.
- **Industry Standards & Tool Comparison:** Always follow modern industry best practices and use highly performant tools. Before introducing a new package or tool, you must compare alternatives, explicitly explain why the chosen tool is the best fit, and detail how it aligns with our existing architecture.
