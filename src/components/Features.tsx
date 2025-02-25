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
};
