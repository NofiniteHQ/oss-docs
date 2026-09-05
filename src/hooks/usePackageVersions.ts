"use client";

import { useState, useEffect } from 'react';

export const DEFAULT_VERSIONS: Record<string, string> = {
  nui: '3.0.7',
  nuicss: '3.0.6',
  locale: '2.0.0',
  utils: '2.0.0',
  markon: '1.1.1',
};

const NPM_PACKAGES: Record<string, string> = {
  nui: '@nofinite/nui',
  nuicss: '@nofinite/nuicss',
  locale: '@nofinite/locale',
  utils: '@nofinite/utils',
  markon: '@nofinite/markon',
};

let cachedVersions: Record<string, string> = { ...DEFAULT_VERSIONS };

export function usePackageVersions() {
  const [versions, setVersions] = useState<Record<string, string>>(cachedVersions);

  useEffect(() => {
    // 1. Fetch static /versions.json with minute-level cache bust
    const cacheBust = Math.floor(Date.now() / 60000);
    fetch(`/versions.json?t=${cacheBust}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data === 'object') {
          cachedVersions = { ...cachedVersions, ...data };
          setVersions((prev) => ({ ...prev, ...data }));
        }
      })
      .catch(() => {});

    // 2. Query live npm registry in background for real-time version updates
    const promises = Object.entries(NPM_PACKAGES).map(async ([key, pkgName]) => {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 3000);
        const res = await fetch(`https://registry.npmjs.org/${pkgName}/latest`, {
          signal: controller.signal,
          headers: { Accept: 'application/json' },
        });
        clearTimeout(timeout);
        if (res.ok) {
          const json = await res.json();
          if (json?.version) {
            return [key, json.version] as const;
          }
        }
      } catch {
        // Fallback silently if offline or blocked
      }
      return null;
    });

    Promise.all(promises).then((results) => {
      const updates: Record<string, string> = {};
      for (const res of results) {
        if (res) {
          updates[res[0]] = res[1];
        }
      }
      if (Object.keys(updates).length > 0) {
        cachedVersions = { ...cachedVersions, ...updates };
        setVersions((prev) => ({ ...prev, ...updates }));
      }
    });
  }, []);

  return versions;
}
