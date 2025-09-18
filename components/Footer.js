"use client";

import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { data } from '@/data/data';

const Footer = () => {
  const socialIcons = {
    linkedin: <Linkedin size={20} />,
    github: <Github size={20} />,
    gmail: <Mail size={20} />
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Name/Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            {data.bio.name}
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-6">
            {Object.entries(data.footer.social).map(([platform, url]) => (
              <motion.a
                key={platform}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors duration-300 group"
              >
                <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {socialIcons[platform]}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            {['Hero', 'Education', 'Experience', 'Skills', 'Certifications', 'Projects', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05, color: '#60A5FA' }}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </motion.button>
            ))}
          </motion.nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm space-y-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2"
            >
              {data.footer.text}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-1 text-xs"
            >
              Built with <Heart size={14} className="text-red-500" /> using Next.js, Tailwind CSS & Framer Motion
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;