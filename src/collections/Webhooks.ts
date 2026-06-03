import type { CollectionConfig } from 'payload'

export const Webhooks: CollectionConfig = {
  slug: 'webhooks',
  labels: {
    singular: 'Webhook Log',
    plural: 'Webhook Logs',
  },
  admin: {
    useAsTitle: 'razorpayEventId',
  },
  access: {
    read: ({ req: { user } }) => user?.role === 'admin',
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'razorpayEventId',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'eventType',
      type: 'text',
      required: true,
    },
    {
      name: 'payload',
      type: 'json',
      required: true,
    },
    {
      name: 'processed',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'error',
      type: 'text',
    },
  ],
}
