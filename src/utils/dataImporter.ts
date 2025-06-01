
import { Product } from './productData';

interface GistProduct {
  id?: number;
  name: string;
  image: string;
  price: number;
  category?: string;
}

export const importProductsFromGist = async (gistUrl: string): Promise<Product[]> => {
  try {
    // Convert GitHub Gist URL to raw URL if needed
    const rawUrl = gistUrl.includes('/raw/') 
      ? gistUrl 
      : gistUrl.replace('github.com', 'gist.githubusercontent.com') + '/raw';
    
    console.log('Fetching products from:', rawUrl);
    
    const response = await fetch(rawUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Handle different data structures
    let products: GistProduct[] = [];
    if (Array.isArray(data)) {
      products = data;
    } else if (data.products && Array.isArray(data.products)) {
      products = data.products;
    } else {
      throw new Error('Invalid data format: Expected array of products');
    }
    
    // Transform and validate the products
    const transformedProducts: Product[] = products.map((product, index) => ({
      id: product.id || index + 1,
      name: product.name || `Product ${index + 1}`,
      image: product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
      price: typeof product.price === 'number' ? product.price : 0,
      category: product.category || 'land-rover'
    }));
    
    console.log(`Successfully imported ${transformedProducts.length} products`);
    return transformedProducts;
    
  } catch (error) {
    console.error('Error importing products:', error);
    throw error;
  }
};

export const validateProductData = (products: Product[]): { valid: Product[], invalid: any[] } => {
  const valid: Product[] = [];
  const invalid: any[] = [];
  
  products.forEach((product, index) => {
    if (
      typeof product.id === 'number' &&
      typeof product.name === 'string' &&
      typeof product.image === 'string' &&
      typeof product.price === 'number' &&
      typeof product.category === 'string'
    ) {
      valid.push(product);
    } else {
      invalid.push({ index, product, reason: 'Missing or invalid required fields' });
    }
  });
  
  return { valid, invalid };
};
