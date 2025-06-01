
export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Sample product names and categories for demonstration
const productCategories = [
  'electronics',
  'fashion',
  'home',
  'beauty',
  'sports',
  'automotive',
  'books',
  'jewelry'
];

const productNames = [
  'Premium Wireless Headphones',
  'Luxury Silk Scarf',
  'Modern Table Lamp',
  'Professional Skincare Set',
  'Athletic Running Shoes',
  'Vintage Leather Jacket',
  'Smart Home Speaker',
  'Diamond Pendant Necklace',
  'Ergonomic Office Chair',
  'Wireless Charging Pad',
  'Designer Sunglasses',
  'Ceramic Dinnerware Set',
  'Bluetooth Fitness Tracker',
  'Cashmere Sweater',
  'LED Gaming Monitor',
  'Gold Watch',
  'Portable Coffee Maker',
  'Memory Foam Pillow',
  'Smartphone Case',
  'Essential Oil Diffuser'
];

// High-quality product images from Unsplash
const productImages = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=400&h=400&fit=crop'
];

export const generateProducts = (count: number = 2000): Product[] => {
  const products: Product[] = [];
  
  for (let i = 1; i <= count; i++) {
    const category = productCategories[Math.floor(Math.random() * productCategories.length)];
    const baseName = productNames[Math.floor(Math.random() * productNames.length)];
    const name = `${baseName} ${i}`;
    const image = productImages[Math.floor(Math.random() * productImages.length)];
    const price = Math.floor(Math.random() * 900) + 10; // $10 - $910
    
    products.push({
      id: i,
      name,
      image,
      price,
      category
    });
  }
  
  return products;
};

export const categories = productCategories;
