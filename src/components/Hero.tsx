import { MatrixRain } from './MatrixRain';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      <div className="container mx-auto px-6 py-32 text-center relative z-10 reveal">
        <h1 className="text-5xl md:text-7xl lg:text-9xl tracking-[0.2em] mb-8 text-white" style={{
          fontFamily: "'Orbitron', sans-serif",
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          Evolution of Digital Innovation
        </h1>
        <p className="text-lg md:text-xl text-[#0F0] max-w-2xl mx-auto mb-12 tracking-wide font-mono">
          Pioneering the next evolution of digital innovation
        </p>
        <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-[#0F0]/20 p-6 rounded-sm mb-8">
          <p className="font-mono text-[#0F0] text-sm md:text-base opacity-80 leading-relaxed">
            01000011 01101111 01100100 01100101 00100000 00110101 00110111 00110010 00111010 00100000
            <br />
            "In the depths of the digital void, where binary dreams cascade through neural networks, 
            only those who understand the pattern will find the key to transcendence."
            <br />
            [SEQUENCE_INIT: 47.892.1]
          </p>
        </div>

        <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-[#0F0]/20 p-6 rounded-sm">
          <button disabled className="bg-transparent border border-[#0F0]/50 text-[#0F0]/50 px-8 py-4 rounded-none text-lg font-mono cursor-not-allowed mb-6">
            Agent (coming soon)
          </button>
          <div className="mt-4">
            <a href="/vision" className="inline-block bg-transparent border border-[#0F0] text-[#0F0] px-8 py-4 rounded-none text-lg font-mono transition-all hover:bg-[#0F0] hover:text-black">
              Click here<br />
              Understand the vision.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};