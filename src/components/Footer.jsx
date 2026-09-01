import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Headphones, RotateCcw, Sparkles, Sofa, Utensils, BedDouble, BriefcaseBusiness, ShoppingBag, LifeBuoy, PackageCheck, RefreshCcw, LockKeyhole } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 pt-20 pb-10 border-t border-stone-200 dark:border-stone-800 transition-colors duration-300 overflow-hidden" style={{ fontFamily: 'var(--font-primary)' }}>

      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Value Proposition Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-16 mb-16 border-b border-stone-200/80 dark:border-stone-800/80">
          
          <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-700/60 text-stone-800 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight">Free Delivery</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">On all orders above ₹4,999</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-700/60 text-stone-800 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight">Secure Warranty</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">3-year comprehensive warranty</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-700/60 text-stone-800 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight">Easy Returns</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Hassle-free 14-day return policy</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-800 shadow-sm hover:shadow-md hover:border-amber-500/30 dark:hover:border-amber-500/30 transition-all duration-300">
            <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-700/60 text-stone-800 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-stone-900 dark:text-stone-100 text-sm tracking-tight">24/7 Support</h4>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Dedicated customer assistance</p>
            </div>
          </div>

        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-stone-200/80 dark:border-stone-800/80">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="group inline-flex items-center space-x-2">
              <span className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>
                Furnics
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 group-hover:scale-125 transition-transform"></span>
            </Link>
            
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed max-w-sm">
              Crafting contemporary spaces with timeless elegance. Discover handcrafted furniture, ergonomic workspaces, and minimalist decor designed for modern living.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { label: 'Facebook', href: 'https://facebook.com', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { label: 'Twitter', href: 'https://twitter.com', path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' },
                { label: 'Youtube', href: 'https://youtube.com', path: 'M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 hover:bg-stone-900 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white hover:border-transparent transition-all duration-300 shadow-sm" 
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Shop All', to: '/shop', icon: ShoppingBag },
                { label: 'Living Room', to: '/shop?category=Living+Room', icon: Sofa },
                { label: 'Bedroom', to: '/shop?category=Bedroom', icon: BedDouble },
                { label: 'Dining Space', to: '/shop?category=Dining', icon: Utensils },
                { label: 'Office & Desks', to: '/shop?category=Office', icon: BriefcaseBusiness }
              ].map(({ label, to, icon: Icon }) => (
                <li key={label}>
                  <Link to={to} className="group flex items-center gap-2.5 rounded-xl px-2.5 py-2 -mx-2.5 text-stone-600 dark:text-stone-400 hover:bg-white dark:hover:bg-stone-800/80 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-500/15 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="flex-1">{label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest">Customer Care</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Contact Us', to: '/contact', icon: Headphones },
                { label: 'FAQs & Support', to: '/faq', icon: LifeBuoy },
                { label: 'Shipping & Delivery', to: '/shipping', icon: PackageCheck },
                { label: 'Returns & Refunds', to: '/returns', icon: RefreshCcw },
                { label: 'Privacy Policy', to: '/privacy', icon: LockKeyhole }
              ].map(({ label, to, icon: Icon }) => (
                <li key={label}>
                  <Link to={to} className="group flex items-center gap-2.5 rounded-xl px-2.5 py-2 -mx-2.5 text-stone-600 dark:text-stone-400 hover:bg-white dark:hover:bg-stone-800/80 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-500 dark:text-stone-400 group-hover:bg-amber-100 dark:group-hover:bg-amber-500/15 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                    </span>
                    <span className="flex-1">{label}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-widest">Stay Inspired</h4>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              Subscribe to receive updates, access to exclusive deals, and interior design tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-3 text-xs text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-amber-600 dark:focus:border-amber-500 transition-all shadow-sm"
                />
              </div>
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-2 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-semibold py-3 px-4 rounded-xl text-xs tracking-wide shadow-sm hover:bg-amber-600 dark:hover:bg-amber-500 dark:hover:text-white transition-all duration-300 group"
              >
                <span>Subscribe Now</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400">
          <p>© {new Date().getFullYear()} Furnics India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/terms" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-stone-900 dark:hover:text-stone-200 transition-colors">Cookie Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
