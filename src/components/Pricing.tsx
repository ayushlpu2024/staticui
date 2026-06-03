'use client'

import React, { useState } from 'react'
import { Check } from 'lucide-react'
import Script from 'next/script'
import { useRouter } from 'next/navigation'

export function Pricing({ user }: { user?: any }) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleCheckout = async (planType: string, price: number) => {
    if (!user) {
      router.push('/sign-in')
      return
    }

    try {
      setIsProcessing(planType)
      setMessage(null)

      // 1. Create Order via API
      const res = await fetch('/api/subscriptions/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planType, price }),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to create order')
      }

      // 2. Open Razorpay Checkout Modal
      const options: any = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        name: 'StaticUI',
        description: planType === 'advance' ? 'Advance Plan — Monthly' : 'Lifetime Access',
        handler: async function (response: any) {
          try {
            // 3. Verify Payment
            const verifyRes = await fetch('/api/payments/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                planType,
              }),
            })

            if (verifyRes.ok) {
              setMessage({ type: 'success', text: 'Payment successful! Welcome to Pro. 🎉' })
              router.refresh()
            } else {
              setMessage({ type: 'error', text: 'Payment verification failed.' })
            }
          } catch (err) {
            setMessage({ type: 'error', text: 'Verification error.' })
          }
        },
        prefill: {
          email: user.email || '',
        },
        theme: {
          color: '#09090b',
        },
      }

      if (data.subscriptionId) {
        options.subscription_id = data.subscriptionId
      } else {
        options.order_id = data.orderId
        options.amount = data.amount
        options.currency = data.currency
      }

      const rzp = new (window as any).Razorpay(options)
      rzp.on('payment.failed', function (response: any) {
        setMessage({ type: 'error', text: response.error.description })
      })
      rzp.open()

    } catch (error: any) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setIsProcessing(null)
    }
  }

  return (
    <section className="w-full border-t border-zinc-200/60 bg-white relative z-20 py-20" id="pricing">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      
      <div className="w-full border-b border-zinc-200/60 pb-20 px-8 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-black mb-4">
          Pricing that <span className="text-indigo-500">scales</span> with you
        </h2>
        <p className="text-md text-zinc-500 max-w-2xl mx-auto font-semibold">
          Choose the right plan for your design and development needs. From free components to full-scale custom builds.
        </p>
      </div>

      {message && (
        <div className={`max-w-2xl mx-auto mt-8 p-4 rounded-xl text-center ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {message.text}
        </div>
      )}

      <div className="w-full flex flex-col lg:flex-row border-b border-zinc-200/60">
        {/* Basic Plan */}
        <div className="flex-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200/60 bg-white text-black hover:bg-zinc-100 transition-colors group relative overflow-hidden flex flex-col">
          <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-medium tracking-tight mb-2">Basic plan</h3>
            <div className="text-4xl font-bold mb-6">Free</div>
            <button className="w-full bg-zinc-950 text-white rounded-none py-3 font-medium hover:bg-zinc-800 transition-colors">
              Get free plan
            </button>
          </div>
          <div className="relative z-10 flex-1">
            <p className="text-md text-zinc-500 font-semibold mb-6">Free plan for all users.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Access to free component design</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Basic templates</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Advance Plan */}
        <div className="flex-1 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-zinc-200/60 bg-white text-black hover:bg-zinc-100 transition-colors group relative overflow-hidden flex flex-col">
          <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-medium tracking-tight mb-2">Advance plan</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">₹1,999</span>
              <span className="text-zinc-500 font-medium">/month</span>
            </div>
            <button 
              onClick={() => handleCheckout('advance', 1999)} 
              disabled={isProcessing === 'advance'}
              className="w-full bg-zinc-950 text-white rounded-none py-3 font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70"
            >
              {isProcessing === 'advance' ? 'Processing...' : 'Upgrade Now'}
            </button>
          </div>
          <div className="relative z-10 flex-1">
            <p className="text-md text-zinc-500 font-semibold mb-6">Ideal for growing projects.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">All advanced design access</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Premium component library</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Priority updates</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-24 -left-12 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-orange-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Premium Plan (Lifetime/One-time) */}
        <div className="flex-1 p-8 md:p-12 bg-white text-black hover:bg-zinc-100 transition-colors group relative overflow-hidden flex flex-col">
          <div className="mb-8 relative z-10">
            <h3 className="text-2xl font-medium tracking-tight mb-2">Lifetime plan</h3>
            <div className="text-4xl font-bold mb-6">₹14,999</div>
            <button 
              onClick={() => handleCheckout('lifetime', 14999)} 
              disabled={isProcessing === 'lifetime'}
              className="w-full bg-zinc-950 text-white rounded-none py-3 font-medium hover:bg-zinc-800 transition-colors disabled:opacity-70"
            >
              {isProcessing === 'lifetime' ? 'Processing...' : 'Get Lifetime Access'}
            </button>
          </div>
          <div className="relative z-10 flex-1">
            <p className="text-md text-zinc-500 font-semibold mb-6">Most premium once-all access.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Share Figma file, we write the code</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">4 sections + 1 hero section free</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-zinc-200/50 p-1"><Check className="w-3 h-3 text-zinc-900" /></div>
                <span className="text-zinc-600 font-medium">Full website design and code</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-20 right-0 w-64 h-64 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
        </div>
      </div>
    </section>
  )
}
