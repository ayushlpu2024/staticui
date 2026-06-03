import React from 'react'
import { Hero } from '@/components/Hero'
import { Features } from '@/components/Features'
import { Workflow } from '@/components/Workflow'
import { BuiltByDevelopers } from '@/components/BuiltByDevelopers'
import { ComponentEcosystem } from '@/components/ComponentEcosystem'
import { Pricing } from '@/components/Pricing'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers } from 'next/headers'

export default async function VercelLandingPage() {
  const payload = await getPayload({ config: configPromise })
  const headersList = await headers()
  const { user } = await payload.auth({ headers: headersList })

  return (
    <div className="min-h-screen bg-white text-zinc-950 flex flex-col relative overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
        <div className="w-[1200px] h-full border-x border-zinc-200/60 relative">
          <div className="absolute inset-0 vercel-grid-light opacity-50"></div>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center relative z-10 w-full max-w-[1200px] mx-auto border-x border-zinc-200/60">
        <Hero />
        <Features />
        <Workflow />
        <BuiltByDevelopers />
        <ComponentEcosystem />
        <Pricing user={user} />
        <CTA />
      </main>

      <Footer />

    </div>
  )
}
