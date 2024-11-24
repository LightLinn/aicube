'use client';
import { motion } from 'framer-motion';
import { IconBrain, IconRobot, IconMessageChatbot, IconSettings, IconRefresh, IconChartInfographic } from '@tabler/icons-react';

const Service = () => {
  const services = [
    {
      icon: IconBrain,
      title: 'LLM Deployment',
      description: 'We help you deploy and optimize large language models, ensuring secure and reliable integration to enhance your business applications and service quality.',
    },
    {
      icon: IconMessageChatbot,
      title: 'RAG',
      description: 'We leverage retrieval augmented generation technology to seamlessly combine your business knowledge base with AI models, delivering accurate and contextually relevant responses.',
    },
    {
      icon: IconSettings,
      title: 'Prompt Optimization',
      description: 'We optimize prompt engineering to ensure optimal interactions with AI models, delivering precise outputs tailored to your specific use cases.',
    },
    {
      icon: IconRobot,
      title: 'Agent',
      description: 'We build intelligent agent systems capable of autonomously completing complex tasks, helping you achieve business process intelligence and automation.',
    },
    {
      icon: IconRefresh,
      title: 'Workflow Automations',
      description: 'We automate your workflows to streamline repetitive tasks, enhance efficiency, save time, and eliminate errors.',
    },
    {
      icon: IconChartInfographic,
      title: 'AI Consulting',
      description: 'Our experts provide strategic guidance, enabling your business to implement AI solutions that drive transformative growth.',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 md:py-32" id="service">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Our Services
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Comprehensive AI solutions tailored to transform your business
        </p>
      </div>

      {/* Service Cards Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
          >
            {/* Icon */}
            <div className="mb-6">
              <service.icon 
                className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                stroke={1.5}
              />
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>

            {/* Hover Effect Border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl group-hover:border-blue-500/30 transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Service;