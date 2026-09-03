
import '@nofinite/nui/styles.css';
import './globals.css';
import { NUIProvider } from '@nofinite/nui';
import { Navbar } from '@/components/Navbar';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Nofinite Opensource',
    template: '%s | Nofinite Opensource',
  },
  description: 'Official documentation for Nofinite Open Source projects including NUI, NUICSS, Locale, and Utils.',
  openGraph: {
    title: 'Nofinite Opensource',
    description: 'Official documentation for Nofinite Open Source projects including NUI, NUICSS, Locale, and Utils.',
    siteName: 'Nofinite Opensource',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nofinite Opensource',
    description: 'Official documentation for Nofinite Open Source projects including NUI, NUICSS, Locale, and Utils.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="nui-reset antialiased bg-page text-default min-h-screen flex flex-col">
        <NUIProvider>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
        </NUIProvider>
      </body>
    </html>
  );
}
