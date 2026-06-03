import 'dotenv/config'
import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function createAdmin() {
  try {
    const payload = await getPayload({ config: configPromise })
    
    // Check if the user already exists
    const existingUsers = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: 'admin@metstak.com'
        }
      }
    })

    if (existingUsers.totalDocs > 0) {
      console.log('User admin@metstak.com already exists. Updating password and role...')
      await payload.update({
        collection: 'users',
        id: existingUsers.docs[0].id,
        data: {
          password: 'singhZ@1',
          role: 'admin',
          name: 'Admin',
        }
      })
      console.log('Admin user updated successfully.')
    } else {
      console.log('Creating admin user admin@metstak.com...')
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@metstak.com',
          password: 'singhZ@1',
          role: 'admin',
          name: 'Admin',
        },
      })
      console.log('Admin user created successfully.')
    }
    
    process.exit(0)
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  }
}

createAdmin()
