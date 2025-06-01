
import React from 'react';
import { ShoppingBag, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoBanner = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl p-8 text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 mr-4">
              <Percent className="h-8 w-8 text-black" />
            </div>
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-3">
              <ShoppingBag className="h-8 w-8 text-black" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Special Offer!
          </h2>
          
          <p className="text-xl md:text-2xl text-yellow-400 font-semibold mb-2">
            Buy 2 Get 20% Discount
          </p>
          
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Add any two diecast cars to your cart and automatically save 20% on your entire order. 
            Limited time offer on our premium collection!
          </p>
          
          <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 font-semibold px-8 py-3 text-lg">
            Shop Now & Save
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
