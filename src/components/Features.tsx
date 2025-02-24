import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Database, LineChart } from 'lucide-react';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: t('features.automation.title', 'Process Automation'),
      description: t('features.automation.description', 'Streamline your workflows with custom automation solutions'),
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: t('features.data.title', 'Data Integration'),
      description: t('features.data.description', 'Seamlessly connect and manage your data across platforms'),
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary" />,
      title: t('features.analytics.title', 'Business Analytics'),
      description: t('features.analytics.description', 'Transform data into actionable insights'),
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {t('features.title', 'Our Solutions')}
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            {t('features.subtitle', 'Discover how our automation solutions can transform your business')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};