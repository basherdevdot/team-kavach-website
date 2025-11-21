import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import {
  IconHeart,
  IconUsers,
  IconTarget,
  IconSparkles,
  IconArrowRight,
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

export default function About() {
  const values = [
    {
      icon: IconHeart,
      title: 'Compassion',
      description: 'We lead with empathy and care in everything we do',
      color: 'bg-red-500'
    },
    {
      icon: IconUsers,
      title: 'Community',
      description: 'Together we achieve more than we ever could alone',
      color: 'bg-blue-500'
    },
    {
      icon: IconTarget,
      title: 'Impact',
      description: 'Every action is focused on creating measurable change',
      color: 'bg-green-500'
    },
    {
      icon: IconSparkles,
      title: 'Innovation',
      description: 'We find creative solutions to complex problems',
      color: 'bg-purple-500'
    }
  ];

  const milestones = [
    { year: '2022', title: 'Founded', desc: 'Team Kavach established in Bangalore' },
    { year: '2022', title: 'First Program', desc: 'Launched education support initiative' },
    { year: '2023', title: '50 Volunteers', desc: 'Growing community of changemakers' },
    { year: '2023', title: 'Healthcare', desc: 'Started free health camp program' },
    { year: '2024', title: '1,000 Lives', desc: 'Reached 1,000+ lives impacted milestone' },
    { year: '2025', title: '150 Volunteers', desc: 'Expanded team and programs' }
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
              <span className="text-sm font-bold">Since 2022</span>
            </div>
            
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              About Us
              <br />
              <span className="text-secondary">Our Story</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              We're a passionate community of volunteers dedicated to creating lasting social impact in Bangalore through grassroots initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">Who We Are</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
                <p>
                  <strong className="text-foreground font-black">Team Kavach</strong> was founded in 2022 by a group of passionate individuals who believed that real change starts at the community level.
                </p>
                <p>
                  What began as a small group of volunteers organizing weekend education sessions has grown into a vibrant community of <strong className="text-primary font-black">150+ volunteers</strong> creating impact across Bangalore.
                </p>
                <p>
                  We focus on three core areas: <strong className="font-black">Education Support</strong>, <strong className="font-black">Healthcare Initiatives</strong>, and <strong className="font-black">Community Development</strong>—addressing the most pressing needs of underserved communities.
                </p>
                <p>
                  Today, we've impacted <strong className="text-primary font-black">2,000+ lives</strong> through 50+ events and programs, and we're just getting started.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary rounded-3xl overflow-hidden shadow-2xl">
                {/* Story Photo */}
                <img 
                  src="/images/about/story.jpg" 
                  alt="Team Kavach Story"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  onError={(e) => {
                    // Fallback if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/60 to-secondary/60">
                  <div className="text-center text-white p-8">
                    <IconHeart className="w-32 h-32 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
                    <p className="text-3xl font-black">Building Communities</p>
                    <p className="text-xl mt-2 opacity-90">One Act at a Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Values */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-primary hover:shadow-xl transition-all">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <value.icon className="w-10 h-10 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-black mb-4">{value.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Journey */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Journey</h2>
            <p className="text-xl text-foreground/70">Key milestones in our growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/10 hover:border-primary/30 transition-all">
                  <div className="text-5xl font-black text-primary mb-4">{milestone.year}</div>
                  <h3 className="text-xl font-black mb-2">{milestone.title}</h3>
                  <p className="text-foreground/70">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section className="py-32 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80 text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconQuote className="w-16 h-16 mx-auto mb-8 text-foreground/30" strokeWidth={1.5} />
          <h2 className="mb-8">Our Mission</h2>
          <p className="text-3xl md:text-4xl font-black leading-tight max-w-4xl mx-auto mb-12">
            "To empower underserved communities in Bangalore through education, healthcare, and sustainable development initiatives, creating a more equitable and compassionate society."
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Meet Our Team</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Led by passionate volunteers committed to social change
          </p>
          
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl overflow-hidden text-white relative">
            {/* Team Group Photo */}
            <img 
              src="/images/team/team-group.jpg" 
              alt="Team Kavach Volunteers"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="relative p-16 bg-gradient-to-br from-primary/70 to-accent/70">
              <IconUsers className="w-24 h-24 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-4xl font-black mb-4">150+ Volunteers</h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
                Students, professionals, and community leaders united by a common goal—creating positive change
              </p>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link to="/get-involved">
                  Join Our Team
                  <IconArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Be part of our journey to create lasting impact in Bangalore
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-bold">
              <Link to="/get-involved">Become a Volunteer</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="text-lg px-10 h-14 bg-white text-primary hover:bg-white/90 font-bold"
            >
              <Link to="/donate">Support Our Cause</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
