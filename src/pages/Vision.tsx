const Vision = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
          Our <span className="text-[#9b87f5]">Vision</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Coming soon...
        </p>
        <a 
          href="/" 
          className="mt-8 inline-block bg-transparent border border-[#9b87f5] text-[#9b87f5] px-8 py-4 rounded-none text-lg font-medium transition-all hover:bg-[#9b87f5] hover:text-white"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Vision;