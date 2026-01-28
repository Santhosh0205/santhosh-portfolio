import { motion } from 'motion/react';
import { Code, Cpu, Layers, Rocket, Award, BookOpen, Heart } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { SkillCard } from '../components/SkillCard';
import { FloatingCard } from '../components/FloatingCard';
import {
  personalInfo,
  skillsData,
  experienceTimeline,
  educationTimeline,
  achievements,
  interests,
} from '../data/personalData';

export function About() {
  const coreCompetencies = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'End-to-end ownership from frontend to backend, building scalable and maintainable systems.',
    },
    {
      icon: Cpu,
      title: 'Automation-First',
      description:
        'Leveraging n8n and custom workflows to automate processes and increase efficiency.',
    },
    {
      icon: Layers,
      title: 'System Architecture',
      description:
        'Designing robust, production-ready architectures with proper separation of concerns.',
    },
    {
      icon: Rocket,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with practical, well-thought-out solutions.',
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate developer dedicated to crafting exceptional digital experiences through
              clean code and innovative solutions
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <FloatingCard>
              <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                  My Journey
                </h2>
                <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    I'm a{' '}
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      Full-Stack Developer
                    </span>{' '}
                    at{' '}
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      {personalInfo.company}
                    </span>
                    , specializing in building production-level systems that solve real-world
                    problems. My journey in software development started with a curiosity about how
                    things work and evolved into a passion for creating solutions that make a
                    difference.
                  </p>
                  <p>
                    My approach focuses on{' '}
                    <span className="font-semibold">end-to-end ownership</span> — from
                    conceptualizing the architecture to implementing the frontend, backend, and
                    automation workflows. I don't just write code; I build systems that scale,
                    perform, and deliver real business value.
                  </p>
                  <p>
                    With experience across diverse projects — from SEO audit tools to HRMS platforms
                    to CRM systems — I thrive on creating solutions that are both technically sound
                    and business-focused.{' '}
                    <span className="font-semibold">
                      No fluff, no templates, just production-ready code.
                    </span>
                  </p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Core Competencies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCompetencies.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                >
                  <skill.icon className="w-10 h-10 mb-4 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Technical Skills
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to build modern,
              scalable applications
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsData.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* Professional Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              Professional Journey
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              My career path and the experiences that shaped my expertise
            </p>
            <Timeline items={experienceTimeline} />
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              <BookOpen className="w-8 h-8 inline-block mr-2 mb-1" />
              Education
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Academic foundation that built my technical expertise
            </p>
            <Timeline items={educationTimeline} />
          </motion.div>

          {/* Achievements & Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              <Award className="w-8 h-8 inline-block mr-2 mb-1" />
              Achievements & Certifications
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Continuous learning and professional development milestones
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-amber-50/50 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 shadow-lg hover:shadow-2xl transition-all"
                >
                  <achievement.icon className="w-12 h-12 mb-4 text-amber-600 dark:text-amber-400 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white text-center">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-1">
                    {achievement.issuer}
                  </p>
                  <p className="text-xs text-amber-600 dark:text-amber-400 text-center font-medium">
                    {achievement.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personal Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">
              <Heart className="w-8 h-8 inline-block mr-2 mb-1" />
              Beyond Code
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              What drives me outside of professional development
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all"
                >
                  <interest.icon className="w-10 h-10 mb-4 text-teal-600 dark:text-teal-400" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {interest.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FloatingCard>
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50/50 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 shadow-2xl">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  Development Philosophy
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1 text-2xl">▸</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      <strong>Scalability first:</strong> Build systems that grow with your
                      business, not against it
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1 text-2xl">▸</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      <strong>Automation mindset:</strong> Eliminate repetitive tasks through smart
                      workflows and intelligent systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1 text-2xl">▸</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      <strong>Clean architecture:</strong> Maintainable code with proper separation
                      of concerns and clear documentation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1 text-2xl">▸</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      <strong>Business impact:</strong> Technology serves the product, not the other
                      way around — always focus on user value
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1 text-2xl">▸</span>
                    <span className="text-lg text-gray-700 dark:text-gray-300">
                      <strong>Continuous learning:</strong> Stay updated with latest technologies
                      while mastering the fundamentals
                    </span>
                  </li>
                </ul>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}