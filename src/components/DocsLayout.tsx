"use client";

import React, { useState, useEffect } from 'react';
import { Drawer } from '@nofinite/nui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavItem } from '@/utils/nav';
import { TableOfContents } from './TableOfContents';
import { usePackageVersions } from '@/hooks/usePackageVersions';

const PACKAGES = [
  { id: 'nui', label: 'NUI', href: '/nui/getting-started' },
  { id: 'nuicss', label: 'NUICSS', href: '/nuicss' },
  { id: 'locale', label: 'Locale', href: '/locale' },
  { id: 'utils', label: 'Utils', href: '/utils' },
  { id: 'markon', label: 'Markon', href: '/markon' },
];

export function DocsLayout({ children, navData }: { children: React.ReactNode, navData: NavItem[] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const versions = usePackageVersions();

  // Active package detection using exact segment boundary
  const currentPkgId = pathname.split('/').filter(Boolean)[0] || 'nui';
  const currentPackage = PACKAGES.find(p => p.id === currentPkgId) || PACKAGES[0];
  const currentVersion = versions[currentPkgId];

  // Helper to find which section contains the currently active route
  const findActiveSectionId = (items: NavItem[]): string | null => {
    for (const item of items) {
      if (item.children && item.children.length > 0) {
        if (item.href === pathname) return item.id;
        const hasChild = item.children.some(child => {
          if (child.href === pathname) return true;
          if (child.children?.some(sub => sub.href === pathname)) return true;
          return false;
        });
        if (hasChild) return item.id;
      }
    }
    const firstWithChildren = items.find(i => i.children && i.children.length > 0);
    return firstWithChildren ? firstWithChildren.id : null;
  };

  // Single-open accordion state: only one section/version is open at a time
  const [openSectionId, setOpenSectionId] = useState<string | null>(() => findActiveSectionId(navData));

  // Keep open section synchronized when navigating
  useEffect(() => {
    const activeSec = findActiveSectionId(navData);
    if (activeSec) {
      setOpenSectionId(activeSec);
    }
  }, [pathname, navData]);

  const toggleSection = (sectionId: string) => {
    setOpenSectionId(prev => (prev === sectionId ? null : sectionId));
  };

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

  // Dynamic SEO page title synchronization on client-side navigation
  useEffect(() => {
    if (activeItem?.label) {
      const pkgLabel = currentPkgId === 'nui' ? 'NUI' : currentPkgId === 'nuicss' ? 'NUICSS' : currentPkgId ? currentPkgId.toUpperCase() : '';
      let pageTitle = activeItem.label;
      if (activeItem.label === 'Overview' && pkgLabel) {
        pageTitle = pkgLabel;
      } else if (pkgLabel) {
        pageTitle = `${activeItem.label} — ${pkgLabel}`;
      }
      document.title = `${pageTitle} | Nofinite Opensource`;
    }
  }, [pathname, activeItem, currentPkgId]);

  const isVersionedPackage = false;

  const renderNavList = (isMobile = false) => (
    <nav className="flex flex-col gap-2 py-2 pr-2">
      {navData.map((item) => {
        const hasChildren = item.children && item.children.length > 0;

        if (hasChildren) {
          // In NUI and standard docs: categories are naturally expanded (not collapsible accordions)
          if (!isVersionedPackage) {
            return (
              <div key={item.id} className="flex flex-col gap-1 mb-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-muted px-3 py-1">
                  {item.label}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {item.children!.map((child) => {
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

          // In NUICSS: versions (V2 vs V1) use single-open accordion
          const isOpen = openSectionId === item.id;

          return (
            <div key={item.id} className="flex flex-col">
              {/* Accordion Trigger Header */}
              <button
                type="button"
                onClick={() => toggleSection(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors group cursor-pointer ${
                  isOpen ? 'text-default bg-subtle/50' : 'text-muted hover:text-default hover:bg-subtle/30'
                }`}
                aria-expanded={isOpen}
              >
                <span className="truncate">{item.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-200 text-muted group-hover:text-default flex-shrink-0 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>

              {/* Collapsible Accordion Content */}
              {isOpen && (
                <div className="flex flex-col gap-0.5 pl-2 border-l border-default/60 ml-3.5 my-1">
                  {item.href && (
                    <Link
                      href={item.href}
                      onClick={() => isMobile && setMobileMenuOpen(false)}
                      className={`px-3 py-1.5 rounded-md text-sm transition-all flex items-center justify-between ${
                        pathname === item.href
                          ? 'bg-subtle text-primary font-semibold shadow-xs'
                          : 'text-muted hover:text-default hover:bg-subtle/50'
                      }`}
                    >
                      <span className="truncate">Introduction</span>
                    </Link>
                  )}

                  {item.children!.map((child) => {
                    const hasSubChildren = child.children && child.children.length > 0;

                    if (hasSubChildren) {
                      return (
                        <div key={child.id} className="flex flex-col gap-1 mt-2 mb-1">
                          <span className="text-[11px] font-semibold text-muted/80 uppercase tracking-wider px-3 py-1">
                            {child.label}
                          </span>
                          <div className="flex flex-col gap-0.5 pl-2">
                            {child.children!.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.id}
                                  href={sub.href || '#'}
                                  onClick={() => isMobile && setMobileMenuOpen(false)}
                                  className={`px-3 py-1.5 rounded-md text-xs transition-all ${
                                    isSubActive
                                      ? 'bg-subtle text-primary font-semibold shadow-xs'
                                      : 'text-muted hover:text-default hover:bg-subtle/50'
                                  }`}
                                >
                                  <span className="truncate">{sub.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

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
              )}
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
                ? 'bg-subtle text-primary font-bold shadow-xs'
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
      {/* Mobile & Tablet Left-Aligned Sub-bar (Industry Standard) */}
      <div className="md:hidden border-b border-default bg-surface/90 backdrop-blur-sm sticky top-16 z-40 px-4 py-2.5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex items-center gap-2.5 text-default hover:text-primary transition-colors focus:outline-none group"
          aria-label="Open documentation navigation"
        >
          <div className="w-8 h-8 rounded-md bg-subtle border border-default flex items-center justify-center group-hover:border-primary/50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </div>
          <div className="flex items-center gap-1.5 text-sm font-semibold truncate text-default">
            <span>{activeItem?.label || 'Documentation'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted opacity-60">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </div>
        </button>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="text-[11px] font-mono uppercase tracking-wider text-muted bg-subtle px-2 py-1 rounded border border-default">
            {currentPackage.label}
          </span>
          {currentVersion && (
            <span className="text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded font-medium">
              v{currentVersion}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 w-full max-w-[1536px] mx-auto">
        {/* Unified Mobile / Tablet Drawer */}
        <Drawer
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          position="left"
          title="Navigation"
        >
          <div className="h-full w-full overflow-y-auto px-2 py-4 flex flex-col gap-4">
            {/* Package Switcher Bar */}
            <div className="flex flex-col gap-2 pb-4 border-b border-default">
              <div className="flex items-center justify-between px-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Ecosystem</span>
                {currentVersion && (
                  <span className="text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded font-medium">
                    {currentPackage.label} v{currentVersion}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-1.5 px-1">
                {PACKAGES.map((pkg) => {
                  const isPkgActive = currentPkgId === pkg.id;
                  return (
                    <Link
                      key={pkg.id}
                      href={pkg.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xs px-2.5 py-1.5 rounded-md font-semibold transition-colors ${
                        isPkgActive
                          ? 'bg-primary text-primary-fg shadow-xs'
                          : 'bg-subtle text-muted hover:text-default hover:bg-subtle/80'
                      }`}
                    >
                      {pkg.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Document Navigation Tree */}
            <div className="flex-1">
              {renderNavList(true)}
            </div>
          </div>
        </Drawer>

        {/* Desktop Sticky Sidebar */}
        <aside className="hidden md:flex flex-col w-64 lg:w-72 border-r border-default flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] bg-page">
          <div className="flex-1 overflow-y-auto px-2 py-4 [scrollbar-width:thin] [scrollbar-color:var(--border-default)_transparent]">
            {/* Quick Ecosystem Switcher */}
            <div className="flex items-center gap-1 p-1 mb-3 bg-subtle/40 border border-default rounded-lg">
              {PACKAGES.map((pkg) => {
                const isPkgActive = currentPkgId === pkg.id;
                return (
                  <Link
                    key={pkg.id}
                    href={pkg.href}
                    className={`flex-1 text-center text-xs py-1 px-1 rounded-md font-semibold transition-all ${
                      isPkgActive
                        ? 'bg-surface text-primary shadow-xs border border-default/60'
                        : 'text-muted hover:text-default'
                    }`}
                  >
                    {pkg.label}
                  </Link>
                );
              })}
            </div>
            {/* Active Package & Realtime Version Pill */}
            <div className="flex items-center justify-between px-2.5 py-1.5 mb-3 bg-subtle/30 border border-default/60 rounded-md">
              <span className="text-xs font-semibold text-default flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                {currentPackage.label}
              </span>
              {currentVersion && (
                <span className="text-[11px] font-mono text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5 rounded font-medium">
                  v{currentVersion}
                </span>
              )}
            </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                  </svg>
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
