import { motion } from 'motion/react';
import { Briefcase, Rocket, TrendingUp } from 'lucide-react';
import { Timeline } from '../components/Timeline';
import { FloatingCard } from '../components/FloatingCard';
import { experienceTimeline } from '../data/personalData';

export function Experience() {
  const highlights = [
    {
      icon: Briefcase,
      title: 'Professional Growth',
      description: 'From frontend intern to full-stack developer in 6 months',
      color: 'blue',
    },
    {
      icon: Rocket,
      title: 'Production Impact',
      description: '5+ applications deployed and serving users',
      color: 'purple',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Mastered 5+ technologies and frameworks',
      color: 'pink',
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
              Professional Experience
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              My journey from frontend development to full-stack engineering
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br from-${highlight.color}-500 to-${highlight.color}-600 mb-4`}
                >
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
              Career Journey
            </h2>
            <Timeline items={experienceTimeline} />
          </motion.div>

          {/* Skills Gained */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <FloatingCard>
              <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                  Core Skills Developed
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-amber-600 dark:text-amber-400">
                      Technical Skills
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'Full-stack development (React, Node.js, PostgreSQL)',
                        'Workflow automation with n8n',
                        'Multi-tenant architecture design',
                        'Role-based access control (RBAC)',
                        'AI/ML integration',
                        'RESTful API development',
                      ].map((skill, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-amber-600 dark:text-amber-400 mr-2">▸</span>
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
                      Professional Skills
                    </h3>
                    <ul className="space-y-2">
                      {[
                        'End-to-end project ownership',
                        'Agile development methodologies',
                        'Code review and quality assurance',
                        'Technical documentation',
                        'Cross-functional collaboration',
                        'Problem-solving and debugging',
                      ].map((skill, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-purple-600 dark:text-purple-400 mr-2">▸</span>
                          <span>{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">
              Building Enterprise Solutions with Modern Technologies
            </h3>
            <p className="text-lg text-blue-100 mb-6">
              Passionate about creating scalable, production-ready systems that solve real business
              problems
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                ⚡ Fast Learner
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🎯 Detail-Oriented
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🚀 Results-Driven
              </div>
              <div className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
                🤝 Team Player
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
