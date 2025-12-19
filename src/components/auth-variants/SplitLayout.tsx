type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { CheckCircle2 } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function SplitLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Create Account', formData);
  };

  const features = [
    'Secure cloud storage',
    'Real-time collaboration',
    'Advanced analytics',
    '24/7 customer support',
  ];

  return (
    <div className="w-full min-h-screen flex">
      {/* Left Side - Image/Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-white rounded-xl" />
            <span className="text-white text-xl">MyApp</span>
          </div>

          <div className="mt-auto">
            <h2 className="text-white text-4xl mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of teams already using our platform to build amazing products.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                  <span className="text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white/60">
          © 2024 MyApp. All rights reserved.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo for Mobile */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg" />
            <span className="text-gray-900">MyApp</span>
          </div>

          {/* Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-gray-900 mb-2">
                {isLogin ? 'Sign in to your account' : 'Create your account'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Welcome back! Please enter your details.' : 'Start your 30-day free trial.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-700">
                  {isLogin ? 'Email or username' : 'Username'}
                </Label>
                <Input
                  id="username"
                  type="email"
                  placeholder={isLogin ? 'Enter your email' : 'you@example.com'}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  {isLogin && (
                    <a href="#" className="text-purple-600 hover:text-purple-700">
                      Forgot?
                    </a>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                {isLogin ? 'Sign in' : 'Get started'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="text-purple-600 hover:text-purple-700">
                  {isLogin ? 'Sign up for free' : 'Login'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
