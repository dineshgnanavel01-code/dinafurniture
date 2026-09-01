import React, { useState } from 'react';
import { X, Mail, Lock, User } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!isOpen) return null;

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!isLogin && !name.trim()) {
      setError('Name is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    if (isLogin) {
      setSuccess('Successfully logged in!');
    } else {
      setSuccess('Account created successfully!');
    }

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 w-full max-w-md rounded-2xl p-8 relative shadow-2xl border border-stone-100 dark:border-stone-800">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-900 dark:hover:text-white transition"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-white mb-2">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>
        <p className="text-sm text-stone-500 mb-6">
          {isLogin ? 'Enter your details to access your account' : 'Fill in the information to get started'}
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/30 text-rose-500 text-xs font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 text-xs font-medium">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="relative">
              <User className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
              <input 
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-stone-50 dark:bg-stone-800 border-none pl-10 pr-4 py-3 rounded-xl text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-stone-900"
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
            <input 
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-stone-50 dark:bg-stone-800 border-none pl-10 pr-4 py-3 rounded-xl text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-stone-900"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 w-4 h-4 text-stone-400" />
            <input 
              type="password"
              placeholder="Password (min 6 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-stone-50 dark:bg-stone-800 border-none pl-10 pr-4 py-3 rounded-xl text-sm text-stone-900 dark:text-white focus:ring-2 focus:ring-stone-900"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 py-3 rounded-xl font-medium text-sm hover:opacity-95 transition"
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-stone-500">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess(''); }}
            className="text-stone-900 dark:text-white font-medium underline"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
}