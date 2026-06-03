import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import { Lock } from 'lucide-react'
import { auth } from '@/auth'

export async function WithProAccess({ children }: { children: React.ReactNode }) {
  const session = await auth()
  let user = null

  if (session?.user?.id) {
    const payload = await getPayload({ config: configPromise })
    const userDoc = await payload.findByID({
      collection: 'users',
      id: session.user.id,
    })
    user = userDoc
  }

  if (user && (user.role === 'admin' || user.role === 'proCustomer')) {
    return <>{children}</>
  }

  return (
    <div className="w-full flex flex-col items-center justify-center p-12 bg-zinc-50 border border-zinc-200 rounded-2xl text-center">
      <div className="w-16 h-16 bg-zinc-200/50 rounded-full flex items-center justify-center mb-6">
        <Lock className="w-8 h-8 text-zinc-400" />
      </div>
      <h3 className="text-2xl font-bold text-zinc-950 mb-2">Pro Access Required</h3>
      <p className="text-zinc-500 mb-8 max-w-md">
        This component is part of our premium library. Upgrade your plan to unlock full access to all premium UI blocks and templates.
      </p>
      
      <div className="flex gap-4">
        {user ? (
          <Link href="/dashboard" className="px-6 py-3 bg-zinc-950 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors">
            Manage Subscription
          </Link>
        ) : (
          <Link href="/sign-in" className="px-6 py-3 bg-zinc-950 text-white font-medium rounded-xl hover:bg-zinc-800 transition-colors">
            Sign In to Upgrade
          </Link>
        )}
        <Link href="/#pricing" className="px-6 py-3 bg-white text-zinc-950 border border-zinc-200 font-medium rounded-xl hover:bg-zinc-50 transition-colors">
          View Pricing
        </Link>
      </div>
    </div>
  )
}
