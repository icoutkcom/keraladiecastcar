
import React from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';

interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  priceRange: [number, number];
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

const FilterSidebar = ({
  categories,
  selectedCategories,
  priceRange,
  onCategoryChange,
  onPriceChange,
  onClearFilters
}: FilterSidebarProps) => {
  return (
    <div className="w-80 glass-card p-6 rounded-xl h-fit">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Filters</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="text-gray-400 hover:text-white"
        >
          Clear All
        </Button>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-white mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-3">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
                className="border-gray-500 data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <label
                htmlFor={category}
                className="text-gray-300 capitalize cursor-pointer hover:text-white transition-colors"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="text-lg font-medium text-white mb-4">Price Range</h4>
        <div className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={(value) => onPriceChange(value as [number, number])}
            max={1000}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
