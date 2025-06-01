
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { generateProducts, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Land Rover', value: 'land-rover' },
  { name: 'Mercedes', value: 'mercedes' },
  { name: 'BMW', value: 'bmw' },
  { name: 'Audi', value: 'audi' },
  { name: 'Toyota', value: 'toyota' },
  { name: 'Honda', value: 'honda' },
];

const CategoriesPage = () => {
  const { toast } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products] = useState(() => generateProducts(2000));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams, selectedCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const selectedCategoryName = categories.find(cat => cat.value === selectedCategory)?.name || 'All';

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">
              {selectedCategory === 'all' ? 'All Categories' : `${selectedCategoryName} Collection`}
            </h1>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category.value)}
                  className="min-w-0"
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 glass border-white/20 text-white placeholder:text-gray-400" 
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
              />
            </div>
            
            <p className="text-gray-400 text-center">
              Showing {filteredProducts.length} products
              {selectedCategory !== 'all' && ` in ${selectedCategoryName}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          
          {filteredProducts.length > 0 ? (
            <>
              <ProductGrid products={filteredProducts.slice(0, 50)} onAddToCart={handleAddToCart} />
              
              {filteredProducts.length > 50 && (
                <div className="mt-12 text-center">
                  <p className="text-gray-400 mb-4">
                    Showing first 50 products. Use search or filters to narrow down results.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">
                {searchQuery 
                  ? `No products match your search "${searchQuery}" in ${selectedCategoryName}`
                  : `No products available in ${selectedCategoryName} category`
                }
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSearchParams({});
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
