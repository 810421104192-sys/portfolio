"use client";

import { motion } from 'framer-motion';
import { Calendar, Building } from 'lucide-react';
import { data } from '@/data/data';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">My professional journey and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Horizontal Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative ${index % 2 === 1 ? 'lg:mt-16' : ''}`}
              >
                {/* Timeline Node (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2 z-10">
                  <div className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden bg-white">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 h-full"
                >
                  {/* Mobile Logo */}
                  <div className="lg:hidden flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600 mr-4">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                    </div>
                  </div>

                  {/* Desktop Header */}
                  <div className="hidden lg:block mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-2">
                      <Building size={16} className="mr-2" />
                      {exp.company}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200 mb-4"
                  >
                    <Calendar size={14} className="mr-1" />
                    {exp.duration}
                  </motion.div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;