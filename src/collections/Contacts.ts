import type { CollectionConfig } from 'payload'

export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true, // Optionally restrict this to admins later
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'plan',
      type: 'select',
      options: [
        { label: 'Free Plan', value: 'free' },
        { label: 'Advance Plan', value: 'advance' },
        { label: 'Premium Plan', value: 'premium' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
}
