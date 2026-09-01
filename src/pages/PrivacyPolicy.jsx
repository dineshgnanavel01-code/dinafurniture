import React from 'react';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans px-4 sm:px-6 lg:px-12 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <a href="/" className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-800 transition-colors uppercase tracking-wider">
          <ArrowLeft className="w-3 h-3 mr-1.5" /> Back to home
        </a>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
          <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
        </div>
        <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Security & Trust</p>
        <h1 className="text-4xl font-serif mb-6 text-neutral-900">Privacy Policy</h1>
        <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
          <p>Your privacy is important to us. This policy outlines how we collect, use, and safeguard your personal information when you visit our studio or browse our website.</p>
          <p>We collect details such as your name, email, phone number, and delivery address strictly to process orders and improve your customer care experience. We never sell or share your data with unauthorized third parties.</p>
        </div>
      </div>
    </div>
  );
}