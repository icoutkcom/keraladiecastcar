
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-white">Premium Diecast Collection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Discover the World's
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {" "}Finest Diecast Cars
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            From classic vintage models to modern supercars, find the perfect addition to your collection
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-gray-300 h-14 px-8 font-semibold"
          >
            Shop Collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="glass border-white/20 text-white hover:bg-white/10 h-14 px-8"
          >
            View Catalog
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
