<<<<<<< HEAD
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
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    label: 'Call our studio',
    value: '+91 80 4567 8900',
    detail: 'Mon–Sat, 9:00 am – 6:00 pm',
    href: 'tel:+918045678900',
  },
  {
    icon: Mail,
    label: 'Write to us',
    value: 'hello@furnics.in',
    detail: 'We reply within one business day',
    href: 'mailto:hello@furnics.in',
  },
  {
    icon: MapPin,
    label: 'Visit the studio',
    value: 'Indiranagar, Bengaluru',
    detail: 'By appointment, Tue–Sun',
    href: 'https://maps.google.com/?q=Indiranagar+Bengaluru',
  },
];

const initialForm = { name: '', email: '', phone: '', subject: 'I have a question', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden" style={{ fontFamily: 'var(--font-primary)' }}>
      <section className="relative border-b border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-950">
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl dark:bg-amber-500/10" />
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border-[36px] border-amber-500/10" />
        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
          <Link to="/" className="mb-12 inline-flex items-center gap-2 text-xs font-semibold text-stone-500 transition hover:text-amber-600 dark:text-stone-400 dark:hover:text-amber-400">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-600 dark:text-amber-400">
                <Sparkles className="h-4 w-4" />
                Let’s make room for good things
              </div>
              <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-stone-900 dark:text-white sm:text-6xl lg:text-7xl" style={{ fontFamily: 'var(--font-secondary)' }}>
                A thoughtful answer is <span className="text-amber-600 dark:text-amber-400">just a note away.</span>
              </h1>
            </div>
            <p className="max-w-md text-base leading-8 text-stone-600 dark:text-stone-300 lg:pb-1 lg:text-lg">
              Whether you are choosing a new centrepiece or planning an entire room, our team is here to help you find furniture that feels like home.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {contactDetails.map(({ icon: Icon, label, value, detail, href }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-amber-600/50">
              <span className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-stone-900 transition group-hover:bg-amber-600 group-hover:text-white dark:bg-stone-800 dark:text-amber-400 dark:group-hover:bg-amber-500 dark:group-hover:text-stone-950">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500">{label}</p>
              <p className="text-lg font-semibold text-stone-900 dark:text-white">{value}</p>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">{detail}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-3xl border border-stone-200 bg-stone-50 dark:border-stone-800 dark:bg-stone-900/60 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-[270px] overflow-hidden bg-stone-900 p-8 text-white sm:p-10">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(135deg, transparent 0 48%, rgba(245,158,11,.24) 49% 50%, transparent 51%), linear-gradient(45deg, transparent 0 48%, rgba(255,255,255,.08) 49% 50%, transparent 51%)', backgroundSize: '70px 70px' }} />
            <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full border border-amber-400/30" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-stone-950"><MapPin className="h-5 w-5" /></span>
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-secondary)' }}>Come say hello.</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-stone-300">Our Bengaluru studio is a calm corner to experience the collection in person.</p>
              </div>
              <div className="mt-10 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300"><Clock3 className="h-4 w-4" /> Open by appointment</div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex h-full min-h-[360px] flex-col items-start justify-center">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400"><Check className="h-7 w-7" /></span>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Message received</p>
                <h2 className="text-3xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>We’ll be in touch soon.</h2>
                <p className="mt-4 max-w-md leading-7 text-stone-600 dark:text-stone-300">Thank you for reaching out. A member of our studio team will get back to you within one business day.</p>
                <button type="button" onClick={() => { setSubmitted(false); setForm(initialForm); }} className="mt-8 text-sm font-semibold text-amber-700 underline decoration-amber-300 underline-offset-4 transition hover:text-amber-500 dark:text-amber-400">Send another message</button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-start justify-between gap-4"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600 dark:text-amber-400">Start a conversation</p><h2 className="text-3xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>How can we help?</h2></div><MessageCircle className="hidden h-7 w-7 text-stone-300 sm:block dark:text-stone-700" /></div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Your name<input required name="name" value={form.name} onChange={handleChange} placeholder="Ananya Sharma" className="contact-input" /></label><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Email address<input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="contact-input" /></label></div>
                  <div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">Phone number <span className="font-normal text-stone-400">(optional)</span><input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="contact-input" /></label><label className="text-xs font-semibold text-stone-700 dark:text-stone-300">What can we help with?<select name="subject" value={form.subject} onChange={handleChange} className="contact-input"><option>I have a question</option><option>Product guidance</option><option>Order support</option><option>Studio visit</option><option>Trade & collaborations</option></select></label></div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300">Your message<textarea required name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Tell us a little about what you’re looking for..." className="contact-input resize-none" /></label>
                  <button type="submit" className="group inline-flex items-center gap-3 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-amber-600 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-amber-500 dark:hover:text-white"><Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-0.5" /> Send message</button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
>>>>>>> 7f98e5724ab276abea0d5fd73ea7d538bfc1055b
