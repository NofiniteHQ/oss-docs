"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, useTheme, Drawer } from "@nofinite/nui";
import { DocSearch } from "./DocSearch";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-default bg-default/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8 flex-1">
          <Link href="/" className="font-bold text-lg flex items-center gap-2 flex-shrink-0">
            <img src="/nofinite-logo.svg" alt="Nofinite Logo" className="w-8 h-8 dark:brightness-0 dark:invert" />
            Opensource
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link href="/nui/getting-started" className="text-muted hover:text-primary transition-colors">NUI</Link>
            <Link href="/nuicss" className="text-muted hover:text-primary transition-colors">Nuicss</Link>
            <Link href="/locale" className="text-muted hover:text-primary transition-colors">Locale</Link>
            <Link href="/utils" className="text-muted hover:text-primary transition-colors">Utils</Link>
            <Link href="/markon" className="text-muted hover:text-primary transition-colors">Markon</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 justify-end flex-shrink-0">
          <DocSearch />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {/* Sun Icon for Dark Mode */}
            <svg className="hidden dark:block" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
            {/* Moon Icon for Light Mode */}
            <svg className="block dark:hidden" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          </Button>
          <Link href="https://github.com/NofiniteHQ" target="_blank" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </Button>
        </div>
      </div>
      <Drawer
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        position="top"
        title="Navigation"
      >
        <div className="flex flex-col gap-4 p-4 text-base font-medium">
          <Link href="/nui/getting-started" onClick={() => setMobileMenuOpen(false)}>NUI</Link>
          <Link href="/nuicss" onClick={() => setMobileMenuOpen(false)}>Nuicss</Link>
          <Link href="/locale" onClick={() => setMobileMenuOpen(false)}>Locale</Link>
          <Link href="/utils" onClick={() => setMobileMenuOpen(false)}>Utils</Link>
          <Link href="/markon" onClick={() => setMobileMenuOpen(false)}>Markon</Link>
        </div>
      </Drawer>
    </header>
  );
}
