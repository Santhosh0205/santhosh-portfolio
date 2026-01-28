import { motion } from 'motion/react';

const techTools = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'n8n', 
  'Express', 'Tailwind', 'Docker', 'Redis', 'Next.js', 'Git',
  'REST API', 'WebSocket', 'OAuth', 'JWT', 'Linux', 'Nginx'
];

export function TechBanner() {
  // Duplicate the array to create seamless loop
  const duplicatedTools = [...techTools, ...techTools];

  return (
    <div className="relative overflow-hidden py-6 bg-gradient-to-r from-stone-100 via-stone-50 to-stone-100 dark:from-stone-900 dark:via-stone-800 dark:to-stone-900 border-y border-stone-200 dark:border-stone-700">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-stone-100 dark:from-stone-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-stone-100 dark:from-stone-900 to-transparent z-10" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {duplicatedTools.map((tool, index) => (
          <motion.div
            key={`${tool}-${index}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-600 shadow-sm"
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              boxShadow: '0 10px 30px rgba(217, 119, 6, 0.2)'
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" />
            <span className="text-sm font-medium text-stone-700 dark:text-stone-200">
              {tool}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
