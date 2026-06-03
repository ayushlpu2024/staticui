import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { razorpay } from '@/lib/razorpay';

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config: configPromise });

    const { user } = await payload.auth({ headers: req.headers });
    if (!user) return NextResponse.json({ error: 'Unauthorized user' }, { status: 401 });

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: 'Razorpay credentials are not configured. Check your .env file.' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { planType, price } = body;

    console.log('📦 Checkout request:', { planType, price, user: user.email });

    if (!price || price <= 0) {
      return NextResponse.json({ error: 'Invalid price' }, { status: 400 });
    }

    // Find the plan in DB to check for razorpayPlanId
    const planRecords = await payload.find({
      collection: 'plans',
      where: {
        slug: { equals: planType }
      }
    });

    const plan = planRecords.docs[0];

    if (plan && plan.razorpayPlanId) {
      // Create Subscription
      const subscription = await razorpay.subscriptions.create({
        plan_id: plan.razorpayPlanId,
        customer_notify: 1,
        total_count: 120,
        notes: {
          planType,
          userId: String(user.id),
          email: user.email || '',
        },
      });

      console.log('✅ Subscription created:', subscription.id);

      return NextResponse.json({
        subscriptionId: subscription.id,
        planType,
      });
    }

    // Fallback: Create Order for one-time plans (e.g., lifetime) or if no planId
    const order = await razorpay.orders.create({
      amount: price * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${planType}_${Date.now()}`,
      notes: {
        planType,
        userId: String(user.id),
        email: user.email || '',
      },
    });

    console.log('✅ Order created:', order.id);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      planType,
    });

  } catch (error: any) {
    console.error('❌ Error creating order:', error.message || error);

    const statusCode = error.statusCode || 500;
    const description = error.error?.description || error.message || 'Payment creation failed';

    return NextResponse.json(
      { error: description },
      { status: statusCode >= 400 && statusCode < 600 ? statusCode : 500 }
    );
  }
}
