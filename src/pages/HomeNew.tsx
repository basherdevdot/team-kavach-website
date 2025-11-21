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
  IconCircleCheck
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
    { icon: IconHeart, value: '2,000+', label: 'Lives Impacted' },
    { icon: IconCalendar, value: '50+', label: 'Events' },
  ];

  const programs = [
    {
      icon: IconSchool,
      title: 'Education',
      description: 'Quality education and mentorship for underprivileged children',
      impact: '500+ students',
      color: 'bg-blue-500',
      image: '/images/programs/education.jpg'
    },
    {
      icon: IconMedicalCross,
      title: 'Healthcare',
      description: 'Free health camps and medical assistance for communities',
      impact: '30+ health camps',
      color: 'bg-red-500',
      image: '/images/programs/healthcare.jpg'
    },
    {
      icon: IconHeartHandshake,
      title: 'Community',
      description: 'Building stronger communities through social initiatives',
      impact: '15+ communities',
      color: 'bg-green-500',
      image: '/images/programs/community.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - MAD Style with Background Image Effect */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Background Image - Add your photo here! */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('/images/hero-volunteers.jpg')",
            backgroundPosition: 'center',
          }}
        />
        
        {/* Fallback Pattern if no image */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8"
          >
            <IconSparkles className="w-5 h-5" />
            <span className="text-sm font-bold">Building Communities Since 2022</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white mb-8 max-w-6xl mx-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
          >
            We're Building
            <br />
            <span className="text-primary">Caring Communities</span>
            <br />
            in Bangalore
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Together we create lasting impact through education, healthcare, and community development
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="text-base px-8 h-14 font-bold text-lg shadow-2xl">
              <Link to="/get-involved">
                Join Us Today
                <IconArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="text-base px-8 h-14 font-bold text-lg border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground shadow-2xl"
            >
              <Link to="/programs">Explore Programs</Link>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1.5 h-3 bg-white rounded-full" />
            </motion.div>
          </motion.div>
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
                  className="flex-shrink-0 w-auto max-w-[500px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-white">
                    <InstagramEmbed 
                      url={url} 
                      width={Math.min(450, window.innerWidth - 40)}
                      captioned={false}
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
