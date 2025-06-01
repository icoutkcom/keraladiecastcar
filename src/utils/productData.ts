export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Real diecast car products from your CSV
const realProducts = [
  {
    id: 1,
    name: "1:18 Diecast Full Opening – Minichamps Dealer Edition BMW M3 G80 (Yellow)",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-M3-G80-118-Diecast-1-600x600.jpg",
    price: 12500,
    category: "bmw"
  },
  {
    id: 2,
    name: "1:18 Acrylic Display Case – Black Leather Base with Stitching",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/acrylic-display-case-black-leather-base-600x600.jpg",
    price: 2500,
    category: "accessories"
  },
  {
    id: 3,
    name: "1/18 BMW i7 2022 Diecast by Minichamps | Full Opening",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/BMW-i7-2022-Diecast-by-Minichamps-1-600x600.jpg",
    price: 13500,
    category: "bmw"
  },
  {
    id: 4,
    name: "1/18 Diecast BMW Z8 by Kyosho – Full Opening",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/BMW-Z8-by-Kyosho-1-600x600.jpg",
    price: 15000,
    category: "bmw"
  },
  {
    id: 5,
    name: "1:18 Diecast (Doors Opening) – Minichamps BMW M3 E92 Coupe",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-M3-E92-Coupe-1-600x600.jpg",
    price: 11500,
    category: "bmw"
  },
  {
    id: 6,
    name: "1:18 Diecast (Doors Opening) – Minichamps BMW M3 E92 Coupe (Grey)",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-M3-E92-Coupe-Grey-1-600x600.jpg",
    price: 11500,
    category: "bmw"
  },
  {
    id: 7,
    name: "1/18 Diecast KK Scale BMW 540i E39 Sedan blue",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/KK-Scale-BMW-540i-E39-Sedan-blue-1-600x600.jpg",
    price: 8500,
    category: "bmw"
  },
  {
    id: 8,
    name: "1:18 Diecast – Minichamps BMW 2500 (1968)",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-2500-1968-1-600x600.jpg",
    price: 14000,
    category: "bmw"
  },
  {
    id: 9,
    name: "1:18 Diecast – Minichamps BMW M4 DTM 2019 P. Eng (No. 25)",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-M4-DTM-2019-P.-Eng-No.-25-1-600x600.jpg",
    price: 16500,
    category: "bmw"
  },
  {
    id: 10,
    name: "1/18 Diecast Model - Minichamps BMW 2500 (1968) – Silver",
    image: "https://keraladiecastcar.com/wp-content/uploads/2024/10/Minichamps-BMW-2500-1968-Silver-1-600x600.jpg",
    price: 14000,
    category: "bmw"
  }
];

// Categories for diecast cars
export const categories = [
  'bmw',
  'mercedes',
  'audi',
  'porsche',
  'ferrari',
  'lamborghini',
  'mclaren',
  'accessories',
  'vintage',
  'racing'
];

// Generate additional products to fill the catalog while keeping the real ones
const generateAdditionalProducts = (startId: number, count: number): Product[] => {
  const additionalProducts: Product[] = [];
  const brands = ['BMW', 'Mercedes', 'Audi', 'Porsche', 'Ferrari', 'Lamborghini'];
  const models = ['M3', 'M4', 'M5', 'Z4', 'X5', 'i8', 'Series', 'Coupe', 'Sedan', 'Convertible'];
  const scales = ['1:18', '1:24', '1:43'];
  const manufacturers = ['Minichamps', 'Kyosho', 'AUTOart', 'Norev', 'Spark'];
  
  // Fallback images for additional products
  const fallbackImages = [
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=400&fit=crop'
  ];
  
  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const brand = brands[Math.floor(Math.random() * brands.length)];
    const model = models[Math.floor(Math.random() * models.length)];
    const scale = scales[Math.floor(Math.random() * scales.length)];
    const manufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
    const year = 1990 + Math.floor(Math.random() * 34); // 1990-2024
    
    const name = `${scale} Diecast ${manufacturer} ${brand} ${model} (${year})`;
    const image = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    const price = Math.floor(Math.random() * 15000) + 5000; // ₹5000 - ₹20000
    const category = brand.toLowerCase();
    
    additionalProducts.push({
      id,
      name,
      image,
      price,
      category
    });
  }
  
  return additionalProducts;
};

export const generateProducts = (count: number = 2000): Product[] => {
  // Start with the real products
  const allProducts = [...realProducts];
  
  // Generate additional products to reach the desired count
  if (count > realProducts.length) {
    const additionalCount = count - realProducts.length;
    const additionalProducts = generateAdditionalProducts(realProducts.length + 1, additionalCount);
    allProducts.push(...additionalProducts);
  }
  
  return allProducts.slice(0, count);
};
