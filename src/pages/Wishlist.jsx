import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 animate-fade-in" style={{ fontFamily: 'var(--font-primary)' }}>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <Heart className="w-4 h-4 fill-current" />
            Your saved pieces
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>
            Favorites
          </h1>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-2">
            Keep the pieces you love close while you shape your space.
          </p>
        </div>
        {wishlist.length > 0 && (
          <span className="self-start sm:self-auto inline-flex items-center rounded-full bg-stone-100 dark:bg-stone-800 px-4 py-2 text-xs font-semibold text-stone-600 dark:text-stone-300">
            {wishlist.length} {wishlist.length === 1 ? 'piece' : 'pieces'} saved
          </span>
        )}
      </div>

      {wishlist.length === 0 ? (
        <section className="relative overflow-hidden rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 px-6 py-20 text-center">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-200/30 dark:bg-amber-500/10 blur-3xl" />
          <div className="relative mx-auto max-w-md">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-stone-900 text-rose-500 shadow-sm border border-stone-200 dark:border-stone-700">
              <Heart className="w-7 h-7" />
            </div>
            <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 mb-3">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Make it yours</span>
            </div>
            <h2 className="text-2xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>Your favorites are waiting</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400">Tap the heart on any piece you love and it will appear here for easy access later.</p>
            <Link to="/shop" className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-600 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-500 dark:hover:text-white">
              Explore collection
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </main>
  );
}

