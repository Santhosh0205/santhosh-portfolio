import { motion } from 'motion/react';
import { Code, Database, Zap, Wrench, Cloud, Shield, Sparkles } from 'lucide-react';
import { FloatingCard } from '../components/FloatingCard';

interface Technology {
  name: string;
  level: 'expert' | 'proficient' | 'familiar';
  yearsOfExperience?: string;
}

interface TechCategory {
  title: string;
  icon: typeof Code;
  color: string;
  technologies: Technology[];
}

export function TechStack() {
  const techStack: TechCategory[] = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'blue',
      technologies: [
        { name: 'React', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'JavaScript/TypeScript', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Tailwind CSS', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Motion/Framer Motion', level: 'proficient', yearsOfExperience: '6 months' },
        { name: 'HTML5/CSS3', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Next.js', level: 'proficient', yearsOfExperience: '6 months' },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'purple',
      technologies: [
        { name: 'Node.js', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Express.js', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'RESTful APIs', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'WebSocket', level: 'proficient', yearsOfExperience: '6 months' },
        { name: 'Microservices', level: 'proficient', yearsOfExperience: '6 months' },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'green',
      technologies: [
        { name: 'PostgreSQL', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'MongoDB', level: 'proficient', yearsOfExperience: '8 months' },
        { name: 'Redis', level: 'proficient', yearsOfExperience: '6 months' },
        { name: 'Elasticsearch', level: 'familiar', yearsOfExperience: '3 months' },
      ],
    },
    {
      title: 'Automation',
      icon: Zap,
      color: 'yellow',
      technologies: [
        { name: 'n8n', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Workflow Automation', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'API Integration', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Webhooks', level: 'expert', yearsOfExperience: '1+ year' },
      ],
    },
    {
      title: 'Tools & DevOps',
      icon: Wrench,
      color: 'red',
      technologies: [
        { name: 'Git/GitHub', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Docker', level: 'proficient', yearsOfExperience: '6 months' },
        { name: 'CI/CD', level: 'proficient', yearsOfExperience: '6 months' },
        { name: 'Linux', level: 'proficient', yearsOfExperience: '8 months' },
        { name: 'Nginx', level: 'familiar', yearsOfExperience: '4 months' },
      ],
    },
    {
      title: 'Architecture & Security',
      icon: Shield,
      color: 'indigo',
      technologies: [
        { name: 'RBAC (Role-Based Access)', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'Multi-tenant Architecture', level: 'expert', yearsOfExperience: '8 months' },
        { name: 'OAuth/JWT', level: 'expert', yearsOfExperience: '1+ year' },
        { name: 'System Design', level: 'proficient', yearsOfExperience: '1+ year' },
        { name: 'Security Best Practices', level: 'expert', yearsOfExperience: '1+ year' },
      ],
    },
  ];

  const recentlyLearning = [
    'Advanced React Patterns',
    'GraphQL',
    'Kubernetes',
    'AWS Services',
    'Performance Optimization',
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700';
      case 'proficient':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-700';
      case 'familiar':
        return 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700';
      default:
        return '';
    }
  };

  const getLevelPercentage = (level: string) => {
    switch (level) {
      case 'expert':
        return 95;
      case 'proficient':
        return 75;
      case 'familiar':
        return 50;
      default:
        return 0;
    }
  };

  const getCategoryColor = (color: string) => {
    const colors: Record<string, string> = {
      blue: 'from-sky-500 to-cyan-500',
      purple: 'from-violet-500 to-purple-500',
      green: 'from-emerald-500 to-teal-500',
      yellow: 'from-amber-500 to-orange-500',
      red: 'from-rose-500 to-red-500',
      indigo: 'from-indigo-500 to-blue-500',
    };
    return colors[color] || colors.blue;
  };

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
              Tech Stack
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Technologies and tools I use to build production-ready systems
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Expert (90%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Proficient (70%+)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Familiar (50%+)</span>
            </div>
          </motion.div>

          {/* Tech Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <FloatingCard className="h-full">
                  <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 h-full">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(category.color)} shadow-lg`}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {category.title}
                      </h2>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + categoryIndex * 0.1 + techIndex * 0.05 }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {tech.name}
                            </span>
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(tech.level)}`}
                            >
                              {tech.level.charAt(0).toUpperCase() + tech.level.slice(1)}
                            </span>
                          </div>
                          {/* Progress Bar */}
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${getLevelPercentage(tech.level)}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.5 + techIndex * 0.05, duration: 0.8 }}
                              className={`h-full bg-gradient-to-r ${getCategoryColor(category.color)} rounded-full`}
                            />
                          </div>
                          {tech.yearsOfExperience && (
                            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                              {tech.yearsOfExperience}
                            </p>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </FloatingCard>
              </motion.div>
            ))}
          </div>

          {/* Recently Learning Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50/50 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700">
              <div className="flex items-center gap-3 mb-6">
                
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Currently Learning
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {recentlyLearning.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white dark:bg-stone-800 border-2 border-amber-400 dark:border-amber-600 text-amber-700 dark:text-amber-300 font-medium shadow-md"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-amber-50/30 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 text-center">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">5+</div>
              <div className="text-gray-700 dark:text-gray-300">Technologies Mastered</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-teal-50/30 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 text-center">
              <div className="text-4xl font-bold text-teal-600 dark:text-teal-400 mb-2">
                5+
              </div>
              <div className="text-gray-700 dark:text-gray-300">Production Projects</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-stone-50 to-rose-50/30 dark:from-stone-900 dark:to-stone-800 border border-stone-200 dark:border-stone-700 text-center">
              <div className="text-4xl font-bold text-rose-600 dark:text-rose-400 mb-2">14+</div>
              <div className="text-gray-700 dark:text-gray-300">Months of Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
