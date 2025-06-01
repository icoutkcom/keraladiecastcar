
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCardSkeleton from './ProductCardSkeleton';

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
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const truncateTitle = (title: string, maxWords: number = 8) => {
    const words = title.split(' ');
    if (words.length <= maxWords) return title;
    return words.slice(0, maxWords).join(' ') + '...';
  };

  // Optimize image URL for faster loading
  const getOptimizedImageUrl = (url: string) => {
    if (url.includes('unsplash.com')) {
      // Use smaller size and compression for faster loading
      return url.replace('w=400&h=400', 'w=300&h=300&q=80&fm=webp');
    }
    return url;
  };

  // Lazy loading intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&q=80&fm=webp&fit=crop';

  if (!isInView) {
    return (
      <div ref={cardRef}>
        <ProductCardSkeleton />
      </div>
    );
  }

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group relative glass-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <div className="aspect-square overflow-hidden bg-gray-900/50 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800/50 animate-pulse" />
          )}
          <img
            src={imageError ? fallbackImage : getOptimizedImageUrl(product.image)}
            alt={product.name}
            className={`w-full h-full object-contain transition-all duration-500 group-hover:scale-110 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-white text-base line-clamp-3 group-hover:text-gray-100 transition-colors text-center drop-shadow-lg">
            {truncateTitle(product.name)}
          </h3>
        </div>
        
        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
};

export default ProductCard;
