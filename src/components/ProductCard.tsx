
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="group relative glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="aspect-square overflow-hidden bg-gray-900/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-white text-lg mb-2 line-clamp-2 group-hover:text-gray-200 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="glass hover:bg-white/20 transition-all duration-300"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => onAddToCart(product)}
              className="glass hover:bg-white/20 transition-all duration-300"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default ProductCard;
