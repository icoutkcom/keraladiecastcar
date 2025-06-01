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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/qr/ZSKPUHIUU5JKJ1', '_blank');
  };

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
            
            {/* WhatsApp button - replaces mobile search toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={handleWhatsAppClick}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
              </svg>
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
