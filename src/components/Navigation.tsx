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
      isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl tracking-[0.2em] font-light text-white" style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          AI<span className="text-[#0F0] font-bold">FT</span>
        </a>
      </div>
    </nav>
  );
};