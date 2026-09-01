import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const searchParam = searchParams.get('search');

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(1500);

  const categories = ['All', 'Living Room', 'Dining', 'Bedroom', 'Office'];


  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [categoryParam, searchParam]);

 
  let filtered = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  
  if (sortBy === 'low-high') filtered.sort((a, b) => a.price - b.price);
  if (sortBy === 'high-low') filtered.sort((a, b) => b.price - a.price);
  if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-stone-100 dark:border-stone-800 pb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-white">Catalog</h1>
          <p className="text-stone-500 text-sm mt-1">Browse our complete inventory of handcrafted furniture.</p>
        </div>
        
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <input 
            type="text"
            placeholder="Search furniture..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-stone-100 dark:bg-stone-800 border-none text-stone-800 dark:text-stone-200 text-sm rounded-lg px-4 py-2.5 w-full md:w-64 focus:ring-2 focus:ring-stone-900"/>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-stone-100 dark:bg-stone-800 border-none text-stone-800 dark:text-stone-200 text-sm rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-stone-900">
            <option value="featured">Sort by: Featured</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="space-y-6 bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl h-fit">
          <div className="flex items-center space-x-2 text-stone-900 dark:text-white font-medium">
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-stone-400 font-semibold">Categories</h3>
            <div className="flex flex-col space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left px-3 py-2 rounded-lg text-sm transition ${
                    selectedCategory === cat 
                      ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-medium' 
                      : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-700">
            <div className="flex justify-between text-xs uppercase tracking-wider text-stone-400 font-semibold">
              <span>Max Price</span>
              <span>${maxPrice}</span>
            </div>
            <input 
              type="range" 
              min="200" 
              max="1500" 
              step="50"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-stone-900 dark:accent-stone-100 cursor-pointer"/>
          </div>
        </div>

        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-stone-50 dark:bg-stone-800/50 rounded-2xl">
              <p className="text-stone-500 font-medium">No products match your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}