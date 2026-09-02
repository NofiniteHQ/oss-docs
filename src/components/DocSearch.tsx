"use client";

import React, { useState, useEffect } from 'react';
import { Modal, Input, Kbd, Button, ScrollArea } from '@nofinite/nui';
import Fuse from 'fuse.js';
import { useRouter } from 'next/navigation';

export function DocSearch() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => setIndex(data))
      .catch(console.error);

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const fuse = new Fuse(index, {
    keys: ['title', 'description', 'pkg'],
    threshold: 0.3,
  });

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery('');
    router.push(href);
  };

  const results = query 
    ? fuse.search(query).map(r => r.item)
    : index.slice(0, 10);

  return (
    <>
      <button 
        type="button" 
        onClick={() => setOpen(true)} 
        className="group flex items-center justify-center sm:justify-start gap-2 w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 text-sm font-medium text-muted hover:text-default bg-transparent sm:bg-subtle/30 sm:hover:bg-subtle border border-transparent sm:border-default rounded-md sm:rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Search documentation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 transition-opacity"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="hidden sm:inline">Search</span>
        <Kbd className="hidden sm:inline-flex text-[10px] ml-4 bg-page">⌘K</Kbd>
      </button>

      <Modal open={open} onClose={() => setOpen(false)} className="max-w-xl p-0 overflow-hidden bg-page border-default rounded-xl shadow-2xl">
        <div className="flex items-center px-4 py-3 border-b border-default bg-subtle/30">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="text-muted mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <Input
            autoFocus
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base shadow-none px-0 h-auto"
          />
          <Kbd className="ml-2 text-xs opacity-50">ESC</Kbd>
        </div>
        
        <ScrollArea className="max-h-[50vh]">
          {results.length > 0 ? (
            <div className="p-2 space-y-1">
              <div className="px-3 py-2 text-xs font-semibold text-muted uppercase tracking-wider">Results</div>
              {results.map((item, idx) => (
                <button
                  key={`${item.href}-${idx}`}
                  className="w-full flex items-center justify-between px-3 py-3 hover:bg-subtle rounded-lg text-left transition-colors group focus:outline-none focus:bg-subtle"
                  onClick={() => handleSelect(item.href)}
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-default">{item.title}</span>
                    {item.description && (
                      <span className="text-sm text-muted line-clamp-1 mt-0.5">{item.description}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-page border border-default rounded-md text-muted group-hover:bg-subtle">
                      {item.pkg.toUpperCase()}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="text-muted opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="text-muted mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <p className="text-default font-medium">No results found.</p>
              <p className="text-sm text-muted mt-1">We couldn't find anything matching "{query}".</p>
            </div>
          )}
        </ScrollArea>
      </Modal>
    </>
  );
}
