
import React from 'react';
import { ShoppingBag, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoBanner = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 border-purple-500/30">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 mr-3">
              <Percent className="h-6 w-6 text-white" />
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Buy 2 Get 
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}20% OFF
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Mix and match any two diecast cars from our collection and save 20% instantly. 
            Perfect time to expand your collection!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8"
            >
              Shop Now & Save
            </Button>
            <div className="text-sm text-gray-400">
              *Offer valid on all regular priced items
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
