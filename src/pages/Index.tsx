
import React, { useState } from 'react';
import Header from '@/components/Header';
import CategoryButtons from '@/components/CategoryButtons';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { generateProducts, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [products] = useState(() => generateProducts(100));
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartItems, setCartItems] = useState(0);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleSearch = (query: string) => {
    if (query.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      <div className="pt-24">
        <CategoryButtons />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
            <p className="text-gray-400 text-lg">Discover our premium collection of diecast models</p>
          </div>
          
          <ProductGrid products={filteredProducts.slice(0, 20)} onAddToCart={handleAddToCart} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
