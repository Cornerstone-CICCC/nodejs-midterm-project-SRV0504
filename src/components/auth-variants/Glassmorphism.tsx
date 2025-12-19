type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Lock } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

export function Glassmorphism() {
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
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        />
        {/* Animated Shapes */}
        <div
          className="absolute top-20 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>

      {/* Top Navigation */}
      <nav className="relative z-10 w-full px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
            <Lock className="w-4 h-4 text-white" />
          </div>
          <span className="text-white">MyApp</span>
        </div>
        <a href="#" className="text-white/80 hover:text-white transition-colors">
          Help
        </a>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12 min-h-[calc(100vh-80px)]">
        <div className="w-full max-w-md">
          {/* Glass Card */}
          <div
            className="rounded-3xl p-8"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}
          >
            <div className="mb-8 text-center">
              <h1 className="text-white mb-2">
                {isLogin ? 'Welcome back' : 'Get started'}
              </h1>
              <p className="text-white/80">
                {isLogin ? 'Sign in to your account' : 'Create a new account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-white">
                      First name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-white">
                      Last name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/30"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="username" className="text-white">
                  {isLogin ? 'Email or username' : 'Username'}
                </Label>
                <Input
                  id="username"
                  placeholder={isLogin ? 'Enter your email' : 'Choose a username'}
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">
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
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 focus:border-white/50 focus:ring-white/30"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-purple-600 hover:bg-white/90"
              >
                {isLogin ? 'Sign in' : 'Create account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <span className="underline">
                  {isLogin ? 'Sign up' : 'Login'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
