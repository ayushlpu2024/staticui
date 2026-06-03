import type { CollectionConfig } from 'payload'

export const Payments: CollectionConfig = {
  slug: 'payments',
  admin: {
    useAsTitle: 'id',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      if (user) return { user: { equals: user.id } };
      return false;
    },
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      index: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
      defaultValue: 'INR',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Captured', value: 'captured' },
        { label: 'Failed', value: 'failed' },
      ],
      required: true,
    },
    {
      name: 'razorpayPaymentId',
      type: 'text',
    },
    {
      name: 'razorpayOrderId',
      type: 'text',
    },
  ],
}
