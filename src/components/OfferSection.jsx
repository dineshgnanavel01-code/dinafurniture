import React from 'react';
import { Link } from 'react-router-dom';

export default function OfferSection() {
  return (
    <section className="py-16 max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-lg z-10">
          <span className="text-xs uppercase tracking-widest bg-stone-800 text-stone-300 px-3 py-1 rounded-full font-semibold">
            Limited Time Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight">
            Up to 40% Off Seasonal Living Essentials
          </h2>
          <p className="text-stone-400">
            Refresh your interiors with our handcrafted statement furniture at exclusive promotional prices.
          </p>
          <div>
            <Link 
              to="/shop" 
              className="inline-block bg-white text-stone-900 px-8 py-3.5 rounded-full font-medium hover:bg-stone-100 transition"
            >
              Claim Offer
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 z-10">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" 
            alt="Special Offer Furniture" 
className="rounded-2xl object-cover w-full h-80 shadow-lg"          />
        </div>
      </div>
    </section>
  );
}