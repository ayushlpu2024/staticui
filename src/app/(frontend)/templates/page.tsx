import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ListingPage } from '@/components/registry/ListingPage'

export default async function TemplatesPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({
    collection: 'templates',
    where: {
      status: {
        equals: 'published'
      }
    },
    depth: 1,
    limit: 100,
  })

  return (
    <ListingPage 
      title="Templates"
      description="Production-ready website templates to jumpstart your project."
      items={docs}
      type="templates"
    />
  )
}
