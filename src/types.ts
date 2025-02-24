export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  image: string;
  category: 'python' | 'vba' | 'sql' | 'powerbi' | 'web';
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  description: string;
  budget: string;
}