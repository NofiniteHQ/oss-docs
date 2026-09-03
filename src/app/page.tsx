"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@nofinite/nui";
import { Logo } from "@/components/Logo";

export default function Home() {
  const packages = [
    {
      id: 'nui',
      title: 'NUI',
      desc: 'Highly accessible, beautifully designed headless UI components built for modern React applications.',
      href: '/nui/getting-started',
      version: 'v3.0.5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      id: 'nuicss',
      title: 'NUICSS',
      desc: 'Semantic design token engine and utility-first CSS framework powered by the blazing fast UnoCSS compiler.',
      href: '/nuicss',
      version: 'v3.0.5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      )
    },
    {
      id: 'markon',
      title: 'Markon',
      desc: 'High-speed AST-based Markdown and MDX parser and compiler for rich text editing and rendering.',
      href: '/markon',
      version: 'v0.0.1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      )
    },
    {
      id: 'locale',
      title: 'Locale',
      desc: 'Lightweight localization, country lookups, ISO dialing codes, and flag utilities for React apps.',
      href: '/locale',
      version: 'v0.0.1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      id: 'utils',
      title: 'Utils',
      desc: 'Shared TypeScript helpers, class name merge (cn), DOM utilities, and functional hooks for Nofinite packages.',
      href: '/utils',
      version: 'v0.0.1',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col bg-page text-default">
      
      {/* Hero Section */}
      <section className="w-full py-20 md:py-28 flex flex-col items-center justify-center relative overflow-hidden px-4 border-b border-default bg-subtle/30">
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-default bg-surface text-xs font-semibold text-muted mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Nofinite Open Source Ecosystem v3.0
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-default leading-[1.15]">
            Build software with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-subtle">
              Unprecedented Velocity
            </span>.
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-8">
            The documentation hub for Nofinite's open-source packages. Meticulously engineered React components, semantic design tokens, and utility toolkits.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/nui/getting-started"
              className="px-6 py-3 rounded-lg bg-primary text-primary-fg font-semibold text-sm hover:bg-primary/90 transition-all shadow-sm hover:shadow-md"
            >
              Get Started with NUI →
            </Link>
            <Link 
              href="/nuicss"
              className="px-6 py-3 rounded-lg border border-default bg-surface text-default font-semibold text-sm hover:bg-subtle transition-all shadow-xs"
            >
              Explore Nuicss
            </Link>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight mb-3 text-default">Packages & Libraries</h2>
          <p className="text-muted text-base max-w-xl mx-auto">Composability, strict design tokens, and zero runtime bloat across all packages.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Link 
              key={pkg.id} 
              href={pkg.href} 
              className="group flex flex-col p-6 rounded-xl border border-default bg-surface hover:border-primary/50 hover:shadow-md transition-all duration-200 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-subtle border border-default flex items-center justify-center text-default group-hover:bg-primary group-hover:text-primary-fg transition-colors">
                  {pkg.icon}
                </div>
                <Badge variant="default" size="sm" className="font-mono bg-subtle border border-default text-xs">
                  {pkg.version}
                </Badge>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-default group-hover:text-primary transition-colors mb-2">
                {pkg.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed flex-1 mb-4">
                {pkg.desc}
              </p>

              <div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Documentation</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-default py-10 mt-auto bg-surface/50">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted text-sm">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6 text-default" />
            <span>© {new Date().getFullYear()} Nofinite. Open-source under MIT.</span>
          </div>
          <div className="flex items-center gap-6 font-medium">
            <Link href="https://github.com/NofiniteHQ" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</Link>
            <Link href="https://twitter.com/nofinitehq" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</Link>
            <Link href="https://nofinite.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Website</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
