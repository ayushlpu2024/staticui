import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function seed() {
  try {
    const payload = await getPayload({ config: configPromise })

    console.log('Fetching category and tag...')
    let cat = (await payload.find({ collection: 'categories', where: { slug: { equals: 'buttons' } } })).docs[0]
    if (!cat) {
      cat = await payload.create({
        collection: 'categories',
        data: { title: 'Buttons', slug: 'buttons' },
      })
    }

    let tag = (await payload.find({ collection: 'tags', where: { slug: { equals: 'ui' } } })).docs[0]
    if (!tag) {
      tag = await payload.create({
        collection: 'tags',
        data: { title: 'UI', slug: 'ui' },
      })
    }

    console.log('Uploading media to test Vercel Blob...')
    let media;
    try {
      media = await payload.create({
        collection: 'media',
        data: {
          alt: 'Button Component Thumbnail',
        },
        filePath: path.resolve(dirname, 'public/staticui-logo-icon.png'),
      })
      console.log('Media uploaded successfully! ID:', media.id)
      console.log('Media URL:', media.url)
    } catch (e) {
      console.error('Failed to upload media. Is the Vercel Blob token valid?', e);
      throw e;
    }

    console.log('Creating button component...')
    const comp = await payload.create({
      collection: 'components',
      data: {
        title: 'Shimmer Button',
        slug: 'shimmer-button',
        description: 'A beautiful button with a shimmer effect.',
        category: cat.id,
        tags: [tag.id],
        thumbnail: media.id,
        minimumPlanRequired: 'free',
        status: 'published',
        code: `import React from 'react';\n\nexport default function ShimmerButton() {\n  return (\n    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">\n      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />\n      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">\n        Shimmer Button\n      </span>\n    </button>\n  );\n}`,
      },
    })

    console.log('Button component created successfully! ID:', comp.id)
    process.exit(0)
  } catch (error) {
    console.error('Error seeding button component:', error)
    process.exit(1)
  }
}

seed()
