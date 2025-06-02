
import { landRoverProducts } from './data/landRoverData';
import { porscheProducts } from './data/porscheData';
import { accessoriesProducts } from './data/accessoriesData';
import { mercedesProducts } from './data/mercedesData';
import { bmwProducts } from './data/bmwData';
import { audiProducts } from './data/audiData';
import { toyotaProducts } from './data/toyotaData';
import { hondaProducts } from './data/hondaData';
import { ferrariProducts } from './data/ferrariData';
import { lamborghiniProducts } from './data/lamborghiniData';
import { rollsRoyceProducts } from './data/rollsRoyceData';
import { paganiProducts } from './data/paganiData';
import { bugattiProducts } from './data/bugattiData';

export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Combine all real products from category-specific files
const realProducts: Product[] = [
  ...landRoverProducts,
  ...porscheProducts,
  ...accessoriesProducts,
  ...mercedesProducts,
  ...bmwProducts,
  ...audiProducts,
  ...toyotaProducts,
  ...hondaProducts,
  ...ferrariProducts,
  ...lamborghiniProducts,
  ...rollsRoyceProducts,
  ...paganiProducts,
  ...bugattiProducts
];

// Generate more products with different categories
const carBrands = ['land-rover', 'mercedes', 'bmw', 'audi', 'toyota', 'honda', 'porsche', 'rolls-royce', 'ferrari', 'lamborghini', 'mercedes-benz', 'pagani', 'bugatti'];
const productNames = [
  'Sport Edition',
  'Luxury Model',
  'Classic Design',
  'Premium Collection',
  'Special Edition',
  'Limited Series',
  'Heritage Model',
  'Performance Package',
  'Executive Line',
  'Ultimate Edition'
];

export const generateProducts = (count: number): Product[] => {
  const products: Product[] = [...realProducts];
  
  for (let i = products.length; i < count; i++) {
    const brand = carBrands[i % carBrands.length];
    const productName = productNames[i % productNames.length];
    
    products.push({
      id: i + 1,
      name: `${brand.charAt(0).toUpperCase() + brand.slice(1).replace('-', ' ')} ${productName} Model ${i + 1}`,
      image: `https://images.unsplash.com/photo-${1560472354 + (i % 1000)}-b33ff0c44a43?w=400&h=400&fit=crop`,
      price: Math.floor(Math.random() * 20000) + 5000,
      category: brand
    });
  }
  
  return products;
};

// Export individual category products for direct access if needed
export {
  landRoverProducts,
  porscheProducts,
  accessoriesProducts,
  mercedesProducts,
  bmwProducts,
  audiProducts,
  toyotaProducts,
  hondaProducts,
  ferrariProducts,
  lamborghiniProducts,
  rollsRoyceProducts,
  paganiProducts,
  bugattiProducts
};
