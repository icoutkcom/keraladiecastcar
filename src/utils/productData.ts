
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
  },
  {
    id: 11,
    name: "1/18 Resin Model – BMW M850i Gran Coupe xDrive M Performance | GT Spirit | Dark Red",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_6_2025-05-14_14-53-19.jpg?v=1747221226",
    price: 16500,
    category: "bmw"
  },
  {
    id: 12,
    name: "1/18 BMW i7 2022 Diecast by Minichamps | Full Opening | Dealer Edition",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_1_2025-05-04_16-55-19.jpg?v=1746791558",
    price: 14500,
    category: "bmw"
  },
  {
    id: 13,
    name: "1/18 Resin GT Spirit BMW Alpina B7 Saloon - Blue / Beige Interior Limited Edition",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-04-28_16-34-55.jpg?v=1746791514",
    price: 18000,
    category: "bmw"
  },
  {
    id: 14,
    name: "1/18 Resin GT Spirit BMW Alpina B5 Saloon - Blue / Black Interior Limited Edition",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_3_2025-04-28_16-34-39.jpg?v=1746791512",
    price: 17500,
    category: "bmw"
  },
  {
    id: 15,
    name: "1/18 Metal Diecast Full Opening Minichamps Dealer Edition BMW i7 (2022) - Black Metallic",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_12_2025-04-28_16-33-44.jpg?v=1746791500",
    price: 15000,
    category: "bmw"
  },
  {
    id: 16,
    name: "1/18 Metal Diecast Model – Minichamps BMW XM 2023 in Yellow",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-04-28_16-32-54.jpg?v=1747652879",
    price: 16000,
    category: "bmw"
  },
  {
    id: 17,
    name: "1:18 Acrylic Display Case – Black Leather Base with BMW Logo Print",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/1_18_Acrylic_Display_Case_Black_Leather_Base_with_BMW_Logo_Print.jpg?v=1744046765",
    price: 3000,
    category: "accessories"
  },
  {
    id: 18,
    name: "1:18 Diecast (Doors Opening) – Minichamps BMW M4 DTM 2019 #7 B. Spengler, BMW Team RMG – Matt Black Racing Decal (Limited 1002 pcs)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-03-17_16-15-57.jpg?v=1744046752",
    price: 18500,
    category: "bmw"
  },
  {
    id: 19,
    name: "1:18 Diecast (Doors Opening) – Minichamps BMW M3 DTM 2013 #7 A. Farfus, BMW Team RBM – Green Racing Decal (Limited 1002 pcs)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-03-17_16-15-45.jpg?v=1744046751",
    price: 18000,
    category: "bmw"
  },
  {
    id: 20,
    name: "1:18 Diecast – Minichamps BMW M4 DTM 2019 P. Eng, BMW Team RMR #25 – Blue Racing Decal",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-03-17_16-15-09.jpg?v=1744046749",
    price: 17000,
    category: "bmw"
  },
  {
    id: 21,
    name: "1:18 Diecast Full Opening – Minichamps Dealer Edition BMW i8 – Crystal White",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-03-11_17-47-31.jpg?v=1744046748",
    price: 15500,
    category: "bmw"
  },
  {
    id: 22,
    name: "1:18 Diecast Model – Minichamps Dealer Edition BMW 328 Roadster 1938 – White",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-02-22_15-36-10.jpg?v=1744046657",
    price: 19000,
    category: "bmw"
  },
  {
    id: 23,
    name: "1:18 Metal Diecast – Minichamps BMW XM KITH – Frozen Techno Violet (Full Opening)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-02-22_15-35-44.jpg?v=1742561420",
    price: 17500,
    category: "bmw"
  },
  {
    id: 24,
    name: "1/18 Diecast Solido BMW M3 E36 Coupe 1990 in blue with black interior",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_7_2025-02-17_14-40-59.jpg?v=1742561477",
    price: 9500,
    category: "bmw"
  },
  {
    id: 25,
    name: "1/18 Diecast Solido BMW M3 E36 Coupe 1990 in Artic Silver",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_7_2025-02-17_14-40-49.jpg?v=1742561479",
    price: 9500,
    category: "bmw"
  },
  {
    id: 26,
    name: "1/18 Diecast Solido BMW 635 CSI (E24) 1984 in Red (Doors Opening)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2025-02-17_14-39-59.jpg?v=1742561489",
    price: 10000,
    category: "bmw"
  },
  {
    id: 27,
    name: "1:18 Metal Diecast - BMW M8 Competition Coupe 2020 by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_8_2025-01-20_16-07-52.jpg?v=1742561689",
    price: 16500,
    category: "bmw"
  },
  {
    id: 28,
    name: "1/18 Resin – BMW Williams Jack Set by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_5_2024-12-06_14-52-23.jpg?v=1742562034",
    price: 8500,
    category: "accessories"
  },
  {
    id: 29,
    name: "1/18 Resin – BMW Williams Tyre Change Set #1 by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_5_2024-12-06_14-46-36.jpg?v=1742562036",
    price: 9000,
    category: "accessories"
  },
  {
    id: 30,
    name: "1/18 Resin – BMW Williams Tyre Change Set #2 by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_4_2024-12-06_14-31-07.jpg?v=1742562037",
    price: 9000,
    category: "accessories"
  },
  {
    id: 31,
    name: "1/18 Resin – BMW Williams Refueller Set by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_5_2024-12-06_14-30-53.jpg?v=1742562039",
    price: 8500,
    category: "accessories"
  },
  {
    id: 32,
    name: "1/18 Metal Diecast – BMW i7 (2022) White Metallic by Minichamps",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_2_2024-11-23_11-30-27.jpg?v=1742562055",
    price: 14500,
    category: "bmw"
  },
  {
    id: 33,
    name: "1/18 Diecast Solido BMW 2002 Tii in White (doors opening)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/6037393605267671308.jpg?v=1742562369",
    price: 9000,
    category: "bmw"
  },
  {
    id: 34,
    name: "1/18 Diecast Solido BMW M3 E36 Coupe 1990 Blue (Doors Opening)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/6037393605267671271.jpg?v=1742562372",
    price: 9500,
    category: "bmw"
  },
  {
    id: 35,
    name: "1/18 Resin Model - GT Spirit BMW M4 CSL in Black (Limited Edition)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/6032816574584439549.jpg?v=1742562412",
    price: 17500,
    category: "bmw"
  },
  {
    id: 36,
    name: "1/18 Diecast Model - Minichamps BMW 2500 (1968) in Blue Metallic, Limited to 504 Pieces",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5936002398210344335.jpg?v=1742562756",
    price: 18000,
    category: "bmw"
  },
  {
    id: 37,
    name: "1/18 Resin Model - GT Spirit BMW Alpina B3 Sedan Dark Green",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/5843968116709769852.jpg?v=1742563145",
    price: 16500,
    category: "bmw"
  },
  {
    id: 38,
    name: "1/18 GT Spirit BMW M2 (G87) Resin Model - Blue | Limited Edition",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-4136.jpg?v=1742563372",
    price: 16000,
    category: "bmw"
  },
  {
    id: 39,
    name: "Minichamps BMW M2 CS 2020 [1/18 Resin Blue]",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-3622.jpg?v=1742563460",
    price: 15500,
    category: "bmw"
  },
  {
    id: 40,
    name: "BMW FW25 WilliamsF1 N. Rosberg 2004 by Minichamps [1/18 Diecast metal]",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-3313.jpg?v=1742563507",
    price: 19500,
    category: "bmw"
  },
  {
    id: 41,
    name: "BMW AC Schnitzer ACS3 Sport 2.5 Limited Editon by Otto Mobile [ 1/18 Blue Resin]",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-3070.jpg?v=1742563546",
    price: 17000,
    category: "bmw"
  },
  {
    id: 42,
    name: "Davis & Giovanni BMW M4 LBWK - 1/18 Resin Model, Not Opening - Chrome Silver",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2767.jpg?v=1742563597",
    price: 18500,
    category: "bmw"
  },
  {
    id: 43,
    name: "Minichamps BMW M3 DTM - 1/18 Diecast Model, Partially Opening - White Blue",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-2222.jpg?v=1742563668",
    price: 16500,
    category: "bmw"
  },
  {
    id: 44,
    name: "1/18 metal diecast full opening Kyosho BMW 5 Series Black Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-1277-PhotoRoom.jpg?v=1742563811",
    price: 13500,
    category: "bmw"
  },
  {
    id: 45,
    name: "1/18 Solido BMW E46 CSL (2003) - Metal Diecast, Sleek Black",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-580_1_-PhotoRoom.jpg?v=1742563871",
    price: 11000,
    category: "bmw"
  },
  {
    id: 46,
    name: "GT Spirit BMW M2 CS (F87) - 1/18 Resin Model, Striking Blue",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-48-PhotoRoom.jpg?v=1742563945",
    price: 15000,
    category: "bmw"
  },
  {
    id: 47,
    name: "Otto Mobile BMW ALPINA B7 Turbo Coupe-1/18 Resin Model,Limited Edition,Blue",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-1002020340470-17.jpg?v=1742563948",
    price: 18000,
    category: "bmw"
  },
  {
    id: 48,
    name: "Minichamps BMW M3 (2020) - 1/18 Resin Model, Blue Metallic",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-17203-PhotoRoom.jpg?v=1742563961",
    price: 14500,
    category: "bmw"
  },
  {
    id: 49,
    name: "Minichamps BMW Z1 - Purple (1988, 1/18 Scale)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1700575472_7_-PhotoRoom.jpg?v=1742564023",
    price: 16000,
    category: "bmw"
  },
  {
    id: 50,
    name: "1/18 Resin OTTO BMW M1 Gr B#3 - White Miniature Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-16036-PhotoRoom.jpg?v=1742564080",
    price: 17500,
    category: "bmw"
  },
  {
    id: 51,
    name: "1/18 Resin BMW M5 CS GT Spirit Scale Model - Collectors Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo_5852752321262503067_y.jpg?v=1742564136",
    price: 17000,
    category: "bmw"
  },
  {
    id: 52,
    name: "1/18 Modelcar group BMW ALPINA C2 2.7 WHITE Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-14841-PhotoRoom.jpg?v=1742564210",
    price: 15500,
    category: "bmw"
  },
  {
    id: 53,
    name: "1/18 Modelcar group BMW 7-series (E32) BLUE Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-14838-PhotoRoom_4def02b9-c7dd-4de1-a78f-d54eac5c5845.jpg?v=1742564211",
    price: 14000,
    category: "bmw"
  },
  {
    id: 54,
    name: "1/18 Solido BMW M3 E30 BLUE Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-14764-PhotoRoom.jpg?v=1742564217",
    price: 10500,
    category: "bmw"
  },
  {
    id: 55,
    name: "1/18 KK SCALE BMW 528i E39 SEDAN BLACK Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1698087126_2_-PhotoRoom.jpg?v=1742564218",
    price: 8500,
    category: "bmw"
  },
  {
    id: 56,
    name: "KARL FRIEDRICH RAPP BMW 1892-1962 Figure - Action Figure by SF",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-14704-PhotoRoom.jpg?v=1742564229",
    price: 2500,
    category: "accessories"
  },
  {
    id: 57,
    name: "1/18 GT Spirit BMW M4 CSL (G82) Coupe Grey Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/IMG_9651.heic?v=1742564253",
    price: 17500,
    category: "bmw"
  },
  {
    id: 58,
    name: "1/18 GLM BMW M4 Humans G82 Louisiana WBK Lizard Grey",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-14279-PhotoRoom.jpg?v=1742564265",
    price: 18000,
    category: "bmw"
  },
  {
    id: 59,
    name: "1/18 GT Spirit BMW M4 Competition (G82) M Performance Green Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-13863-PhotoRoom.jpg?v=1742564345",
    price: 17000,
    category: "bmw"
  },
  {
    id: 60,
    name: "1/18 Diecast Solido BMW M3 E46 STREETFIGHTER WHITE 2000 Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-13308-PhotoRoom.jpg?v=1742564374",
    price: 11500,
    category: "bmw"
  },
  {
    id: 61,
    name: "1/18 Diecast BMW M3 E46 GOLD 2000 Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-13360-PhotoRoom.jpg?v=1742564386",
    price: 12000,
    category: "bmw"
  },
  {
    id: 62,
    name: "1/18 Diecast BMW M3 E30 Blue Blue Solido Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/msg-961503572-12423-PhotoRoom.jpg?v=1742564432",
    price: 10500,
    category: "bmw"
  },
  {
    id: 63,
    name: "1/18 Diecast BMW M3 E36 Coupe street fighter Red by Solido Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1691770537_13_-PhotoRoom.jpg?v=1742564549",
    price: 10000,
    category: "bmw"
  },
  {
    id: 64,
    name: "BMW Carbon Fiber Key Fob Case (Model C)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1690482813-4.jpg?v=1742564634",
    price: 1500,
    category: "accessories"
  },
  {
    id: 65,
    name: "BMW Carbon Fiber Key Fob Case (Model B)",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1690477166-3.jpg?v=1742564647",
    price: 1500,
    category: "accessories"
  },
  {
    id: 66,
    name: "1/18 Resin BMW M5 E34 Yellow Model car by Otto",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/files/photo1685182507-7.jpg?v=1747653022",
    price: 16500,
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
