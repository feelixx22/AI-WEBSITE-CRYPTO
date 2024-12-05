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
        <button className="bg-transparent border border-[#9b87f5] text-[#9b87f5] px-8 py-4 rounded-none text-lg font-medium transition-all hover:bg-[#9b87f5] hover:text-white">
          Enter
        </button>
      </div>
    </section>
  );
};