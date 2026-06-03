import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    // Only admins can access the Payload Admin Panel
    admin: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Customer', value: 'customer' },
        { label: 'Pro Customer', value: 'proCustomer' },
      ],
      defaultValue: 'customer',
      required: true,
      access: {
        update: ({ req: { user } }) => user?.role === 'admin', // Only admins can change roles manually
      }
    },
    {
      name: 'razorpayCustomerId',
      type: 'text',
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'subscriptionStatus',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Past Due', value: 'past_due' },
        { label: 'Canceled', value: 'canceled' },
      ],
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'freeComponentQuota',
      type: 'number',
      defaultValue: 4,
      admin: {
        description: 'Remaining free components a user can copy (default 4)',
      }
    },
    {
      name: 'googleId',
      type: 'text',
      admin: {
        readOnly: true,
      }
    },
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'avatar',
      type: 'text',
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc, previousDoc, req, operation }) => {
        // Welcome email on sign-up
        if (operation === 'create' && doc?.email) {
          try {
            const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
            console.log(`📧 Sending welcome email to ${doc.email}...`)
            await req.payload.sendEmail({
              to: doc.email,
              subject: 'Welcome to Static UI!',
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background-color: #ffffff; border: 1px solid #e4e4e7; border-radius: 12px;">
                  <div style="text-align: center; margin-bottom: 32px;">
                    <img src="${serverUrl}/staticui.png" alt="StaticUI Logo" style="height: 32px; margin: 0 auto;" />
                  </div>
                  <h2 style="color: #09090b; font-size: 24px; font-weight: 600; text-align: center; margin-bottom: 16px;">Welcome to Static UI!</h2>
                  <p style="color: #52525b; font-size: 16px; line-height: 1.6; margin-bottom: 32px; text-align: center;">
                    We are thrilled to have you on board. Start building beautiful interfaces faster with our modern components and templates.
                  </p>
                  <div style="text-align: center; margin-bottom: 40px;">
                    <a href="${serverUrl}/components" style="display: inline-block; background-color: #09090b; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 500; font-size: 16px;">
                      Explore Components
                    </a>
                  </div>
                  <hr style="border: 0; border-top: 1px solid #e4e4e7; margin-bottom: 24px;" />
                  <p style="color: #a1a1aa; font-size: 14px; text-align: center; margin: 0;">
                    &copy; ${new Date().getFullYear()} Static UI. All rights reserved.
                  </p>
                </div>
              `,
            })
            console.log(`✅ Welcome email sent to ${doc.email}`)
          } catch (error) {
            console.error(`❌ Error sending welcome email to ${doc.email}:`, error)
          }
        }

        // Subscription upgrade/downgrade notification
        if (operation === 'update' && doc.role !== previousDoc?.role && doc.email) {
          try {
            if (doc.role === 'proCustomer') {
              await req.payload.sendEmail({
                to: doc.email,
                subject: 'Subscription upgraded!',
                html: `<p>Thank you for upgrading! You now have access to premium components.</p>`,
              })
            } else if (doc.role === 'customer' && previousDoc?.role === 'proCustomer') {
              await req.payload.sendEmail({
                to: doc.email,
                subject: 'Subscription Ended',
                html: `<p>Your subscription has ended. You will no longer have access to premium components.</p>`,
              })
            }
          } catch (error) {
            console.error(`Error sending subscription update email: ${error}`)
          }
        }
        return doc
      },
    ],
  },
}
