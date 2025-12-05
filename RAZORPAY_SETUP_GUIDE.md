# Razorpay Payment Gateway Setup Guide

## Overview
Razorpay is integrated into the Donate page with support for:
- Credit/Debit Cards (Visa, Mastercard, Rupay, etc.)
- UPI (GPay, PhonePe, Paytm, etc.)
- Net Banking
- Wallets (Paytm, PhonePe, Amazon Pay, etc.)
- EMI options

## Setup Steps

### 1. Create Razorpay Account (FREE)
1. Go to https://razorpay.com/
2. Click "Sign Up" (Top right)
3. Fill in your details:
   - Business Name: Team Kavach
   - Email: teamkavach1@gmail.com
   - Phone: +91 9611438065
4. Verify email and phone
5. Complete KYC (takes 1-2 days for activation)

### 2. Get Your API Keys
1. Login to Razorpay Dashboard: https://dashboard.razorpay.com/
2. Go to **Settings** → **API Keys**
3. Click **Generate Test Keys** (for testing)
4. You'll get:
   - **Key ID**: `rzp_test_xxxxxxxxxxxx`
   - **Key Secret**: `xxxxxxxxxxxxxxxxx` (Keep this secret!)

### 3. Update Your Code
Open `src/pages/Donate.tsx` and update line 24:
```typescript
const RAZORPAY_KEY = "rzp_test_xxxxxxxxxxxxxx"; // Replace with your Test Key ID
```

### 4. Test the Integration

#### Test Mode (No real money):
- Use test cards provided by Razorpay
- Test Card: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date
- Name: Any name

#### Test UPI:
- Use: `success@razorpay`
- This will simulate a successful payment

### 5. Go Live (Production)

When ready for real payments:

1. **Complete KYC**: Submit business documents
   - PAN Card
   - Business Registration
   - Bank Account Details
   - Address Proof

2. **Get Live Keys**:
   - Go to Dashboard → Settings → API Keys
   - Generate **Live Keys**: `rzp_live_xxxxxxxxxxxx`
   - Update in code

3. **Update Code**:
```typescript
const RAZORPAY_KEY = "rzp_live_xxxxxxxxxxxx"; // Your Live Key
```

4. **Pricing** (as of 2024):
   - Domestic Cards: 2% + GST
   - International Cards: 3% + GST
   - UPI: 0% (FREE for amounts < ₹2000)
   - Net Banking: 2% + GST
   - No setup fees, no annual fees
   - Settlement: T+2 to T+7 days

## Important Features Added

### 1. Quick Amount Buttons
- Preset amounts: ₹250, ₹500, ₹1000, ₹2500, ₹5000
- Click to select

### 2. Custom Amount
- Users can enter any amount
- Minimum: ₹1

### 3. Payment Success Handler
Currently shows an alert. You should:
- Send payment details to your backend
- Generate receipt
- Send confirmation email
- Update your database

### 4. Payment Failure/Cancel
User can retry or use alternative payment methods (UPI direct)

## Backend Integration (Optional but Recommended)

Create a backend API to:
1. Create orders (more secure)
2. Verify payments
3. Store transaction records
4. Send automated emails
5. Generate tax receipts

### Sample Backend Endpoint (Node.js/Express):
```javascript
const Razorpay = require('razorpay');

const razorpay = new Razorpay({
  key_id: 'rzp_test_xxxx',
  key_secret: 'your_secret'
});

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  
  const options = {
    amount: amount * 100, // paise
    currency: 'INR',
    receipt: 'receipt_' + Date.now()
  };
  
  const order = await razorpay.orders.create(options);
  res.json(order);
});

app.post('/verify-payment', (req, res) => {
  const crypto = require('crypto');
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  
  const sign = razorpay_order_id + "|" + razorpay_payment_id;
  const expectedSign = crypto
    .createHmac("sha256", 'your_key_secret')
    .update(sign.toString())
    .digest("hex");
  
  if (razorpay_signature === expectedSign) {
    // Payment verified
    // Save to database, send email, etc.
    res.json({ status: 'success' });
  } else {
    res.json({ status: 'failure' });
  }
});
```

## Alternative: Open Source Payment Gateways

If you prefer fully open-source solutions:

### 1. **Instamojo** (Indian)
- Similar to Razorpay
- Free account
- 2% + GST transaction fees
- Good for NGOs

### 2. **Stripe** (International)
- Very popular worldwide
- Higher fees for Indian cards (2.9% + ₹2)
- Better for international donations

### 3. **PayU** (Indian)
- Established player
- Similar pricing to Razorpay

## For NGOs/Non-Profits

### Tax Benefits:
1. Register under Section 80G (Income Tax)
2. Apply for 12A registration
3. Donors can claim 50% tax deduction
4. Add 80G certificate number in receipts

### Razorpay's NGO Benefits:
- Special pricing for registered NGOs
- Lower transaction fees
- Recurring donation support
- Donor management dashboard

## Security Best Practices

1. **Never expose Key Secret**: Only use in backend
2. **Use HTTPS**: Always serve site over SSL
3. **Verify on Backend**: Don't trust frontend data alone
4. **Log Transactions**: Maintain audit trail
5. **Regular Reconciliation**: Match Razorpay settlements with bank

## Support

- Razorpay Docs: https://razorpay.com/docs/
- Support Email: support@razorpay.com
- Phone: 1800-123-4353 (Mon-Sat, 10 AM - 6 PM)
- Help Center: https://razorpay.com/support/

## Current Implementation

✅ Frontend integration complete
✅ Multiple payment methods supported
✅ Quick amount selection
✅ Custom amount input
✅ Responsive design
✅ Error handling

🔜 Recommended Next Steps:
- Set up backend verification
- Add payment confirmation page
- Email receipts automation
- Add transaction history for admins
- Implement recurring donations

## Testing Checklist

- [ ] Test with different amounts
- [ ] Test card payments (use test card)
- [ ] Test UPI payments (use success@razorpay)
- [ ] Test payment cancellation
- [ ] Test on mobile devices
- [ ] Verify payment success handler
- [ ] Test with slow internet
- [ ] Check responsive design

## Cost Example

If you receive donations worth ₹1,00,000:
- UPI payments (₹50,000): ₹0 fees = ₹50,000
- Card payments (₹50,000): 2% + GST = ~₹1,180 fees = ₹48,820
- **Total fees**: ~₹1,180
- **You receive**: ~₹98,820

This is much better than physical donations (no receipt hassles, instant confirmation, automatic tracking).

---

**Need help?** Contact Razorpay support or reach out to your development team!
