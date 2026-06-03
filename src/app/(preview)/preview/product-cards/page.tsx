import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { ProductCard } from '@/components/ProductCard'

export default async function ProductCardsPreview() {
  const payload = await getPayload({ config: configPromise })
  
  const productsResult = await payload.find({
    collection: 'products',
    limit: 10,
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 w-full h-full bg-zinc-50 dark:bg-zinc-950/50">
      {productsResult.docs.map((product) => (
        <ProductCard 
          key={product.id}
          title={product.title}
          description={product.description || undefined}
          price={product.price}
          originalPrice={product.originalPrice || undefined}
          badge={product.badge || undefined}
          rating={product.rating || undefined}
          reviewsCount={product.reviewsCount || undefined}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}
