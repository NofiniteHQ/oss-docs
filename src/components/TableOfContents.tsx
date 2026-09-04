"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Wait a tick for MDX to render
    const updateHeadings = () => {
      const elements = Array.from(document.querySelectorAll('main h2, main h3'))
        .filter((el) => el.id && !el.textContent?.toLowerCase().includes('category overview'));
      
      setHeadings(
        elements.map((el) => ({
          id: el.id,
          text: el.textContent || '',
          level: el.tagName === 'H2' ? 2 : 3,
        }))
      );
    };

    updateHeadings();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' }
    );

    const elements = document.querySelectorAll('main h2, main h3');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-56 2xl:w-64 flex-shrink-0 sticky top-16 h-[calc(100vh-4rem)] border-l border-default bg-page">
      <div className="h-full w-full py-8 pl-6 pr-4 overflow-y-auto [scrollbar-width:thin]">
        <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-muted">On this page</h4>
        <ul className="space-y-2 text-[13px]">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: heading.level === 3 ? '0.75rem' : '0' }}
            >
              <Link
                href={`#${heading.id}`}
                className={`transition-colors block leading-relaxed ${
                  activeId === heading.id
                    ? 'text-primary font-semibold'
                    : 'text-muted hover:text-primary'
                }`}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
