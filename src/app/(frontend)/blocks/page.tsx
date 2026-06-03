import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ListingPage } from '@/components/registry/ListingPage'

export default async function BlocksPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({
    collection: 'blocks',
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
      title="Blocks"
      description="Pre-built sections to help you build your website faster."
      items={docs}
      type="blocks"
    />
  )
}
