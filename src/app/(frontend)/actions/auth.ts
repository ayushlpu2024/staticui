'use server'

import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { signIn, signOut } from '@/auth'
import { AuthError } from 'next-auth'

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
      await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      return { success: true }
    } else {
      return { error: 'Failed to create user' }
    }
  } catch (error: any) {
    if (error instanceof AuthError) {
      return { error: 'Authentication failed' }
    }
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
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })
    return { success: true }
  } catch (error: any) {
    if (error instanceof AuthError) {
      return { error: 'Invalid email or password' }
    }
    console.error('Sign in error:', error)
    return { error: 'Invalid email or password' }
  }
}

export async function signOutUser() {
  await signOut({ redirect: false })
  return { success: true }
}

export async function signInWithGoogle() {
  await signIn('google')
}
