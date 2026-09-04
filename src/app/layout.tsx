
import '@nofinite/nui/styles.css';
import './globals.css';
import { NUIProvider, ToastProvider } from '@nofinite/nui';
import { Navbar } from '@/components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
      <body className={`nui-reset antialiased bg-page text-default min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable}`}>
        <NUIProvider>
          <ToastProvider>
            <Navbar />
            <main className="flex-1 flex flex-col">
              {children}
            </main>
          </ToastProvider>
        </NUIProvider>
      </body>
    </html>
  );
}
