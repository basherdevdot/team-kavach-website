import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  IconUsers,
  IconHeart,
  IconCalendar,
  IconBrandInstagram,
  IconMail,
  IconArrowRight,
  IconCircleCheck,
  IconSparkles
} from '@tabler/icons-react';
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

export default function GetInvolved() {
  const volunteerOptions = [
    {
      title: 'Field Volunteer',
      description: 'Work directly with communities, teach students, organize health camps, and create real impact on the ground.',
      commitment: 'Weekends (4-6 hours)',
      benefits: ['Direct impact', 'Skill development', 'Community building', 'Certificate of service'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Event Organizer',
      description: 'Plan and execute community events, fundraisers, awareness campaigns, and volunteer meetups.',
      commitment: 'Flexible (10+ hours/month)',
      benefits: ['Leadership skills', 'Networking', 'Project management', 'Recognition'],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-violet-500'
    },
    {
      title: 'Content Creator',
      description: 'Create social media content, write stories, design graphics, and help spread awareness about our work.',
      commitment: 'Remote (5+ hours/week)',
      benefits: ['Portfolio building', 'Creative freedom', 'Remote work', 'Exposure'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Fill Application',
      description: 'Complete our simple volunteer application form with your details and interests.'
    },
    {
      number: '02',
      title: 'Orientation',
      description: 'Attend our orientation session to learn about our programs and community.'
    },
    {
      number: '03',
      title: 'Start Impact',
      description: 'Begin your volunteering journey and create lasting change in Bangalore.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
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
              <span className="text-sm font-bold">Join 150+ Volunteers</span>
            </div>
            
            <h1 className="text-white mb-6">
              Get Involved
              <br />
              <span className="text-secondary">Make an Impact</span>
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Join our community of passionate volunteers creating real change in Bangalore through education, healthcare, and social initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-6">Why Volunteer With Us?</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Volunteering is more than giving your time—it's about building connections, developing skills, and being part of something bigger
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: IconHeart, title: 'Real Impact', desc: 'See tangible results of your efforts' },
              { icon: IconUsers, title: 'Community', desc: 'Join a passionate group of changemakers' },
              { icon: IconSparkles, title: 'Skill Growth', desc: 'Develop leadership & soft skills' },
              { icon: IconCalendar, title: 'Flexible', desc: 'Choose your commitment level' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-10 h-10 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-black mb-3">{item.title}</h3>
                <p className="text-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Volunteer Roles */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Choose Your Role</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Multiple ways to contribute based on your skills, interests, and availability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteerOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <IconUsers className="w-9 h-9 text-white" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-2xl font-black mb-4">{option.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">
                      {option.description}
                    </p>

                    <div className="mb-6">
                      <div className="text-sm font-bold text-primary mb-2">TIME COMMITMENT</div>
                      <div className="text-lg font-black">{option.commitment}</div>
                    </div>

                    <div className="space-y-2 mb-6">
                      {option.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <IconCircleCheck className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm font-bold">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full font-bold" size="lg">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">How It Works</h2>
            <p className="text-xl text-foreground/70">Simple 3-step process to start volunteering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="text-8xl font-black text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-2xl font-black mb-4">{step.title}</h3>
                <p className="text-foreground/70 text-lg">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-1">
                    <IconArrowRight className="w-8 h-8 text-primary/30 absolute left-1/2 transform -translate-x-1/2" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="font-bold text-lg px-10 h-14">
              <Link to="/contact">
                Start Your Application
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Support Us Section */}
      <Section className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconHeart className="w-20 h-20 mx-auto mb-8" strokeWidth={1.5} />
          <h2 className="mb-8">
            Can't Volunteer?
            <br />
            Support Us Instead
          </h2>
          <p className="text-2xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your donations help us reach more communities, organize more events, and create bigger impact
          </p>
          <Button asChild size="lg" className="text-lg px-10 h-14 font-bold">
            <Link to="/donate">
              Make a Donation
              <IconArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Have Questions?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            We're here to help! Reach out to us on Instagram or email for any queries about volunteering
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="text-lg px-10 h-14 font-bold"
            >
              <a href="https://www.instagram.com/teamkavach/" target="_blank" rel="noopener noreferrer">
                <IconBrandInstagram className="w-6 h-6 mr-2" />
                DM on Instagram
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/contact">
                <IconMail className="w-6 h-6 mr-2" />
                Send Email
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
