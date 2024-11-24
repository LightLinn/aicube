'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconArrowUp } from '@tabler/icons-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // 滾動到頂部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* 背景光暈 */}
          <div className="absolute inset-0 rounded-xl bg-[#70BEFA] opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
          
          {/* 主按鈕 */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gray-900/90 border border-[#70BEFA]/30 backdrop-blur-sm shadow-lg shadow-black/50 group-hover:border-[#70BEFA]/50 transition-all duration-300">
            <IconArrowUp 
              className="w-5 h-5 text-[#70BEFA] transform group-hover:-translate-y-0.5 transition-transform duration-300" 
              stroke={1.5}
            />
          </div>
          
          {/* 懸浮提示 */}
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-[#70BEFA] text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm border border-[#70BEFA]/30">
            Back to top
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;