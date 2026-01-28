import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Building2, LayoutGrid, List, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { works, categories, Work } from "../data/worksData";

type ViewMode = "grid" | "list";

export function Works() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  // Load view preference from localStorage
  useEffect(() => {
    const savedView = localStorage.getItem("worksViewMode") as ViewMode;
    if (savedView) {
      setViewMode(savedView);
    }
  }, []);

  // Save view preference to localStorage
  const handleViewChange = (mode: ViewMode) => {
    setViewMode(mode);
    localStorage.setItem("worksViewMode", mode);
  };

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((w) => w.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Production-ready systems built at{" "}
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              Cybomb Technologies
            </span>
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        {/* Controls Row: Categories + View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/30"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-amber-500 dark:hover:border-amber-400 hover:shadow-md"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 p-1.5 bg-gray-100 dark:bg-gray-800 rounded-xl">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleViewChange("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                viewMode === "grid"
                  ? "bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleViewChange("list")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                viewMode === "list"
                  ? "bg-white dark:bg-gray-700 text-amber-600 dark:text-amber-400 shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">List</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Works Display */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" ? (
            <GridView works={filteredWorks} />
          ) : (
            <ListView works={filteredWorks} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Grid View Component
function GridView({ works }: { works: Work[] }) {
  return (
    <motion.div
      key="grid"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
    >
      {works.map((work, index) => (
        <motion.div
          key={work.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
        >
          <Link to={`/works/${work.slug}`}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative h-full p-6 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border border-gray-100 dark:border-gray-700/50 hover:shadow-2xl hover:border-amber-500/30 dark:hover:border-amber-400/30 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Category Badge */}
              <div className="relative mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300 border border-amber-200/50 dark:border-amber-700/50">
                  {work.category}
                </span>
              </div>

              {/* Title & Role */}
              <div className="relative mb-4">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  {work.title}
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm font-medium text-purple-600 dark:text-purple-400">
                  {work.role}
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <Building2 className="w-3 h-3" />
                  <span>{work.company}</span>
                </div>
              </div>

              {/* Tech Stack Preview */}
              <div className="relative mb-6">
                <div className="flex flex-wrap gap-2">
                  {work.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {work.techStack.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                      +{work.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="relative flex items-center text-sm font-semibold text-amber-600 dark:text-amber-400 group-hover:gap-3 gap-2 transition-all">
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

// List View Component
function ListView({ works }: { works: Work[] }) {
  return (
    <motion.div
      key="list"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 max-w-4xl mx-auto"
    >
      {works.map((work, index) => (
        <motion.div
          key={work.slug}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + index * 0.05 }}
        >
          <Link to={`/works/${work.slug}`}>
            <motion.div
              whileHover={{ x: 8, scale: 1.01 }}
              className="group relative p-5 rounded-xl bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-md border border-gray-100 dark:border-gray-700/50 hover:shadow-xl hover:border-amber-500/30 dark:hover:border-amber-400/30 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Left: Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {work.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 text-amber-700 dark:text-amber-300">
                      {work.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="font-medium text-purple-600 dark:text-purple-400">{work.role}</span>
                    <span className="mx-2">•</span>
                    <span>{work.company}</span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {work.techStack.length > 5 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                        +{work.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 whitespace-nowrap group-hover:gap-3 transition-all">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
