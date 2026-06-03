import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ListingPage } from '@/components/registry/ListingPage'

export default async function ComponentsPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({
    collection: 'components',
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
      title="Components"
      description="Browse our collection of beautifully designed, accessible React components."
      items={docs}
      type="components"
    />
  )
}

