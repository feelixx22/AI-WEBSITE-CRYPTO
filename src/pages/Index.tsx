import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { ProductShowcase } from '../components/ProductShowcase';
import { Footer } from '../components/Footer';
import { ScrollProgress } from '../components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <ProductShowcase />
      <Footer />
    </div>
  );
};

export default Index;