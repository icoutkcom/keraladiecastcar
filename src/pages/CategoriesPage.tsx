import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { generateProducts, Product } from '@/utils/productData';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, TrendingUp } from 'lucide-react';
const categories = [{
  name: 'All',
  value: 'all'
}, {
  name: 'Land Rover',
  value: 'land-rover'
}, {
  name: 'Mercedes',
  value: 'mercedes'
}, {
  name: 'BMW',
  value: 'bmw'
}, {
  name: 'Audi',
  value: 'audi'
}, {
  name: 'Tesla',
  value: 'tesla'
}, {
  name: 'Porsche',
  value: 'porsche'
}, {
  name: 'Rolls Royce',
  value: 'rolls-royce'
}, {
  name: 'Ferrari',
  value: 'ferrari'
}, {
  name: 'Lamborghini',
  value: 'lamborghini'
}, {
  name: 'Pagani',
  value: 'pagani'
}, {
  name: 'Bugatti',
  value: 'bugatti'
}];
const PRODUCTS_PER_PAGE = 20;

// Top selling categories for badge display
const topSellingCategories = ['ferrari', 'lamborghini', 'bugatti', 'tesla'];
const CategoriesPage = () => {
  const {
    toast
  } = useToast();
  const [searchParams, setSearchParams] = useSearchParams();
  const [products] = useState(() => generateProducts(2000));
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(() => {
    const categoryParam = searchParams.get('category');
    console.log('Initial category from URL:', categoryParam);
    return categoryParam || 'all';
  });
  const [cartItems, setCartItems] = useState(0);
  const [displayedCount, setDisplayedCount] = useState(PRODUCTS_PER_PAGE);

  // Update selected category when URL changes
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    console.log('URL category parameter changed to:', categoryFromUrl);
    console.log('Current selectedCategory state:', selectedCategory);
    if (categoryFromUrl && categoryFromUrl !== selectedCategory) {
      console.log('Updating selectedCategory from URL:', categoryFromUrl);
      setSelectedCategory(categoryFromUrl);
      setDisplayedCount(PRODUCTS_PER_PAGE); // Reset displayed count when category changes
    } else if (!categoryFromUrl && selectedCategory !== 'all') {
      console.log('No category in URL, setting to all');
      setSelectedCategory('all');
      setDisplayedCount(PRODUCTS_PER_PAGE); // Reset displayed count
    }
  }, [searchParams, selectedCategory]);

  // Reset displayed count when search query changes
  useEffect(() => {
    setDisplayedCount(PRODUCTS_PER_PAGE);
  }, [searchQuery]);
  const filteredProducts = useMemo(() => {
    console.log('Filtering products with category:', selectedCategory);
    console.log('Search query:', searchQuery);
    console.log('Total products available:', products.length);
    const filtered = products.filter(product => {
      const matchesSearch = searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    console.log('Filtered products count:', filtered.length);
    return filtered;
  }, [products, searchQuery, selectedCategory]);
  const displayedProducts = filteredProducts.slice(0, displayedCount);
  const hasMoreProducts = displayedCount < filteredProducts.length;
  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    });
  };
  const handleSearch = (query: string) => {
    console.log('Search query changed to:', query);
    setSearchQuery(query);
  };
  const handleCategoryChange = (category: string) => {
    console.log('Category button clicked, changing to:', category);
    setSelectedCategory(category);

    // Update URL to reflect the category change
    if (category === 'all') {
      setSearchParams({});
      console.log('URL cleared for all categories');
    } else {
      setSearchParams({
        category
      });
      console.log('URL updated with category:', category);
    }
  };
  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + PRODUCTS_PER_PAGE);
  };
  const selectedCategoryName = categories.find(cat => cat.value === selectedCategory)?.name || 'All';
  const isTopSellingCategory = topSellingCategories.includes(selectedCategory);
  return <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header onSearch={handleSearch} cartItems={cartItems} />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 px-0">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="font-bold text-white text-2xl">
                  {selectedCategory === 'all' ? 'All Categories' : `${selectedCategoryName} Collection`}
                </h1>
                {isTopSellingCategory && <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 text-sm font-semibold flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    TOP SELLING
                  </Badge>}
              </div>
              
              {/* Beautiful Search Section */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative group">
                  {/* Glassmorphism container */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                    
                    {/* Search input */}
                    <div className="relative flex items-center p-2">
                      <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
                        <Input placeholder="Search for your dream diecast car..." className="pl-12 pr-4 h-14 bg-transparent border-none text-white placeholder:text-white/50 text-lg focus-visible:ring-0 focus-visible:ring-offset-0" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                      </div>
                      
                      <Button className="ml-2 h-12 px-8 bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </div>
                  
                  {/* Popular searches */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <span className="text-sm text-gray-400">Popular searches:</span>
                    {['Ferrari', 'Lamborghini', '1:18 Scale', 'BMW', 'Tesla'].map(tag => <button key={tag} type="button" onClick={() => setSearchQuery(tag)} className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-1">
                        {topSellingCategories.includes(tag.toLowerCase()) && <Star className="h-3 w-3 text-yellow-400 fill-current" />}
                        {tag}
                      </button>)}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {categories.map(category => <Button key={category.value} variant={selectedCategory === category.value ? "default" : "outline"} onClick={() => handleCategoryChange(category.value)} className="min-w-0 relative">
                  {category.name}
                  {topSellingCategories.includes(category.value) && <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-1 py-0.5 rounded-full">
                      <TrendingUp className="h-2 w-2" />
                    </Badge>}
                </Button>)}
            </div>
            
            <p className="text-gray-400 text-center">
              Showing {displayedProducts.length} of {filteredProducts.length} products
              {selectedCategory !== 'all' && ` in ${selectedCategoryName}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
          
          {filteredProducts.length > 0 ? <>
              <ProductGrid products={displayedProducts} onAddToCart={handleAddToCart} />
              
              {hasMoreProducts && <div className="mt-12 text-center">
                  <Button onClick={handleLoadMore} variant="outline" className="px-8 py-3 text-lg">
                    Load More Products ({filteredProducts.length - displayedCount} remaining)
                  </Button>
                </div>}
            </> : <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">
                {searchQuery ? `No products match your search "${searchQuery}" in ${selectedCategoryName}` : `No products available in ${selectedCategoryName} category`}
              </p>
              <Button variant="outline" onClick={() => {
            setSearchQuery('');
            setSelectedCategory('all');
            setSearchParams({});
          }}>
                Clear Filters
              </Button>
            </div>}
        </div>
      </div>
      
      <Footer />
    </div>;
};
export default CategoriesPage;