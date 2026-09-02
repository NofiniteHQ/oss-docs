"use client";

import React, { useState } from 'react';
import { Drawer, Button } from '@nofinite/nui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/utils/nav';
import { TableOfContents } from './TableOfContents';

export function DocsLayout({ children, navData }: { children: React.ReactNode, navData: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Extract the active page id from the pathname (e.g. /nui/components/button -> button)
  const segments = pathname.split('/').filter(Boolean);
  const selectedId = segments.length > 0 ? segments[segments.length - 1] : '';

  // Flatten nav data to find prev/next links
  const flatNav: { id: string; label: string; href: string }[] = [];
  const traverse = (items: NavItem[]) => {
    for (const item of items) {
      if (item.href) {
        flatNav.push({ id: item.id, label: item.label, href: item.href });
      }
      if (item.children) {
        traverse(item.children);
      }
    }
  };
  traverse(navData);

  const currentIndex = flatNav.findIndex(item => item.href === pathname);
  const prevPage = currentIndex > 0 ? flatNav[currentIndex - 1] : null;
  const nextPage = currentIndex !== -1 && currentIndex < flatNav.length - 1 ? flatNav[currentIndex + 1] : null;

  // Active item title for mobile header bar
  const activeItem = flatNav.find(item => item.href === pathname);

  const renderNavList = (isMobile = false) => (
    <nav className="flex flex-col gap-6 py-4 pl-1 pr-3">
      {navData.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <div key={item.id} className="flex flex-col gap-1.5">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted px-3 py-0.5">
                {item.label}
              </h4>
              <div className="flex flex-col gap-0.5">
                {item.children.map((child) => {
                  const isActive = pathname === child.href;
                  return (
                    <Link
                      key={child.id}
                      href={child.href || '#'}
                      onClick={() => isMobile && setMobileMenuOpen(false)}
                      className={`px-3 py-1.5 rounded-md text-sm transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-subtle text-primary font-semibold shadow-xs'
                          : 'text-muted hover:text-default hover:bg-subtle/50'
                      }`}
                    >
                      <span className="truncate">{child.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        }

        const isActive = pathname === item.href;
        return (
          <Link
            key={item.id}
            href={item.href || '#'}
            onClick={() => isMobile && setMobileMenuOpen(false)}
            className={`px-3 py-2 rounded-md text-sm transition-all ${
              isActive
                ? 'bg-subtle text-primary font-bold'
                : 'text-muted hover:text-default hover:bg-subtle/50'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="w-full flex-1 flex flex-col bg-page">
      {/* Mobile / Tablet Docs Top Sub-bar */}
      <div className="md:hidden border-b border-default bg-surface/80 backdrop-blur-sm sticky top-16 z-40 px-4 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="font-semibold text-default">{activeItem?.label || 'Documentation'}</span>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-1.5 text-xs h-8 px-2.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          Docs Menu
        </Button>
      </div>

      <div className="flex flex-1 w-full max-w-[1536px] mx-auto">
        {/* Mobile / Tablet Drawer */}
        <Drawer
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          position="left"
          title="Documentation"
        >
          <div className="h-full w-full overflow-y-auto px-2 py-4">
            {renderNavList(true)}
          </div>
        </Drawer>

        {/* Desktop Sticky Sidebar */}
        <aside className="hidden md:flex flex-col w-64 lg:w-72 border-r border-default flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] bg-page">
          <div className="flex-1 overflow-y-auto px-2 py-4 [scrollbar-width:thin] [scrollbar-color:var(--border-default)_transparent]">
            {renderNavList(false)}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 py-8 px-4 sm:px-6 md:px-8 lg:px-12 pb-24">
          <div className="max-w-4xl mx-auto min-h-[calc(100vh-8rem)] flex flex-col justify-between">
            <div className="flex-1 prose prose-default max-w-none">
              {children}
            </div>

            {/* Bottom Footer & Navigation */}
            <div className="mt-16 pt-8 border-t border-default flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-muted">
                <span>Last updated on {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <a 
                  href={`https://github.com/NofiniteHQ/oss-docs/tree/main/src/app${pathname}/page.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors mt-2 sm:mt-0 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                  Edit this page on GitHub
                </a>
              </div>

              <div className="flex items-center justify-between pt-2">
                {prevPage ? (
                  <Link href={prevPage.href} className="group flex flex-col gap-1 items-start max-w-[45%]">
                    <span className="text-xs text-muted uppercase font-semibold tracking-wider">Previous</span>
                    <span className="text-primary font-medium group-hover:underline truncate">{prevPage.label}</span>
                  </Link>
                ) : <div />}
                
                {nextPage ? (
                  <Link href={nextPage.href} className="group flex flex-col gap-1 items-end max-w-[45%] text-right">
                    <span className="text-xs text-muted uppercase font-semibold tracking-wider">Next</span>
                    <span className="text-primary font-medium group-hover:underline truncate">{nextPage.label}</span>
                  </Link>
                ) : <div />}
              </div>
            </div>
          </div>
        </main>

        {/* Right Table of Contents */}
        <TableOfContents />
      </div>
    </div>
  );
}
