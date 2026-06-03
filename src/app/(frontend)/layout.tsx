import React from 'react'
import { Inter } from 'next/font/google'
import './styles.css'
import Link from 'next/link'
import Image from 'next/image'
import { auth } from '@/auth'
import { SessionProvider } from 'next-auth/react'
import { SiteHeader } from '@/components/SiteHeader'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Static UI - Premium Next.js & React Components',
  description: 'Build beautiful interfaces faster with our modern components and templates.',
  icons: {
    icon: '/staticui-logo-icon.png',
  },
  openGraph: {
    title: 'Static UI',
    description: 'Premium UI components and templates for Next.js and React.',
    images: ['/api/og'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  const session = await auth()
  const user = session?.user

  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-zinc-200 selection:text-black">
        <SessionProvider session={session}>
          <div className="relative flex min-h-screen flex-col">
            
            <SiteHeader user={user} />

            <main className="flex-1">
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  )
}
