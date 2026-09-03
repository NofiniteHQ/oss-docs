import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://oss.nofinite.com';

  const staticRoutes = [
    '',
    '/nui',
    '/nui/getting-started',
    '/nui/theming',
    '/nuicss',
    '/nuicss/installation',
    '/nuicss/configuration',
    '/nuicss/architecture',
    '/nuicss/theming',
    '/nuicss/utilities/layout',
    '/nuicss/utilities/flex-grid',
    '/nuicss/utilities/spacing',
    '/nuicss/utilities/sizing',
    '/nuicss/utilities/typography',
    '/nuicss/utilities/backgrounds-borders',
    '/nuicss/utilities/effects-filters',
    '/locale',
    '/locale/getting-started',
    '/locale/usage',
    '/locale/releases',
    '/markon',
    '/markon/getting-started',
    '/markon/usage',
    '/utils',
    '/utils/getting-started',
    '/utils/releases',
  ];

  const componentsDir = path.join(process.cwd(), 'src/app/nui/components');
  let componentRoutes: string[] = [];
  if (fs.existsSync(componentsDir)) {
    const entries = fs.readdirSync(componentsDir, { withFileTypes: true });
    componentRoutes = entries
      .filter(entry => entry.isDirectory())
      .map(entry => `/nui/components/${entry.name}`);
  }

  const allRoutes = [...new Set([...staticRoutes, ...componentRoutes])];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route.includes('/components/') ? 'weekly' : 'daily') as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: route === '' ? 1.0 : route.startsWith('/nui') || route.startsWith('/nuicss') ? 0.8 : 0.6,
  }));
}
