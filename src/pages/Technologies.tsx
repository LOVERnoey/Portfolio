import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
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
  SiJetbrains,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiPostgresql
} from 'react-icons/si';
import { 
  Palette,
  Code2,
  FileCode
} from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    // Programming Languages
    {
      name: "C#",
      category: "Programming Languages",
      icon: SiSharp
    },
    {
      name: "Java",
      category: "Programming Languages",
      icon: SiOpenjdk
    },
    {
      name: "JavaScript",
      category: "Programming Languages",
      icon: SiJavascript
    },
    {
      name: "Python",
      category: "Programming Languages",
      icon: SiPython
    },
    {
      name: "C++",
      category: "Programming Languages",
      icon: SiCplusplus
    },
    {
      name: "PHP",
      category: "Programming Languages",
      icon: SiPhp
    },
    
    // Game Development
    {
      name: "Unity 2D & 3D",
      category: "Game Development",
      icon: SiUnity
    },
    
    // Web Development
    {
      name: "HTML5",
      category: "Web Development",
      icon: SiHtml5
    },
    {
      name: "CSS3",
      category: "Web Development",
      icon: SiCss3
    },
    {
      name: "React",
      category: "Web Development",
      icon: SiReact
    },
    {
      name: "Framer Motion",
      category: "Web Development",
      icon: SiFramer
    },
    {
      name: "Tailwind CSS",
      category: "Web Development",
      icon: SiTailwindcss
    },
    {
      name: "Bootstrap",
      category: "Web Development",
      icon: SiBootstrap
    },
    
    // Mobile Development
    {
      name: "React Native",
      category: "Mobile Development",
      icon: SiReact
    },
    
    // Database
    {
      name: "MySQL",
      category: "Database",
      icon: SiMysql
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: SiPostgresql
    },
    
    // Development Tools
    {
      name: "Git / Version Control",
      category: "Development Tools",
      icon: SiGit
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
    },
    {
      name: "Arduino",
      category: "Development Tools",
      icon: SiArduino
    },
    
    // Design and 3D Modeling
    {
      name: "Figma",
      category: "Design and 3D Modeling",
      icon: SiFigma
    },
    {
      name: "Blender",
      category: "Design and 3D Modeling",
      icon: SiBlender
    },
    {
      name: "UI/UX Implementation in Unity",
      category: "Design and 3D Modeling",
      icon: Palette
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
    <div className="min-h-screen bg-[#292929] overflow-hidden relative pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ff914d] rounded-full opacity-30"
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
              color: "#ff914d",
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
                color: "#ff914d",
                scale: 1.02
              }}
            >
              {category}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {techs.map((tech, techIndex) => (
                <motion.div
                  key={tech.name}
                  className="group bg-gradient-to-br from-[#23426b]/30 to-[#ff914d]/20 border border-[#ff914d] rounded-2xl p-6 hover:bg-gradient-to-br hover:from-[#ff914d]/40 hover:to-[#23426b]/30 transition-all duration-300 relative overflow-hidden"
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
                    boxShadow: "0 20px 40px rgba(255, 145, 77, 0.3)"
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
                      className="flex items-center justify-center mb-4 text-[#ff914d]"
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
                      className="text-white font-bold text-lg mb-2 group-hover:text-[#ff914d] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 + categoryIndex * 0.1 + techIndex * 0.05 }}
                    >
                      {tech.name}
                    </motion.h3>
                    
                    {/* Animated border */}
                    <motion.div
                      className="w-0 h-0.5 bg-[#ff914d] mx-auto group-hover:w-full transition-all duration-500"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.div>
                  
                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-[#23426b] to-[#ff914d] rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Technologies;
