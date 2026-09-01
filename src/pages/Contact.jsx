import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'I have a question',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans px-4 sm:px-6 lg:px-12 py-8">
      
      <div className="max-w-7xl mx-auto mb-8">
        <a 
          href="/" 
          className="inline-flex items-center text-xs text-neutral-500 hover:text-neutral-800 transition-colors uppercase tracking-wider">
          <ArrowLeft className="w-3 h-3 mr-1.5" />
          Back to home
        </a>
      </div>

     
      <header className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
        <div className="lg:col-span-7">
          <p className="text-amber-600 text-xs font-semibold tracking-widest uppercase mb-3 flex items-center gap-1.5">
            <span>✨</span> Let's make room for good things
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal leading-tight text-neutral-900">
            A thoughtful answer is <br className="hidden sm:inline" />
            <span className="text-amber-700">just a note away.</span>
          </h1>
        </div>
        <div className="lg:col-span-5 lg:pt-6">
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Whether you are choosing a new centrepiece or planning an entire room, our team is here to help you find furniture that feels like home.
          </p>
        </div>
      </header>

      
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        
        <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
            <Phone className="w-5 h-5 stroke-[1.5]" />
          </div>
          <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase mb-1">Call our studio</p>
          <p className="text-lg font-medium text-neutral-900 mb-1">+91 80 4567 8900</p>
          <p className="text-xs text-neutral-500">Mon - Sat, 9:00 am - 6:00 pm</p>
        </div>

       
        <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
            <Mail className="w-5 h-5 stroke-[1.5]" />
          </div>
          <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase mb-1">Write to us</p>
          <p className="text-lg font-medium text-neutral-900 mb-1">hello@furnics.in</p>
          <p className="text-xs text-neutral-500">We reply within one business day</p>
        </div>

       
        <div className="bg-white border border-neutral-200/80 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-10 h-10 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
            <MapPin className="w-5 h-5 stroke-[1.5]" />
          </div>
          <p className="text-[10px] font-semibold tracking-widest text-neutral-400 uppercase mb-1">Visit the studio</p>
          <p className="text-lg font-medium text-neutral-900 mb-1">Chennai, Tamil Nadu</p>
          <p className="text-xs text-neutral-500">By appointment, Tue - Sun</p>
        </div>
      </section>

      
      <main className="max-w-7xl mx-auto bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
        
       
        <div className="lg:col-span-5 bg-[#171717] text-white p-8 sm:p-12 relative flex flex-col justify-between overflow-hidden">
          
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-8">
              <span className="font-serif italic font-bold">F</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-4 leading-snug">
              Come say hello.
            </h2>
            
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Our chennai studio is a calm space to experience the collection in person.
            </p>
          </div>

          <div className="relative z-10 mt-16 pt-8 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs font-medium tracking-widest uppercase text-amber-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Open by appointment
            </span>
          </div>

     
          <div className="absolute -bottom-16 -right-16 w-48 h-48 border border-amber-500/20 rounded-full pointer-events-none"></div>
        </div>

       
        <div className="lg:col-span-7 p-8 sm:p-12 bg-white relative">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-[10px] font-semibold tracking-widest text-amber-600 uppercase mb-1">Start a conversation</p>
              <h3 className="text-2xl font-serif text-neutral-900">How can we help?</h3>
            </div>
            <MessageSquare className="w-6 h-6 text-neutral-300 stroke-[1.5]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">Your name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ananya Sharma" 
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
              </div>

              
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">Email address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com" 
                  required
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">Phone number <span className="text-neutral-400 font-normal">(optional)</span></label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210" 
                  className="w-full bg-neutral-50/50 border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all"/>
              </div>

              
              <div>
                <label className="block text-xs font-medium text-neutral-500 mb-2">What can we help with?</label>
                <div className="relative">
                  <select 
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full bg-neutral-50/50 border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 appearance-none focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all cursor-pointer pr-10">
                    <option>I have a question</option>
                    <option>Book a studio appointment</option>
                    <option>Custom furniture inquiry</option>
                    <option>Order status & support</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-neutral-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            
            <div>
              <label className="block text-xs font-medium text-neutral-500 mb-2">Your message</label>
              <textarea 
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little about what you're looking for..." 
                required
                className="w-full bg-neutral-50/50 border border-neutral-200 rounded-lg p-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all resize-none"
              ></textarea>
            </div>

           
            <div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors shadow-sm cursor-pointer">
                <Send className="w-4 h-4" />
                Send message
              </button>
            </div>
          </form>
        </div>

      </main>
    </div>
  );
}