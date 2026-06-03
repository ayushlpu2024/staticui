import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { DetailPage } from '@/components/registry/DetailPage'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({
    collection: 'components',
    where: {
      slug: {
        equals: slug
      }
    },
    limit: 1,
  })

  const item = docs[0]

  if (!item) {
    notFound()
  }

  // Next.js dynamic import for the registry file
  const PreviewComponent = dynamic(
    () => import(`../../../../registry/components/${slug}.tsx`).catch(() => {
      return () => <div className="p-4 text-center text-zinc-500 border border-dashed rounded-md m-4">Component preview not available. Ensure the file exists in the registry.</div>
    }),
    { 
      loading: () => <div className="p-8 text-center text-zinc-500">Loading preview...</div>
    }
  )

  return (
    <DetailPage 
      item={item} 
      previewNode={<PreviewComponent />} 
    />
  )
}
