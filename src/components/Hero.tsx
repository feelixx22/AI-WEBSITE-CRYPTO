export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5" />
      <div className="container mx-auto px-6 py-32 text-center reveal">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
          Elevate Your Experience
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Discover a new dimension of luxury and innovation, where every detail is crafted to perfection.
        </p>
        <button className="bg-primary text-white px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105">
          Explore Now
        </button>
      </div>
    </section>
  );
};