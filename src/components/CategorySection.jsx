import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80',
  }
];

export default function CategorySection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">Shop by Category</h2>
        <p className="text-stone-500">Explore thoughtfully crafted sections designed for every corner of your home.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link 
            to="/shop" 
            key={cat.name} 
            className="group relative h-80 rounded-2xl overflow-hidden block shadow-sm hover:shadow-md transition">
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
            />
            <div className="absolute inset-0 bg-stone-900/40 flex items-end p-6">
              <h3 className="text-xl font-serif font-medium text-white">{cat.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}