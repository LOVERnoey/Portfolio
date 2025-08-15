import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import Footer from '../components/Footer';
import { Github, ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Project Not Found
          </motion.h2>
          <motion.button 
            onClick={() => navigate('/projects')}
            className="px-8 py-4 bg-[#1c5400] text-white rounded-xl hover:bg-[#38761d] transition-all duration-300 font-semibold border-2 border-transparent hover:border-[#38761d]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px #38761d"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Projects
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Enhanced animation variants
  
  return (
    <div 
      className="min-h-screen bg-black overflow-hidden relative"
    >
      {/* Animated background elements like Home page */}
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

      {/* Header */}
      <motion.div 
        className="bg-[#1c5400] py-8 px-4 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.button
            onClick={() => navigate('/projects')}
            className="group flex items-center gap-3 text-white bg-black/50 backdrop-blur-sm hover:bg-[#38761d] transition-all duration-300 mb-8 px-6 py-3 rounded-full border-2 border-[#38761d] hover:border-white shadow-lg hover:shadow-xl font-semibold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            whileHover={{ 
              x: -8,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="p-1 rounded-full bg-[#38761d] group-hover:bg-white transition-colors duration-300"
              whileHover={{ rotate: -360 }}
              transition={{ duration: 0.6 }}
            >
              <ArrowLeft size={18} className="text-white group-hover:text-[#38761d] transition-colors duration-300" />
            </motion.div>
            <span className="text-sm tracking-wide">Back to Projects</span>
            <motion.div
              className="w-0 h-0.5 bg-white group-hover:w-4 transition-all duration-300"
              initial={{ width: 0 }}
            />
          </motion.button>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            {project.title}
          </motion.h1>
          
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-[#1c5400] to-[#38761d] rounded-full border-2 border-[#38761d] shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px #38761d",
                background: "linear-gradient(45deg, #38761d, #1c5400)"
              }}
              animate={{
                boxShadow: [
                  "0 0 10px rgba(56, 118, 29, 0.3)",
                  "0 0 20px rgba(56, 118, 29, 0.5)",
                  "0 0 10px rgba(56, 118, 29, 0.3)"
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.div
                className="w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-white font-bold text-lg tracking-wide">
                {project.position}
              </span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl hover:bg-[#38761d] transition-all duration-300 border-2 border-transparent hover:border-[#38761d]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px #38761d"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
                <span>View Code</span>
              </motion.a>
            )}
            
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#38761d] text-white rounded-xl hover:bg-black transition-all duration-300 border-2 border-transparent hover:border-[#1c5400] relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  boxShadow: [
                    "0 0 0 0 rgba(56, 118, 29, 0)",
                    "0 0 0 10px rgba(56, 118, 29, 0.3)",
                    "0 0 0 20px rgba(56, 118, 29, 0)",
                  ]
                }}
                transition={{ 
                  delay: 0.5, 
                  duration: 0.4,
                  boxShadow: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px #1c5400"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ExternalLink size={20} />
                </motion.div>
                <motion.span
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Live
                </motion.span>
                
                {/* Wave effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 2
                  }}
                />
              </motion.a>
            )}
          </motion.div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
        {/* Project Image */}
        <motion.div 
          className="mb-20 group"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          whileHover={{ 
            scale: 1.03,
            y: -8
          }}
        >
          <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl">
            {/* Background glow effect */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#1c5400] via-[#38761d] to-[#1c5400] rounded-3xl opacity-30 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Main image container */}
            <motion.div 
              className="relative bg-gradient-to-br from-[#1c5400] to-[#38761d] p-1 rounded-2xl"
              whileHover={{
                background: "linear-gradient(135deg, #38761d, #1c5400, #38761d)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl"
                style={{ 
                  filter: "brightness(1.05) contrast(1.1) saturate(1.1)"
                }}
                animate={{
                  filter: [
                    "brightness(1.05) contrast(1.1) saturate(1.1)",
                    "brightness(1.1) contrast(1.15) saturate(1.15)",
                    "brightness(1.05) contrast(1.1) saturate(1.1)"
                  ]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.05,
                  filter: "brightness(1.15) contrast(1.2) saturate(1.2)"
                }}
              />
              
              {/* Animated corner accents */}
              <motion.div
                className="absolute top-2 left-2 w-6 h-6 border-l-4 border-t-4 border-[#38761d] rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.2, borderColor: "#ffffff" }}
              />
              <motion.div
                className="absolute top-2 right-2 w-6 h-6 border-r-4 border-t-4 border-[#38761d] rounded-tr-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                whileHover={{ scale: 1.2, borderColor: "#ffffff" }}
              />
              <motion.div
                className="absolute bottom-2 left-2 w-6 h-6 border-l-4 border-b-4 border-[#38761d] rounded-bl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.2, borderColor: "#ffffff" }}
              />
              <motion.div
                className="absolute bottom-2 right-2 w-6 h-6 border-r-4 border-b-4 border-[#38761d] rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.2, borderColor: "#ffffff" }}
              />
            </motion.div>
            
            {/* Hover overlay with project info */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl flex items-end justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                className="p-6 text-center"
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.p 
                  className="text-white font-semibold text-lg mb-2"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {project.title}
                </motion.p>
                <motion.p 
                  className="text-[#38761d] font-medium"
                  animate={{
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Click to explore details
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Animated border shimmer */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(45deg, transparent 30%, rgba(56, 118, 29, 0.3) 50%, transparent 70%)",
                backgroundSize: "200% 200%"
              }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <motion.section 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl font-black text-white mb-8"
                whileHover={{ 
                  color: "#38761d",
                  scale: 1.02
                }}
              >
                About This Project
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                {project.detailedDescription}
              </motion.p>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl font-black text-white mb-8"
                whileHover={{ 
                  color: "#38761d",
                  scale: 1.02
                }}
              >
                Key Features
              </motion.h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -30, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 1.5 + index * 0.05, 
                      duration: 0.4,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      x: 10,
                      scale: 1.02
                    }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 1.5 + index * 0.05, duration: 0.3 }}
                    >
                      <CheckCircle className="text-[#38761d] mt-1 flex-shrink-0" size={20} />
                    </motion.div>
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <motion.h3 
                className="text-2xl font-black text-white mb-8"
                whileHover={{ 
                  color: "#38761d",
                  scale: 1.02
                }}
              >
                Technologies Used
              </motion.h3>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="px-4 py-3 bg-[#1c5400] text-white rounded-xl font-semibold border-2 border-[#38761d] shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 1.3 + index * 0.1, 
                      duration: 0.4
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px #38761d"
                    }}
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProjectDetail;
