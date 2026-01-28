import { motion } from "motion/react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  Clock,
  CheckCircle2,
  Lightbulb,
  Target,
  Rocket,
  Code2,
  Layers,
  TrendingUp,
  User,
  Sparkles,
} from "lucide-react";
import { works } from "../data/worksData";

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const work = works.find((w) => w.slug === slug);

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Work Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The case study you're looking for doesn't exist.
          </p>
          <Link
            to="/works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Works
          </Link>
        </div>
      </div>
    );
  }

  const { caseStudy } = work;

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate("/works")}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Works</span>
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 text-center"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-700/50">
              {work.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            {work.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <User className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="font-medium text-purple-600 dark:text-purple-400">
                {work.role}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
                <Building2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <span>{work.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <span>{caseStudy.duration}</span>
            </div>
          </div>

          {/* Visit Button */}
          {work.liveUrl && (
            <motion.a
              href={work.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all group"
            >
              <span>Visit Live Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          )}
        </motion.div>

        {/* Project Highlights Stats */}
        {caseStudy.highlights && caseStudy.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {caseStudy.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 shadow-lg text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {highlight.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20 dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40 border border-stone-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40">
                    <Sparkles className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Project Overview
                  </h2>
                </div>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy.overview}
                </p>
              </div>
            </div>
          </motion.section>

          {/* My Contributions Section */}
          {caseStudy.contributions && caseStudy.contributions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40">
                  <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  My Contributions
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {caseStudy.contributions.map((contribution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/50 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {contribution}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Challenges & Solutions Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Challenges */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-800/80 dark:to-gray-800/60 border border-red-100 dark:border-gray-700/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30">
                    <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Challenges Faced
                  </h3>
                </div>
                <ul className="space-y-4">
                  {caseStudy.challenges.map((challenge, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800/80 dark:to-gray-800/60 border border-green-100 dark:border-gray-700/50 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                    <Lightbulb className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Solutions Implemented
                  </h3>
                </div>
                <ul className="space-y-4">
                  {caseStudy.solutions.map((solution, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                      <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40">
                <Rocket className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Key Features
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {caseStudy.keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
                        <Layers className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Tech Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {work.techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/50 shadow-md hover:shadow-lg transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* Results & Impact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-green-50 via-emerald-50/50 to-teal-50/30 dark:from-green-900/20 dark:via-emerald-900/15 dark:to-teal-900/10 border border-green-200/50 dark:border-green-700/30 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-500/10 to-transparent rounded-full blur-2xl" />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-green-200 to-emerald-200 dark:from-green-900/50 dark:to-emerald-900/50">
                    <TrendingUp className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    Results & Impact
                  </h2>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="p-5 rounded-xl bg-white/80 dark:bg-gray-800/50 border border-green-200/50 dark:border-green-700/30 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600 dark:text-green-400" />
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {result}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {work.liveUrl && (
                <motion.a
                  href={work.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-xl font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl transition-all group"
                >
                  <span>Visit Live Project</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              )}
              <Link
                to="/works"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 text-gray-900 dark:text-white rounded-xl font-semibold shadow-md hover:shadow-lg transition-all group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Explore More Works
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
