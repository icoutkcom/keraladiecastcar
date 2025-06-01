
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
    // Extract gist ID from URL and construct raw URL
    let rawUrl: string;
    
    if (gistUrl.includes('/raw/')) {
      rawUrl = gistUrl;
    } else {
      // Extract gist ID from the URL
      const gistIdMatch = gistUrl.match(/gist\.github\.com\/[^\/]+\/([a-f0-9]+)/);
      if (!gistIdMatch) {
        throw new Error('Invalid GitHub Gist URL format');
      }
      
      const gistId = gistIdMatch[1];
      rawUrl = `https://gist.githubusercontent.com/chiragshettybp/${gistId}/raw/`;
    }
    
    console.log('Fetching products from:', rawUrl);
    
    const response = await fetch(rawUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status} ${response.statusText}`);
    }
    
    const text = await response.text();
    console.log('Raw response:', text.substring(0, 200) + '...');
    
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseError) {
      throw new Error('Invalid JSON format in Gist');
    }
    
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
