import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function seed() {
  try {
    const payload = await getPayload({ config: configPromise })

    console.log('Seeding categories...')
    let cat1 = (await payload.find({ collection: 'categories', where: { slug: { equals: 'hero-sections' } } })).docs[0]
    if (!cat1) {
      cat1 = await payload.create({
        collection: 'categories',
        data: { title: 'Hero Sections', slug: 'hero-sections' },
      })
    }

    let cat2 = (await payload.find({ collection: 'categories', where: { slug: { equals: 'buttons' } } })).docs[0]
    if (!cat2) {
      cat2 = await payload.create({
        collection: 'categories',
        data: { title: 'Buttons', slug: 'buttons' },
      })
    }

    let cat3 = (await payload.find({ collection: 'categories', where: { slug: { equals: 'cards' } } })).docs[0]
    if (!cat3) {
      cat3 = await payload.create({
        collection: 'categories',
        data: { title: 'Cards', slug: 'cards' },
      })
    }
    
    let cat4 = (await payload.find({ collection: 'categories', where: { slug: { equals: 'pricing' } } })).docs[0]
    if (!cat4) {
      cat4 = await payload.create({
        collection: 'categories',
        data: { title: 'Pricing Sections', slug: 'pricing' },
      })
    }

    console.log('Seeding tags...')
    let tag1 = (await payload.find({ collection: 'tags', where: { slug: { equals: 'marketing' } } })).docs[0]
    if (!tag1) {
      tag1 = await payload.create({
        collection: 'tags',
        data: { title: 'Marketing', slug: 'marketing' },
      })
    }

    let tag2 = (await payload.find({ collection: 'tags', where: { slug: { equals: 'ui' } } })).docs[0]
    if (!tag2) {
      tag2 = await payload.create({
        collection: 'tags',
        data: { title: 'UI', slug: 'ui' },
      })
    }
    
    let tag3 = (await payload.find({ collection: 'tags', where: { slug: { equals: 'premium' } } })).docs[0]
    if (!tag3) {
      tag3 = await payload.create({
        collection: 'tags',
        data: { title: 'Premium', slug: 'premium' },
      })
    }

    console.log('Seeding components...')
    let comp1 = (await payload.find({ collection: 'components', where: { slug: { equals: 'primary-button' } } })).docs[0]
    if (!comp1) {
      comp1 = await payload.create({
        collection: 'components',
        data: {
          title: 'Primary Button',
          slug: 'primary-button',
          description: 'A simple primary button with hover effects.',
          category: cat2.id,
          tags: [tag2.id],
          minimumPlanRequired: 'free',
          status: 'published',
          code: `import React from 'react';\n\nexport default function PrimaryButton() {\n  return <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Click me</button>;\n}`,
        },
      })
    }
    
    let comp2 = (await payload.find({ collection: 'components', where: { slug: { equals: 'premium-card' } } })).docs[0]
    if (!comp2) {
      comp2 = await payload.create({
        collection: 'components',
        data: {
          title: 'Premium Card',
          slug: 'premium-card',
          description: 'A highly styled premium card with glassmorphism effects.',
          category: cat3.id,
          tags: [tag2.id, tag3.id],
          minimumPlanRequired: 'advance',
          status: 'published',
          code: `import React from 'react';\n\nexport default function PremiumCard() {\n  return (\n    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">\n      <h3 className="text-xl font-bold text-white mb-2">Premium Features</h3>\n      <p className="text-white/70">Unlock all the advanced features with this premium card component designed to impress.</p>\n    </div>\n  );\n}`,
        },
      })
    }
    
    let comp3 = (await payload.find({ collection: 'components', where: { slug: { equals: 'animated-button' } } })).docs[0]
    if (!comp3) {
      comp3 = await payload.create({
        collection: 'components',
        data: {
          title: 'Animated Button',
          slug: 'animated-button',
          description: 'A button with a smooth pulse animation.',
          category: cat2.id,
          tags: [tag2.id],
          minimumPlanRequired: 'premium',
          status: 'published',
          code: `import React from 'react';\n\nexport default function AnimatedButton() {\n  return <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full animate-pulse hover:animate-none transition-all">Go Pro</button>;\n}`,
        },
      })
    }

    console.log('Seeding blocks...')
    let block1 = (await payload.find({ collection: 'blocks', where: { slug: { equals: 'simple-hero' } } })).docs[0]
    if (!block1) {
      block1 = await payload.create({
        collection: 'blocks',
        data: {
          title: 'Simple Hero',
          slug: 'simple-hero',
          description: 'A clean and simple hero section for SaaS.',
          category: cat1.id,
          tags: [tag1.id],
          minimumPlanRequired: 'free',
          status: 'published',
          code: `import React from 'react';\n\nexport default function SimpleHero() {\n  return (\n    <div className="py-20 text-center">\n      <h1 className="text-5xl font-bold tracking-tight mb-6">Build Faster</h1>\n      <p className="text-xl text-zinc-500 mb-8 max-w-2xl mx-auto">The best way to build your website.</p>\n      <button className="px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800">Get Started</button>\n    </div>\n  );\n}`,
        },
      })
    }
    
    let block2 = (await payload.find({ collection: 'blocks', where: { slug: { equals: 'advanced-pricing' } } })).docs[0]
    if (!block2) {
      block2 = await payload.create({
        collection: 'blocks',
        data: {
          title: 'Advanced Pricing',
          slug: 'advanced-pricing',
          description: 'A fully responsive pricing block with toggle for monthly/yearly.',
          category: cat4.id,
          tags: [tag1.id, tag3.id],
          minimumPlanRequired: 'advance',
          status: 'published',
          code: `import React from 'react';\n\nexport default function AdvancedPricing() {\n  return (\n    <div className="py-24 bg-zinc-950 text-white">\n      <div className="text-center mb-12">\n        <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>\n        <p className="text-zinc-400">No hidden fees. No surprise charges.</p>\n      </div>\n      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto px-6">\n        <div className="flex-1 bg-zinc-900 p-8 rounded-3xl border border-zinc-800">\n          <h3 className="text-2xl font-semibold mb-2">Pro</h3>\n          <p className="text-5xl font-bold mb-6">$29<span className="text-lg text-zinc-500 font-normal">/mo</span></p>\n          <button className="w-full py-3 bg-white text-black rounded-lg font-medium mb-8">Subscribe</button>\n          <ul className="space-y-4 text-zinc-400">\n            <li>✓ All basic features</li>\n            <li>✓ Priority support</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  );\n}`,
        },
      })
    }

    console.log('Seeding pages...')
    let page1 = (await payload.find({ collection: 'pages', where: { slug: { equals: 'landing-page' } } })).docs[0]
    if (!page1) {
      page1 = await payload.create({
        collection: 'pages',
        data: {
          title: 'Landing Page',
          slug: 'landing-page',
          description: 'A complete landing page for your SaaS product.',
          category: cat1.id,
          tags: [tag1.id],
          minimumPlanRequired: 'free',
          status: 'published',
          blocks: [block1.id],
          code: `import React from 'react';\nimport SimpleHero from '../blocks/simple-hero';\n\nexport default function LandingPage() {\n  return (\n    <div>\n      <SimpleHero />\n    </div>\n  );\n}`,
        },
      })
    }
    
    let page2 = (await payload.find({ collection: 'pages', where: { slug: { equals: 'premium-about' } } })).docs[0]
    if (!page2) {
      page2 = await payload.create({
        collection: 'pages',
        data: {
          title: 'Premium About Us',
          slug: 'premium-about',
          description: 'A highly customized about us page with rich animations.',
          category: cat1.id,
          tags: [tag1.id, tag3.id],
          minimumPlanRequired: 'premium',
          status: 'published',
          blocks: [block1.id], 
          code: `import React from 'react';\nimport SimpleHero from '../blocks/simple-hero';\n\nexport default function PremiumAbout() {\n  return (\n    <div className="bg-gradient-to-br from-zinc-900 to-black text-white min-h-screen">\n      <SimpleHero />\n      <div className="max-w-3xl mx-auto py-20 px-6 text-center">\n        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Story</h2>\n        <p className="text-lg text-zinc-400 leading-relaxed">We started with a vision to build the most beautiful UI library in the world. Now, thousands of developers rely on our components daily.</p>\n      </div>\n    </div>\n  );\n}`,
        },
      })
    }

    console.log('Seeding templates...')
    let template1 = (await payload.find({ collection: 'templates', where: { slug: { equals: 'saas-starter' } } })).docs[0]
    if (!template1) {
      template1 = await payload.create({
        collection: 'templates',
        data: {
          title: 'SaaS Starter',
          slug: 'saas-starter',
          description: 'Everything you need to start a SaaS.',
          category: cat1.id,
          tags: [tag1.id],
          minimumPlanRequired: 'free',
          status: 'published',
          pages: [page1.id],
          code: `import React from 'react';\nimport LandingPage from '../pages/landing-page';\n\nexport default function SaaSStarter() {\n  return (\n    <div className="min-h-screen bg-zinc-50">\n      <LandingPage />\n    </div>\n  );\n}`,
        },
      })
    }
    
    let template2 = (await payload.find({ collection: 'templates', where: { slug: { equals: 'ecommerce-pro' } } })).docs[0]
    if (!template2) {
      template2 = await payload.create({
        collection: 'templates',
        data: {
          title: 'E-Commerce Pro',
          slug: 'ecommerce-pro',
          description: 'A complete full-stack e-commerce template with cart and checkout.',
          category: cat1.id,
          tags: [tag1.id, tag3.id],
          minimumPlanRequired: 'premium',
          status: 'published',
          pages: [page2.id],
          code: `import React from 'react';\nimport PremiumAbout from '../pages/premium-about';\n\nexport default function EcommercePro() {\n  return (\n    <div className="min-h-screen bg-black text-white">\n      <nav className="p-6 border-b border-zinc-800 flex justify-between items-center">\n        <div className="text-xl font-bold tracking-widest">STORE</div>\n        <div className="space-x-6 text-sm font-medium">\n          <a href="#" className="hover:text-purple-400 transition-colors">Shop</a>\n          <a href="#" className="hover:text-purple-400 transition-colors">About</a>\n          <a href="#" className="hover:text-purple-400 transition-colors">Cart (0)</a>\n        </div>\n      </nav>\n      <PremiumAbout />\n    </div>\n  );\n}`,
        },
      })
    }

    console.log('Registry seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding registry:', error)
    process.exit(1)
  }
}

seed()
