import { defineConfig, nuicssPreset } from '@nofinite/nuicss';

export default defineConfig({
  presets: [
    nuicssPreset() as any
  ],
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts,jsx,tsx,mdx}',
        'mdx-components.tsx'
      ]
    }
  }
});
