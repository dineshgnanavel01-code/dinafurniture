import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function Faqs() {
  const faqList = [
    {
      q: "What are your studio opening hours?",
      a: "Our Bengaluru studio is open by appointment from Tuesday to Sunday, 9:00 am to 6:00 pm."
    },
    {
      q: "Do you offer custom furniture design?",
      a: "Yes, we work closely with clients to craft bespoke furniture pieces tailored to specific room dimensions and aesthetics."
    },
    {
      q: "What is the typical delivery timeframe?",
      a: "Standard collection items are typically dispatched within 5-7 business days. Custom pieces may take 3-4 weeks."
    },
    {
      q: "What is your return policy?",
      a: "We accept returns on eligible non-custom items within 7 days of delivery in their original condition."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans px-4 sm:px-6 lg:px-12 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <a 
          href="/" 
          className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-800 transition-colors uppercase tracking-wider">
          <ArrowLeft className="w-3 h-3 mr-1.5" />
          Back to home
        </a>
      </div>

      <div className="max-w-4xl mx-auto">
        <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3">Support & Guidance</p>
        <h1 className="text-4xl font-serif mb-8 text-neutral-900">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {faqList.map((item, index) => (
            <div key={index} className="bg-neutral-50/50 border border-neutral-200/80 rounded-xl p-6">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">{item.q}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}