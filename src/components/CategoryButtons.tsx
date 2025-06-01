
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categories = [
  { name: 'Land Rover', value: 'land-rover', color: 'bg-green-600 hover:bg-green-700' },
  { name: 'Mercedes', value: 'mercedes', color: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'BMW', value: 'bmw', color: 'bg-gray-600 hover:bg-gray-700' },
  { name: 'Audi', value: 'audi', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'Toyota', value: 'toyota', color: 'bg-orange-600 hover:bg-orange-700' },
  { name: 'Honda', value: 'honda', color: 'bg-purple-600 hover:bg-purple-700' },
  { name: 'Porsche', value: 'porsche', color: 'bg-yellow-600 hover:bg-yellow-700' },
  { name: 'Rolls Royce', value: 'rolls-royce', color: 'bg-indigo-600 hover:bg-indigo-700' },
  { name: 'Ferrari', value: 'ferrari', color: 'bg-red-700 hover:bg-red-800' },
  { name: 'Lamborghini', value: 'lamborghini', color: 'bg-orange-700 hover:bg-orange-800' },
  { name: 'Mercedes Benz', value: 'mercedes-benz', color: 'bg-slate-600 hover:bg-slate-700' },
  { name: 'Pagani', value: 'pagani', color: 'bg-cyan-600 hover:bg-cyan-700' },
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
            <Link key={category.value} to={`/categories?category=${category.value}`}>
              <Button 
                className={`w-full h-16 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 ${category.color} border-0`}
                variant="default"
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/categories">
            <Button variant="outline" className="px-8 py-3">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;
