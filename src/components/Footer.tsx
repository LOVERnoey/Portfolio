import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="w-full bg-[#292929] mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      {/* Full width border line */}
      <motion.div 
        className="w-full h-px bg-[#ff914d]/30"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      />
      
      {/* Footer content with padding */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center relative z-10">
        <motion.div 
          className="space-y-6"
          whileHover={{ scale: 1.02 }}
        >
          {/* GitHub Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="https://github.com/LOVERnoey/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-[#23426b]/30 to-[#ff914d]/20 border border-[#ff914d] rounded-full transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 10px 30px rgba(255, 145, 77, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={32} className="text-[#ff914d]" />
            </motion.a>
          </motion.div>
          
          <p className="text-white/80 text-lg">
            © 2025 LOVERnoey. All rights reserved
          </p>
          <p className="text-[#ff914d] font-semibold">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <motion.div 
            className="flex justify-center space-x-6 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="https://github.com/LOVERnoey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#ff914d] transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow me on GitHub
            </motion.a>
            <motion.a
              href="https://lovernoey.itch.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-[#ff914d] transition-colors duration-300 font-medium"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Follow me on itch.io
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
