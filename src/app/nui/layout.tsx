import React from 'react';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNavigation } from '@/utils/nav';

export default function NuiDocsLayout({ children }: { children: React.ReactNode }) {
  const navData = getDocsNavigation('nui');
  return <DocsLayout navData={navData}>{children}</DocsLayout>;
}
