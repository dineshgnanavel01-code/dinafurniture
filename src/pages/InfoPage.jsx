import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export default function InfoPage({ title, eyebrow, description }) {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 animate-fade-in" style={{ fontFamily: 'var(--font-primary)' }}>
      <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-stone-500 hover:text-amber-600 transition-colors mb-10">
        <ArrowLeft className="w-4 h-4" />
        Back to home
      </Link>
      <section className="relative overflow-hidden rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 px-6 py-16 sm:px-16 sm:py-20">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-200/30 dark:bg-amber-500/10 blur-3xl" />
        <div className="relative max-w-2xl">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-4 h-4" />
            {eyebrow}
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>{title}</h1>
          <p className="mt-6 text-base leading-8 text-stone-600 dark:text-stone-300">{description}</p>
          <Link to="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-500 dark:hover:text-white">
            Explore collection
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

