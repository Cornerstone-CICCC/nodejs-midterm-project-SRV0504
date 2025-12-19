type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { Package, Plus, Edit, Trash2, Eye, LogOut, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';


interface DashboardProps {
  user: UserType;
  items: Item[];
  onLogout: () => void;
  onAddItem: () => void;
  onEditItem: (id: number) => void;
  onViewItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

export function Dashboard({ 
  user, 
  items, 
  onLogout, 
  onAddItem, 
  onEditItem, 
  onViewItem, 
  onDeleteItem 
}: DashboardProps) {
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
                <span className="text-gray-700">{user.name}</span>
              </div>
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 border-gray-300"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Manage your inventory items</p>
          </div>
          <Button
            onClick={onAddItem}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="w-5 h-5" />
            Add Item
          </Button>
        </div>

        {/* Items Grid */}
        {items.length === 0 ? (
          <Card className="p-12 text-center bg-white border-gray-200">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-900 mb-2">No items yet</h3>
            <p className="text-gray-600 mb-6">Get started by adding your first item</p>
            <Button
              onClick={onAddItem}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Item
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                {/* Item Image */}
                {item.imageUrl && (
                  <div className="w-full h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Item Content */}
                <div className="p-6">
                  <h3 className="text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  {item.price && (
                    <p className="text-blue-600 mb-4">
                      ${item.price.toFixed(2)}
                    </p>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      onClick={() => onViewItem(item.id)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      onClick={() => onEditItem(item.id)}
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-300"
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this item?')) {
                          onDeleteItem(item.id);
                        }
                      }}
                      variant="outline"
                      size="sm"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button (Mobile) */}
      <button
        onClick={onAddItem}
        className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
