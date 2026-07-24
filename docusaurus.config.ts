import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const ossSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://opensource.nofinite.com/#organization',
  name: 'Nofinite Opensource',
  url: 'https://opensource.nofinite.com',
  logo: 'https://nofinite.com/brand/nofinite/nofinite-logo-full.svg',
  description:
    'Nofinite Opensource builds open-source React libraries for scalable UI, performance, internationalization, and Markdown rendering.',
  sameAs: [
    'https://github.com/nofinitehq',
    'https://twitter.com/nofinitehq',
    'https://www.npmjs.com/org/nofinite',
  ],
  parentOrganization: {
    '@type': 'Organization',
    '@id': 'https://nofinite.com/#organization',
    name: 'Nofinite',
    url: 'https://nofinite.com',
  },
};

const config: Config = {
  title: 'Nofinite Opensource',
  tagline: 'Open-source technologies by Nofinite',
  favicon: 'nofinite-logo.svg',
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify(ossSchema),
    },
  ],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://opensource.nofinite.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NofiniteHQ', // Usually your GitHub org/user name.
  projectName: '', // Usually your repo name. docusaurus

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/docs/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
          lastmod: 'date',
          ignorePatterns: ['/tags/**', '/drafts/**', '/**/README'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['@docusaurus/theme-live-codeblock'],

  themeConfig: {
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },

    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    metadata: [
      // Core indexing
      { name: 'robots', content: 'index, follow' },
      {
        name: 'googlebot',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      },

      // Primary keywords (brand + intent)
      {
        name: 'keywords',
        content: [
          'Nofinite OSS',
          'React UI library',
          'TypeScript UI components',
          'React component primitives',
          'Next.js UI library',
          'i18n library for React',
          'Markdown utilities',
          'MDX utilities',
          'Docusaurus components',
          'open source React libraries',
          'enterprise React UI',
        ].join(', '),
      },

      // Content classification
      { name: 'author', content: 'Nofinite' },
      { name: 'application-name', content: 'Nofinite OSS Documentation' },
      { name: 'generator', content: 'Docusaurus' },

      // Theming / UX
      { name: 'theme-color', content: '#0f172a' },
      { name: 'color-scheme', content: 'dark light' },

      // Social discovery
      { property: 'og:site_name', content: 'Nofinite OSS' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:image:alt',
        content: 'Nofinite Open Source Documentation',
      },

      // Twitter / X
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Nofinite OSS Documentation' },
      {
        name: 'twitter:description',
        content:
          'Production-ready open source libraries for React, including UI components, i18n, and markdown utilities.',
      },
    ],
    navbar: {
      title: 'Opensource',
      logo: {
        alt: 'Nofinite Logo',
        src: 'nofinite-logo.svg',
        srcDark: 'nofinite-logo-white.svg',
        href: '/',
        target: '_self',
      },
      items: [
        { label: 'NUI', to: '/docs/nui', position: 'left' },
        { label: 'NUI CSS', to: '/docs/nuicss/v2', position: 'left' },
        { label: 'Utils', to: '/docs/utils', position: 'left' },
        { label: 'Locale', to: '/docs/locale', position: 'left' },
        { label: 'Markon', to: '/docs/markon', position: 'left' },
        { label: 'NID (Nofinite Identity)', to: '/docs/nid', position: 'left' },
        {
          href: 'https://github.com/nofinitehq',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Policies',
          items: [
            {
              label: 'Privacy Policy',
              to: 'https://nofinite.com/policies/privacy',
            },
            {
              label: 'Terms & Conditions',
              to: 'https://nofinite.com/policies/terms',
            },
            {
              label: 'Cookies Policy',
              to: 'https://nofinite.com/policies/cookies',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Github',
              to: 'https://github.com/nofinitehq',
            },
            {
              label: 'Linkedin',
              to: 'https://linkedin.com/companies/nofinite',
            },
            {
              label: 'Instagram',
              to: 'https://instagram.com/nofinitehq',
            },
            {
              label: 'X',
              to: 'https://x.com/nofinitehq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nofinite `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
