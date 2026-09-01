import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Star, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [qty, setQty] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Safely find product using string/number parsing
  const product = products.find((p) => String(p.id) === String(id)) || products[0];
  const isWishlisted = wishlist.some((item) => String(item.id) === String(product?.id));

  if (!product) {
    return (
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate('/shop')} 
          className="px-6 py-2 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 rounded-full"
        >
          Back to Collection
        </button>
      </div>
    );
  }

  // Simulated multi-image gallery using variations of the main image
  const gallery = [
    product.image,
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ fontFamily: 'var(--font-primary)' }}>
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center space-x-2 text-stone-600 dark:text-stone-400 mb-8 hover:text-stone-900 dark:hover:text-white transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-stone-100 dark:bg-stone-800 rounded-2xl overflow-hidden shadow-sm">
            <img src={gallery[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedImage(index)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition ${
                  selectedImage === index ? 'border-purple-600 dark:border-purple-400' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-widest bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full font-semibold">
            {product.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>{product.name}</h1>
          
          <div className="flex items-center space-x-2 text-amber-500 font-semibold">
            <Star className="w-4 h-4 fill-current" />
            <span>{product.rating} / 5.0</span>
          </div>

          <p className="text-2xl font-bold text-stone-900 dark:text-white">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed">{product.description}</p>

          <div className="flex items-center space-x-4 pt-4">
            <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-full">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-l-full">-</button>
              <span className="px-4 font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-r-full">+</button>
            </div>
            
            <button 
              onClick={() => addToCart(product, qty)}
              className="flex-1 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-3.5 px-6 rounded-full font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition shadow-md"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>

            <button 
              onClick={() => toggleWishlist(product)}
              className={`p-3.5 rounded-full border transition ${
                isWishlisted 
                  ? 'bg-rose-500 border-rose-500 text-white shadow-md' 
                  : 'border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}