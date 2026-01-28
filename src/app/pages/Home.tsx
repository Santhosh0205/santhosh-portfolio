import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { AnimatedText } from '../components/AnimatedText';
import { SkillCard } from '../components/SkillCard';
import { FloatingCard } from '../components/FloatingCard';
import { TechBanner } from '../components/TechBanner';
import { personalInfo, skillsData, stats } from '../data/personalData';
import { useState, useEffect, Suspense, lazy } from 'react';

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

export function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Animated counter for stats
  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const target = parseInt(stat.value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = target;
            return newCounters;
          });
          clearInterval(timers[index]);
        } else {
          setCounters((prev) => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }
      }, duration / steps);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-20 min-h-screen">
        {/* Spline 3D Background */}
        <div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ zIndex: 0 }}
        >
          <Suspense fallback={
            <div className="w-full h-full bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
          }>
            <div style={{ width: '100vw', height: '100vh' }}>
              <Spline 
                scene="https://prod.spline.design/wOnT7XiuEPJn5bVQ/scene.splinecode"
              />
            </div>
          </Suspense>
          {/* Overlay for better text readability */}
          <div 
            className="absolute inset-0 bg-black/20 pointer-events-none" 
            style={{ zIndex: 1 }} 
          />
        </div>

        <div className="container mx-auto px-4 relative" style={{ zIndex: 10 }}>
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left md:ml-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Greeting */}
              <motion.p
                className="text-lg md:text-xl text-amber-400 font-medium mb-4"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                👋 Hello, I'm {personalInfo.name}
              </motion.p>

              {/* Animated Title */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                style={{ textShadow: '0 4px 20px rgba(0,0,0,0.9)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-white">
                  I'm a{' '}
                </span>
                <br />
                <AnimatedText
                  texts={personalInfo.roles}
                  className="text-amber-400"
                />
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-100 mb-4"
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building Production-Ready Systems
              </motion.p>

              <motion.p
                className="text-base text-gray-200 mb-6 max-w-xl"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* Location & Status */}
              <motion.div
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-6 mb-6 text-sm text-gray-200"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span>{personalInfo.availability}</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center md:justify-start gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://github.com/Santhosh0205"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/santhosh-krishnamoorhty-b8bab724a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/works">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-medium flex items-center gap-2 shadow-lg shadow-amber-500/30 transition-all"
                >
                  View Works
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link to="/resume">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-stone-300 dark:border-stone-700 hover:border-amber-600 dark:hover:border-amber-400 text-stone-900 dark:text-white rounded-lg font-medium flex items-center gap-2 transition-colors backdrop-blur-sm"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - overlaps to hide Spline watermark */}
      <section className="py-12 bg-stone-900 relative -mt-20" style={{ zIndex: 20 }}>
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/10 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all text-center"
              >
                <stat.icon className="w-8 h-8 mb-4 text-amber-400 mx-auto" />
                <div className="text-3xl font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Tech Tools Banner */}
      <TechBanner />

      {/* Featured Skills Section */}
      <section className="py-20 bg-stone-50 dark:bg-stone-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized skills and technologies I use to build exceptional digital experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skillsData.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Quick Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FloatingCard>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-stone-50 to-amber-50/50 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 shadow-2xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  Why Work With Me?
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I don't just write code — I build <strong>production-ready systems</strong> that
                    solve real business problems. With a focus on{' '}
                    <strong>clean architecture</strong>, <strong>scalability</strong>, and{' '}
                    <strong>automation</strong>, I deliver solutions that stand the test of time.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Currently at <strong className="text-amber-600 dark:text-amber-400">{personalInfo.company}</strong>, 
                    I've built everything from CRM platforms to HRMS solutions, always with an 
                    eye on <strong>user experience</strong> and <strong>business impact</strong>.
                  </p>
                  <Link to="/about">
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="mt-6 text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Learn more about my journey
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </FloatingCard>
          </div>
        </div>
      </section>
    </div>
  );
}
