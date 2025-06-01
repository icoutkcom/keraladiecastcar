export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Real Land Rover products from your JSON data
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
  {
    id: 13,
    name: "1/18 Diecast Land Rover Discovery Series 1 \"Camel Trophy Kalimantan 1996\" Dirt Version Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1679495197-2.jpg?v=1747653036",
    price: 19500,
    category: "land-rover"
  },
  {
    id: 14,
    name: "1/18 Diecast Land Rover Range Rover 2020 Red by LCD",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/lcdrangeroverred1.jpg?v=1742566133",
    price: 15500,
    category: "land-rover"
  },
  {
    id: 15,
    name: "Almost Real Land Rover Defender 90 Camel Trophy Edition – 1/18 Diecast Model, All Opening, Yellow",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2024-10-26_22-18-40.jpg?v=1747652948",
    price: 18500,
    category: "land-rover"
  },
  {
    id: 16,
    name: "1/18 diecast Almost real LAND ROVER Defender 90 CAMEL TROPHY BORNEO 1985 Yellow",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5782959016803159124.jpg?v=1747652955",
    price: 19000,
    category: "land-rover"
  },
  {
    id: 17,
    name: "1/18 Diecast Model - Kyosho Land Rover Defender 90 in Antree Green",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5936002398210344408.jpg?v=1742562732",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 18,
    name: "1/18 Resin Model - Kyosho Land Rover Range Rover Sport SVR in Indus Silver",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5920502144706922054.jpg?v=1742562789",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 19,
    name: "Top Speed (Dealer Edition) Land Rover Range Rover Sport - Fuji [ Resin| White | 1/18 ]",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-4504.jpg?v=1742563303",
    price: 18000,
    category: "land-rover"
  },
  {
    id: 20,
    name: "1/18 Resin, Cult Scale Model Land Rover 88 Series III (1978) - Country Russet Brown",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2296.jpg?v=1742563657",
    price: 16000,
    category: "land-rover"
  },
  {
    id: 21,
    name: "Cult Scale Model Land Rover 88 Series III (1978) - 1/18 Resin, Green",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2288.jpg?v=1742563658",
    price: 16000,
    category: "land-rover"
  },
  {
    id: 22,
    name: "1/18 Metal Diecast | Almost Real Land Rover Defender 90 (2023) -Green",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2270.jpg?v=1742563661",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 23,
    name: "Almost Real Land Rover Defender 110 (2023) - 1/18 Metal Diecast, Green",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2262.jpg?v=1742563662",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 24,
    name: "1/18 Diecast Metal CenturyDragon Land Rover Defender 110 - Grey Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-298-PhotoRoom.jpg?v=1742563902",
    price: 13500,
    category: "land-rover"
  },
  {
    id: 25,
    name: "1/18 Diecast LCD Land Rover Defender 90 Works V8 70th Edition Matte Black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1700675559_6_-PhotoRoom.jpg-PhotoRoom.jpg?v=1742563980",
    price: 17000,
    category: "land-rover"
  },
  {
    id: 26,
    name: "LCD Land Rover Defender 90 Works V8 - 1/18 Diecast, 70th Edition Silver",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1700675126_3_-PhotoRoom.jpg-PhotoRoom.jpg?v=1742563982",
    price: 17000,
    category: "land-rover"
  },
  {
    id: 27,
    name: "1/18 Diecast AlmostReal Land Rover Range Rover 1970 Beige Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-13908-PhotoRoom.jpg?v=1742564342",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 28,
    name: "1/18 Diecast  Land Rover Defender 90 Blue by Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/s-l1600-PhotoRoom_b211250f-13a0-4185-843d-03e0e047058b.jpg?v=1742564625",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 29,
    name: "1/18 Diecast  Land Rover Defender 90 Silver by Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-15239-1-PhotoRoom-_1.jpg?v=1742564695",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 30,
    name: "1/18 Diecast Land Rover Defender 90 Green Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1683117026-8.jpg?v=1742565078",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 31,
    name: "1/18 Diecast Land Rover Defender 90 White Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1681392188-8.jpg?v=1742565167",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 32,
    name: "1/18 Diecast Land Rover Range Rover \"Camel Trophy Sumatra 1981\" Yellow Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5773825841862656934.jpg?v=1747653035",
    price: 19000,
    category: "land-rover"
  },
  {
    id: 33,
    name: "1/18 Diecast Land Rover Discovery Series 1 \"Camel Trophy Kalimantan 1996\" Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5782959016803158937.jpg?v=1747653052",
    price: 19500,
    category: "land-rover"
  },
  {
    id: 34,
    name: "1/18 Diecast Land Rover Defender 110 Heritage Green Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673530964-4.jpg?v=1742565814",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 35,
    name: "1/18 Diecast Land Rover Defender 110 White Century Dragon Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673533213.jpg?v=1742565815",
    price: 13500,
    category: "land-rover"
  },
  {
    id: 36,
    name: "1/18 Diecast Land Rover Defender 110 Orange Century Dragon Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673533028.jpg?v=1742565816",
    price: 13500,
    category: "land-rover"
  },
  {
    id: 37,
    name: "1/18 Diecast Land Rover Defender 110 Dark Green Century Dragon Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673530950-5.jpg?v=1742565817",
    price: 13500,
    category: "land-rover"
  },
  {
    id: 38,
    name: "1/18 Diecast Land Rover Range Rover Evoque White by GTA",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673530950-2.jpg?v=1742565819",
    price: 12000,
    category: "land-rover"
  },
  {
    id: 39,
    name: "1/18 Diecast Land Rover Defender 90 Chrome Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673530927-9.jpg?v=1742565821",
    price: 16000,
    category: "land-rover"
  },
  {
    id: 40,
    name: "1/18 Diecast Land Rover Defender 110 Black Century Dragon Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1673526174-8.jpg?v=1742565853",
    price: 13500,
    category: "land-rover"
  },
  {
    id: 41,
    name: "1/18 Resin Land Rover Range Rover Silver by LS",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/Rangeroveroldsilver1.jpg?v=1742566005",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 42,
    name: "1/18 Diecast Land Rover Defender 110 Blue Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/defenderblue901.jpg?v=1742566096",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 43,
    name: "1/18 Diecast Land Rover Defender 110 White Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/ardefenderwhite1.jpg?v=1742566348",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 44,
    name: "1/18 Land Rover Defender 110 Black Almost Real",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/6041808054258877236.jpg?v=1742566350",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 45,
    name: "1/18 Diecast Miniature Land Rover LR Series III 109 Pickup Blue Eagle Collectibles Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/eaglelandrover.jpg?v=1742566440",
    price: 14000,
    category: "land-rover"
  },
  {
    id: 46,
    name: "1/18 Diecast Land Rover Defender 90 Adventure 2007 Yellow Kyosho Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/WhatsAppImage2022-12-28at15.41.00.jpg?v=1747653081",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 47,
    name: "1/18 Diecast Land Rover Range Rover \"The British Trans-Americas Expedition\" 1971-1972 Blue Almost Real",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/WhatsAppImage2022-12-28at15.40.18.jpg?v=1742566648",
    price: 19500,
    category: "land-rover"
  },
  {
    id: 48,
    name: "1/18 Diecast Full Opening - LCD Land Rover Range Rover SV 2022 (Red)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5778222771682263797.jpg?v=1742562316",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 49,
    name: "1/18 GT Autos Land Rover Range Rover 2013 in classic black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5974106098224973350.jpg?v=1742562632",
    price: 14000,
    category: "land-rover"
  },
  {
    id: 50,
    name: "1/18 Diecast  Land Rover Range Rover Classic Police White 1970 by Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/range-rover-police-almost-real-dubai-PhotoRoom.jpg?v=1742564624",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 51,
    name: "Land Rover Range Rover Carbon Fiber Key Fob Case (Model B) - Ruby Red (Glass Fiber)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1690480517-5.jpg?v=1747135444",
    price: 1500,
    category: "accessories"
  },
  {
    id: 52,
    name: "1/18 Land Rover Range Rover Autobiography white 2022 White By Motor Helix",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1689870900-3.jpg?v=1742564706",
    price: 17000,
    category: "land-rover"
  },
  {
    id: 53,
    name: "1/18 Diecast Land Rover Defender 90 Heritage Green Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2024-10-26_22-19-27.jpg?v=1742565038",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 54,
    name: "1/18 Diecast Land Rover Defender 110 \"Camel Trophy Sabah-Malaysia\" 1993 Yellow Almost Real Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1681388473-2.jpg?v=1747653032",
    price: 18500,
    category: "land-rover"
  },
  {
    id: 55,
    name: "1/18 Resin Land Rover Range Rover White Model Car by MotorHelix",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1677428093.jpg?v=1742565415",
    price: 17000,
    category: "land-rover"
  },
  {
    id: 56,
    name: "1/18 Diecast Land Rover Range Rover 2Doors Green Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1674748985.jpg?v=1742565482",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 57,
    name: "1/18 Diecast Land Rover Defender 90 Olive Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/photo1676895807-9.jpg?v=1742565489",
    price: 14500,
    category: "land-rover"
  },
  {
    id: 58,
    name: "1/18 Diecast Land Rover Range Rover 2 Doors 1970 Blue Almost Real",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/IMG-20250210_183806_091.jpg?v=1742565822",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 59,
    name: "1/18 Resin Land Rover Range Rover Blue by LS",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/roverroverblueold1.jpg?v=1742566002",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 60,
    name: "1/18 Diecast Land Rover Defender 90 Black Kyosho Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/defender90oldblack1.jpg?v=1742566098",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 61,
    name: "1/18 Diecast Land Rover Defender 110 Silver Almost Real Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/ardefendersilver1.jpg?v=1742566349",
    price: 15000,
    category: "land-rover"
  },
  {
    id: 62,
    name: "1/18 Diecast Miniature Land Rover Range Rover Classic Vogue CULT Silver Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/RRgrey1.jpg?v=1742566500",
    price: 16000,
    category: "land-rover"
  },
  {
    id: 63,
    name: "1/18 Diecast Land Rover Range Rover Sport SVR Blue Kyosho Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/6032816574584439541.jpg?v=1742566534",
    price: 17500,
    category: "land-rover"
  },
  {
    id: 64,
    name: "1/18 Land Rover Range Rover SV Autobiography Dynamic 2017 White LCD-Model",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/RR2.jpg?v=1742566583",
    price: 16500,
    category: "land-rover"
  },
  {
    id: 65,
    name: "1/18 Diecast Land Rover Defender 90  Grey Kyosho Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/WhatsAppImage2022-12-28at15.39.04.jpg?v=1742566649",
    price: 16500,
    category: "land-rover"
  }
];

// Categories for diecast cars
export const categories = [
  'land-rover',
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
  const brands = ['Land Rover', 'BMW', 'Mercedes', 'Audi', 'Porsche', 'Ferrari'];
  const models = ['Defender', 'Range Rover', 'Discovery', 'Evoque', 'Sport', 'Classic'];
  const scales = ['1:18', '1:24', '1:43'];
  const manufacturers = ['Almost Real', 'LCD', 'Kyosho', 'AUTOart', 'Minichamps'];
  
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
    const category = brand.toLowerCase().replace(' ', '-');
    
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
