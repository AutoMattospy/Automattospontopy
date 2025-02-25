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
    <div className="min-h-screen flex items-center justify-center bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Identifique abaixo qual desafio mais se aproxima da sua realidade:
          </h2>
          
          <div className="space-y-4 mb-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
};
