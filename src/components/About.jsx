'use client';
import { motion } from 'framer-motion';
import { IconBrain, IconRobot, IconChartBar, IconTrophy } from '@tabler/icons-react';

const About = () => {
  const whyChooseUs = [
    {
      icon: IconBrain,
      title: 'Deep Technical Expertise',
      description: 'Our team of AI specialists combines cutting-edge technical knowledge with practical business acumen'
    },
    {
      icon: IconRobot,
      title: 'Custom Solutions',
      description: 'We understand that every business is unique, and we tailor our solutions to meet your specific needs'
    },
    {
      icon: IconChartBar,
      title: 'Innovation Focus',
      description: 'We continuously explore and implement the latest AI advancements to deliver superior results'
    },
    {
      icon: IconTrophy,
      title: 'Proven Track Record',
      description: 'We have successfully helped numerous companies implement AI solutions that drive real business value'
    }
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden" id="about" >
      {/* 背景裝飾 */}
      
      
      <div className="relative space-y-16 md:space-y-32">
        {/* Introduction */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariants}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Pioneering AI Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            At AI Cube, we are pioneers in the next generation of AI solutions, dedicated to transforming businesses through innovative artificial intelligence technologies.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeInUpVariants}
          className="relative"
        >
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#70BEFA]" />
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
                Our Mission
              </h2>
              <div className="h-px w-12 bg-gradient-to-r from-[#70BEFA] to-transparent" />
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                We strive to make advanced AI technology accessible and practical for businesses of all sizes, helping them achieve operational excellence and drive innovation through intelligent automation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <div className="space-y-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUpVariants}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
              Why Choose Us
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeInUpVariants}
                className="group p-[1px]" // 添加小間距避免邊框被切掉
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full"
                >
                  {/* 背景光暈效果 */}
                  <div className="absolute inset-0 rounded-2xl bg-[#70BEFA] opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-300" />
                  
                  {/* 卡片主體 */}
                  <div className="relative h-full p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 group-hover:border-[#70BEFA]/30 transition-all duration-300 mx-4">
                    <div className="flex items-start space-x-4">
                      {/* 圖標容器 */}
                      <div className="flex-shrink-0 ">
                        <div className="w-12 h-12 rounded-lg bg-[#70BEFA]/10 flex items-center justify-center group-hover:bg-[#70BEFA]/20 transition-colors duration-300">
                          <item.icon 
                            className="w-6 h-6 text-[#70BEFA] transform group-hover:scale-110 transition-transform duration-300" 
                            stroke={1.5} 
                          />
                        </div>
                      </div>
                      
                      {/* 文字內容 */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#70BEFA] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariants}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="bg-gradient-to-r from-[#70BEFA]/20 to-transparent p-8 rounded-2xl border border-[#70BEFA]/20">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Our team brings together expertise in LLM deployment, retrieval-augmented generation, prompt engineering, and AI agent development to deliver comprehensive solutions that transform how businesses operate.
            </p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUpVariants}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Let's shape the future of your business together with the power of AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;