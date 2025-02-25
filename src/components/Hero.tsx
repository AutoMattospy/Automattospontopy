import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  const challenges = [
    'Processos manuais e repetitivos consumindo tempo da sua equipe?',
    'Erros operacionais impactando a qualidade do seu serviço?',
    'Dificuldade para escalar operações sem aumentar custos?',
    'Informações importantes perdidas em planilhas e sistemas?',
    'Demora para gerar relatórios e análises gerenciais?'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto relative z-10 w-full max-w-7xl"
      >
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('hero.title')}
          </h1>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
            Identifique abaixo qual desafio mais se aproxima da sua realidade:
          </h2>
          
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 text-gray-300"
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-base sm:text-lg">{challenge}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 bg-primary text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-primary-dark transition-colors"
            >
              <span>Conheça nossas soluções</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
