import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageHeader } from '../components/PageHeader';
import { Button } from '@/components/ui/button';
import { Heart, Copy, Check, Smartphone } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  fundraising: {
    goalAmount: number;
    currentAmount: number;
    currency: string;
    deadline: string;
  } | null;
}

const Donate: React.FC = () => {
  const [searchParams] = useSearchParams();
  const eventParam = searchParams.get('event');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [copiedUPI, setCopiedUPI] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const UPI_ID = "teamkavach@ybl";
  const PHONEPE = "+91 9611438065";
  const ACCOUNT_NUMBER = "50200089968840";
  const IFSC = "HDFC0009429";

  useEffect(() => {
    if (eventParam) {
      fetch('/data/events.json')
        .then(res => res.json())
        .then(data => {
          const event = data.upcomingEvents.find((e: any) => 
            e.title.toLowerCase().replace(/\s+/g, '-') === eventParam
          );
          if (event) {
            setSelectedEvent(event);
          }
        });
    }
  }, [eventParam]);

  const progressPercentage = selectedEvent?.fundraising
    ? Math.round((selectedEvent.fundraising.currentAmount / selectedEvent.fundraising.goalAmount) * 100)
    : 0;

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
                <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  MISSION WINTER RELIEF
                </h2>
                <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
                  Spreading warmth, one blanket at a time
                </p>
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-black text-primary mb-2">₹250</div>
                    <div className="text-sm text-foreground/70 font-semibold">for a Blanket and Food packet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-accent mb-2">500+</div>
                    <div className="text-sm text-foreground/70 font-semibold">People to help</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-black text-secondary mb-2">Winter</div>
                    <div className="text-sm text-foreground/70 font-semibold">Your warmth, their survival</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Methods */}
          <div className="max-w-2xl mx-auto mb-12">
            {/* UPI Card - Centered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary/20 hover:border-primary/60 transition-all">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black text-foreground mb-2">UPI Payment</h3>
                  <p className="text-foreground/60 font-semibold">Quick & Easy - Pay via any UPI app</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-5 rounded-xl border-2 border-primary/30">
                    <p className="text-sm font-bold text-foreground/70 mb-2">UPI ID</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xl font-black text-foreground">{UPI_ID}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(UPI_ID, 'upi')}
                        className="bg-primary hover:bg-primary/90 text-white font-bold"
                      >
                        {copiedUPI ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-secondary/10 to-primary/10 p-5 rounded-xl border-2 border-secondary/30">
                    <p className="text-sm font-bold text-foreground/70 mb-2">PhonePe Number</p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xl font-black text-foreground">{PHONEPE}</p>
                      <Button
                        size="sm"
                        onClick={() => copyToClipboard(PHONEPE, 'account')}
                        className="bg-secondary hover:bg-secondary/90 text-dark font-bold"
                      >
                        {copiedAccount ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-4 rounded-xl">
                    <div className="text-sm text-foreground/70 space-y-2 font-semibold">
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
            <div className="bg-white rounded-3xl p-8">
              <h3 className="text-2xl font-black text-foreground mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Important: After Payment
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black shrink-0">1</div>
                    <div>
                      <p className="font-bold text-foreground">Take Screenshot</p>
                      <p className="text-sm text-foreground/70">Capture payment confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-black shrink-0">2</div>
                    <div>
                      <p className="font-bold text-foreground">WhatsApp Us</p>
                      <a href="https://wa.me/917892474801" className="text-sm text-primary font-bold hover:underline">+91 7892474801</a>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary text-dark flex items-center justify-center font-black shrink-0">3</div>
                    <div>
                      <p className="font-bold text-foreground">Or Email</p>
                      <a href="mailto:teamkavach1@gmail.com" className="text-sm text-primary font-bold hover:underline break-all">teamkavach1@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-black shrink-0">4</div>
                    <div>
                      <p className="font-bold text-foreground">Get Receipt</p>
                      <p className="text-sm text-foreground/70">Within 24 hours</p>
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
            className="bg-white rounded-3xl p-8 shadow-xl border-2 border-primary/20 text-center"
          >
            <h3 className="text-2xl font-black text-foreground mb-4">Need Help?</h3>
            <p className="text-foreground/70 mb-6 font-semibold">
              Have questions about donations? Contact us anytime!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://wa.me/917892474801" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
              >
                📱 WhatsApp
              </a>
              <a 
                href="mailto:teamkavach1@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
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
