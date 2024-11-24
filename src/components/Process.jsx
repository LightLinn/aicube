'use client';
import { motion } from 'framer-motion';
import { IconNumber1, IconNumber2, IconNumber3, IconNumber4, IconNumber5, IconNumber6, IconNumber7 } from '@tabler/icons-react';

const Process = () => {
  const processes = [
    {
      icon: IconNumber1,
      title: 'Initial Consultation & Analysis',
      description: 'We begin with a thorough consultation and analysis of your current workflows, identifying opportunities where AI can enhance your processes.'
    },
    {
      icon: IconNumber2,
      title: 'Requirement Analysis & Planning',
      description: 'Our team conducts detailed requirement gathering and planning, ensuring we understand your specific needs and objectives.'
    },
    {
      icon: IconNumber3,
      title: 'Solution Design',
      description: 'We design a comprehensive solution architecture that aligns with your business goals and technical requirements.'
    },
    {
      icon: IconNumber4,
      title: 'Development & Implementation',
      description: 'Our developers craft custom AI solutions prioritizing quality, security, and performance to meet your specific needs.'
    },
    {
      icon: IconNumber5,
      title: 'Testing & Optimization',
      description: 'Rigorous testing and optimization ensure the solution performs optimally and meets all requirements.'
    },
    {
      icon: IconNumber6,
      title: 'Deployment & Training',
      description: 'We handle the deployment process and provide comprehensive training to ensure smooth adoption.'
    },
    {
      icon: IconNumber7,
      title: 'Maintenance & Support',
      description: 'Our team provides ongoing support and continuous improvement of implemented solutions, ensuring long-term success.'
    }
  ];

  return (
    <section className="py-20 md:py-32">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Our Process
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          A systematic approach to implementing AI solutions
        </p>
      </div>

      {/* Process Timeline */}
      <div className="relative px-4 md:px-0">
        {/* Connecting Line - 移動端改為左側對齊 */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#70BEFA] via-[#70BEFA]/50 to-transparent" />

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-24 relative">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${
                index % 2 === 0 ? 'md:text-right' : ''
              }`}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="relative group"
                >
                  {/* 背景光暈 */}
                  <div className="absolute inset-0 rounded-xl bg-[#70BEFA] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
                  
                  {/* 卡片內容 */}
                  <div className="relative bg-gray-800/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-gray-700/50 group-hover:border-[#70BEFA]/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4 md:hidden">
                      <div className="w-10 h-10 rounded-full bg-[#161616] border-2 border-[#70BEFA] flex items-center justify-center shadow-lg shadow-[#70BEFA]/20">
                        <process.icon className="w-5 h-5 text-[#70BEFA]" stroke={1.5} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {process.title}
                      </h3>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 hidden md:block">
                      {process.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Icon - 在移動端隱藏中間的圖標 */}
              <div className="hidden md:flex items-center justify-center md:w-24">
                <div className="w-12 h-12 rounded-full bg-[#161616] border-2 border-[#70BEFA] flex items-center justify-center shadow-lg shadow-[#70BEFA]/20">
                  <process.icon className="w-6 h-6 text-[#70BEFA]" stroke={1.5} />
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;