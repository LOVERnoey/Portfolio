import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { 
  SiUnity,
  SiSharp,
  SiOpenjdk,
  SiFigma,
  SiGit,
  SiHtml5,
  SiPhp,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiBlender,
  SiReact,
  SiCss3,
  SiApache,
  SiArduino,
  SiJetbrains
} from 'react-icons/si';
import { 
  Palette,
  Code2,
  FileCode
} from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: "Unity 2D & 3D",
      category: "Game Development",
      icon: SiUnity
    },
    {
      name: "C#",
      category: "Programming",
      icon: SiSharp
    },
    {
      name: "Java",
      category: "Programming",
      icon: SiOpenjdk
    },
    {
      name: "UI/UX Implementation in Unity",
      category: "Design & Development",
      icon: Palette
    },
    {
      name: "Figma",
      category: "Design",
      icon: SiFigma
    },
    {
      name: "Git / Version Control",
      category: "Development Tools",
      icon: SiGit
    },
    {
      name: "HTML5",
      category: "Web Development",
      icon: SiHtml5
    },
    {
      name: "PHP",
      category: "Web Development",
      icon: SiPhp
    },
    {
      name: "JavaScript",
      category: "Web Development",
      icon: SiJavascript
    },
    {
      name: "Python",
      category: "Programming",
      icon: SiPython
    },
    {
      name: "C++",
      category: "Programming",
      icon: SiCplusplus
    },
    {
      name: "MySQL",
      category: "Database",
      icon: SiMysql
    },
    {
      name: "Blender",
      category: "3D Modeling",
      icon: SiBlender
    },
    {
      name: "Arduino",
      category: "Hardware",
      icon: SiArduino
    },
    {
      name: "React Native",
      category: "Mobile Development",
      icon: SiReact
    },
    {
      name: "CSS3",
      category: "Web Development",
      icon: SiCss3
    },
    {
      name: "JetBrains Rider",
      category: "Development Tools",
      icon: SiJetbrains
    },
    {
      name: "VS Code",
      category: "Development Tools",
      icon: Code2
    },
    {
      name: "Visual Studio",
      category: "Development Tools",
      icon: FileCode
    },
    {
      name: "XAMPP",
      category: "Development Tools",
      icon: SiApache
    }
  ];

  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
      <div className="max-w-6xl mx-auto px-6 py-16 relative z-10">
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
            Technologies I Work With
          </motion.h1>
        </motion.div>
        {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => (
          <motion.section 
            key={category}
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl font-black text-white mb-8 text-center"
              whileHover={{ 
                color: "#38761d",
                scale: 1.02
              }}
            >
              {category}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {techs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  className="group bg-gradient-to-br from-[#1c5400]/30 to-[#38761d]/20 border border-[#38761d] rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[#38761d]/40 hover:to-[#1c5400]/30 transition-all duration-300 relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    delay: 0.8 + categoryIndex * 0.1 + techIndex * 0.05, 
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    boxShadow: "0 20px 40px rgba(56, 118, 29, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Wave effect background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      delay: techIndex * 0.3
                    }}
                  />
                  
                  <motion.div
                    className="text-center relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="flex items-center justify-center mb-4 text-[#38761d]"
                      animate={{
                        scale: [1, 1.02, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: techIndex * 0.2
                      }}
                    >
                      <tech.icon size={48} />
                    </motion.div>
                    <motion.h3 
                      className="text-white font-bold text-lg mb-2 group-hover:text-[#38761d] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 + categoryIndex * 0.1 + techIndex * 0.05 }}
                    >
                      {tech.name}
                    </motion.h3>
                    
                    {/* Animated border */}
                    <motion.div
                      className="w-0 h-0.5 bg-[#38761d] mx-auto group-hover:w-full transition-all duration-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#1c5400] to-[#38761d] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
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
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
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

export default Technologies;
