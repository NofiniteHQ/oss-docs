"use client";

import { useState, useEffect } from 'react';

export const DEFAULT_VERSIONS: Record<string, string> = {
  nui: '3.0.6',
  nuicss: '3.0.5',
  locale: '2.0.0',
  utils: '2.0.0',
  markon: '1.1.1',
};

let cachedVersions: Record<string, string> | null = null;

export function usePackageVersions() {
  const [versions, setVersions] = useState<Record<string, string>>(cachedVersions || DEFAULT_VERSIONS);

  useEffect(() => {
    if (cachedVersions) {
      setVersions(cachedVersions);
      return;
    }

    fetch('/api/versions')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && typeof data === 'object') {
          cachedVersions = data;
          setVersions(data);
        }
      })
      .catch((err) => {
        console.warn('Failed to load realtime versions from /api/versions, using fallback:', err);
      });
  }, []);

  return versions;
}
