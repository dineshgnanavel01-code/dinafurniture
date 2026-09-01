import React from 'react';

export default function Hero() {
  return (
    <section className="relative bg-stone-100 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest bg-stone-200 text-stone-800 px-3 py-1 rounded-full font-semibold">
            New Modern Collection
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight">
            Design Your Space With Elegance.
          </h1>
          <p className="text-stone-600 text-lg max-w-lg">
            Discover handcrafted furniture pieces built for comfort, curated for modern living spaces.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#shop" className="bg-stone-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition">
              Explore Shop
            </a>
          </div>
        </div>
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80" 
            alt="Modern Interior Living Room" 
            className="rounded-2xl shadow-2xl object-cover w-full h-450px"
          />
        </div>
      </div>
    </section>
  );
}