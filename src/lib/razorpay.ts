import Razorpay from 'razorpay';

export const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'dummy_key_id_to_bypass_build_error',
  key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret_to_bypass_build_error',
});
