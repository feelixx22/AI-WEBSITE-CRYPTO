export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475"
          alt="Tech Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
      <div className="container mx-auto px-6 py-32 text-center relative z-10 reveal">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tighter text-white">
          FUTURE<span className="text-[#9b87f5]">TECH</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 tracking-wide">
          Pioneering the next evolution of digital innovation
        </p>
        <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-[#9b87f5]/20 p-6 rounded-sm mb-8">
          <p className="font-mono text-[#9b87f5] text-sm md:text-base opacity-80 leading-relaxed">
            01000011 01101111 01100100 01100101 00100000 00110101 00110111 00110010 00111010 00100000
            <br />
            "In the depths of the digital void, where binary dreams cascade through neural networks, 
            only those who understand the pattern will find the key to transcendence."
            <br />
            [SEQUENCE_INIT: 47.892.1]
          </p>
        </div>
        <button className="bg-transparent border border-[#9b87f5] text-[#9b87f5] px-8 py-4 rounded-none text-lg font-medium transition-all hover:bg-[#9b87f5] hover:text-white mb-16">
          Enter
        </button>

        <div className="max-w-lg mx-auto bg-black/40 backdrop-blur-sm border border-[#9b87f5]/20 p-6 rounded-sm">
          <button disabled className="bg-transparent border border-[#9b87f5]/50 text-[#9b87f5]/50 px-8 py-4 rounded-none text-lg font-medium cursor-not-allowed">
            Agent (coming soon)
          </button>
        </div>
      </div>
    </section>
  );
};