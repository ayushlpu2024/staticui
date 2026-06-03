import React from 'react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-zinc-200/60 py-12 px-6 md:px-12 flex flex-col items-center relative z-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-1 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/staticui.png" alt="Static UI Logo" width={140} height={36} className="object-contain" style={{ width: 'auto', height: 'auto' }} />
          </div>
          <p className="text-sm text-zinc-500 max-w-[250px] font-medium">
            High-quality, open-source UI components built with React and Tailwind CSS.
          </p>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-black text-sm uppercase tracking-wider mb-2">Resources</h4>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Documentation</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Components</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Templates</a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-black text-sm uppercase tracking-wider mb-2">Company</h4>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">About</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Blog</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Careers</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="font-semibold text-black text-sm uppercase tracking-wider mb-2">Legal</h4>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Privacy Policy</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">Terms of Service</a>
          <a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors font-medium">License</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-6xl mx-auto pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Static UI. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-zinc-400 hover:text-black transition-colors">
            <span className="sr-only">Twitter</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
            </svg>
          </a>
          <a href="#" className="text-zinc-400 hover:text-black transition-colors">
            <span className="sr-only">GitHub</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
