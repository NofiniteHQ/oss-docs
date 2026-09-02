
import '@nofinite/nui/styles.css';
import './globals.css';
import { NUIProvider } from '@nofinite/nui';
import { Navbar } from '@/components/Navbar';

export const metadata = {
  title: 'Nofinite OSS',
  description: 'Documentation for Nofinite Open Source projects',
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
