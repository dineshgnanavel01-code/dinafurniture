import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 font-sans transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
