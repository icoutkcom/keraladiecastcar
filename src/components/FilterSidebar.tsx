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
  return;
};
export default FilterSidebar;