
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import FilterSidebar from '@/components/FilterSidebar';
import { generateProducts, categories, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [products] = useState(() => generateProducts(2000));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [cartItems, setCartItems] = useState(0);
  const [showProducts, setShowProducts] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, searchQuery, selectedCategories, priceRange]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 1000]);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowProducts(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      {!showProducts ? (
        <HeroSection />
      ) : (
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex gap-8">
              <FilterSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onPriceChange={setPriceRange}
                onClearFilters={handleClearFilters}
              />
              
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
                  </h2>
                  <p className="text-gray-400">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                
                <ProductGrid
                  products={filteredProducts.slice(0, 50)} // Show first 50 for performance
                  onAddToCart={handleAddToCart}
                />
                
                {filteredProducts.length > 50 && (
                  <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">
                      Showing first 50 products. Use filters to narrow down results.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {!showProducts && (
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-gray-400 text-lg">Discover our most popular items</p>
            </div>
            
            <ProductGrid
              products={products.slice(0, 8)}
              onAddToCart={handleAddToCart}
            />
            
            <div className="text-center mt-12">
              <button
                onClick={() => setShowProducts(true)}
                className="glass-card px-8 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
              >
                View All Products
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
