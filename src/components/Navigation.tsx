import { useState, useEffect } from 'react';
import { Button } from './ui/button';

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
        
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:text-[#0F0] hover:bg-transparent font-mono"
            onClick={() => window.open('https://ca.com', '_blank')}
          >
            CA
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-[#0F0] hover:bg-transparent font-mono"
            onClick={() => window.open('https://twitter.com', '_blank')}
          >
            TWITTER
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-[#0F0] hover:bg-transparent font-mono"
            onClick={() => window.open('https://telegram.org', '_blank')}
          >
            TELEGRAM
          </Button>
        </div>
      </div>
    </nav>
  );
};