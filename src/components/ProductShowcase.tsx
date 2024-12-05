export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">
              Advanced Solutions
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Pushing the boundaries of what's possible with cutting-edge technology and innovative design.
            </p>
            <div className="space-y-4">
              {['AI Integration', 'Quantum Computing', 'Neural Networks'].map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-1 h-1 bg-[#9b87f5]" />
                  <span className="text-sm tracking-wider">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative reveal">
            <div className="aspect-square bg-gradient-to-tr from-[#9b87f5]/20 to-transparent border border-[#9b87f5]/20 p-8">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                alt="Tech Innovation"
                className="w-full h-full object-cover mix-blend-luminosity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};