import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Footer />
    </main>
  );
};