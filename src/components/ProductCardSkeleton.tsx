
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className="group relative glass-card rounded-xl overflow-hidden">
      <div className="aspect-square overflow-hidden bg-gray-900/50">
        <Skeleton className="w-full h-full bg-gray-800/50" />
      </div>
      
      <div className="p-4">
        <Skeleton className="h-4 w-3/4 mx-auto bg-gray-800/50" />
        <Skeleton className="h-4 w-1/2 mx-auto mt-2 bg-gray-800/50" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
