
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, Truck, RotateCcw, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface HeaderProps {
  onSearch: (query: string) => void;
  cartItems: number;
}

const Header = ({ onSearch, cartItems }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      {/* Top info bar - hidden on mobile */}
      <div className="bg-black/80 text-white text-xs py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex items-center justify-between">
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
          <div>
            <span>Free shipping on orders over ₹500</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Sidebar trigger and Logo */}
          <div className="flex items-center space-x-3">
            <SidebarTrigger />
            
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Kerala Diecast Car
            </h1>
          </div>
          
          {/* Desktop navigation - hidden on mobile/tablet */}
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
          
          {/* Right side - Search and Cart */}
          <div className="flex items-center space-x-2">
            {/* Desktop search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search diecast cars..." 
                className="pl-10 w-48 lg:w-64 glass border-white/20 text-white placeholder:text-gray-400" 
                onChange={e => onSearch(e.target.value)} 
              />
            </div>
            
            {/* Mobile search toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              {isSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
            
            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile search bar - expandable */}
        {isSearchOpen && (
          <div className="mt-3 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search diecast cars..." 
                className="pl-10 w-full glass border-white/20 text-white placeholder:text-gray-400" 
                onChange={e => onSearch(e.target.value)}
                autoFocus
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
