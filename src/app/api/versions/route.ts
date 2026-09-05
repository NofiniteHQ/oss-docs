import { NextResponse } from 'next/server';

export const revalidate = 3600;

const PACKAGES: Record<string, string> = {
  nui: '@nofinite/nui',
  nuicss: '@nofinite/nuicss',
  locale: '@nofinite/locale',
  utils: '@nofinite/utils',
  markon: '@nofinite/markon',
};

const FALLBACK_VERSIONS: Record<string, string> = {
  nui: '3.0.6',
  nuicss: '3.0.5',
  locale: '2.0.0',
  utils: '2.0.0',
  markon: '1.1.1',
};

export async function GET() {
  const versions: Record<string, string> = { ...FALLBACK_VERSIONS };

  try {
    const fetchPromises = Object.entries(PACKAGES).map(async ([key, pkgName]) => {
      try {
        const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`, {
          next: { revalidate: 3600 },
          headers: {
            Accept: 'application/json',
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (data && data.version) {
            versions[key] = data.version;
          }
        }
      } catch {
        // Fallback version remains in place
      }
    });

    await Promise.all(fetchPromises);
  } catch {
    // If anything fails, fallback versions remain in place
  }

  return NextResponse.json(versions, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
