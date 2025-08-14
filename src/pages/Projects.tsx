import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black overflow-hidden relative pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#38761d] rounded-full opacity-30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Page Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-black text-white mb-6"
            whileHover={{ 
              color: "#38761d",
              scale: 1.02
            }}
          >
            My Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A collection of games, web applications, and software projects I've developed
          </motion.p>
          
          {/* Decorative line */}
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-[#1c5400] to-[#38761d] mx-auto rounded-full mt-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 128, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: 0.6,
                staggerChildren: 0.15
              }
            }
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 60,
                  scale: 0.8
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{
                y: -15,
                scale: 1.02
              }}
              transition={{
                y: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Full width footer */}
      <motion.footer 
        className="w-full bg-black mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
      >
        {/* Full width border line */}
        <motion.div 
          className="w-full h-px bg-[#38761d]/30"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Footer content with padding */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
          <motion.div 
            className="space-y-6"
            whileHover={{ scale: 1.02 }}
          >
            {/* GitHub Logo */}
            <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <motion.div
                className="p-4 bg-gradient-to-br from-[#1c5400]/30 to-[#38761d]/20 border border-[#38761d] rounded-full"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(56, 118, 29, 0.4)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={32} className="text-[#38761d]" />
              </motion.div>
            </motion.div>
            
            <p className="text-white/80 text-lg">
              © 2025 LOVERnoey. All rights reserved
            </p>
            <p className="text-[#38761d] font-semibold">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <motion.div 
              className="flex justify-center space-x-6 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/LOVERnoey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#38761d] transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow me on GitHub
              </motion.a>
              <motion.a
                href="https://lovernoey.itch.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#38761d] transition-colors duration-300 font-medium"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Follow me on itch.io
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Projects;
