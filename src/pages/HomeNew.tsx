import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { InstagramEmbed } from 'react-social-media-embed';
import { 
  IconHeart, 
  IconUsers, 
  IconSchool,
  IconMedicalCross,
  IconHeartHandshake,
  IconArrowRight,
  IconBrandInstagram,
  IconCalendar,
  IconSparkles,
  IconCircleCheck,
  IconFlame,
  IconStar,
  IconSunrise
} from '@tabler/icons-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Animated Section Wrapper
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
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  // Rotating Slogans
  const slogans = [
    { text: 'Sharing Warmth', icon: IconFlame, color: 'from-orange-500 to-red-500' },
    { text: 'Nurturing Dreams', icon: IconStar, color: 'from-purple-500 to-pink-500' },
    { text: 'Creating a Better Tomorrow', icon: IconSunrise, color: 'from-yellow-500 to-orange-500' },
  ];
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Load events and Instagram posts from JSON
  const [events, setEvents] = useState<any[]>([]);
  const [instagramUrls, setInstagramUrls] = useState<string[]>([]);

  useEffect(() => {
    // Fetch events data
    fetch('/data/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data.upcomingEvents || []);
        setInstagramUrls(data.instagramPosts || []);
      })
      .catch(err => console.error('Error loading events:', err));
  }, []);

  const stats = [
    { icon: IconUsers, value: '150+', label: 'Volunteers' },
    { icon: IconHeart, value: '1000+', label: 'Blankets Distributed' },
    { icon: IconCalendar, value: '6+', label: 'Years of Impact' },
  ];

  const programs = [
    {
      icon: IconSchool,
      title: 'Education',
      description: 'Teaching programs, exam kit distribution, and notebook recycling drives for government schools',
      impact: '760+ notebooks recycled',
      color: 'bg-blue-500',
      image: '/images/programs/education.jpg'
    },
    {
      icon: IconMedicalCross,
      title: 'Healthcare',
      description: 'Blood donation camps supporting thalassemia patients and sanitary kit distribution',
      impact: '50,000+ ml blood collected',
      color: 'bg-red-500',
      image: '/images/programs/healthcare.jpg'
    },
    {
      icon: IconHeartHandshake,
      title: 'Environment',
      description: 'Plog Treks, lake cleaning with bio-enzymes, and umbrella distribution for street vendors',
      impact: '600+ kg plastic cleaned',
      color: 'bg-green-500',
      image: '/images/programs/community.jpg'
    }
  ];

  // Floating Impact Cards Data
  const floatingCards = [
    { value: '1000+', label: 'Blankets', delay: 0.3, position: 'top-[15%] right-[5%] lg:right-[8%]' },
    { value: '150+', label: 'Volunteers', delay: 0.5, position: 'top-[45%] right-[2%] lg:right-[3%]' },
    { value: '6+', label: 'Years', delay: 0.7, position: 'bottom-[25%] right-[8%] lg:right-[12%]' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Unique Asymmetric Split Design */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen overflow-hidden bg-[#fafafa]"
      >
        {/* Animated Organic Blob Shapes */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-secondary/25 to-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, -20, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-accent/20 to-secondary/15 rounded-full blur-3xl"
        />

        {/* Main Content Grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-24 lg:py-0">
            
            {/* LEFT: Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Rotating Slogans */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg">
                  <motion.div
                    key={currentSlogan}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-2"
                  >
                    {React.createElement(slogans[currentSlogan].icon, {
                      className: `w-5 h-5 bg-gradient-to-r ${slogans[currentSlogan].color} text-white rounded-full p-0.5`
                    })}
                    <span className={`text-sm font-bold bg-gradient-to-r ${slogans[currentSlogan].color} bg-clip-text text-transparent`}>
                      {slogans[currentSlogan].text}
                    </span>
                  </motion.div>
                  <span className="text-xs text-foreground/40">•</span>
                  <span className="text-xs font-medium text-foreground/60">Since 2019</span>
                </div>
                {/* Slogan Progress Dots */}
                <div className="flex gap-1.5 mt-3 justify-center lg:justify-start">
                  {slogans.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlogan(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentSlogan 
                          ? 'w-6 bg-gradient-to-r from-primary to-secondary' 
                          : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Stacked Headline with Unique Typography */}
              <div className="space-y-2 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="overflow-hidden"
                >
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-none">
                    Small Acts,
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="overflow-hidden"
                >
                  <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none">
                    <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                      Big Impact
                    </span>
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 40, rotateX: -20 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="overflow-hidden"
                >
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/60 leading-tight">
                    in Bangalore
                  </span>
                </motion.div>
              </div>

              {/* Description with Line Accent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.75 }}
                className="relative mb-10"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full hidden lg:block" />
                <p className="text-lg md:text-xl text-foreground/70 max-w-xl lg:pl-6 leading-relaxed">
                  Join 150+ passionate volunteers creating change through education, healthcare, and community initiatives.
                </p>
              </motion.div>

              {/* CTA Group with Unique Style */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="group relative h-14 px-8 text-lg font-bold overflow-hidden">
                  <Link to="/get-involved">
                    <span className="relative z-10 flex items-center gap-2">
                      Become a Volunteer
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <IconArrowRight className="w-5 h-5" />
                      </motion.span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-shimmer" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="h-14 px-8 text-lg font-bold border-2 border-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
                >
                  <Link to="/programs">Our Programs</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.1 }}
                className="mt-12 flex items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 border-2 border-white flex items-center justify-center"
                    >
                      <IconUsers className="w-5 h-5 text-white" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-foreground">150+ volunteers</span>
                  <span className="text-foreground/60"> making a difference</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Visual Element - Image Collage with Floating Cards */}
            <div className="order-1 lg:order-2 relative">
              {/* Main Hero Image Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                {/* Decorative Frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-[2rem] blur-xl" />
                
                {/* Main Image */}
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/50 shadow-2xl">
                  <img 
                    src="/images/kavachGroup.jpg" 
                    alt="Team Kavach Volunteers"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
                  
                  {/* Fallback Pattern */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-32 h-32 rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center mb-6"
                    >
                      <IconHeart className="w-16 h-16 text-primary/50" />
                    </motion.div>
                    <p className="text-foreground/50 font-medium">Add hero image</p>
                    <p className="text-sm text-foreground/30">hero-volunteers.jpg</p>
                  </div>
                </div>

                {/* Floating Accent Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 z-20"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-white/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                        <IconCircleCheck className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-foreground">50,000+</p>
                        <p className="text-sm text-foreground/60 font-medium">ml Blood Donated</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Floating Impact Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: card.delay + 0.6 }}
                  className={`absolute ${card.position} z-20 hidden lg:block`}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, index % 2 === 0 ? 2 : -2, 0]
                    }}
                    transition={{ 
                      duration: 3 + index, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className="bg-white/80 backdrop-blur-xl rounded-xl p-3 sm:p-4 shadow-xl border border-white/50 hover:scale-110 transition-transform cursor-default"
                  >
                    <p className="text-xl sm:text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {card.value}
                    </p>
                    <p className="text-xs font-medium text-foreground/60">{card.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path 
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
              fill="white"
            />
          </svg>
        </div>
      </motion.section>

      {/* Stats Section */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-10 h-10 text-primary" strokeWidth={2} />
                </div>
                <div className="text-6xl md:text-7xl font-black text-primary mb-3">
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-foreground/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Upcoming Event Section - Professional Layout */}
      <Section className="py-24 bg-gradient-to-br from-white via-primary/5 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white mb-6 shadow-lg"
            >
              <IconCalendar className="w-5 h-5" />
              <span className="font-black">UPCOMING EVENT</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Join Our Next Event
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
              Be part of the change. Register now and make a real difference in people's lives
            </p>
          </div>

          {/* Event Display - Featured Event Only */}
          {events.length > 0 && events[0] && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* LEFT: Event Poster with Border */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="relative group">
                  {/* Decorative Border Frame */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Main Poster Container */}
                  <div className="relative bg-white p-2 sm:p-4 rounded-2xl shadow-2xl border-4 border-white">
                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                      <img 
                        src={events[0].posterUrl} 
                        alt={events[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback */}
                      <div className="hidden absolute inset-0 flex items-center justify-center text-white p-8 text-center">
                        <div>
                          <IconCalendar className="w-24 h-24 mx-auto mb-6 opacity-90" />
                          <h3 className="text-3xl font-black mb-3">{events[0].title}</h3>
                          <p className="text-lg opacity-90">Add your event poster here!</p>
                          <p className="text-sm opacity-70 mt-2 bg-black/20 px-4 py-2 rounded-lg inline-block">
                            blanket-drive.jpg
                          </p>
                        </div>
                      </div>
                      
                      {/* Date Badge Overlay */}
                      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white rounded-xl sm:rounded-2xl px-3 py-2 sm:px-6 sm:py-4 text-center shadow-2xl border-2 sm:border-4 border-primary/20">
                        <div className="text-3xl sm:text-5xl font-black text-primary">{events[0].date}</div>
                        <div className="text-xs sm:text-sm font-black text-foreground/70 tracking-wider">{events[0].month}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Event Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Event Title */}
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary mb-3 sm:mb-4">
                    <IconSparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm font-black uppercase tracking-wide">Featured Event</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 leading-tight">
                    {events[0].title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-foreground/70 leading-relaxed">
                    {events[0].shortDescription || events[0].description}
                  </p>
                </div>

                {/* Event Details Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 sm:p-5 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="text-xs sm:text-sm font-bold text-primary/70 mb-1">📅 DATE</div>
                    <div className="text-sm sm:text-base md:text-lg font-black text-foreground">{events[0].fullDate}</div>
                  </div>
                  <div className="bg-secondary/10 p-3 sm:p-5 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-all">
                    <div className="text-xs sm:text-sm font-bold text-secondary/70 mb-1">⏰ TIME</div>
                    <div className="text-sm sm:text-base md:text-lg font-black text-foreground">{events[0].time}</div>
                  </div>
                  <div className="bg-accent/10 p-3 sm:p-5 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-all">
                    <div className="text-xs sm:text-sm font-bold text-accent/70 mb-1">📍 VENUE</div>
                    <div className="text-sm sm:text-base md:text-lg font-black text-foreground line-clamp-2">{events[0].venue}</div>
                  </div>
                  <div className="bg-primary/10 p-3 sm:p-5 rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all">
                    <div className="text-xs sm:text-sm font-bold text-primary/70 mb-1">📌 LOCATION</div>
                    <div className="text-sm sm:text-base md:text-lg font-black text-foreground line-clamp-2">{events[0].location}</div>
                  </div>
                </div>

                {/* Event Stats */}
                {events[0].stats && (
                  <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 p-4 sm:p-6 rounded-xl border-2 border-primary/10">
                    <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                      <div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-black text-primary">{events[0].stats.target}</div>
                        <div className="text-xs font-bold text-foreground/60 mt-1">TARGET</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-black text-secondary">{events[0].stats.volunteers}</div>
                        <div className="text-xs font-bold text-foreground/60 mt-1">VOLUNTEERS</div>
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl md:text-3xl font-black text-accent">{events[0].stats.locations}</div>
                        <div className="text-xs font-bold text-foreground/60 mt-1">LOCATIONS</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Link to={events[0].registrationLink} className="flex-1">
                    <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-black text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 shadow-xl hover:shadow-2xl transition-all">
                      <IconUsers className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                      Register as Volunteer
                    </Button>
                  </Link>
                  <Link to={events[0].donationLink} className="flex-1">
                    <Button size="lg" variant="outline" className="w-full border-2 border-primary hover:bg-primary hover:text-white font-black text-sm sm:text-base md:text-lg py-5 sm:py-6 md:py-7 shadow-lg hover:shadow-xl transition-all">
                      <IconHeart className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                      Donate Now
                    </Button>
                  </Link>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-2 text-sm text-foreground/60 pt-2">
                  <IconCircleCheck className="w-5 h-5 text-primary" />
                  <span className="font-semibold">100% of donations go directly to the cause</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </Section>

      {/* What We Do - Bold Statement */}
      <Section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            What Happens
            <br />
            When We Care
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 leading-relaxed"
          >
            Real change happens when communities come together. Through dedicated volunteers and compassionate action, we're transforming lives across Bangalore.
          </motion.p>
        </div>
      </Section>

      {/* Programs Grid */}
      <Section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Focused initiatives creating measurable impact in education, healthcare, and community development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Program Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img 
                        src={program.image} 
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          // Fallback if image not found
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className={`hidden w-full h-full ${program.color} flex items-center justify-center`}>
                        <program.icon className="w-20 h-20 text-white opacity-50" strokeWidth={1.5} />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <program.icon className="w-9 h-9 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-2xl font-black mb-4">{program.title}</h3>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {program.description}
                      </p>
                      <div className="flex items-center text-primary font-bold">
                        <IconCircleCheck className="w-5 h-5 mr-2" />
                        {program.impact}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="font-bold">
              <Link to="/programs">
                View All Programs
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Volunteer CTA - Split Section */}
      <Section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative h-96 md:h-auto bg-gradient-to-br from-secondary to-accent overflow-hidden">
            {/* Volunteer Photo */}
            <img 
              src="/images/volunteers/team-action.jpg" 
              alt="Team Kavach Volunteers"
              className="absolute inset-0 w-full h-full object-cover opacity-70"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-12 bg-gradient-to-br from-secondary/80 to-accent/80">
              <div className="text-center text-white">
                <IconUsers className="w-32 h-32 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
                <p className="text-3xl font-black">Join Our Community</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-12 md:p-16 flex items-center">
            <div>
              <h2 className="mb-6 text-white">
                Care Starts With
                <br />
                A Volunteer
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Every volunteer brings unique skills and passion. Together, we create ripples of positive change across Bangalore.
              </p>
              <Button asChild size="lg" variant="secondary" className="font-bold">
                <Link to="/get-involved">
                  Become a Volunteer
                  <IconArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Instagram Gallery - Horizontal Scrolling Carousel */}
      <Section className="py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 mb-6"
            >
              <IconBrandInstagram className="w-6 h-6" />
              <span className="font-black uppercase tracking-wide">Live from Instagram</span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              See Our Impact In Action
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-4">
              Real stories. Real people. Real change happening every day.
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-semibold">
              ← Swipe to see more posts →
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-600 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-red-500 to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Instagram Feed */}
          <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8">
            <div className="flex gap-4 sm:gap-6 pb-8 w-max">
              {instagramUrls.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[450px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-white">
                    <InstagramEmbed 
                      url={url} 
                      width="100%"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 px-4">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-black text-lg px-10 py-7 shadow-2xl hover:shadow-white/50 transition-all">
            <a href="https://www.instagram.com/teamkavach/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <IconBrandInstagram className="w-6 h-6" />
              Follow @teamkavach
            </a>
          </Button>
        </div>

        {/* Custom Scrollbar Hide */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </Section>

      {/* Final CTA */}
      <Section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <IconHeart className="w-16 h-16 mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-white mb-6">
            Are You Ready
            <br />
            To Make A Difference?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Every action counts. Every volunteer matters. Every life touched creates a ripple.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-10 h-14 font-bold">
              <Link to="/get-involved">Start Volunteering</Link>
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
