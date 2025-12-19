type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function MinimalWhite() {
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

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Top Navigation */}
      <nav className="w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg" />
          <span className="text-black">MyApp</span>
        </div>
        <a href="#" className="text-gray-600 hover:text-black transition-colors">
          About
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-8 text-center">
              <h1 className="text-gray-900 mb-2">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h1>
              <p className="text-gray-600">
                {isLogin ? 'Sign in to continue' : 'Get started in seconds'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
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
                      className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
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
                  placeholder={isLogin ? 'Enter your email' : 'Choose a username'}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="border-gray-300 focus:border-gray-900 focus:ring-gray-900"
                />
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                {isLogin ? 'Sign in' : 'Create account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="underline">
                  {isLogin ? 'Sign up' : 'Login'}
                </span>
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">
            By continuing, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}
