import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  IconHeart,
  IconUsers,
  IconSchool,
  IconMedicalCross,
  IconHeartHandshake,
  IconCalendar,
  IconTrendingUp,
  IconMapPin,
  IconSparkles,
  IconQuote
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

export default function Impact() {
  const stats = [
    { icon: IconUsers, value: '150+', label: 'Active Volunteers', color: 'text-blue-500' },
    { icon: IconHeart, value: '1000+', label: 'Blankets Distributed', color: 'text-red-500' },
    { icon: IconCalendar, value: '6+', label: 'Years of Service', color: 'text-green-500' },
    { icon: IconMapPin, value: '500+', label: 'Food Packets Given', color: 'text-purple-500' },
    { icon: IconSchool, value: '760+', label: 'Notebooks Recycled', color: 'text-blue-500' },
    { icon: IconMedicalCross, value: '50L+', label: 'Blood Collected (ml)', color: 'text-red-500' },
  ];

  const programImpact = [
    {
      icon: IconSchool,
      title: 'Education & Youth Impact',
      stats: [
        { label: 'Notebooks recycled', value: '760+' },
        { label: 'Exam kits distributed', value: '150+' },
        { label: 'Teaching hours (CS & English)', value: '50+' },
        { label: 'School renovations', value: '1' }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: IconMedicalCross,
      title: 'Health & Welfare Impact',
      stats: [
        { label: 'Blood collected (ml)', value: '50,000+' },
        { label: 'Sanitary kits donated', value: '400+' },
        { label: 'Blankets distributed', value: '1000+' },
        { label: 'Umbrellas donated', value: '100+' }
      ],
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: IconHeartHandshake,
      title: 'Environmental Impact',
      stats: [
        { label: 'Plastic waste cleaned (kg)', value: '600+' },
        { label: 'Plog Treks conducted', value: '4+' },
        { label: 'Lakes cleaned with bio-enzymes', value: '2+' },
        { label: 'Food packets distributed', value: '500+' }
      ],
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const testimonials = [
    {
      quote: "Team Kavach's education program changed my son's life. The volunteers are so dedicated and caring.",
      author: "Lakshmi",
      role: "Parent of Student",
      image: "/images/testimonials/lakshmi.jpg"
    },
    {
      quote: "The free health camp saved my mother's life. We couldn't afford treatment, but they helped us.",
      author: "Rajesh",
      role: "Community Member",
      image: "/images/testimonials/rajesh.jpg"
    },
    {
      quote: "Volunteering with Team Kavach has been the most rewarding experience of my life.",
      author: "Priya",
      role: "Volunteer",
      image: "/images/testimonials/priya.jpg"
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
              <IconTrendingUp className="w-5 h-5" />
              <span className="text-sm font-bold">Growing Impact Since 2019</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Our Impact
              <br />
              <span className="text-secondary">In Numbers</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Real stories, real numbers, real change—see how we're transforming lives across Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Impact by Numbers</h2>
            <p className="text-xl text-foreground/70">Measurable change we've created together</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className={`w-10 h-10 ${stat.color}`} strokeWidth={2} />
                </div>
                <div className="text-5xl md:text-6xl font-black text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Program-wise Impact */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Impact by Program</h2>
            <p className="text-xl text-foreground/70">Detailed breakdown of our initiatives</p>
          </div>

          <div className="space-y-12">
            {programImpact.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all">
                  <CardContent className="p-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center`}>
                        <program.icon className="w-11 h-11 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-3xl font-black">{program.title}</h3>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                      {program.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                          <div className="text-sm font-bold text-foreground/70">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Stories from the Field</h2>
            <p className="text-xl text-foreground/70">Hear from those we've impacted</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    {/* Testimonial Photo */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to initials if image not found
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div 
                          className="hidden w-full h-full bg-primary items-center justify-center text-white text-xl font-black"
                          style={{ display: 'none' }}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <div className="font-black text-foreground">{testimonial.author}</div>
                        <div className="text-sm text-foreground/60 font-bold">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <IconQuote className="w-12 h-12 text-primary/20 mb-4" />
                    <p className="text-lg text-foreground/80 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Growth Timeline */}
      <Section className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconSparkles className="w-20 h-20 mx-auto mb-8" strokeWidth={1.5} />
          <h2 className="mb-8">
            Growing Together
            <br />
            Since 2022
          </h2>
          <p className="text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            From a small group of 10 volunteers to a thriving community of 150+, our impact grows every day thanks to dedicated changemakers like you
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Be Part of
            <br />
            This Impact
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your time, skills, and support can help us reach even more lives
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-bold">
              <Link to="/get-involved">Join as Volunteer</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
