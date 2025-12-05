import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Heart, Copy, Check, Smartphone, CreditCard } from 'lucide-react';

// Razorpay Types
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate: React.FC = () => {
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);
  const [donationAmount, setDonationAmount] = useState<number>(250);
  const [customAmount, setCustomAmount] = useState<string>('');

  const UPI_ID = "teamkavach@ybl";
  const PHONEPE = "+91 9611438065";

  // Razorpay Test Key (Replace with your own key)
  const RAZORPAY_KEY = "rzp_test_xxxxxxxxxxxxxx"; // Get from https://dashboard.razorpay.com/

  const copyToClipboard = (text: string, type: 'upi' | 'account') => {
    navigator.clipboard.writeText(text);
    if (type === 'upi') {
      setCopiedUPI(true);
      setTimeout(() => setCopiedUPI(false), 2000);
    } else {
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    }
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle Razorpay Payment
  const handleRazorpayPayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      return;
    }

    const amount = customAmount ? parseInt(customAmount) : donationAmount;

    if (!amount || amount < 1) {
      alert('Please enter a valid amount');
      return;
    }

    const options = {
      key: RAZORPAY_KEY, // Enter your Razorpay Key ID
      amount: amount * 100, // Amount in paise (₹250 = 25000 paise)
      currency: 'INR',
      name: 'Team Kavach',
      description: 'Mission Winter Relief - Donation',
      image: '/logo.png', // Your logo
      handler: function (response: any) {
        // Payment success
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        console.log('Payment Response:', response);
        // Here you can send the payment details to your backend
        // Send confirmation email, generate receipt, etc.
      },
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      notes: {
        campaign: 'Winter Relief',
        purpose: 'Blanket and Food Distribution'
      },
      theme: {
        color: '#0066CC' // Your brand color
      },
      modal: {
        ondismiss: function() {
          console.log('Payment cancelled by user');
        }
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const quickAmounts = [250, 500, 1000, 2500, 5000];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-primary/5">
      <PageHeader
        title="Support Our Mission"
        subtitle="Your donation helps us reach more communities and create lasting change"
        breadcrumb={[{ name: 'Home', path: '/' }, { name: 'Donate' }]}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Winter Relief Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-primary via-accent to-secondary p-1 rounded-3xl shadow-2xl"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  MISSION WINTER RELIEF
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-6">
                  Spreading warmth, one blanket at a time
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-primary mb-2">₹250</div>
                    <div className="text-sm text-foreground/70 font-semibold">for a Blanket and Food packet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-accent mb-2">500+</div>
                    <div className="text-sm text-foreground/70 font-semibold">People to help</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-secondary mb-2">Winter</div>
                    <div className="text-sm text-foreground/70 font-semibold">Your warmth, their survival</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <div className="max-w-2xl mx-auto mb-12 space-y-8">
            {/* Razorpay Payment Gateway */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 shadow-xl border-2 border-primary/30 hover:border-primary/60 transition-all">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">Pay Online</h3>
                  <p className="text-sm sm:text-base text-foreground/60 font-semibold">Cards, UPI, NetBanking & More</p>
                </div>

                {/* Quick Amount Selection */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-foreground/70 mb-3 text-center">Quick Select Amount</p>
                  <div className="grid grid-cols-3 gap-3">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setDonationAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`py-3 px-4 rounded-xl font-bold transition-all ${
                          donationAmount === amount && !customAmount
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                            : 'bg-white border-2 border-primary/30 text-foreground hover:border-primary hover:scale-105'
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount Input */}
                <div className="mb-6">
                  <p className="text-sm font-bold text-foreground/70 mb-3 text-center">Or Enter Custom Amount</p>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-foreground/70">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full py-3 pl-10 pr-4 text-lg font-bold border-2 border-primary/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      min="1"
                    />
                  </div>
                </div>

                {/* Pay Now Button */}
                <Button
                  onClick={handleRazorpayPayment}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  Pay ₹{customAmount || donationAmount} Now
                </Button>

                <div className="mt-4 text-center text-xs text-foreground/60">
                  <p className="font-semibold">🔒 Secure payment powered by Razorpay</p>
                  <p className="mt-1">Accepts all major cards, UPI, wallets & net banking</p>
                </div>
              </div>
            </motion.div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gradient-to-br from-white via-gray-50 to-primary/5 text-foreground/70 font-bold">OR</span>
              </div>
            </div>

            {/* UPI Card - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary/20 hover:border-primary/60 transition-all">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground mb-2">UPI Payment</h3>
                  <p className="text-sm sm:text-base text-foreground/60 font-semibold">Quick & Easy - Pay via any UPI app</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-5 rounded-xl border-2 border-primary/30">
                    <p className="text-sm font-bold text-foreground/70 mb-2">UPI ID</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                      <p className="text-lg sm:text-xl font-black text-foreground break-all">{UPI_ID}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(UPI_ID, 'upi')}
                        className="bg-primary hover:bg-primary/90 text-white font-bold flex-shrink-0"
                      >
                        {copiedUPI ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-4 sm:p-5 rounded-xl border-2 border-secondary/30">
                    <p className="text-sm font-bold text-foreground/70 mb-2">PhonePe Number</p>
                    <div className="flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                      <p className="text-lg sm:text-xl font-black text-foreground">{PHONEPE}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(PHONEPE, 'account')}
                        className="bg-secondary hover:bg-secondary/90 text-dark font-bold flex-shrink-0"
                      >
                        {copiedAccount ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-xl">
                    <div className="text-xs sm:text-sm text-foreground/70 space-y-2 font-semibold">
                      <p className="flex items-center gap-2">✓ Open any UPI app (GPay, PhonePe, Paytm)</p>
                      <p className="flex items-center gap-2">✓ Enter UPI ID or Phone number</p>
                      <p className="flex items-center gap-2">✓ Send ₹250 or any amount</p>
                      <p className="flex items-center gap-2">✓ Screenshot & WhatsApp us confirmation</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bank Transfer - Commented Out
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-accent/20 hover:border-accent/60 transition-all h-full">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-2">Bank Transfer</h3>
                  <p className="text-foreground/60 font-semibold">Direct Deposit</p>
                </div>

                <div className="space-y-3">
                  <div className="bg-primary/10 p-4 rounded-xl border-2 border-primary/20">
                    <p className="text-xs font-bold text-foreground/70 mb-1">Bank Name</p>
                    <p className="text-foreground font-black text-lg">HDFC Bank</p>
                  </div>
                  <div className="bg-secondary/10 p-4 rounded-xl border-2 border-secondary/20">
                    <p className="text-xs font-bold text-foreground/70 mb-1">Account Name</p>
                    <p className="text-foreground font-black text-lg">Sankalp India Foundation</p>
                  </div>
                  <div className="bg-accent/10 p-4 rounded-xl border-2 border-accent/20">
                    <p className="text-xs font-bold text-foreground/70 mb-1">Account Number</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-foreground font-black text-lg">{ACCOUNT_NUMBER}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(ACCOUNT_NUMBER, 'account')}
                        className="bg-accent hover:bg-accent/90 text-white font-bold"
                      >
                        {copiedAccount ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-xl border-2 border-primary/20">
                    <p className="text-xs font-bold text-foreground/70 mb-1">IFSC Code</p>
                    <p className="text-foreground font-black text-lg">{IFSC}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          */}

          {/* After Payment Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-secondary via-yellow-400 to-secondary p-1 rounded-3xl shadow-2xl mb-12"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-black text-foreground mb-4 sm:mb-6 flex items-center gap-3">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                Important: After Payment
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black shrink-0 text-sm">1</div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">Take Screenshot</p>
                      <p className="text-xs sm:text-sm text-foreground/70">Capture payment confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-black shrink-0 text-sm">2</div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">WhatsApp Us</p>
                      <a href="https://wa.me/917892474801" className="text-xs sm:text-sm text-primary font-bold hover:underline break-all">+91 7892474801</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary text-dark flex items-center justify-center font-black shrink-0 text-sm">3</div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">Or Email</p>
                      <a href="mailto:teamkavach1@gmail.com" className="text-xs sm:text-sm text-primary font-bold hover:underline break-all">teamkavach1@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black shrink-0 text-sm">4</div>
                    <div>
                      <p className="font-bold text-foreground text-sm sm:text-base">Get Receipt</p>
                      <p className="text-xs sm:text-sm text-foreground/70">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-primary/20 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-black text-foreground mb-3 sm:mb-4">Need Help?</h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 font-semibold">
              Have questions about donations? Contact us anytime!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
              <a 
                href="https://wa.me/917892474801" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
              >
                📱 WhatsApp
              </a>
              <a 
                href="mailto:teamkavach1@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm sm:text-base"
              >
                ✉️ Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
