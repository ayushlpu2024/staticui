import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function seed() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    const products = [
      {
        title: "Mechanical Keyboard",
        description: "Custom built mechanical keyboard with tactile switches and RGB backlighting.",
        price: "$149.99",
        originalPrice: "$199.99",
        badge: "Sale",
        rating: 4.9,
        reviewsCount: 89,
        imageUrl: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80"
      },
      {
        title: "Smart Watch",
        description: "Fitness tracking, heart rate monitoring, and sleep analysis on your wrist.",
        price: "$199.00",
        badge: "Popular",
        rating: 4.7,
        reviewsCount: 342,
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80"
      },
      {
        title: "Wireless Mouse",
        description: "Ergonomic design with precision tracking and ultra-low latency.",
        price: "$79.99",
        badge: "",
        rating: 4.6,
        reviewsCount: 56,
        imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80"
      },
      {
        title: "Premium Headphones",
        description: "High-fidelity audio with active noise cancellation and 40-hour battery life.",
        price: "$299.00",
        badge: "New Arrival",
        rating: 4.8,
        reviewsCount: 124,
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80"
      }
    ]

    for (const product of products) {
      await payload.create({
        collection: 'products',
        data: product,
      })
    }
    
    console.log('Products seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding products:', error)
    process.exit(1)
  }
}

seed()
