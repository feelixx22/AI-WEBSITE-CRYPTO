import { MatrixRain } from '../components/MatrixRain';
import { Navigation } from '../components/Navigation';

const Vision = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <MatrixRain />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl tracking-[0.2em] mb-8 text-white" style={{
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: '0.2em',
            textTransform: 'uppercase'
          }}>
            Our <span className="text-[#0F0] font-bold">Vision</span>
          </h1>
          <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-[#0F0]/20 p-6 rounded-sm mb-8">
            <p className="font-mono text-[#0F0] text-sm md:text-base opacity-80 leading-relaxed">
            
        
              Deep within the digital frontier, $EDI emerges as a bridge between human potential and artificial intelligence. We're creating something that feels like magic yet remains grounded in science - a partner in humanity's next great leap forward. Where others see lines of code, we see endless possibilities waiting to be unlocked.
              <br />
              [SEQUENCE_INIT: 89.233.4]
            </p>
          </div>
          <a 
            href="/" 
            className="bg-transparent border border-[#0F0] text-[#0F0] px-8 py-4 rounded-none text-lg font-mono transition-all hover:bg-[#0F0] hover:text-black"
          >
            Return to Base
          </a>
        </div>
      </section>
    </div>
  );
};

export default Vision;