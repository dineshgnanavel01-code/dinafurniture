import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight, ShieldCheck, Smartphone, Banknote, CreditCard, QrCode } from 'lucide-react';
export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [upiId, setUpiId] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 499 : 0;
  
  const gst = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + gst;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === 'upi' && !upiId.trim()) {
      alert('Please enter a valid UPI ID');
      return;
    }

    setIsCheckingOut(true);
    setTimeout(() => {
      alert(`Order placed successfully using ${paymentMethod.toUpperCase()}! Thank you for shopping with Furnics.`);
      clearCart();
      navigate('/');
    }, 1500);
  };

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 space-y-4 max-w-md mx-auto px-4 animate-fade-in" style={{ fontFamily: 'var(--font-primary)' }}>
        <h2 className="text-2xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>Your cart is empty</h2>
        <p className="text-stone-500 text-sm">Discover our collection and find something special for your home.</p>
        <div>
          <Link to="/shop" className="inline-block bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-6 py-3 rounded-full font-medium text-sm transition hover:opacity-90">
            Explore Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in" style={{ fontFamily: 'var(--font-primary)' }}>
      <h1 className="text-3xl font-bold text-stone-900 dark:text-white mb-8" style={{ fontFamily: 'var(--font-secondary)' }}>Shopping Cart & Secure Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-4">Review Items ({cart.length})</h2>
          
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-stone-50 dark:bg-stone-800/50 rounded-2xl gap-4 border border-stone-200/60 dark:border-stone-700/50 shadow-sm">
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                <div>
                  <h3 className="font-medium text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>{item.name}</h3>
                  <p className="text-sm text-stone-500">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full sm:w-auto space-x-6">
                <div className="flex items-center border border-stone-200 dark:border-stone-700 rounded-lg bg-white dark:bg-stone-900">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-sm text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-l-lg">-</button>
                  <span className="px-3 text-sm font-medium text-stone-900 dark:text-white">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-sm text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-r-lg">+</button>
                </div>
                
                <span className="font-bold text-stone-900 dark:text-white w-24 text-right">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>

                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-rose-500 p-2 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg transition"
                  title="Remove Item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl h-fit space-y-6 border border-stone-200/60 dark:border-stone-700/50 shadow-sm">
          <h3 className="text-lg font-bold text-stone-900 dark:text-white" style={{ fontFamily: 'var(--font-secondary)' }}>Order Summary</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-stone-600 dark:text-stone-300 text-sm">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-300 text-sm">
              <span>Estimated Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-300 text-sm">
              <span>GST (18% Standard)</span>
              <span>₹{gst.toLocaleString('en-IN')}</span>
            </div>
            <div className="border-t border-stone-200 dark:border-stone-700 pt-3 flex justify-between font-bold text-stone-900 dark:text-white text-base">
              <span>Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">
              Select Payment Method
            </label>
            
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition ${
                  paymentMethod === 'upi' 
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-sm' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                }`}
              >
                <Smartphone className="w-4 h-4 mb-1.5" />
                <span>UPI / GPay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('cod')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition ${
                  paymentMethod === 'cod' 
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-sm' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                }`}
              >
                <Banknote className="w-4 h-4 mb-1.5" />
                <span>Cash on Delivery</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs font-medium transition ${
                  paymentMethod === 'card' 
                    ? 'border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-sm' 
                    : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:border-stone-400'
                }`}
              >
                <CreditCard className="w-4 h-4 mb-1.5" />
                <span>Card</span>
              </button>
            </div>

            {paymentMethod === 'upi' && (
              <div className="space-y-2 pt-1 animate-fade-in">
                <input
                  type="text"
                  placeholder="Enter UPI ID (e.g. username@oksbi)"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                />
                <div className="flex items-center space-x-2 text-[11px] text-stone-500 bg-white/50 dark:bg-stone-900/50 p-2.5 rounded-lg border border-stone-200 dark:border-stone-800">
                  <QrCode className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>A secure QR code or payment approval prompt will be triggered upon checkout.</span>
                </div>
              </div>
            )}

            {paymentMethod === 'cod' && (
              <div className="text-xs text-stone-600 dark:text-stone-400 bg-white/60 dark:bg-stone-900/60 p-3 rounded-xl border border-stone-200 dark:border-stone-800 animate-fade-in flex items-start space-x-2">
                <Banknote className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Pay with cash or digital payment app upon safe delivery at your doorstep. No extra charges.</span>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-2 pt-1 animate-fade-in">
                <input
                  type="text"
                  placeholder="Card Number (4242 •••• •••• ••••)"
                  maxLength={19}
                  className="w-full bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-stone-900 dark:focus:ring-stone-100"
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    maxLength={5}
                    className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-900 dark:text-white focus:outline-none"/>
                  <input
                    type="password"
                    placeholder="CVV"
                    maxLength={4}
                    className="bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl px-4 py-2.5 text-xs text-stone-900 dark:text-white focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          <button 
            onClick={handleCheckoutSubmit}
            disabled={isCheckingOut}
            className="w-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-3.5 rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-95 transition text-xs uppercase tracking-wider disabled:opacity-50 shadow-md">
            <span>{isCheckingOut ? 'Processing Payment...' : `Complete Order (₹${total.toLocaleString('en-IN')})`}</span>
            {!isCheckingOut && <ArrowRight className="w-4 h-4" />}
          </button>

          <div className="flex items-center justify-center space-x-1.5 text-[11px] text-stone-500 pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted & Secure Checkout</span>
          </div>

        </div>
      </div>
    </div>
  );
}