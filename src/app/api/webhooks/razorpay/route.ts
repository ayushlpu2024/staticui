import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config: configPromise });
    const bodyText = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || '';

    // Verify webhook signature
    if (secret) {
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(bodyText)
        .digest('hex');

      if (signature !== expectedSignature) {
        return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
      }
    } else {
      console.warn('⚠️ RAZORPAY_WEBHOOK_SECRET is not set. Skipping signature validation (DEV ONLY)');
    }

    const event = JSON.parse(bodyText);

    // Idempotency Check
    const existingLog = await payload.find({
      collection: 'webhooks',
      where: { razorpayEventId: { equals: event.id } },
    });

    if (existingLog.totalDocs > 0) {
      return NextResponse.json({ message: 'Already processed' });
    }

    // Log the event
    await payload.create({
      collection: 'webhooks',
      data: {
        razorpayEventId: event.id,
        eventType: event.event,
        payload: event,
        processed: true,
      },
    });

    // Handle specific events
    switch (event.event) {
      case 'subscription.activated':
        // Update subscription to active, user to proCustomer
        console.log('Subscription activated', event.payload.subscription.entity.id);
        break;
      case 'subscription.charged':
        // Log payment
        console.log('Subscription charged');
        break;
      case 'subscription.cancelled':
        // Downgrade user
        console.log('Subscription cancelled');
        break;
      default:
        console.log(`Unhandled event type ${event.event}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
