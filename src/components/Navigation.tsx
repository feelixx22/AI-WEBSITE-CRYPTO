import { useState, useEffect } from 'react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold">
          Premium
        </a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#products" className="hover-link">Products</a>
          <a href="#about" className="hover-link">About</a>
          <a href="#contact" className="hover-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};