import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const [imgSrc, setImgSrc] = useState(product.image);

  return (
    <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      <div>
        <div className="aspect-square bg-stone-100 dark:bg-stone-800 rounded-xl overflow-hidden mb-4 relative">
          <img 
            src={imgSrc} 
            alt={product.name}
            onError={() => setImgSrc("https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80")}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
          
          <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
            <Link 
              to={`/product/${product.id}`}
              className="p-3 bg-white dark:bg-stone-900 text-stone-900 dark:text-white rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
              aria-label="Quick View">
              <Eye className="w-4 h-4" />
            </Link>
          </div>

          <button 
            onClick={() => toggleWishlist(product)}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm z-10 ${
              isWishlisted 
                ? 'bg-rose-500 text-white scale-105' 
                : 'bg-white/80 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 hover:scale-110 hover:bg-white dark:hover:bg-stone-900'
            }`}
            aria-label="Wishlist"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold">{product.category}</span>
        <h3 className="font-serif font-bold text-stone-900 dark:text-white text-lg mt-1 line-clamp-1 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
          {product.name}
        </h3>
        <p className="text-stone-900 dark:text-white font-bold mt-2 text-base">${product.price}</p>
      </div>

      <div className="mt-6 flex items-center gap-2">
        <button 
          onClick={() => addToCart(product)}
          className="flex-1 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-2.5 px-4 rounded-xl text-xs font-medium flex items-center justify-center space-x-2 hover:bg-stone-800 dark:hover:bg-stone-200 transition-all shadow-sm active:scale-95">
          <ShoppingBag className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>

        <Link 
          to={`/product/${product.id}`}
          className="px-3.5 py-2.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:bg-stone-900 hover:text-white dark:hover:bg-stone-100 dark:hover:text-stone-900 text-xs font-medium transition-all duration-300 flex items-center justify-center whitespace-nowrap shadow-sm active:scale-95">
          View Details
        </Link>
      </div>
    </div>
  );
}