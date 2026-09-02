import React from 'react';
import { DocsLayout } from '@/components/DocsLayout';
import { getDocsNavigation } from '@/utils/nav';

export default function LocaleDocsLayout({ children }: { children: React.ReactNode }) {
  const navData = getDocsNavigation('locale');
  return <DocsLayout navData={navData}>{children}</DocsLayout>;
}
