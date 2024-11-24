'use client';
import { motion } from 'framer-motion';

const SecondaryButton = ({ 
  children, 
  type = 'button', 
  className = '', 
  onClick,
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group relative w-full ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* 背景層 */}
      <div className="absolute inset-0 rounded-lg bg-[#161616]" />
      
      {/* 動態邊框 */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-[-1px] rounded-lg bg-gradient-to-r from-[#70BEFA]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* 內容層 */}
      <div className="relative rounded-lg px-6 py-3 bg-[#161616] border border-[#222222] group-hover:border-[#70BEFA]/30 transition-colors duration-300">
        <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text font-medium">
          {children}
        </span>
      </div>
    </motion.button>
  );
};

export default SecondaryButton;