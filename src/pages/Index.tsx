
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { generateProducts, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [products] = useState(() => generateProducts(2000));
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleSearch = (query: string) => {
    // For now, just console log the search query
    console.log('Search query:', query);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 text-lg">Discover our most popular diecast cars</p>
          </div>
          
          <ProductGrid
            products={products.slice(0, 8)}
            onAddToCart={handleAddToCart}
          />
          
          <div className="text-center mt-12">
            <button
              onClick={() => window.location.href = '#'}
              className="glass-card px-8 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
