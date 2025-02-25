import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Clock, TrendingDown, FileSearch, Users, Database, LineChart } from 'lucide-react';

export const Features: React.FC = () => {
  const { t } = useTranslation();
  
  const painPoints = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Processos Manuais Demorados',
      description: 'Funcionários gastando horas em tarefas repetitivas como entrada de dados, geração de relatórios e processamento de documentos.',
      impact: 'Perda de 30% do tempo produtivo e alto risco de erros humanos',
      solution: 'Automatização completa de processos repetitivos, liberando sua equipe para atividades estratégicas'
    },
    {
      icon: <TrendingDown className="w-12 h-12 text-primary" />,
      title: 'Ineficiência Operacional',
      description: 'Processos desconectados, múltiplos sistemas não integrados e falta de padronização nas operações.',
      impact: 'Atrasos, inconsistências e custos operacionais 40% maiores que o necessário',
      solution: 'Integração de sistemas e padronização de processos com automação inteligente'
    },
    {
      icon: <FileSearch className="w-12 h-12 text-primary" />,
      title: 'Dificuldade com Relatórios',
      description: 'Tempo excessivo para coletar, processar e analisar dados de diferentes fontes para tomada de decisão.',
      impact: 'Decisões atrasadas e baseadas em dados desatualizados',
      solution: 'Relatórios automatizados em tempo real com insights acionáveis'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Sobrecarga da Equipe',
      description: 'Funcionários sobrecarregados com tarefas operacionais, levando à desmotivação e erros.',
      impact: 'Alta rotatividade e custos com retrabalho',
      solution: 'Automação das tarefas repetitivas, permitindo foco em atividades estratégicas'
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: 'Gestão de Dados Complexa',
      description: 'Dificuldade em manter dados atualizados e consistentes entre diferentes sistemas e departamentos.',
      impact: 'Decisões baseadas em informações incorretas ou desatualizadas',
      solution: 'Integração e sincronização automática de dados entre sistemas'
    },
    {
      icon: <LineChart className="w-12 h-12 text-primary" />,
      title: 'Falta de Visibilidade',
      description: 'Ausência de métricas claras e dashboards em tempo real para acompanhamento do negócio.',
      impact: 'Dificuldade em identificar problemas e oportunidades de melhoria',
      solution: 'Dashboards personalizados com KPIs relevantes atualizados em tempo real'
    }
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
            Transforme Desafios em Oportunidades
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Identificamos e resolvemos as principais dores das empresas através de soluções de automação inteligente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-6">{point.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">{point.title}</h3>
              <p className="text-gray-400 mb-4">{point.description}</p>
              <div className="border-t border-gray-800 pt-4 mt-4">
                <p className="text-red-500 mb-2">
                  <strong>Impacto:</strong> {point.impact}
                </p>
                <p className="text-primary">
                  <strong>Solução:</strong> {point.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
