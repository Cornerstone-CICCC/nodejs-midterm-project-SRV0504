type Item = { id: number; title: string; description: string; };

type UserType = { id: string; name: string; email: string; };

import { Package, Plus, Edit, Trash2, Eye, LogOut, User, Search } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

interface DashboardPageProps {
  user: UserType;
  items: Item[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onLogout: () => void;
  onAddItem: () => void;
  onEditItem: (id: number) => void;
  onViewItem: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

export function DashboardPage({
  user,
  items,
  searchQuery,
  onSearchChange,
  onLogout,
  onAddItem,
  onEditItem,
  onViewItem,
  onDeleteItem,
}: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-xl">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-900">Inventory Manager</span>
              <div className="hidden md:block h-6 w-px bg-gray-300 mx-2" />
              <button className="hidden md:block text-blue-600 hover:text-blue-700">
                Items
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700 hidden sm:inline">{user.name}</span>
                <span className="text-gray-500 hidden lg:inline">({user.email})</span>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with Search */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-gray-900 mb-2">Dashboard</h1>
              <p className="text-gray-600">Manage your inventory items</p>
            </div>
            <Button
              onClick={onAddItem}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </Button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search items by title, description, or category..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-11 border-gray-300 focus:border-blue-500 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Items Table */}
        {items.length === 0 ? (
          <Card className="p-12 text-center bg-white border-gray-200">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-gray-900 mb-2">
              {searchQuery ? 'No items found' : 'No items yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {searchQuery
                ? 'Try adjusting your search query'
                : 'Get started by adding your first item'}
            </p>
            {!searchQuery && (
              <Button onClick={onAddItem} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            )}
          </Card>
        ) : (
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700">Title</th>
                    <th className="px-6 py-4 text-left text-gray-700">Description</th>
                    <th className="px-6 py-4 text-left text-gray-700">Category</th>
                    <th className="px-6 py-4 text-left text-gray-700">Price</th>
                    <th className="px-6 py-4 text-right text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-10 h-10 rounded-lg object-cover"
                            />
                          )}
                          <span className="text-gray-900">{item.title}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-600 line-clamp-2 max-w-md">{item.description}</p>
                      </td>
                      <td className="px-6 py-4">
                        {item.category && (
                          <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                            {item.category}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {item.price && <span className="text-gray-900">${item.price.toFixed(2)}</span>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            onClick={() => onViewItem(item.id)}
                            variant="outline"
                            size="sm"
                            className="border-gray-300"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => onEditItem(item.id)}
                            variant="outline"
                            size="sm"
                            className="border-gray-300"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            onClick={() => onDeleteItem(item.id)}
                            variant="outline"
                            size="sm"
                            className="border-red-200 text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="p-4">
                  <div className="flex gap-4">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 line-clamp-2 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 mb-3">
                        {item.category && (
                          <span className="inline-flex px-2 py-1 bg-blue-100 text-blue-700 rounded-lg">
                            {item.category}
                          </span>
                        )}
                        {item.price && <span className="text-gray-900">${item.price.toFixed(2)}</span>}
                      </div>
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
                          onClick={() => onDeleteItem(item.id)}
                          variant="outline"
                          size="sm"
                          className="border-red-200 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Floating Add Button (Mobile) */}
      <button
        onClick={onAddItem}
        className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 z-40"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
