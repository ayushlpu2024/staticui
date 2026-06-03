'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { cookies } from 'next/headers'

export async function signUpUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    const payload = await getPayload({ config: configPromise })

    const user = await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        role: 'customer',
      },
    })

    if (user) {
      return { success: true }
    } else {
      return { error: 'Failed to create user' }
    }
  } catch (error: any) {
    console.error('Sign up error:', error)
    return { error: error.message || 'An error occurred during sign up' }
  }
}

export async function signInUser(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required' }
  }

  try {
    const payload = await getPayload({ config: configPromise })

    const result = await payload.login({
      collection: 'users',
      data: {
        email,
        password,
      },
    })

    if (result && result.token) {
      // Set the token in a cookie
      const cookieStore = await cookies()
      cookieStore.set('payload-token', result.token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax',
      })
      
      return { success: true }
    } else {
      return { error: 'Invalid credentials' }
    }
  } catch (error: any) {
    console.error('Sign in error:', error)
    return { error: 'Invalid email or password' }
  }
}

export async function signOutUser() {
  const cookieStore = await cookies()
  cookieStore.delete('payload-token')
  return { success: true }
}
