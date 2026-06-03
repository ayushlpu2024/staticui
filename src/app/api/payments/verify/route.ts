import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config: configPromise });

    const { user } = await payload.auth({ headers: req.headers });
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_subscription_id,
      razorpay_signature,
      planType,
    } = body;

    const secret = process.env.RAZORPAY_KEY_SECRET || '';

    let generatedSignature = '';
    
    if (razorpay_subscription_id) {
      // Verify signature for subscription
      generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${razorpay_payment_id}|${razorpay_subscription_id}`)
        .digest('hex');
    } else {
      // Verify signature for order
      generatedSignature = crypto
        .createHmac('sha256', secret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');
    }

    if (generatedSignature !== razorpay_signature) {
      console.error('❌ Signature mismatch');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    console.log('✅ Payment verified:', { razorpay_payment_id, razorpay_order_id, planType, userId: user.id });

    // Upgrade user to proCustomer
    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        role: 'proCustomer',
        subscriptionStatus: 'active',
      },
    });

    console.log(`🎉 User ${user.email} upgraded to proCustomer (plan: ${planType})`);

    return NextResponse.json({ success: true, plan: planType });

  } catch (error: any) {
    console.error('❌ Verification error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
