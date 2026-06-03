import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      type: 'text',
      required: true,
    },
    {
      name: 'originalPrice',
      type: 'text',
    },
    {
      name: 'badge',
      type: 'text',
    },
    {
      name: 'rating',
      type: 'number',
    },
    {
      name: 'reviewsCount',
      type: 'number',
    },
    {
      name: 'imageUrl',
      type: 'text',
    },
  ],
}
