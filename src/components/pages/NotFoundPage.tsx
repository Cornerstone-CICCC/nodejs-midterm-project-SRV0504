type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { AlertCircle, Home } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface NotFoundPageProps {
  onGoHome: () => void;
}

export function NotFoundPage({ onGoHome }: NotFoundPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-12 text-center bg-white border-gray-200 shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-6">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>

        <h1 className="text-gray-900 mb-3 text-6xl">404</h1>

        <p className="text-gray-600 mb-2">Page Not Found</p>
        <p className="text-gray-500 mb-8">This page does not exist.</p>

        <Button onClick={onGoHome} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Home className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </Card>
    </div>
  );
}
