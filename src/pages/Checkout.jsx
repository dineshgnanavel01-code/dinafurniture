import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, ArrowLeft, ShieldCheck, CreditCard, Truck } from 'lucide-react';

export default function Checkout() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', address: '', city: '', zip: '',
    cardNumber: '', expiry: '', cvv: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 49 : 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.match(/\S+@\S+\.\S+/)) newErrors.email = 'Invalid email address';
    if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = 'Invalid card number';
    if (formData.cvv.length < 3) newErrors.cvv = 'Invalid CVV';
    
    ['firstName', 'lastName', 'address', 'city', 'zip', 'expiry'].forEach(field => {
      if (!formData[field].trim()) newErrors[field] = 'This field is required';
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setOrderComplete(true);
      }, 1500);
    }
  };

  if (orderComplete) {
    return (
      <div className="max-w-full mx-auto px-4 py-24 text-center space-y-6">
        <CheckCircle className="w-20 h-20 text-emerald-500 mx-auto" />
        <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-white">Order Confirmed!</h2>
        <p className="text-stone-500">
          Thank you for your purchase, {formData.firstName}. We've sent a confirmation email to {formData.email}.
        </p>
        <button 
          onClick={() => navigate('/')} 
          className="bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 px-8 py-3.5 rounded-full font-medium mt-4 hover:opacity-95 transition"
        >
          Return to Home
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="text-center py-24 px-4">
        <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-4">Your cart is empty</h2>
        <button onClick={() => navigate('/shop')} className="bg-stone-900 text-white px-6 py-3 rounded-full font-medium">
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/cart" className="flex items-center space-x-2 text-stone-600 dark:text-stone-400 mb-8 hover:text-stone-900 dark:hover:text-white w-fit">
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium">Return to Cart</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-serif font-bold text-stone-900 dark:text-white mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-8">
           
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-stone-900 dark:text-white font-serif text-xl font-medium mb-4">
                <Truck className="w-5 h-5" />
                <h2>Shipping Details</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.firstName ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                  {errors.firstName && <span className="text-rose-500 text-xs mt-1">{errors.firstName}</span>}
                </div>
                <div>
                  <input name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.lastName ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                </div>
              </div>
              
              <div>
                <input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.email ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                {errors.email && <span className="text-rose-500 text-xs mt-1">{errors.email}</span>}
              </div>

              <div>
                <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Street Address" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.address ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.city ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                <input name="zip" value={formData.zip} onChange={handleInputChange} placeholder="Postal Code" className={`w-full bg-stone-50 dark:bg-stone-800 border ${errors.zip ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
              </div>
            </div>

            
            <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2 text-stone-900 dark:text-white font-serif text-xl font-medium">
                  <CreditCard className="w-5 h-5" />
                  <h2>Payment Method</h2>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>
              
              <div className="bg-stone-50 dark:bg-stone-800 p-6 rounded-2xl space-y-4">
                <div>
                  <input name="cardNumber" maxLength="19" value={formData.cardNumber} onChange={handleInputChange} placeholder="Card Number" className={`w-full bg-white dark:bg-stone-900 border ${errors.cardNumber ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                  {errors.cardNumber && <span className="text-rose-500 text-xs mt-1">{errors.cardNumber}</span>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input name="expiry" placeholder="MM/YY" value={formData.expiry} onChange={handleInputChange} className={`w-full bg-white dark:bg-stone-900 border ${errors.expiry ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                  <div>
                    <input name="cvv" maxLength="4" type="password" value={formData.cvv} onChange={handleInputChange} placeholder="CVV" className={`w-full bg-white dark:bg-stone-900 border ${errors.cvv ? 'border-rose-500' : 'border-transparent'} p-3.5 rounded-xl text-sm dark:text-white focus:ring-2 focus:ring-stone-900`} />
                    {errors.cvv && <span className="text-rose-500 text-xs mt-1">{errors.cvv}</span>}
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-4 rounded-xl font-medium hover:opacity-95 transition disabled:opacity-70 flex justify-center items-center"
            >
              {isSubmitting ? 'Processing...' : `Pay $${total}`}
            </button>
          </form>
        </div>

        
        <div className="bg-stone-50 dark:bg-stone-800/50 p-6 rounded-2xl h-fit space-y-6 sticky top-24">
          <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">Order Summary</h3>
          
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-start gap-4">
                <div className="flex items-start space-x-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
                  <div>
                    <p className="text-sm font-medium text-stone-900 dark:text-white line-clamp-1">{item.name}</p>
                    <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-stone-900 dark:text-white">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-700">
            <div className="flex justify-between text-stone-600 dark:text-stone-300 text-sm">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-stone-600 dark:text-stone-300 text-sm">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-stone-900 dark:text-white pt-2">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}