type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { Package, LogOut, User, ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';


interface ItemDetailPageProps {
  user: UserType;
  item: Item;
  onEdit: () => void;
  onDelete: () => void;
  onBack: () => void;
  onLogout: () => void;
}

export function ItemDetailPage({ user, item, onEdit, onDelete, onBack, onLogout }: ItemDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900">Inventory Manager</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 hidden sm:inline">{user.name}</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-gray-300"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        {/* Item Detail Card */}
        <Card className="overflow-hidden bg-white border-gray-200 shadow-sm">
          {/* Image */}
          {item.imageUrl && (
            <div className="w-full h-96 bg-gray-100 overflow-hidden">
              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex-1">
                <h1 className="text-gray-900 mb-2 text-4xl">{item.title}</h1>
                <div className="flex items-center gap-3 text-gray-500">
                  {item.category && (
                    <span className="inline-flex px-3 py-1 bg-blue-100 text-blue-700 rounded-lg">
                      {item.category}
                    </span>
                  )}
                  <span>
                    Added on{' '}
                    {new Date(item.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              {item.price && (
                <div className="text-left sm:text-right">
                  <p className="text-gray-600 mb-1">Price</p>
                  <p className="text-blue-600 text-4xl">${item.price.toFixed(2)}</p>
                </div>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{item.description}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <Button onClick={onEdit} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">
                <Edit className="w-4 h-4 mr-2" />
                Edit Item
              </Button>
              <Button
                onClick={onDelete}
                variant="outline"
                className="flex-1 border-red-200 text-red-600 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Item
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
