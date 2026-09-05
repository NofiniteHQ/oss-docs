
import '@nofinite/nui/styles.css';
import './globals.css';
import { NUIProvider, ToastProvider } from '@nofinite/nui';
import { Navbar } from '@/components/Navbar';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

import type { Metadata } from 'next';

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
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
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&family=JetBrains+Mono:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`nui-reset antialiased bg-page text-default min-h-screen flex flex-col ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
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
