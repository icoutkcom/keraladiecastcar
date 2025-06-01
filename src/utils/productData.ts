export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Real products including Land Rover and Porsche
const realProducts = [
  {
    id: 1,
    name: "1/18 Diecast LCD Land Rover Range Rover 2022 - White with gold roof",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5967671309502630007.jpg?v=1742562689",
    price: 15500,
    category: "land-rover"
  },
  {
    id: 2,
    name: "1/18 Land Rover Defender 110 \"Camel Trophy Sabah-Malaysia\" Dirty Version 1993 Yellow Almost Real",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2024-11-20_15-19-59.jpg?v=1747653071",
    price: 18500,
    category: "land-rover"
  },
  {
    id: 3,
    name: "1/18 Diecast Land Rover Range Rover \"Camel Trophy Papua New Guinea\" Almost Real\" Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5782959016803158946.jpg?v=1747653078",
    price: 19000,
    category: "land-rover"
  },
  {
    id: 4,
    name: "1/18 Diecast LCD Land Rover Range Rover 2022 Gold",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5967671309502630015.jpg?v=1742562687",
    price: 16000,
    category: "land-rover"
  },
  {
    id: 5,
    name: "1/18 Diecast Land Rover Range Rover 1970 white Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/IMG-20250210_183411_636.jpg?v=1742565242",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 6,
    name: "1/18 Diecast Land Rover Defender 110 2020 Green Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/top4-PhotoRoom.jpg?v=1742565820",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 7,
    name: "LCD Land Rover Range Rover SV 2022 - 1/18 Diecast Full Opening, Black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5810167149292012604.jpg?v=1742562218",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 8,
    name: "LCD Land Rover Range Rover - 1/18 Diecast Model, All Opening - Black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2245.jpg?v=1742563665",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 9,
    name: "Land Rover Range Rover Limited Edition by MotorHelix[1/18 Resin Silver]",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-17175_jpg.webp?v=1742563964",
    price: 18000,
    category: "land-rover"
  },
  {
    id: 10,
    name: "1/18 Diecast  Bburago Land Rover - Range Rover Sport (Black) Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-15291-PhotoRoom.jpg?v=1742564165",
    price: 8500,
    category: "land-rover"
  },
  {
    id: 11,
    name: "Land Rover Range Rover Carbon Fiber Key Fob Case (Model A) - Carbon Black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1690479831-5.jpg?v=1742564643",
    price: 1500,
    category: "accessories"
  },
  {
    id: 12,
    name: "1/18 Resin Land Rover Range Rover Sunset Gold Matt by MotorHelix",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_10_2024-12-28_15-34-28.jpg?v=1742564907",
    price: 17000,
    category: "land-rover"
  },
  // Porsche products
  {
    id: 13,
    name: "1/18 Diecast Porsche 911 GT3 RS 2022 Racing Yellow Minichamps",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
    price: 22500,
    category: "porsche"
  },
  {
    id: 14,
    name: "1/18 Porsche 918 Spyder Weissach Package Silver Autoart",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    price: 28500,
    category: "porsche"
  },
  {
    id: 15,
    name: "1/18 Diecast Porsche Carrera GT 2004 Guards Red Maisto",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop",
    price: 19500,
    category: "porsche"
  },
  {
    id: 16,
    name: "1/18 Porsche 911 Turbo S 2020 Jet Black Metallic Spark",
    image: "https://images.unsplash.com/photo-1580414056378-0e50e03b1b8d?w=400&h=400&fit=crop",
    price: 24000,
    category: "porsche"
  },
  {
    id: 17,
    name: "1/18 Diecast Porsche Taycan Turbo S 2021 Frozen Berry Metallic Minichamps",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=400&fit=crop",
    price: 26500,
    category: "porsche"
  },
  {
    id: 18,
    name: "1/18 Porsche 911 Speedster 2019 Heritage Design Package GT Spirit",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
    price: 21500,
    category: "porsche"
  }
];

// Generate more products with different categories
const carBrands = ['land-rover', 'mercedes', 'bmw', 'audi', 'toyota', 'honda', 'porsche', 'rolls-royce', 'ferrari', 'lamborghini', 'mercedes-benz', 'pagani'];
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
