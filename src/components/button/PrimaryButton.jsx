'use client';
import { motion } from 'framer-motion';

const PrimaryButton = ({ 
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
      {/* 背景光暈效果 */}
      <div className="absolute inset-0 rounded-lg bg-[#70BEFA] opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
      
      {/* 主要背景 */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#70BEFA] to-[#5D8EFF]" />
      
      {/* 內部陰影 */}
      <div className="absolute inset-[1px] rounded-lg bg-gradient-to-br from-white/10 to-transparent" />
      
      {/* 邊框光暈 */}
      <div className="absolute inset-0 rounded-lg">
        <div className="absolute inset-[-1px] rounded-lg animate-border-glow" />
      </div>
      
      {/* 按鈕內容 */}
      <div className="relative px-6 py-3 rounded-lg">
        <span className="text-white font-medium">{children}</span>
      </div>
    </motion.button>
  );
};

export default PrimaryButton;