'use client'

import React, { useState } from 'react'
import { Monitor, Smartphone, Tablet, Check, Copy } from 'lucide-react'

interface DetailPageProps {
  item: any
  previewNode?: React.ReactNode
}

export function DetailPage({ item, previewNode }: DetailPageProps) {
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'installation'>('preview')
  const [previewMode, setPreviewMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(item.code || '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{item.title}</h1>
        <p className="text-lg text-zinc-500 max-w-3xl mb-6">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags?.map((tag: any, i: number) => (
            <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-md text-sm">
              {tag.title || tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mb-6 flex items-center justify-between">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'preview' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'code' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
          >
            Code
          </button>
          <button
            onClick={() => setActiveTab('installation')}
            className={`pb-3 text-sm font-medium border-b-2 transition-colors ${activeTab === 'installation' ? 'border-zinc-950 text-zinc-950' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
          >
            Installation
          </button>
        </div>

        {activeTab === 'preview' && (
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-lg mb-2">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`p-1.5 rounded-md transition-colors ${previewMode === 'desktop' ? 'bg-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPreviewMode('tablet')}
              className={`p-1.5 rounded-md transition-colors ${previewMode === 'tablet' ? 'bg-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`p-1.5 rounded-md transition-colors ${previewMode === 'mobile' ? 'bg-white shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="rounded-xl border border-border bg-zinc-50 overflow-hidden min-h-[400px]">
        {activeTab === 'preview' && (
          <div className="flex items-center justify-center p-8 bg-zinc-100/50 min-h-[600px] overflow-hidden">
            <div 
              className={`bg-white shadow-sm border border-zinc-200 overflow-hidden transition-all duration-300 ease-in-out w-full h-full rounded-xl`}
              style={{ 
                maxWidth: previewMode === 'mobile' ? '375px' : previewMode === 'tablet' ? '768px' : '100%',
              }}
            >
              {previewNode ? (
                <div className="h-full w-full overflow-auto p-4">
                  {previewNode}
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-zinc-400">
                  Preview not available
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'code' && (
          <div className="relative">
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCopy}
                className="flex items-center justify-center h-8 w-8 rounded-md bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
            <pre className="p-6 bg-zinc-950 text-zinc-50 overflow-x-auto text-sm leading-relaxed min-h-[400px]">
              <code>{item.code || '// No source code available'}</code>
            </pre>
          </div>
        )}

        {activeTab === 'installation' && (
          <div className="p-8 bg-white min-h-[400px]">
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <p className="text-zinc-600 mb-6">Follow these steps to install and use this {item.type || 'component'}.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Install dependencies</h4>
                <div className="bg-zinc-950 text-zinc-50 p-4 rounded-lg flex items-center justify-between">
                  <code className="text-sm">npm install lucide-react</code>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Copy source code</h4>
                <p className="text-sm text-zinc-500 mb-3">Copy the code from the Code tab and save it in your project (e.g., <code className="text-black bg-zinc-100 px-1 py-0.5 rounded">components/ui/{item.slug}.tsx</code>)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
