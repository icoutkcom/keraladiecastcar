
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Land Rover', value: 'land-rover', color: 'from-green-500/20 to-green-600/30 border-green-400/20 hover:border-green-400/40' },
  { name: 'Mercedes', value: 'mercedes', color: 'from-blue-500/20 to-blue-600/30 border-blue-400/20 hover:border-blue-400/40' },
  { name: 'BMW', value: 'bmw', color: 'from-gray-500/20 to-gray-600/30 border-gray-400/20 hover:border-gray-400/40' },
  { name: 'Audi', value: 'audi', color: 'from-red-500/20 to-red-600/30 border-red-400/20 hover:border-red-400/40' },
  { name: 'Tesla', value: 'tesla', color: 'from-red-500/20 to-red-600/30 border-red-400/20 hover:border-red-400/40' },
  { name: 'Porsche', value: 'porsche', color: 'from-yellow-500/20 to-yellow-600/30 border-yellow-400/20 hover:border-yellow-400/40' },
  { name: 'Rolls Royce', value: 'rolls-royce', color: 'from-indigo-500/20 to-indigo-600/30 border-indigo-400/20 hover:border-indigo-400/40' },
  { name: 'Ferrari', value: 'ferrari', color: 'from-red-600/20 to-red-700/30 border-red-500/20 hover:border-red-500/40' },
  { name: 'Lamborghini', value: 'lamborghini', color: 'from-orange-600/20 to-orange-700/30 border-orange-500/20 hover:border-orange-500/40' },
  { name: 'Pagani', value: 'pagani', color: 'from-cyan-500/20 to-cyan-600/30 border-cyan-400/20 hover:border-cyan-400/40' },
  { name: 'Bugatti', value: 'bugatti', color: 'from-blue-700/20 to-blue-800/30 border-blue-600/20 hover:border-blue-600/40' },
];

const CategoryButtons = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Shop by Category</h2>
          <p className="text-gray-400 text-lg">Browse our collection by your favorite car brands</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.value} to={`/categories?category=${category.value}`} className="group">
              <div 
                className={`
                  relative h-16 w-full rounded-lg
                  bg-gradient-to-br ${category.color}
                  backdrop-blur-md border
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-xl hover:shadow-white/10
                  group-hover:backdrop-blur-lg
                  overflow-hidden
                  ${category.value === 'bugatti' ? 'ring-2 ring-blue-400/50' : ''}
                  ${category.value === 'tesla' ? 'ring-2 ring-red-400/50' : ''}
                `}
              >
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                
                {/* Top selling badge for Bugatti and Tesla */}
                {(category.value === 'bugatti' || category.value === 'tesla') && (
                  <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    TOP
                  </div>
                )}
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-3">
                  <span className="text-white font-semibold text-sm text-center leading-tight drop-shadow-lg">
                    {category.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/categories">
            <div className="inline-block relative">
              <div className="glass-card rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/10">
                <div className="px-8 py-3 backdrop-blur-md">
                  <span className="text-white font-medium">View All Categories</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;
