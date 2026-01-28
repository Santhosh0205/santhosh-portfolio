import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  name: string;
  level: number;
  category: string;
  description?: string;
  delay?: number;
}

export function SkillCard({
  icon: Icon,
  name,
  level,
  category,
  description,
  delay = 0,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon and Category */}
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
            {category}
          </span>
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          {name}
        </h3>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Proficiency</span>
            <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              {level}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.3, duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"
            />
          </div>
        </div>

        {/* Description (shown on hover) */}
        {description && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: 'auto' }}
            className="text-sm text-gray-600 dark:text-gray-400 overflow-hidden"
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
