"use client";

import Link from "next/link";
import { Button, Card, Badge } from "@nofinite/nui";

export default function Home() {
  const packages = [
    {
      id: 'nui',
      title: 'NUI',
      desc: 'Highly accessible, headless UI components built for React.',
      href: '/nui/getting-started',
      version: 'v3.0.6',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
    },
    {
      id: 'nuicss',
      title: 'Nuicss',
      desc: 'A robust utility-first CSS framework powered by UnoCSS.',
      href: '/nuicss',
      version: 'v3.0.5',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
    },
    {
      id: 'locale',
      title: 'Locale',
      desc: 'Internationalization (i18n) toolkit for React ecosystems.',
      href: '/locale',
      version: 'v0.0.1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    },
    {
      id: 'utils',
      title: 'Utils',
      desc: 'Shared utilities and functional helpers for Nofinite packages.',
      href: '/utils',
      version: 'v0.0.1',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    }
  ];

  return (
    <div className="w-full flex-1 flex flex-col bg-page text-default selection:bg-brand-500/30">
      
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 flex flex-col items-center justify-center relative overflow-hidden px-4 border-b border-default bg-subtle/30">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top, var(--un-border-default, #e5e7eb) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[-100px] right-[-100px] -z-10 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-center text-default leading-tight">
            Ship software with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-subtle">Unprecedented Velocity</span>.
          </h1>
          <p className="text-xl text-muted text-center max-w-2xl leading-relaxed">
            The definitive documentation hub for Nofinite's entire open-source ecosystem. Meticulously crafted components, styling engines, and utilities.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">The Nofinite Ecosystem</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Purpose-built primitives designed to integrate seamlessly into your React applications.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* NUI */}
          <Link href="/nui/getting-started" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group focus:outline-none rounded-2xl block">
            <Card hover className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-page shadow-sm hover:shadow-md dark:bg-white/[0.02] dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="absolute top-6 right-6 text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <Card.Header className="p-8 pb-4">
                <div className="w-14 h-14 rounded-xl bg-subtle flex items-center justify-center text-default mb-6 group-hover:bg-primary group-hover:text-primary-fg transition-colors shadow-sm border border-default dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-default group-hover:text-primary transition-colors">NUI</h3>
                  <Badge variant="default" size="sm" className="font-mono bg-subtle border border-default dark:border-white/10">v3.0.6</Badge>
                </div>
              </Card.Header>
              <Card.Body className="p-8 pt-0 flex-1">
                <p className="text-base text-muted leading-relaxed">
                  Highly accessible, beautifully designed headless UI components built for React.
                </p>
              </Card.Body>
            </Card>
          </Link>

          {/* Nuicss */}
          <Link href="/nuicss" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group focus:outline-none rounded-2xl block">
            <Card hover className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-page shadow-sm hover:shadow-md dark:bg-white/[0.02] dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="absolute top-6 right-6 text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <Card.Header className="p-8 pb-4">
                <div className="w-14 h-14 rounded-xl bg-subtle flex items-center justify-center text-default mb-6 group-hover:bg-primary group-hover:text-primary-fg transition-colors shadow-sm border border-default dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-default group-hover:text-primary transition-colors">Nuicss</h3>
                </div>
              </Card.Header>
              <Card.Body className="p-8 pt-0 flex-1">
                <p className="text-base text-muted leading-relaxed">
                  A robust utility-first CSS framework powered by the blazing fast UnoCSS engine.
                </p>
              </Card.Body>
            </Card>
          </Link>

          {/* Markon */}
          <Link href="/markon" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group focus:outline-none rounded-2xl block">
            <Card hover className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-page shadow-sm hover:shadow-md dark:bg-white/[0.02] dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="absolute top-6 right-6 text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <Card.Header className="p-8 pb-4">
                <div className="w-14 h-14 rounded-xl bg-subtle flex items-center justify-center text-default mb-6 group-hover:bg-primary group-hover:text-primary-fg transition-colors shadow-sm border border-default dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-default group-hover:text-primary transition-colors">Markon</h3>
                </div>
              </Card.Header>
              <Card.Body className="p-8 pt-0 flex-1">
                <p className="text-base text-muted leading-relaxed">
                  Advanced Markdown parser and compiler for rich text editing and rendering.
                </p>
              </Card.Body>
            </Card>
          </Link>

          {/* Locale */}
          <Link href="/locale" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group focus:outline-none rounded-2xl block">
            <Card hover className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-page shadow-sm hover:shadow-md dark:bg-white/[0.02] dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="absolute top-6 right-6 text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <Card.Header className="p-8 pb-4">
                <div className="w-14 h-14 rounded-xl bg-subtle flex items-center justify-center text-default mb-6 group-hover:bg-primary group-hover:text-primary-fg transition-colors shadow-sm border border-default dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-default group-hover:text-primary transition-colors">Locale</h3>
                </div>
              </Card.Header>
              <Card.Body className="p-8 pt-0 flex-1">
                <p className="text-base text-muted leading-relaxed">
                  Internationalization (i18n) toolkit for React ecosystems.
                </p>
              </Card.Body>
            </Card>
          </Link>
          
          {/* Utils */}
          <Link href="/utils" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group focus:outline-none rounded-2xl block">
            <Card hover className="h-full flex flex-col hover:border-primary/50 transition-all duration-300 relative overflow-hidden bg-page shadow-sm hover:shadow-md dark:bg-white/[0.02] dark:border-white/10 dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
              <div className="absolute top-6 right-6 text-muted group-hover:text-primary transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <Card.Header className="p-8 pb-4">
                <div className="w-14 h-14 rounded-xl bg-subtle flex items-center justify-center text-default mb-6 group-hover:bg-primary group-hover:text-primary-fg transition-colors shadow-sm border border-default dark:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold tracking-tight text-default group-hover:text-primary transition-colors">Utils</h3>
                </div>
              </Card.Header>
              <Card.Body className="p-8 pt-0 flex-1">
                <p className="text-base text-muted leading-relaxed">
                  Shared utilities and functional helpers for Nofinite packages.
                </p>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-default py-12 mt-auto">
        <div className="max-w-5xl mx-auto px-4 text-center text-muted text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Nofinite. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="https://twitter.com/nofinitehq" className="hover:text-default transition-colors">Twitter</Link>
            <Link href="https://github.com/NofiniteHQ" className="hover:text-default transition-colors">GitHub</Link>
            <Link href="https://nofinite.com" className="hover:text-default transition-colors">Website</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
