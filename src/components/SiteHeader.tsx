'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HeaderAuth } from '@/components/HeaderAuth'
import { Menu, X } from 'lucide-react'

export function SiteHeader({ user }: { user: any }) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  if (pathname === '/sign-in' || pathname === '/sign-up') {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between border-x border-zinc-200/60 px-4 md:px-8">
        
        {/* Left: Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" className="mr-8 flex items-center pb-1">
            <Image src="/staticui.png" alt="Logo" width={120} height={28} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
          <Link href="/components" className="transition-colors hover:text-zinc-950 text-zinc-600">Components</Link>
          <Link href="/blocks" className="transition-colors hover:text-zinc-950 text-zinc-600">Blocks</Link>
          <Link href="/pages" className="transition-colors hover:text-zinc-950 text-zinc-600">Pages</Link>
          <Link href="/templates" className="transition-colors hover:text-zinc-950 text-zinc-600">Templates</Link>
          <Link href="/#pricing" className="transition-colors hover:text-zinc-950 text-zinc-600">Pricing</Link>
        </nav>

        {/* Right: Auth & Mobile Menu Toggle */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <HeaderAuth user={user} />
          
          <button 
            className="md:hidden flex items-center justify-center p-2 text-zinc-600 hover:text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            <Link 
              href="/components" 
              className="text-zinc-600 hover:text-zinc-950 px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Components
            </Link>
            <Link 
              href="/blocks" 
              className="text-zinc-600 hover:text-zinc-950 px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blocks
            </Link>
            <Link 
              href="/pages" 
              className="text-zinc-600 hover:text-zinc-950 px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pages
            </Link>
            <Link 
              href="/templates" 
              className="text-zinc-600 hover:text-zinc-950 px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              href="/#pricing" 
              className="text-zinc-600 hover:text-zinc-950 px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
