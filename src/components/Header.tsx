import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'pt' : 'en');
  };

  return (
    <header className="bg-secondary py-4 fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="h-8 w-8 text-primary" />
          <span className="text-primary font-bold text-xl">Automattos.py</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link to="/" className="text-white hover:text-primary transition-colors">
            {t('nav.home')}
          </Link>
          <Link to="/portfolio" className="text-white hover:text-primary transition-colors">
            {t('nav.portfolio')}
          </Link>
          <Link to="/about" className="text-white hover:text-primary transition-colors">
            {t('nav.about')}
          </Link>
          <Link to="/contact" className="text-white hover:text-primary transition-colors">
            {t('nav.contact')}
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 border border-primary text-primary rounded hover:bg-primary hover:text-secondary transition-colors"
          >
            {i18n.language === 'en' ? 'PT' : 'EN'}
          </button>
        </div>
      </nav>
    </header>
  );
};