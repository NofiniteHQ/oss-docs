import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://nofinite.com';
const APP_DIR = path.join(process.cwd(), 'src/app');

interface SitemapEntry {
  route: string;
  lastModified: Date;
  isRedirect: boolean;
}

function scanAppRoutes(dir: string, baseRoute = ''): SitemapEntry[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let routes: SitemapEntry[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name.startsWith('api') || entry.name.startsWith('.')) {
        continue;
      }
      const nestedRoute = baseRoute ? `${baseRoute}/${entry.name}` : `/${entry.name}`;
      routes = routes.concat(scanAppRoutes(fullPath, nestedRoute));
    } else if (entry.isFile() && (entry.name === 'page.mdx' || entry.name === 'page.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      const isRedirect = content.includes('redirect(');
      const stats = fs.statSync(fullPath);

      routes.push({
        route: baseRoute || '',
        lastModified: stats.mtime,
        isRedirect,
      });
    }
  }
  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes = scanAppRoutes(APP_DIR);

  // Filter out pure redirect routes to maintain 100% canonical SEO integrity
  const canonicalRoutes = allRoutes.filter((item) => !item.isRedirect);

  return canonicalRoutes.map(({ route, lastModified }) => {
    const url = `${BASE_URL}${route}`;

    let priority = 0.8;
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly';

    if (route === '') {
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (route.includes('/components/')) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.endsWith('/getting-started') || route.endsWith('/installation') || route === '/nui' || route === '/nuicss') {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (route.includes('/releases')) {
      priority = 0.7;
      changeFrequency = 'monthly';
    }

    return {
      url,
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
