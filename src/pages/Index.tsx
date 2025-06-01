
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchSection from '@/components/SearchSection';
import ProductGrid from '@/components/ProductGrid';
import CategoryButtons from '@/components/CategoryButtons';
import Footer from '@/components/Footer';
import DataImportTool from '@/components/DataImportTool';
import { generateProducts, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Upload } from 'lucide-react';

const Index = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState(() => generateProducts(2000));
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const [showImportTool, setShowImportTool] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [products, searchQuery]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowProducts(true);
  };

  const handleDataImported = (importedProducts: Product[]) => {
    setProducts(importedProducts);
    setShowImportTool(false);
    toast({
      title: "Products Updated",
      description: `Successfully loaded ${importedProducts.length} products from your Gist`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      {showImportTool ? (
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="mb-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowImportTool(false)}
                className="mb-4"
              >
                ← Back to Products
              </Button>
            </div>
            <DataImportTool onDataImported={handleDataImported} />
          </div>
        </div>
      ) : (
        <>
          {!showProducts ? (
            <>
              <SearchSection onSearch={handleSearch} />
              <CategoryButtons />
            </>
          ) : (
            <div className="pt-24 pb-12">
              <div className="container mx-auto px-4">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="relative max-w-md mx-auto">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search products by name..." 
                        className="pl-10 glass border-white/20 text-white placeholder:text-gray-400" 
                        value={searchQuery} 
                        onChange={e => setSearchQuery(e.target.value)} 
                      />
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowImportTool(true)}
                      className="ml-4"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Import Data
                    </Button>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-2 text-center">
                    {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
                  </h2>
                  <p className="text-gray-400 text-center">
                    Showing {filteredProducts.length} of {products.length} products
                  </p>
                </div>
                
                <ProductGrid products={filteredProducts.slice(0, 50)} onAddToCart={handleAddToCart} />
                
                {filteredProducts.length > 50 && (
                  <div className="mt-12 text-center">
                    <p className="text-gray-400 mb-4">
                      Showing first 50 products. Use search to narrow down results.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {!showProducts && (
            <div className="py-[12px]">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">BEST SELLING!</h2>
                  <p className="text-gray-400 text-base">The most fast selling models all over india, fast and free shipping.</p>
                </div>
                
                <ProductGrid products={products.slice(0, 8)} onAddToCart={handleAddToCart} />
                
                <div className="text-center mt-12">
                  <div className="space-y-4">
                    <button 
                      onClick={() => setShowProducts(true)} 
                      className="glass-card px-8 py-3 rounded-xl text-white hover:bg-white/10 transition-all duration-300 mr-4"
                    >
                      View All Products
                    </button>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowImportTool(true)}
                      className="px-8 py-3"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Import Your Data
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      
      <Footer />
    </div>
  );
};

export default Index;
