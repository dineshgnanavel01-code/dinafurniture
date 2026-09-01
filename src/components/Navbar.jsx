import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Sun, Moon, User, Menu, X, Search, Compass, LayoutGrid, Sofa, Utensils, Bed, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const { cart, wishlist, darkMode, toggleDarkMode } = useCart();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const [activePath, setActivePath] = useState(location.pathname + location.search);

  useEffect(() => {
    setActivePath(location.pathname + location.search);
  }, [location.pathname, location.search]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActiveLink = (path) => {
    try {
      const currentUrl = new URL(activePath, window.location.origin);
      const targetUrl = new URL(path, window.location.origin);

      if (currentUrl.pathname !== targetUrl.pathname) return false;

      const currentParams = currentUrl.searchParams;
      const targetParams = targetUrl.searchParams;

      if (targetParams.size === 0) {
        return currentParams.size === 0;
      }

      for (const [key, value] of targetParams.entries()) {
        if (currentParams.get(key) !== value) {
          return false;
        }
      }
      return true;
    } catch {
      return activePath === path;
    }
  };

  const navItems = [
    { name: 'Discover', path: '/', icon: Compass },
    { name: 'Collection', path: '/shop', icon: LayoutGrid },
    { name: 'Living', path: '/shop?category=Living+Room', icon: Sofa },
    { name: 'Dining', path: '/shop?category=Dining', icon: Utensils },
    { name: 'Bedroom', path: '/shop?category=Bedroom', icon: Bed },
    { name: 'Studio', path: '/shop?category=Office', icon: Briefcase }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 ${
        scrolled ? 'shadow-md py-3' : 'py-4'
      }`} style={{ fontFamily: 'var(--font-primary)' }}>
        
        <div className="border-b border-stone-200/60 dark:border-stone-800/60 bg-stone-100/50 dark:bg-stone-900/50 py-1.5 px-4 sm:px-6 lg:px-8 mb-3 -mt-4 -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="container-custom mx-auto flex items-center justify-between text-[11px] tracking-wider uppercase text-stone-500 dark:text-stone-400 font-medium">
            <span>Thoughtful furniture for modern living</span>
            <span className="flex items-center gap-1.5 text-stone-700 dark:text-stone-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse"></span>
              Free delivery above ₹4,999
            </span>
          </div>
        </div>

        <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between relative">
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-lg transition"
                aria-label="Toggle Menu">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              <Link to="/" className="group flex items-center space-x-2">
                <span className="text-2xl font-extrabold tracking-tight text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>Furnics</span>
                <span className="w-2 h-2 rounded-full bg-amber-600 transition-transform group-hover:scale-150"></span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-1 bg-stone-200/70 dark:bg-stone-800/80 p-1.5 rounded-2xl border border-stone-300/40 dark:border-stone-700/50 shadow-inner relative">
              {navItems.map((item) => {
                const active = isActiveLink(item.path);
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-3.5 py-1.5 rounded-xl text-xs font-medium tracking-wide transition-colors duration-200 z-10 flex items-center space-x-1.5"
                    style={{ fontFamily: 'var(--font-primary)' }}>
                    {active && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-stone-900 dark:bg-stone-100 rounded-xl shadow-sm z-[-1]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <IconComponent className={`w-3.5 h-3.5 ${active ? 'text-white dark:text-stone-900' : 'text-stone-400 dark:text-stone-500'}`} />
                    <span className={active ? 'text-white dark:text-stone-900 font-semibold' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-1.5 sm:space-x-2.5">
              
              <div className="relative flex items-center">
                <AnimatePresence>
                  {searchOpen && (
                    <motion.form 
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '220px', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      onSubmit={handleSearchSubmit}
                      className="absolute right-0 flex items-center bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 shadow-sm overflow-hidden z-20">
                      <input
                        type="text"
                        placeholder="Search collection..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full py-1.5 pl-3 pr-8 text-xs bg-transparent text-stone-800 dark:text-stone-100 focus:outline-none"/>
                      <button type="submit" className="absolute right-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200">
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

                <button 
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl transition"
                  aria-label="Search">
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <button 
                onClick={toggleDarkMode}
                className="p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl transition"
                aria-label="Toggle Theme">
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>

              <Link 
                to="/wishlist" 
                className="relative p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-xl transition"
                aria-label="Wishlist">
                <Heart className="w-5 h-5" />
                {wishlist?.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-amber-600 rounded-full"></span>
                )}
              </Link>

              <Link 
                to="/cart" 
                className="flex items-center space-x-1.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-3.5 py-2 rounded-xl text-xs font-semibold shadow-sm hover:opacity-90 transition"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{totalItems}</span>
              </Link>

              <button 
                onClick={() => setIsAuthOpen(true)}
                className="hidden sm:flex items-center space-x-1 border border-stone-300 dark:border-stone-700 px-3 py-2 rounded-xl text-xs font-medium text-stone-700 dark:text-stone-300 hover:border-stone-400 transition">
                <User className="w-4 h-4 text-amber-600" />
                <span>Account</span>
              </button>

            </div>

          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 px-4 py-6 space-y-3 mt-4">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                      isActiveLink(item.path) 
                        ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900' 
                        : 'text-stone-600 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                    }`}>
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between px-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); setIsAuthOpen(true); }}
                  className="flex items-center space-x-2 text-sm font-medium text-stone-700 dark:text-stone-300">
                  <User className="w-4 h-4 text-amber-600" />
                  <span>Account / Sign In</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}