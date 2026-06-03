'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { signOutUser } from '@/app/(frontend)/actions/auth'

export function HeaderAuth({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false)

  if (!user) {
    return (
      <div className="flex flex-1 items-center justify-end gap-4">
        <Link href="/sign-in" className="text-sm font-medium transition-colors hover:text-zinc-950 text-zinc-600 hidden md:block">
          Sign In
        </Link>
        <Link href="/sign-up" className="inline-flex h-9 items-center justify-center rounded-full bg-indigo-600 px-5 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-1">
          Get Started
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-1 items-center justify-end gap-4 relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium hover:text-zinc-950 text-zinc-600"
      >
        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold uppercase">
          {user.email?.[0] || 'U'}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-48 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-200 overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-zinc-100">
            <p className="text-sm truncate text-zinc-900 font-medium">{user.email}</p>
            <p className="text-xs text-zinc-500 capitalize mt-0.5">
              {user.role === 'admin' || user.role === 'proCustomer' 
                ? 'Pro/Admin' 
                : `Free (${user.freeComponentQuota ?? 4}/4 limits)`}
            </p>
          </div>
          <button 
            onClick={async () => {
              await signOutUser()
              window.location.reload()
            }}
            className="w-full text-left px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  )
}
