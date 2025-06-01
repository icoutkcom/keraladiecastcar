import React from 'react';
import { Search, ShoppingCart, Menu, Truck, RotateCcw } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface HeaderProps {
  onSearch: (query: string) => void;
  cartItems: number;
}
const Header = ({
  onSearch,
  cartItems
}: HeaderProps) => {
  return <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      {/* Top info bar */}
      <div className="bg-black/80 text-white text-xs py-2 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Truck className="h-3 w-3" />
              <span>3-7 Day Shipping</span>
            </div>
            <div className="flex items-center space-x-1">
              <RotateCcw className="h-3 w-3" />
              <span>Returns: Damage/Wrong Items Only</span>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <span>Free shipping on orders over ₹500</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kerala Diecast Car
            </h1>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Diecast Cars</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Categories</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">New Arrivals</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Sale</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search diecast cars..." className="pl-10 w-48 lg:w-64 glass border-white/20 text-white placeholder:text-gray-400" onChange={e => onSearch(e.target.value)} />
            </div>
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>}
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="mt-4 sm:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search diecast cars..." className="pl-10 w-full glass border-white/20 text-white placeholder:text-gray-400" onChange={e => onSearch(e.target.value)} />
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="mt-4 lg:hidden">
          
        </div>
      </div>
    </header>;
};
export default Header;