import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { IconMail, IconPhone, IconMapPin, IconSparkles, IconSend } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: IconMail,
      title: 'Email',
      value: 'kavachtrust@gmail.com',
      href: 'mailto:kavachtrust@gmail.com'
    },
    {
      icon: IconPhone,
      title: 'Phone',
      value: '+91 7892474801',
      href: 'tel:+917892474801'
    },
    {
      icon: IconMapPin,
      title: 'Address',
      value: 'Bangalore, Karnataka, India',
      href: null
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Matching site theme */}
      <section className="relative py-24 md:py-32 bg-[#DB143C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <IconSparkles className="w-5 h-5" />
              <span className="text-sm font-bold">We'd Love to Hear From You</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Get in <span className="text-white/90">Touch</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Have questions or want to get involved? Reach out to us and let's create impact together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <Section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you soon.</p>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <form className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50" 
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Topic</label>
                      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/50">
                        <option value="">Select a topic</option>
                        <option>Volunteering</option>
                        <option>Donation</option>
                        <option>Partnership</option>
                        <option>Media</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                      <textarea 
                        rows={5} 
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none bg-gray-50/50" 
                        placeholder="How can we help you?"
                      />
                    </div>
                    <Button className="w-full bg-[#DB143C] hover:bg-[#b91133] text-white font-bold py-6 rounded-xl">
                      <IconSend className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Section */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Contact Information</h2>
              <p className="text-muted-foreground mb-8">Get in touch with us through any of these channels.</p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                      <CardContent className="p-5">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-[#DB143C]/10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-6 h-6 text-[#DB143C]" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                            {item.href ? (
                              <a 
                                href={item.href} 
                                className="text-muted-foreground hover:text-[#DB143C] transition-colors"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
