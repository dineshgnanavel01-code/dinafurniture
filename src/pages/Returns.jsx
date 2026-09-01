import React from 'react';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function Returns() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans px-4 sm:px-6 lg:px-12 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <a href="/" className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-800 transition-colors uppercase tracking-wider">
          <ArrowLeft className="w-3 h-3 mr-1.5" /> Back to home
        </a>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
          <RefreshCw className="w-5 h-5 stroke-[1.5]" />
        </div>
        <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Guarantees</p>
        <h1 className="text-4xl font-serif mb-6 text-neutral-900">Returns & Refunds</h1>
        <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
          <p>We want you to love what you bring home. If you are not entirely satisfied with your purchase, eligible items can be returned within 7 days of delivery.</p>
          <p>Items must be unused, in their original packaging, and accompanied by the receipt or proof of purchase. Custom or bespoke orders are final sale and cannot be returned.</p>
        </div>
      </div>
    </div>
  );
}