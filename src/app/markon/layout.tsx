import React from 'react';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNavigation } from '@/utils/nav';

export default function MarkonDocsLayout({ children }: { children: React.ReactNode }) {
  const navData = getDocsNavigation('markon');
  return <DocsLayout navData={navData}>{children}</DocsLayout>;
}
