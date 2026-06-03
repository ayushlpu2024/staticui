import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ListingPage } from '@/components/registry/ListingPage'

export default async function PagesPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs } = await payload.find({
    collection: 'pages',
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
      title="Pages"
      description="Full page examples built with components and blocks."
      items={docs}
      type="pages"
    />
  )
}
