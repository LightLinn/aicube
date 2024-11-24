'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white mt-auto overflow-hidden">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#70BEFA] rounded-full blur-[150px] opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2 justify-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70BEFA] to-[#5D8EFF] flex items-center justify-center">
                <span className="text-xl font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-[#70BEFA] text-transparent bg-clip-text">
                AI Cube
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
              Empowering businesses with next-generation AI solutions for a smarter future.
            </p>
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Thunder Creation Studio. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;