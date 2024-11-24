'use client';
import { motion } from 'framer-motion';
import { 
  IconBuildingBank, 
  IconShoppingCart, 
  IconHeartRateMonitor, 
  IconTruck, 
  IconBuildingFactory, 
  IconDeviceAnalytics 
} from '@tabler/icons-react';

const Case = () => {
  const cases = [
    {
      icon: IconBuildingBank,
      title: 'Financial Services',
      scenarios: [
        'Risk Assessment & Fraud Detection',
        'Customer Service Automation',
        'Investment Analysis',
        'Document Processing'
      ],
      roles: ['Risk Analysts', 'Financial Advisors', 'Customer Service'],
      color: 'from-blue-400 to-purple-500'
    },
    {
      icon: IconShoppingCart,
      title: 'Retail & E-commerce',
      scenarios: [
        'Inventory Management',
        'Customer Behavior Analysis',
        'Personalized Recommendations',
        'Supply Chain Optimization'
      ],
      roles: ['Category Managers', 'Marketing Teams', 'Operations'],
      color: 'from-green-400 to-teal-500'
    },
    {
      icon: IconHeartRateMonitor,
      title: 'Healthcare',
      scenarios: [
        'Patient Data Analysis',
        'Treatment Recommendations',
        'Administrative Automation',
        'Research Assistance'
      ],
      roles: ['Medical Professionals', 'Administrators', 'Researchers'],
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: IconTruck,
      title: 'Logistics',
      scenarios: [
        'Route Optimization',
        'Demand Forecasting',
        'Warehouse Management',
        'Delivery Tracking'
      ],
      roles: ['Fleet Managers', 'Supply Chain Planners', 'Warehouse Supervisors'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: IconBuildingFactory,
      title: 'Manufacturing',
      scenarios: [
        'Quality Control',
        'Predictive Maintenance',
        'Production Planning',
        'Resource Optimization'
      ],
      roles: ['Production Managers', 'Quality Engineers', 'Maintenance Teams'],
      color: 'from-indigo-400 to-blue-500'
    },
    {
      icon: IconDeviceAnalytics,
      title: 'Business Intelligence',
      scenarios: [
        'Market Analysis',
        'Performance Monitoring',
        'Trend Prediction',
        'Report Automation'
      ],
      roles: ['Business Analysts', 'Executives', 'Strategy Teams'],
      color: 'from-purple-400 to-pink-500'
    }
  ];

  return (
    <section className="py-20 md:py-32" id="case">
      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-[#70BEFA] inline-block text-transparent bg-clip-text">
            Use Cases
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Discover how AI solutions can transform your industry
        </p>
      </div>

      {/* Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="relative p-8 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-[#70BEFA]/30 transition-all duration-300">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.color} p-3 mb-6`}>
                <item.icon className="w-full h-full text-white" stroke={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              {/* Scenarios */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-[#70BEFA] mb-2">
                  KEY APPLICATIONS
                </h4>
                <ul className="space-y-2">
                  {item.scenarios.map((scenario, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#70BEFA]" />
                      {scenario}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Roles */}
              <div>
                <h4 className="text-sm font-medium text-[#70BEFA] mb-2">
                  KEY ROLES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.roles.map((role, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 rounded-full text-sm bg-gray-700/50 text-gray-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#70BEFA]/20 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Case;