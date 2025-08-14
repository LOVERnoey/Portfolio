import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Code, FolderOpen } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: FolderOpen },
    { name: 'Technologies', href: '/technologies', icon: Code },
  ];

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-black/95 backdrop-blur-lg z-50 border-b-2 border-[#38761d] shadow-lg shadow-[#38761d]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-br from-[#1c5400] to-[#38761d] rounded-xl flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  background: "linear-gradient(135deg, #38761d, #1c5400)"
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-white font-black text-lg">R</span>
              </motion.div>
              <span className="text-2xl font-black bg-gradient-to-r from-[#38761d] to-[#1c5400] bg-clip-text text-transparent group-hover:from-[#1c5400] group-hover:to-[#38761d] transition-all duration-300">
                Portfolio
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navigation.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 border-2 ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-[#1c5400] to-[#38761d] border-[#38761d] shadow-lg shadow-[#38761d]/30'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1c5400]/50 hover:to-[#38761d]/50 border-transparent hover:border-[#38761d] hover:shadow-md hover:shadow-[#38761d]/20'
                    }`}
                  >
                    <motion.div
                      animate={location.pathname === item.href ? {
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.1, 1]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent size={20} />
                    </motion.div>
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1c5400] hover:to-[#38761d] transition-all duration-300 border-2 border-transparent hover:border-[#38761d]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="px-2 pt-4 pb-6 space-y-3 border-t-2 border-[#38761d] mt-4">
            {navigation.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -30 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-base transition-all duration-300 border-2 ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-to-r from-[#1c5400] to-[#38761d] border-[#38761d] shadow-lg shadow-[#38761d]/30'
                        : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#1c5400]/50 hover:to-[#38761d]/50 border-transparent hover:border-[#38761d]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <IconComponent size={22} />
                    <span className="tracking-wide">{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
