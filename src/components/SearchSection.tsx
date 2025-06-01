import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
interface SearchSectionProps {
  onSearch: (query: string) => void;
}
const SearchSection = ({
  onSearch
}: SearchSectionProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };
  return <section className="py-12 px-4 bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto max-w-4xl py-[9px] px-0">
        <div className="text-center mb-8">
          
          <p className="text-xs text-gray-400/0">
            Search through our extensive collection of premium diecast cars
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="glass-card rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Search by brand, model, scale, or category..." className="pl-12 h-14 text-lg glass border-white/20 text-white placeholder:text-gray-400" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
            </div>
            
            <div className="flex gap-3">
              <Button variant="ghost" size="lg" className="glass border-white/20 text-white hover:bg-white/10 h-14 px-6">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
              
              <Button type="submit" size="lg" className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 h-14 px-8 font-semibold">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-sm text-gray-400">Popular searches:</span>
            {['Ferrari', 'Lamborghini', '1:18 Scale', 'BMW', 'Mercedes'].map(tag => <button key={tag} onClick={() => {
            setSearchQuery(tag);
            onSearch(tag);
          }} className="px-3 py-1 text-sm bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors">
                {tag}
              </button>)}
          </div>
        </form>
      </div>
    </section>;
};
export default SearchSection;