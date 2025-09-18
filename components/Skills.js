"use client";

import { motion } from 'framer-motion';
import { data } from '@/data/data';

const Skills = () => {
  const Marquee = ({ items, direction = 'left', speed = 'normal' }) => {
    const animationDuration = speed === 'slow' ? 25 : speed === 'fast' ? 10 : 15;
    
    return (
      <div className="relative overflow-hidden py-4">
        <motion.div
          animate={{
            x: direction === 'left' ? [0, -1920] : [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: animationDuration,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...items, ...items, ...items].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 flex-shrink-0"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-8 h-8 object-cover rounded"
              />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Cloud Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-blue-600 dark:text-blue-400">
              Cloud Platforms
            </h3>
            <Marquee items={data.skills.Cloud} direction="right" speed="normal" />
          </motion.div>

          {/* DevOps Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-purple-600 dark:text-purple-400">
              DevOps & Infrastructure
            </h3>
            <Marquee items={data.skills.DevOps} direction="left" speed="fast" />
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-green-600 dark:text-green-400">
              Development
            </h3>
            <Marquee items={data.skills.Development} direction="right" speed="slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;