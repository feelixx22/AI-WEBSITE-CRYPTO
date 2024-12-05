export const ProductShowcase = () => {
  return (
    <section id="products" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center reveal">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-wider text-gray-500">Premium Collection</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Crafted for Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every piece in our collection represents the perfect harmony between form and function,
              designed to enhance your everyday experiences.
            </p>
          </div>
          <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
              alt="Premium Product"
              className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};