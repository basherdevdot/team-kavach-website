import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IconSchool,
  IconMedicalCross,
  IconHeartHandshake,
  IconUsers,
  IconArrowRight,
  IconCircleCheck
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

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

export default function Programs() {
  const programs = [
    {
      icon: IconSchool,
      title: 'Education & Youth Empowerment',
      tagline: 'Empowering Through Learning',
      description: 'From teaching Computer Science and English in government schools to distributing exam kits and recycling notebooks, we equip students with tools for success.',
      impact: ['760+ notebooks recycled', '150+ exam kits distributed', '50+ teaching hours', 'School renovation projects'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: IconMedicalCross,
      title: 'Health & Welfare Drives',
      tagline: 'Caring for the Vulnerable',
      description: 'Blood donation camps for thalassemia patients, sanitary kit distribution for BBMP women workers, and umbrella donations for street vendors during summer.',
      impact: ['50,000+ ml blood collected', '400+ sanitary kits donated', '100+ umbrellas distributed', 'Targeted support drives'],
      color: 'bg-red-500',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: IconHeartHandshake,
      title: 'Winter Blanket Distribution',
      tagline: 'Warmth for the Homeless',
      description: 'Our flagship overnight annual drive since 2019—distributing blankets and food to homeless individuals across Bengaluru during peak winter.',
      impact: ['1000+ blankets distributed', '500+ food packets', 'Annual overnight drives', 'Covering all of Bengaluru'],
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      icon: IconUsers,
      title: 'Environmental Conservation',
      tagline: 'Protecting Our Planet',
      description: 'Plog Treks at Shivagange Hills, lake cleaning using natural bio-enzymes from vNurture initiative, and promoting eco-friendly practices.',
      impact: ['600+ kg plastic cleaned', '4+ years of Plog Treks', 'Bio-enzyme lake cleaning', 'Zero-chemical approach'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500'
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
            <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
              Our Programs
              <br />
              <span className="text-secondary">Creating Impact</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Focused initiatives across education, healthcare, and community development designed to create lasting change in Bangalore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <Section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Icon Side */}
                <div className={`order-2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className={`relative h-64 sm:h-80 md:h-96 bg-gradient-to-br ${program.gradient} rounded-3xl overflow-hidden shadow-2xl`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <program.icon className="w-48 h-48 text-white/20" strokeWidth={1} />
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-4">
                        <program.icon className="w-12 h-12 text-foreground" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">{program.title}</h3>
                      <p className="text-lg sm:text-xl text-white/90 font-bold">{program.tagline}</p>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`order-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6">{program.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Impact Stats */}
                  <div className="space-y-3 mb-8">
                    {program.impact.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={`w-6 h-6 ${program.color} rounded-full flex items-center justify-center`}>
                          <IconCircleCheck className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-lg font-bold text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild size="lg" className="font-bold">
                    <Link to="/get-involved">
                      Join This Program
                      <IconArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">
            Ready to Make
            <br />
            A Difference?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join any of our programs as a volunteer or supporter. Together, we can create lasting impact.
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
              <Link to="/donate">Support Our Work</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
