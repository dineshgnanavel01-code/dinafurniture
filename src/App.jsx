import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import InfoPage from './pages/InfoPage';
import Contact from './pages/Contact';
import { Footer } from './components/Footer';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-sans transition-colors duration-300">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<InfoPage title="FAQs & Support" eyebrow="Helpful answers" description="Find clear answers about shopping, payments, delivery, care, and returns. If you need anything else, our support team is only a message away." />} />
            <Route path="/shipping" element={<InfoPage title="Shipping & Delivery" eyebrow="Delivered with care" description="We carefully prepare every order and keep you updated from checkout to doorstep delivery." />} />
            <Route path="/returns" element={<InfoPage title="Returns & Refunds" eyebrow="Shop with confidence" description="If a piece is not the right fit for your home, our straightforward return support is here to make the next step simple." />} />
            <Route path="/privacy" element={<InfoPage title="Privacy Policy" eyebrow="Your trust matters" description="We respect your privacy and use your information only to provide a safe, thoughtful shopping experience." />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
