'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { signInUser } from '../actions/auth'
import { Suspense } from 'react'

function SignInForm() {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const isRegistered = searchParams.get('registered') === 'true'

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    const formData = new FormData(e.currentTarget)
    const res = await signInUser(formData)

    if (res.error) {
      setError(res.error)
      setIsLoading(false)
    } else if (res.success) {
      router.push('/')
      router.refresh()
    }
  }

  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-xl shadow-sm border border-zinc-200/60 relative z-10">
      <div>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-zinc-950">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-zinc-600">
          Or{' '}
          <Link href="/sign-up" className="font-medium text-zinc-900 hover:text-zinc-700 underline underline-offset-4">
            create a new account
          </Link>
        </p>
      </div>

      {isRegistered && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative text-sm font-medium text-center" role="alert">
          Registration successful! Please sign in.
        </div>
      )}

      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4 rounded-md shadow-sm">
          <div>
            <label htmlFor="email-address" className="block text-sm font-medium text-zinc-700">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 relative block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-500 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 relative block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-500 focus:z-10 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
        </div>

        {error && (
          <div className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-md border border-red-200">
            {error}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-zinc-950 py-2.5 px-4 text-sm font-medium text-white hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
        <div className="w-[1200px] h-full relative">
          <div className="absolute inset-0 vercel-grid-light opacity-50"></div>
        </div>
      </div>
      
      <Suspense fallback={<div className="text-sm font-medium text-zinc-500">Loading...</div>}>
        <SignInForm />
      </Suspense>
    </div>
  )
}
