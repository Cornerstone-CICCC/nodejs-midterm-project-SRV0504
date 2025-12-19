import { useState, useEffect } from 'react';
import { LandingPage } from './components/pages/LandingPage';
import { LoginPage } from './components/pages/LoginPage';
import { SignupPage } from './components/pages/SignupPage';
import { DashboardPage } from './components/pages/DashboardPage';
import { AddItemPage } from './components/pages/AddItemPage';
import { EditItemPage } from './components/pages/EditItemPage';
import { ItemDetailPage } from './components/pages/ItemDetailPage';
import { NotFoundPage } from './components/pages/NotFoundPage';
import { SessionExpiredPage } from './components/pages/SessionExpiredPage';
import { Toast } from './components/ui/Toast';
import { DeleteModal } from './components/ui/DeleteModal';

export type Page =
  | 'landing'
  | 'login'
  | 'signup'
  | 'dashboard'
  | 'add'
  | 'edit'
  | 'detail'
  | '404'
  | 'session-expired';

export interface Item {
  id: number;
  title: string;
  description: string;
  category?: string;
  price?: number;
  imageUrl?: string;
  createdAt: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [user, setUser] = useState<User | null>(null);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  // 🔥 NEW — ITEMS PERSISTENTES (localStorage)
  const [items, setItems] = useState<Item[]>(() => {
    const saved = localStorage.getItem('items');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: 'MacBook Pro 16"',
            description:
              'High-performance laptop with M2 Pro chip, 16GB RAM, and 512GB SSD. Perfect for development and creative work.',
            category: 'Electronics',
            price: 2499.99,
            imageUrl:
              'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400',
            createdAt: '2024-11-10',
          },
          {
            id: 2,
            title: 'Office Desk Chair',
            description:
              'Ergonomic office chair with lumbar support and adjustable height. Breathable mesh back and comfortable cushioning.',
            category: 'Furniture',
            price: 299.99,
            imageUrl:
              'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400',
            createdAt: '2024-11-12',
          },
          {
            id: 3,
            title: 'Wireless Keyboard',
            description:
              'Mechanical keyboard with RGB backlighting, wireless connectivity, and long battery life.',
            category: 'Accessories',
            price: 129.99,
            imageUrl:
              'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
            createdAt: '2024-11-13',
          },
          {
            id: 4,
            title: 'Standing Desk',
            description:
              'Electric height-adjustable standing desk with memory presets and spacious work surface.',
            category: 'Furniture',
            price: 599.99,
            imageUrl:
              'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400',
            createdAt: '2024-11-14',
          },
        ];
  });

  // 🔥 NEW — GUARDAR ITEMS EN localStorage CUANDO CAMBIAN
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const [searchQuery, setSearchQuery] = useState('');

  // Session expiration
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        handleSessionExpired();
      }, 30 * 60 * 1000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  const showToast = (message: string, type: ToastMessage['type'] = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const handleLogin = (email: string, password: string) => {
    if (password.length < 6) {
      showToast('Invalid credentials', 'error');
      return;
    }

    setUser({ id: 1, name: email.split('@')[0], email });
    setCurrentPage('dashboard');
    showToast('Login successful', 'success');
  };

  const handleSignup = (name: string, email: string, password: string) => {
    setUser({ id: 1, name, email });
    setCurrentPage('dashboard');
    showToast('Account created successfully', 'success');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
    showToast('Logged out successfully', 'info');
  };

  const handleSessionExpired = () => {
    setUser(null);
    setCurrentPage('session-expired');
  };

  // ADD
  const handleAddItem = (item: Omit<Item, 'id' | 'createdAt'>) => {
    const newItem: Item = {
      ...item,
      id: Math.max(...items.map((i) => i.id), 0) + 1,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setItems([...items, newItem]);
    setCurrentPage('dashboard');
    showToast('Item added successfully', 'success');
  };

  // EDIT
  const handleUpdateItem = (
    id: number,
    updatedItem: Omit<Item, 'id' | 'createdAt'>
  ) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
    setCurrentPage('dashboard');
    showToast('Item updated successfully', 'success');
  };

  // DELETE
  const handleDeleteItemRequest = (id: number) => {
    setItemToDelete(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteItemConfirm = () => {
    if (itemToDelete) {
      setItems(items.filter((item) => item.id !== itemToDelete));
      setDeleteModalOpen(false);
      setItemToDelete(null);
      if (currentPage === 'detail') {
        setCurrentPage('dashboard');
      }
      showToast('Item deleted successfully', 'success');
    }
  };

  const navigate = (page: Page, itemId?: number) => {
    setCurrentPage(page);
    if (itemId !== undefined) {
      setSelectedItemId(itemId);
    }
  };

  const selectedItem = selectedItemId
    ? items.find((i) => i.id === selectedItemId)
    : null;

  const filteredItems = searchQuery
    ? items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'landing' && !user && (
        <LandingPage onLogin={() => navigate('login')} onSignup={() => navigate('signup')} />
      )}

      {currentPage === 'login' && (
        <LoginPage onLogin={handleLogin} onNavigateToSignup={() => navigate('signup')} />
      )}

      {currentPage === 'signup' && (
        <SignupPage onSignup={handleSignup} onNavigateToLogin={() => navigate('login')} />
      )}

      {currentPage === 'dashboard' && user && (
        <DashboardPage
          user={user}
          items={filteredItems}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onLogout={handleLogout}
          onAddItem={() => navigate('add')}
          onEditItem={(id) => navigate('edit', id)}
          onViewItem={(id) => navigate('detail', id)}
          onDeleteItem={handleDeleteItemRequest}
        />
      )}

      {currentPage === 'add' && user && (
        <AddItemPage user={user} onSave={handleAddItem} onCancel={() => navigate('dashboard')} onLogout={handleLogout} />
      )}

      {currentPage === 'edit' && user && selectedItem && (
        <EditItemPage
          user={user}
          item={selectedItem}
          onSave={(item) => handleUpdateItem(selectedItem.id, item)}
          onCancel={() => navigate('dashboard')}
          onLogout={handleLogout}
        />
      )}

      {currentPage === 'detail' && user && selectedItem && (
        <ItemDetailPage
          user={user}
          item={selectedItem}
          onEdit={() => navigate('edit', selectedItem.id)}
          onDelete={() => handleDeleteItemRequest(selectedItem.id)}
          onBack={() => navigate('dashboard')}
          onLogout={handleLogout}
        />
      )}

      {currentPage === '404' && (
        <NotFoundPage onGoHome={() => navigate(user ? 'dashboard' : 'landing')} />
      )}

      {currentPage === 'session-expired' && (
        <SessionExpiredPage onLogin={() => navigate('login')} />
      )}

      {/* Toasts */}
      <div className="fixed bottom-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
          />
        ))}
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDeleteItemConfirm}
      />
    </div>
  );
}
