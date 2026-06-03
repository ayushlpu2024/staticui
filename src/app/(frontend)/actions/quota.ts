'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { auth } from '@/auth'

export async function decrementUserQuota() {
  const session = await auth()
  
  if (!session?.user?.id) {
    return { success: false, error: 'Not authenticated' }
  }
  
  if ((session.user as any).role === 'admin' || (session.user as any).role === 'proCustomer') {
    return { success: true, unlimited: true }
  }

  try {
    const payload = await getPayload({ config: configPromise })
    
    const userDoc = await payload.findByID({
      collection: 'users',
      id: session.user.id,
    })
    
    if (userDoc.freeComponentQuota && userDoc.freeComponentQuota > 0) {
      const newQuota = userDoc.freeComponentQuota - 1
      await payload.update({
        collection: 'users',
        id: session.user.id,
        data: {
          freeComponentQuota: newQuota,
        },
      })
      
      return { success: true, newQuota }
    } else {
      return { success: false, error: 'Quota exceeded' }
    }
  } catch (error) {
    console.error('Error decrementing quota:', error)
    return { success: false, error: 'Internal server error' }
  }
}
