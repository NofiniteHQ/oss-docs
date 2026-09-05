import React from 'react';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNavigation } from '@/utils/nav';

export default function NuicssDocsLayout({ children }: { children: React.ReactNode }) {
  const navData = getDocsNavigation('nuicss');
  return <DocsLayout navData={navData}>{children}</DocsLayout>;
}
