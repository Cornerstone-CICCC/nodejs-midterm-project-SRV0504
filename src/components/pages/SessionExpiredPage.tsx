type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { Clock, LogIn } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface SessionExpiredPageProps {
  onLogin: () => void;
}

export function SessionExpiredPage({ onLogin }: SessionExpiredPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full p-12 text-center bg-white border-gray-200 shadow-sm">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-50 rounded-full mb-6">
          <Clock className="w-10 h-10 text-yellow-600" />
        </div>

        <h1 className="text-gray-900 mb-3">Session Expired</h1>

        <p className="text-gray-600 mb-8">
          Your session has expired for security reasons. Please log in again to continue.
        </p>

        <Button onClick={onLogin} className="bg-blue-600 hover:bg-blue-700 text-white">
          <LogIn className="w-4 h-4 mr-2" />
          Login Again
        </Button>
      </Card>
    </div>
  );
}
