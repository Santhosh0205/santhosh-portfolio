import { motion } from 'motion/react';
import { Download, Eye, Briefcase, Code, Award, Mail, FileText, Star } from 'lucide-react';
import { FloatingCard } from '../components/FloatingCard';

export function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/SANTHOSH K.pdf';
    link.download = 'Santhosh_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const quickFacts = [
    { icon: Briefcase, label: 'Current Role', value: 'Full-Stack Developer' },
    { icon: Code, label: 'Primary Stack', value: 'React, Node.js, PostgreSQL' },
    { icon: Award, label: 'Specialization', value: 'Automation & System Architecture' },
    { icon: Star, label: 'Key Strength', value: 'End-to-End Ownership' },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Download my complete professional resume
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          {/* Download Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <FloatingCard>
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center shadow-lg"
                  >
                    <FileText className="w-10 h-10 text-white" />
                  </motion.div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    Professional Resume
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprehensive overview of my experience, skills, and projects
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 transition-all"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </motion.button>
                  
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-gray-700 text-center"
            >
              <Briefcase className="w-10 h-10 mx-auto mb-3 text-amber-600 dark:text-amber-400" />
              <div className="text-3xl font-bold mb-2 text-amber-600 dark:text-amber-400">14+</div>
              <div className="text-gray-700 dark:text-gray-300">Months Experience</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 border border-purple-200 dark:border-gray-700 text-center"
            >
              <Code className="w-10 h-10 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
              <div className="text-3xl font-bold mb-2 text-purple-600 dark:text-purple-400">
                5+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Projects Delivered</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-800 dark:to-gray-900 border border-pink-200 dark:border-gray-700 text-center"
            >
              <Award className="w-10 h-10 mx-auto mb-3 text-pink-600 dark:text-pink-400" />
              <div className="text-3xl font-bold mb-2 text-pink-600 dark:text-pink-400">5+</div>
              <div className="text-gray-700 dark:text-gray-300">Technologies</div>
            </motion.div>
          </motion.div>

          {/* Quick Facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Quick Facts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{fact.label}</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{fact.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <FloatingCard>
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Professional Summary
                </h2>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    Full-Stack Developer at{' '}
                    <span className="font-semibold text-amber-600 dark:text-amber-400">
                      Cybomb Technologies
                    </span>{' '}
                    with expertise in building production-ready systems from concept to deployment.
                    Started as a frontend developer intern and rapidly progressed to full-stack
                    development role.
                  </p>
                  <p className="leading-relaxed font-semibold text-gray-900 dark:text-white">
                    Specialized in:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1">▸</span>
                      <span>
                        <strong>Full-Stack Development:</strong> React, Node.js, PostgreSQL, and
                        modern web technologies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1">▸</span>
                      <span>
                        <strong>Workflow Automation:</strong> n8n automation, API integrations, and
                        process optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1">▸</span>
                      <span>
                        <strong>System Architecture:</strong> Multi-tenant systems, RBAC, and
                        scalable architectures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 dark:text-amber-400 mr-3 mt-1">▸</span>
                      <span>
                        <strong>AI Integration:</strong> Implementing intelligent features using
                        AI/ML technologies
                      </span>
                    </li>
                  </ul>
                  <p className="leading-relaxed mt-6">
                    Track record of delivering enterprise-grade applications including HRMS
                    platforms, CRM systems, billing tools, and SEO automation platforms. Strong
                    focus on code quality, scalability, and business impact.
                  </p>
                </div>
              </div>
            </FloatingCard>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="p-8 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-blue-100 mb-6">
              Open to full-time opportunities, freelance projects, and collaborations
            </p>
            <motion.a
              href="mailto:santhoshkrish0205@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-amber-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
