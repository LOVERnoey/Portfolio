import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import type { Project } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleProjectClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <motion.div
      className="bg-black border-2 border-[#38761d] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:border-[#1c5400] transition-all duration-300 cursor-pointer group h-[500px] flex flex-col"
      whileHover={{ y: -8 }}
      onClick={handleProjectClick}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        {/* Background glow effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-[#1c5400] via-[#38761d] to-[#1c5400] opacity-20 blur-md"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Image container with gradient border */}
        <motion.div 
          className="relative h-full bg-gradient-to-br from-[#1c5400] to-[#38761d] p-0.5"
          whileHover={{
            background: "linear-gradient(135deg, #38761d, #1c5400, #38761d)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(1.05) contrast(1.05) saturate(1.1)"
            }}
            whileHover={{
              scale: 1.08,
              filter: "brightness(1.1) contrast(1.1) saturate(1.15)"
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          
          {/* Corner accents */}
          <motion.div
            className="absolute top-1 left-1 w-4 h-4 border-l-3 border-t-3 border-[#38761d] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute top-1 right-1 w-4 h-4 border-r-3 border-t-3 border-[#38761d] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          />
          <motion.div
            className="absolute bottom-1 left-1 w-4 h-4 border-l-3 border-b-3 border-[#38761d] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          />
          <motion.div
            className="absolute bottom-1 right-1 w-4 h-4 border-r-3 border-b-3 border-[#38761d] opacity-0 group-hover:opacity-100"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          />
        </motion.div>
        
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="p-3 text-center"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <motion.p 
              className="text-white font-medium text-sm"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Click to view details
            </motion.p>
          </motion.div>
        </motion.div>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-30"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)",
            backgroundSize: "200% 200%"
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#38761d] transition-colors duration-300">
          {project.title}
        </h3>
        
        <motion.div 
          className="mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <span className="inline-block px-3 py-1 bg-[#38761d] text-white text-sm font-bold rounded-full border-2 border-[#1c5400] shadow-md">
            {project.position}
          </span>
        </motion.div>
        
        <p className="text-gray-300 mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-[#38761d] text-white text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-[#1c5400] text-gray-200 text-sm rounded-full font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1c5400] text-white rounded-lg hover:bg-[#38761d] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              <span className="text-sm font-medium">Code</span>
            </motion.a>
          )}
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#38761d] text-white rounded-lg hover:bg-[#1c5400] transition-colors duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(56, 118, 29, 0)",
                  "0 0 0 8px rgba(56, 118, 29, 0.3)",
                  "0 0 0 16px rgba(56, 118, 29, 0)",
                ]
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ExternalLink size={16} />
              </motion.div>
              <motion.span 
                className="text-sm font-medium"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Live
              </motion.span>
              
              {/* Wave effect background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2
                }}
              />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
