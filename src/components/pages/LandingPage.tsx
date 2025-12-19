type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { Package } from 'lucide-react';
import { Button } from '../ui/button';

interface LandingPageProps {
  onLogin: () => void;
  onSignup: () => void;
}

export function LandingPage({ onLogin, onSignup }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8 shadow-lg">
          <Package className="w-10 h-10 text-white" />
        </div>

        {/* Hero Content */}
        <h1 className="text-gray-900 mb-4 text-5xl">
          Inventory Management System
        </h1>
        <p className="text-gray-600 mb-12 text-xl max-w-2xl mx-auto">
          A modern web application for managing your inventory with ease. Built with Node.js, Express, and TypeScript.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={onLogin}
            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Login
          </Button>
          <Button
            onClick={onSignup}
            variant="outline"
            className="w-full sm:w-auto px-8 py-3 border-gray-300 hover:bg-gray-50"
          >
            Sign Up
          </Button>
        </div>

        {/* Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Easy Management</h3>
            <p className="text-gray-600">
              Add, edit, and delete items with a simple interface
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Protected routes with session-based authentication
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-gray-900 mb-2">Search & Filter</h3>
            <p className="text-gray-600">
              Quickly find items with powerful search functionality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
