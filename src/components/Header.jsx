'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { IconBrandGithub } from '@tabler/icons-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // 檢測當前活動區塊
      const sections = ['about', 'service', 'case', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Case', href: '#case' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // 考慮 header 高度
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/80 backdrop-blur-xl shadow-[0_0_15px_rgba(0,0,0,0.5)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70BEFA] to-[#5D8EFF] flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#70BEFA] text-transparent bg-clip-text">
                AI Cube
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group
                    ${activeSection === item.href.slice(1) 
                      ? 'text-[#70BEFA]' 
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.name}
                  <span className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#70BEFA] to-transparent transition-transform duration-300
                    ${activeSection === item.href.slice(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                  />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm transition-colors flex items-center justify-center"
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1.5">
              <span className={`block h-0.5 bg-white transform transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transform transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors
                    ${activeSection === item.href.slice(1)
                      ? 'text-[#70BEFA] bg-white/5'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;