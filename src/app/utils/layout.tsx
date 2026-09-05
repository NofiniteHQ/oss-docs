import React from 'react';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNavigation } from '@/utils/nav';

export default function UtilsDocsLayout({ children }: { children: React.ReactNode }) {
  const navData = getDocsNavigation('utils');
  return <DocsLayout navData={navData}>{children}</DocsLayout>;
}
