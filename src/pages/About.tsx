import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="pt-20">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-primary mb-8 text-center">
                Sobre a Automattos.py
              </h1>
              
              <div className="bg-secondary p-8 rounded-lg space-y-6 text-gray-300">
                <p>
                  Fundada em 2023, a Automattos.py nasceu da paixão por transformar processos complexos em soluções eficientes através da automação inteligente.
                </p>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Nossa Missão</h2>
                  <p>
                    Capacitar empresas através da automação inteligente, permitindo que equipes foquem no que realmente importa: inovação e crescimento.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Valores</h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Inovação Constante</li>
                    <li>Excelência Técnica</li>
                    <li>Compromisso com Resultados</li>
                    <li>Transparência</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-primary">Nossa Expertise</h2>
                  <p>
                    Especialistas em Python, automação de processos, análise de dados e desenvolvimento de soluções personalizadas para diversos setores.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};