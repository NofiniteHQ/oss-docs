"use client";
import React, { useState } from "react";
import { Tabs, CodeBlock, Resizable, Clipboard, Button } from "@nofinite/nui";

export function ComponentPreview({ preview, code }: { preview: React.ReactNode, code: string }) {
  const [previewTheme, setPreviewTheme] = useState<'light' | 'dark' | 'system'>('system');

  const tabsData = [
    {
      value: "preview",
      label: "Preview",
      content: (
        <div className="mt-4 border border-default rounded-lg overflow-hidden bg-page shadow-sm">
          {/* Toolbar */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-default bg-subtle/30">
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-default rounded-md border border-default p-0.5">
                <button 
                  onClick={() => setPreviewTheme('system')}
                  className={`px-2 py-1 text-xs font-medium rounded-sm transition-colors ${previewTheme === 'system' ? 'bg-subtle text-default shadow-sm' : 'text-muted hover:text-default'}`}
                >
                  System
                </button>
                <button 
                  onClick={() => setPreviewTheme('light')}
                  className={`px-2 py-1 text-xs font-medium rounded-sm transition-colors ${previewTheme === 'light' ? 'bg-subtle text-default shadow-sm' : 'text-muted hover:text-default'}`}
                >
                  Light
                </button>
                <button 
                  onClick={() => setPreviewTheme('dark')}
                  className={`px-2 py-1 text-xs font-medium rounded-sm transition-colors ${previewTheme === 'dark' ? 'bg-subtle text-default shadow-sm' : 'text-muted hover:text-default'}`}
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
          <Resizable direction="horizontal" className="min-h-[350px]">
            <Resizable.Panel defaultSize={100} minSize={25} className="relative z-10">
              <div 
                className={`w-full h-full p-8 flex items-center justify-center overflow-auto ${previewTheme === 'dark' ? 'dark' : previewTheme === 'light' ? 'light' : ''}`}
                style={{
                  backgroundImage: "radial-gradient(circle, var(--un-border-default, #e5e7eb) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                  backgroundPosition: "center"
                }}
              >
                {preview}
              </div>
            </Resizable.Panel>
            <Resizable.Handle withIcon />
            <Resizable.Panel defaultSize={0} className="bg-subtle/50 relative hidden md:block" />
          </Resizable>
        </div>
      )
    },
    {
      value: "code",
      label: "Code",
      content: (
        <div className="mt-4 relative group border border-default rounded-lg overflow-hidden">
          <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-subtle/80 backdrop-blur border border-default p-1 rounded-md">
            <Clipboard value={code} />
          </div>
          <CodeBlock code={code} language="tsx" readOnlyLanguage={true} className="!m-0 !border-0" />
        </div>
      )
    }
  ];

  return <Tabs data={tabsData} defaultValue="preview" />;
}
