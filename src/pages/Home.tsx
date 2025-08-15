import { motion } from 'framer-motion';
import { personalInfo, projects } from '../data/portfolio';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { Github, Facebook, Gamepad2 } from 'lucide-react';
import profileImage from '/profile.png';

const Home = () => {
  const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const textReveal = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Convert socialLinks object to array for mapping with icons
  const socialLinksArray = [
    { platform: "GitHub", url: personalInfo.socialLinks.github, icon: Github },
    { platform: "Itch.io", url: personalInfo.socialLinks.itchio, icon: Gamepad2 },
    { platform: "Facebook", url: personalInfo.socialLinks.facebook, icon: Facebook }
  ].filter(link => link.url); // Filter out undefined URLs

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#38761d] rounded-full opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
              scale: [1, 2, 1],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div 
            className="relative flex justify-center md:justify-start"
            variants={fadeInLeft}
          >
            <div className="relative group">
              {/* Multiple rotating borders with beat pulse */}
              <motion.div
                className="absolute -inset-4 border-4 border-[#38761d] rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1, 1.05, 1],
                  opacity: [0.8, 1, 0.8, 0.9, 0.8]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1.2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div
                className="absolute -inset-6 border-2 border-[#1c5400] rounded-full opacity-50"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.08, 1, 1.04, 1],
                  opacity: [0.5, 0.7, 0.5, 0.6, 0.5]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              <motion.div
                className="absolute -inset-8 border border-[#38761d] rounded-full opacity-30"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.12, 1, 1.06, 1],
                  opacity: [0.3, 0.6, 0.3, 0.45, 0.3]
                }}
                transition={{ 
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 0.8, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <motion.img
                src={profileImage}
                alt={personalInfo.name}
                className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-8 border-[#38761d] shadow-2xl relative z-10"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  rotateY: 180,
                  filter: "blur(20px)"
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              />
            </div>
          </motion.div>

          {/* Information */}
          <motion.div 
            className="text-center md:text-left space-y-6"
            variants={fadeInRight}
          >
            <motion.div variants={textReveal}>
              <motion.h1 
                className="text-6xl md:text-8xl font-black text-white mb-4 font-display tracking-tight"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                {personalInfo.name.split(' ').map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ opacity: 0, y: 50, rotateY: -90 }}
                    animate={{ opacity: 1, y: 0, rotateY: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.h1>
              <motion.h2 
                className="text-3xl md:text-4xl text-[#38761d] font-bold mb-6 tracking-wide"
                initial={{ opacity: 0, x: -100, scale: 0.5 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {personalInfo.title}
              </motion.h2>
            </motion.div>

            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-lg font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                color: "#ffffff"
              }}
            >
              {personalInfo.description}
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {socialLinksArray.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-[#1c5400] text-white rounded-xl transition-all duration-300 hover:bg-[#38761d] shadow-lg border-2 border-transparent hover:border-[#38761d] flex items-center justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1 + index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    title={link.platform}
                  >
                    <IconComponent size={24} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6,
            ease: "easeOut"
          }
        }}
        exit={{ 
          opacity: 0, 
          y: -50,
          transition: { 
            duration: 0.4,
            ease: "easeIn"
          }
        }}
        viewport={{ 
          once: false,
          amount: 0.3,
          margin: "-50px 0px -50px 0px"
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1
              }
            }}
            exit={{ 
              opacity: 0, 
              y: -30, 
              scale: 0.9,
              transition: { 
                duration: 0.3,
                ease: "easeIn"
              }
            }}
            viewport={{ 
              once: false,
              amount: 0.5
            }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-black text-white mb-6 font-display"
              whileHover={{ 
                scale: 1.05,
                color: "#38761d",
                textShadow: "0 0 30px #38761d"
              }}
            >
              My Projects
            </motion.h2>
            <motion.div 
              className="w-32 h-2 bg-gradient-to-r from-[#1c5400] to-[#38761d] mx-auto rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ 
                width: 128, 
                opacity: 1,
                transition: { 
                  width: { duration: 0.8, delay: 0.2 },
                  opacity: { duration: 0.4, delay: 0.1 }
                }
              }}
              exit={{
                width: 0,
                opacity: 0,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: false }}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.2,
                  staggerChildren: 0.1
                }
              },
              exit: {
                opacity: 0,
                transition: {
                  staggerChildren: 0.03,
                  staggerDirection: -1
                }
              }
            }}
            viewport={{ 
              once: false,
              amount: 0.2
            }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 80,
                    scale: 0.8,
                    rotateX: -30
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    rotateX: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                      type: "spring",
                      stiffness: 120
                    }
                  },
                  exit: {
                    opacity: 0,
                    y: -40,
                    scale: 0.9,
                    transition: {
                      duration: 0.3,
                      ease: "easeIn"
                    }
                  }
                }}
                whileHover={{
                  y: -20,
                  scale: 1.05,
                  rotateY: 5
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
