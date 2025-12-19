type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { useState } from 'react';
import { Zap } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function GradientTheme() {
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
    <div
      className="w-full min-h-screen flex flex-col"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      }}
    >
      {/* Top Navigation */}
      <nav className="w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-white">MyApp</span>
        </div>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Learn More
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Form Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            {/* Gradient Header */}
            <div
              className="mb-8 text-center -mt-8 -mx-8 p-8 rounded-t-3xl"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-white mb-2">
                {isLogin ? 'Welcome back' : 'Join our community'}
              </h1>
              <p className="text-white/90">
                {isLogin ? 'Sign in to continue' : 'Start your journey today'}
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
                  placeholder={isLogin ? 'Enter your email' : 'Choose a username'}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
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
                  className="border-gray-300 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full text-white"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                {isLogin ? 'Sign in' : 'Create account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="text-purple-600 hover:text-purple-700">
                  {isLogin ? 'Sign up' : 'Login'}
                </span>
              </button>
            </div>
          </div>

          <p className="text-center text-white/80 mt-8">
            Trusted by over 10,000 users worldwide
          </p>
        </div>
      </div>
    </div>
  );
}
