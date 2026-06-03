import React from 'react'
import { Inter } from 'next/font/google'
import './styles.css'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers } from 'next/headers'
import { HeaderAuth } from '@/components/HeaderAuth'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata = {
  description: 'A component showcase platform using Payload and Next.js',
  title: 'Shadcn Blocks Clone',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const payload = await getPayload({ config: configPromise })
  const headersList = await headers()
  const { user } = await payload.auth({ headers: headersList })

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-zinc-200 selection:text-black">
        <div className="relative flex min-h-screen flex-col">
          
          {/* Header */}
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
                <Link href="/pricing" className="transition-colors hover:text-zinc-950 text-zinc-600">Pricing</Link>
              </nav>

              {/* Right: Auth */}
              <HeaderAuth user={user} />

            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
