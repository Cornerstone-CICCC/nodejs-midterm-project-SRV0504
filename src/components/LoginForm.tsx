type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { useState } from 'react';
import { Lock, Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div 
      className="w-full max-w-md p-8 rounded-3xl relative"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <div 
          className="w-20 h-20 rounded-2xl flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #3b82f6 100%)',
            boxShadow: '0 10px 40px rgba(6, 182, 212, 0.4)'
          }}
        >
          <Lock className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-white mb-2">Welcome Back</h1>
        <p className="text-gray-300">Sign in to continue</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-300" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
              required
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <Label htmlFor="password" className="text-white">Password</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-11 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400/50"
              required
            />
          </div>
        </div>

        {/* Login Button with Neon Glow */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white relative overflow-hidden group transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 50%, #3b82f6 100%)',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.8), 0 0 60px rgba(168, 85, 247, 0.6), 0 0 90px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)';
          }}
        >
          <span className="relative z-10">Sign In</span>
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)',
            }}
          />
        </button>

        {/* Forgot Password Link */}
        <div className="text-center">
          <a 
            href="#" 
            className="text-cyan-300 hover:text-cyan-200 transition-colors duration-200"
            onClick={(e) => {
              e.preventDefault();
              console.log('Forgot password clicked');
            }}
          >
            Forgot password?
          </a>
        </div>
      </form>

      {/* Bottom Border Glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #06b6d4, #a855f7, #3b82f6, transparent)',
          boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
        }}
      />
    </div>
  );
}
