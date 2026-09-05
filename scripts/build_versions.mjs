import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PACKAGES = {
  nui: '@nofinite/nui',
  nuicss: '@nofinite/nuicss',
  locale: '@nofinite/locale',
  utils: '@nofinite/utils',
  markon: '@nofinite/markon',
};

const FALLBACK_VERSIONS = {
  nui: '3.0.7',
  nuicss: '3.0.6',
  locale: '2.0.0',
  utils: '2.0.0',
  markon: '1.1.1',
};

const OUTPUT_FILE = path.resolve(__dirname, '../public/versions.json');

async function fetchLatestVersion(pkgName, fallback) {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.version) {
        return data.version;
      }
    }
  } catch (err) {
    // Network failure or timeout; use fallback
  }
  return fallback;
}

async function buildVersions() {
  console.log('Fetching package versions for static build (Cloudflare Pages compatible)...');
  const versions = { ...FALLBACK_VERSIONS };

  const promises = Object.entries(PACKAGES).map(async ([key, pkgName]) => {
    const version = await fetchLatestVersion(pkgName, FALLBACK_VERSIONS[key]);
    versions[key] = version;
  });

  await Promise.all(promises);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(versions, null, 2), 'utf-8');
  console.log(`Successfully generated public/versions.json with versions:`, versions);
}

buildVersions();
