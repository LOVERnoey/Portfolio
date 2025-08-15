import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
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

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
