'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import PrimaryButton from '@/components/button/PrimaryButton';
import SecondaryButton from '@/components/button/SecondaryButton';

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 md:py-32">
      <div className="flex flex-col items-center text-center space-y-12 md:space-y-16">
        {/* Title with gradient */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-6xl lg:text-7xl font-bold max-w-4xl"
        >
          <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Next Generation AI Systems
          </span>
        </motion.h1>
        
        {/* Content */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          AI Agent Automation systems, We develop custom AI solutions for innovative companies.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 w-full max-w-md mx-auto"
        >
          {/* Service Button */}
          <Link href="#service" className="w-full">
            <SecondaryButton>
              our services
            </SecondaryButton>
          </Link>

          {/* Contact Button */}
          <Link href="#contact" className="w-full">
            <PrimaryButton className="group">
              <span className="flex items-center justify-center gap-2">
                contact us
                <IconArrowRight 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
                  stroke={1.5}
                />
              </span>
            </PrimaryButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;