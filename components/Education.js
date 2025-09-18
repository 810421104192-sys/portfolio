"use client";

import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { data } from '@/data/data';

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">My academic journey and qualifications</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {data.education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start mb-12 last:mb-0"
            >
              {/* Timeline Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-900 shadow-lg overflow-hidden bg-white">
                  <img
                    src={edu.logo}
                    alt={edu.institute}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="ml-6 flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 dark:from-blue-900 dark:to-purple-900 dark:text-blue-200"
                  >
                    <Calendar size={14} className="mr-1" />
                    {edu.duration}
                  </motion.span>
                </div>

                <h4 className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                  {edu.institute}
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 dark:text-gray-400">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{edu.place}</span>
                  </div>
                  <div className="font-medium text-green-600 dark:text-green-400">
                    Grade: {edu.grade}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;