import React from 'react';
import { ContactForm } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Contact: React.FC = () => {
  return (
    <>
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};