import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET || process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        try {
          const payload = await getPayload({ config: configPromise })
          
          const result = await payload.login({
            collection: 'users',
            data: {
              email: credentials.email as string,
              password: credentials.password as string,
            },
          })
          
          if (result && result.user) {
            return {
              id: result.user.id,
              email: result.user.email,
              role: result.user.role,
              name: result.user.name,
              avatar: result.user.avatar,
              freeComponentQuota: result.user.freeComponentQuota,
            } as any
          }
        } catch (error) {
          console.error('NextAuth credentials error:', error)
        }
        return null
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          const payload = await getPayload({ config: configPromise })
          
          // Check if user exists
          const existingUsers = await payload.find({
            collection: 'users',
            where: {
              email: {
                equals: user.email,
              },
            },
          })
          
          if (existingUsers.docs.length > 0) {
            const existingUser = existingUsers.docs[0]
            // Update with googleId and avatar if missing
            await payload.update({
              collection: 'users',
              id: existingUser.id,
              data: {
                googleId: account.providerAccountId,
                name: user.name || existingUser.name,
                avatar: user.image || existingUser.avatar,
              },
            })
            // Attach id and role to user object so jwt callback gets it
            user.id = existingUser.id
            ;(user as any).role = existingUser.role
            ;(user as any).freeComponentQuota = existingUser.freeComponentQuota
            return true
          }
          
          // Create new user
          const newUser = await payload.create({
            collection: 'users',
            data: {
              email: user.email!,
              password: Math.random().toString(36).slice(-12) + Math.random().toString(36).slice(-12), // Dummy password
              role: 'customer',
              googleId: account.providerAccountId,
              name: user.name,
              avatar: user.image,
            },
          })
          
          user.id = newUser.id
          ;(user as any).role = newUser.role
          ;(user as any).freeComponentQuota = newUser.freeComponentQuota
          return true
        } catch (error) {
          console.error('Error in Google signIn callback:', error)
          return false
        }
      }
      return true
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.role = (user as any).role
        token.freeComponentQuota = (user as any).freeComponentQuota
      }
      if (trigger === 'update' && session?.freeComponentQuota !== undefined) {
        token.freeComponentQuota = session.freeComponentQuota
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        ;(session.user as any).role = token.role as string
        ;(session.user as any).freeComponentQuota = token.freeComponentQuota as number
      }
      return session
    }
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
})
