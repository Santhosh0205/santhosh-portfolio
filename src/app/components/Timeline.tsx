import { motion } from 'motion/react';
import { Calendar, MapPin } from 'lucide-react';

export interface TimelineItem {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  achievements?: string[];
  logo?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 md:pl-0">
      {/* Vertical Line */}
      <div className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-orange-500 to-rose-400" />

      <div className="space-y-8 md:space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col`}
          >
            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
              className="absolute left-0 md:left-1/2 -ml-1.5 md:-ml-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-4 border-white dark:border-gray-950 shadow-lg z-10"
            />

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-4 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 md:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 backdrop-blur-lg"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold">
                      {item.organization}
                    </p>
                  </div>
                  {item.logo && (
                    <img
                      src={item.logo}
                      alt={item.organization}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                  )}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.period}</span>
                  </div>
                  {item.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>

                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-amber-500 mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
