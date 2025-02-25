import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import { Filter, Code, FileSpreadsheet, Database, LineChart, Globe, Layout } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const projects = [
    // Website Development Projects
    {
      title: 'E-commerce Moderno',
      description: 'Desenvolvimento de plataforma e-commerce completa com design responsivo, integração de pagamentos e gestão de produtos.',
      category: 'website',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80',
    },
    {
      title: 'Site Institucional Premium',
      description: 'Website corporativo com design elegante, animações suaves e otimização para mecanismos de busca (SEO).',
      category: 'website',
      tags: ['React', 'TypeScript', 'Framer Motion', 'SEO'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Portal de Conteúdo',
      description: 'Sistema de blog e gestão de conteúdo com painel administrativo personalizado e integração com redes sociais.',
      category: 'website',
      tags: ['React', 'Node.js', 'CMS', 'Social Media'],
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80',
    },

    // Python Automation Projects
    {
      title: 'Automação de Relatórios Financeiros',
      description: 'Sistema automatizado para geração e distribuição de relatórios financeiros diários, semanais e mensais com integração ao SAP e envio automático por email.',
      category: 'python',
      tags: ['Python', 'Pandas', 'SAP API', 'Automation'],
      image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80',
    },
    {
      title: 'Web Scraping de Dados de Mercado',
      description: 'Sistema de coleta automática de dados de mercado financeiro de múltiplas fontes, incluindo processamento e análise em tempo real.',
      category: 'python',
      tags: ['Python', 'BeautifulSoup', 'Selenium', 'Web Scraping'],
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80',
    },
    {
      title: 'Automação de Backoffice',
      description: 'Automatização de processos administrativos incluindo processamento de notas fiscais, integração com sistemas ERP e geração de relatórios.',
      category: 'python',
      tags: ['Python', 'PyAutoGUI', 'OCR', 'RPA'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    },

    // Web Development Projects
    {
      title: 'Portal de Gestão de Projetos',
      description: 'Aplicação web completa para gestão de projetos com dashboard em tempo real, controle de tarefas e relatórios automatizados.',
      category: 'web',
      tags: ['React', 'Node.js', 'TypeScript', 'SQL'],
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Sistema de Gestão de Estoque',
      description: 'Plataforma web para controle de estoque com QR Code, histórico de movimentações e relatórios automáticos.',
      category: 'web',
      tags: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    },
    {
      title: 'Dashboard Comercial',
      description: 'Interface web para visualização de dados comerciais em tempo real com gráficos interativos e exportação de relatórios.',
      category: 'web',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    },

    // Power BI Projects
    {
      title: 'Dashboard de Vendas',
      description: 'Dashboard interativo para análise de vendas em tempo real com KPIs, tendências e previsões.',
      category: 'powerbi',
      tags: ['Power BI', 'DAX', 'SQL', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80',
    },
    {
      title: 'Analytics de Marketing',
      description: 'Painel de análise de campanhas de marketing com integração de múltiplas fontes de dados.',
      category: 'powerbi',
      tags: ['Power BI', 'Google Analytics', 'Marketing'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos', icon: Filter },
    { id: 'website', name: 'Sites', icon: Layout },
    { id: 'python', name: 'Python', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Globe },
    { id: 'powerbi', name: 'Power BI', icon: LineChart },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <main className="pt-20">
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-6xl mx-auto"
            >
              <h1 className="text-4xl font-bold text-primary mb-12 text-center">
                Nosso Portfólio
              </h1>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
                        activeCategory === category.id
                          ? 'bg-primary text-secondary'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-secondary rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-800 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
