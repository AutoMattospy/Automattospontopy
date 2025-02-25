import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            {t('contact.title', 'Entre em Contato')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t('contact.info.title', 'Informações de Contato')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary w-6 h-6" />
                  <span className="text-gray-300">automattos09@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary w-6 h-6" />
                  <span className="text-gray-300">+55 (51) 99413-9287</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary w-6 h-6" />
                  <span className="text-gray-300">Dois Irmãos, RS - Brasil</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  {t('contact.form.name', 'Nome')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  {t('contact.form.email', 'Email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  {t('contact.form.message', 'Mensagem')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-secondary font-semibold py-3 px-6 rounded hover:bg-primary-dark transition-colors"
              >
                {t('contact.form.submit', 'Enviar Mensagem')}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
