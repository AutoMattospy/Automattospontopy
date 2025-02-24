import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Terminal, Github, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Terminal className="h-8 w-8 text-primary" />
              <span className="text-primary font-bold text-xl">Automattos.py</span>
            </Link>
            <p className="text-gray-400">
              {t('footer.description', 'Transformando negócios através de soluções inteligentes de automação')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.solutions', 'Soluções')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Python Automation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Data Integration</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Business Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company', 'Empresa')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-primary transition-colors">{t('nav.portfolio')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.social', 'Social')}</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/AutoMattospy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/automattos.py/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {year} Automattos.py. {t('footer.rights', 'Todos os direitos reservados.')}
          </p>
        </div>
      </div>
    </footer>
  );
};