import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

export async function POST(req: Request) {
  try {
    const payload = await getPayload({ config: configPromise });
    
    // Auth check using Next.js headers (Payload's internal req wrapper handles cookies)
    const { user } = await payload.auth({ headers: req.headers });

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.role === 'admin' || user.role === 'proCustomer') {
      return NextResponse.json({ success: true, message: 'Pro user has unlimited access' });
    }

    const currentQuota = user.freeComponentQuota as number;

    if (currentQuota <= 0) {
      return NextResponse.json({ error: 'Quota exceeded' }, { status: 403 });
    }

    await payload.update({
      collection: 'users',
      id: user.id,
      data: {
        freeComponentQuota: currentQuota - 1,
      },
    });

    return NextResponse.json({ success: true, remaining: currentQuota - 1 });

  } catch (error: any) {
    console.error('Deduct quota error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
