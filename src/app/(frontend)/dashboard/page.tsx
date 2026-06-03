import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function DashboardPage() {
  const payload = await getPayload({ config: configPromise })
  const headersList = await headers()
  
  // Authenticate user
  const { user } = await payload.auth({ headers: headersList })

  if (!user) {
    redirect('/sign-in')
  }

  // Fetch subscriptions for this user
  const subscriptions = await payload.find({
    collection: 'subscriptions',
    where: {
      user: { equals: user.id },
    },
    sort: '-createdAt',
  })

  // Fetch payments for this user
  const payments = await payload.find({
    collection: 'payments',
    where: {
      user: { equals: user.id },
    },
    sort: '-createdAt',
  })

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 flex flex-col pt-24 pb-12">
      <main className="flex-1 w-full max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Profile Card */}
          <div className="col-span-1 md:col-span-1 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Role</p>
                <p className="font-medium capitalize inline-block px-2 py-1 bg-zinc-100 rounded-md text-sm mt-1">{user.role}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Status</p>
                <p className="font-medium capitalize inline-block px-2 py-1 bg-green-100 text-green-800 rounded-md text-sm mt-1">
                  {user.subscriptionStatus || 'Free'}
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="col-span-1 md:col-span-2 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Current Subscription</h2>
            {subscriptions.docs.length > 0 ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 border border-zinc-100 bg-zinc-50 rounded-xl">
                  <div>
                    <p className="font-semibold text-lg capitalize">{subscriptions.docs[0].status} Plan</p>
                    <p className="text-sm text-zinc-500">ID: {subscriptions.docs[0].razorpaySubscriptionId}</p>
                  </div>
                  {subscriptions.docs[0].status === 'active' && (
                    <button className="px-4 py-2 bg-red-50 text-red-600 font-medium rounded-lg hover:bg-red-100 transition-colors">
                      Cancel Plan
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center p-8 border border-dashed border-zinc-300 rounded-xl">
                <p className="text-zinc-500 mb-4">You are currently on the free plan.</p>
                <Link href="/#pricing" className="inline-block px-6 py-2 bg-zinc-950 text-white rounded-lg hover:bg-zinc-800 transition-colors">
                  Upgrade to Pro
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Payments History */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Payment History</h2>
          {payments.docs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 text-sm text-zinc-500">
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Payment ID</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {payments.docs.map((payment) => (
                    <tr key={payment.id} className="border-b border-zinc-100 last:border-0">
                      <td className="py-4">{new Date(payment.createdAt).toLocaleDateString()}</td>
                      <td className="py-4 font-medium">₹{payment.amount}</td>
                      <td className="py-4 capitalize">
                        <span className={`px-2 py-1 rounded-md text-xs ${payment.status === 'captured' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {payment.status}
                        </span>
                      </td>
                      <td className="py-4 text-zinc-500 font-mono text-xs">{payment.razorpayPaymentId}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-zinc-500 italic text-sm">No payments found.</p>
          )}
        </div>
      </main>
    </div>
  )
}
