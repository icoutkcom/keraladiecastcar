export interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
}

// Real Land Rover products only
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
    price: 14500,
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
    price: 16500,
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
    price: 18000,
    category: "land-rover"
  },
  {
    id: 65,
    name: "1/18 Diecast Land Rover Defender 90  Grey Kyosho Scale Model Car",
    image: "https://cdn.shopify.com/s/files/1/1786/0103/products/WhatsAppImage2022-12-28at15.39.04.jpg?v=1742566649",
    price: 14500,
    category: "land-rover"
  },
  {
    "id":66,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Cullinan Mansory | SC Models | Black\/Orange | Limited 48 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/1_18_Resin_Model_Rolls_Royce_Cullinan_Mansory_SC_Models_Black_Orange_Limited_48_pcs.jpg?v=1748256139",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":67,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Boat Tail | SC Models | Black\/Silver | Limited 66 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/1_18_Resin_Model_Rolls_Royce_Boat_Tail_SC_Models_Black_Silver_Limited_66_pcs.jpg?v=1748256271",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":68,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Cullinan Mansory | VMB Models | Matt Black\/Silver | Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-05-23_21-45-44.jpg?v=1748023782",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":69,
    "name":"1\/12 Resin Model \u2013 Rolls Royce Ghost | VMB Model | Coral Red | Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-05-23_21-25-11.jpg?v=1748021148",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":70,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Dawn | H&H |Matt Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-05-14_14-54-39.jpg?v=1747223775",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":71,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Dawn | H&H | Victoria Violet \/ Desert Gold",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_1_2025-05-14_14-54-29.jpg?v=1747223503",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":72,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Dawn | H&H |Sapphire \/ Pearl White",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_10_2025-05-14_14-54-21.jpg?v=1747223253",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":73,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Dawn | H&H |Pearl White \/ Diamond Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-05-14_14-54-13.jpg?v=1747223046",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":74,
    "name":"1\/18 Resin Model \u2013 Rolls Royce Dawn | H&H |Tiffany",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-05-14_14-54-04.jpg?v=1747222837",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":75,
    "name":"1\/18 Resin Rolls Royce Dawn \u2013 Black\/Silver | H&H | Limited Edition 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_3_2025-05-06_16-07-39.jpg?v=1746791574",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":76,
    "name":"1\/18 Resin Model \u2013 H&H Rolls Royce Cullinan Series II Pearl White with Black Badge  Limited Edition: 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-05-04_16-55-05.jpg?v=1746791556",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":77,
    "name":"1\/18 Resin \u2013 H&H Rolls Royce Phantom Extended Wheelbase II Silver \/ Red Dragon Ltd.Edn.20 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-04-28_16-33-14.jpg?v=1746791496",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":78,
    "name":"1\/18 Resin H&H Rolls Royce Phantom Extended Wheelbase II Heavenly Collection  Ltd.Edn.20 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-04-24_19-28-41.jpg?v=1746791491",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":79,
    "name":"1\/18 Resin H&H Rolls Royce Phantom Extended Wheelbase II Rose Gold Ltd.Edn.30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_5_2025-04-24_19-28-22.jpg?v=1746791489",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":80,
    "name":"1\/18 Resin H&H Rolls Royce Cullinan Series II Salamanca Blue Ltd.Edn.30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-04-24_19-28-11.jpg?v=1746791487",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":81,
    "name":"1\/18 Resin H&H Rolls Royce Cullinan Series II Wildberry Rose Ltd.Edn.30pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_9_2025-04-24_19-27-38.jpg?v=1746791484",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":82,
    "name":"1\/18 Resin \u2013 VMB Model Rolls-Royce Ghost Artistic Livery  Ltd.Edn - 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_3_2025-04-24_17-10-54.jpg?v=1745502063",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":83,
    "name":"1\/18 Resin Model \u2013 H&H Rolls Royce Spectre Morganite Pink  Ltd.Edn.50 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-04-19_21-54-41.jpg?v=1745491363",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":84,
    "name":"1\/18 Resin  \u2013 SC Models Rolls Royce Boat Tail Blue \/ Black  Limited- 66 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-04-12_18-08-18.jpg?v=1745491298",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":85,
    "name":"1\/18 Resin  \u2013 VMB Model  Rolls Royce Ghost White\/ Carbon Fiber hood Limited- 99 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_3_2025-04-12_18-08-06_4daac9ce-61e8-4363-b1eb-e91353c37749.jpg?v=1745491296",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":86,
    "name":"1\/18 Resin Model \u2013 VMB Model Rolls Royce Ghost",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-04-10_21-29-15.jpg?v=1744308592",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":87,
    "name":"1:18 Resin H&H Rolls-Royce Cullinan Series II Truffle Marble Brown \u2013 Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/rn-image_picker_lib_temp_3d599af6-4dd8-4bad-a1b8-0c724035994f.jpg?v=1744045308",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":88,
    "name":"1:18 Resin \u2013 H&H Rolls-Royce Cullinan Series II Emerald Green \u2013 Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/rn-image_picker_lib_temp_4f29cd3c-b096-4eb4-85e9-be9d0c518f48.jpg?v=1744045305",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":89,
    "name":"1:18 Resin \u2013 H&H Rolls-Royce Cullinan Series II Diamond Black \u2013 Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/rn-image_picker_lib_temp_d8bba4c0-9c5e-4ad2-b70c-8f68a7c92cee.jpg?v=1744045303",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":90,
    "name":"1:18 Resin \u2013 H&H Rolls-Royce Cullinan Series II Twilight Purple \u2013 Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/rn-image_picker_lib_temp_cf2cd07a-284b-4eb3-9ea4-795bd15ce862.jpg?v=1744045300",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":91,
    "name":"1\/18 Resin H&H Rolls Royce Phantom Extended Wheelbase  II Black \/ Silver Limited Edition 30",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-03-06_19-36-28.jpg?v=1744046727",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":92,
    "name":"1:18 Diecast \u2013 Kyosho Rolls Royce Ghost (Full Opening) in Black\/Silver",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_7_2025-02-03_15-32-32.jpg?v=1742561575",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":93,
    "name":"1:18 Resin Model - Rolls Royce Cullinan Mansory by FuelMe Models (Royal Blue)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-01-23_17-38-13.jpg?v=1742561674",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":94,
    "name":"1:8 Resin Model - Custom Works Rolls Royce Cullinan Mansory Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-01-17_18-51-50.jpg?v=1742561758",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":95,
    "name":"1:18 Resin Model  - H&H Rolls Royce Phantom Extended Wheelbase II (Black Dragon)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-01-16_14-26-25.jpg?v=1742561777",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":96,
    "name":"1:18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase II (White\/Gold)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/1_18_Resin_Model_-_H_H_Rolls_Royce_Phantom_Extended_Wheelbase_II_White_Gold.jpg?v=1746801914",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":97,
    "name":"1\/18 Resin Model - Rolls Royce Spectre Pearl White by DF Model",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_8_2025-01-07_20-31-26.jpg?v=1742561848",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":98,
    "name":"1\/18 Resin Model - Rolls Royce Spectre Purple by DF Model",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_9_2025-01-07_20-31-13.jpg?v=1742561850",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":99,
    "name":"1\/18 Resin Model - Rolls Royce Spectre Black by DF Model",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2025-01-07_20-30-58.jpg?v=1742561852",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":100,
    "name":"1\/18 Resin GL Models Rolls Royce Cullinan Gold Chrome Limited to 15 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_6_2024-12-19_18-24-56.jpg?v=1742561904",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":101,
    "name":"GL Models Rolls-Royce Cullinan - 1\/18 Resin Model, Glossy Black, Limited to 39 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_27_2024-10-21_22-28-15.jpg?v=1742562205",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":102,
    "name":"GL Models Rolls-Royce Cullinan - 1\/18 Resin Model, Tiffany Green, Limited to 39 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_19_2024-10-21_22-28-15.jpg?v=1742562207",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":103,
    "name":"GL Models Rolls-Royce Cullinan - 1\/18 Resin Model, White, Limited to 39 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_11_2024-10-21_22-28-15.jpg?v=1742562209",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":104,
    "name":"GL Models Rolls-Royce Cullinan - 1\/18 Resin Model, Electro Silverinq, Limited to 15 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_2_2024-10-21_22-28-15.jpg?v=1742562211",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":105,
    "name":"Kengfai Rolls Royce Phantom VIII - 1\/18 Diecast, Full Opening, Purple\/Silver",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5785334138012812393.jpg?v=1742562259",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":106,
    "name":"1\/18 Diecast Kengfai Rolls Royce Phantom VIII - Purple\/Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5785334138012812381.jpg?v=1742562260",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":107,
    "name":"1\/18 Resin Model - H&H Rolls Royce Ghost Black Badge Metallic Red",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656911.jpg?v=1747135396",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":108,
    "name":"1\/18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase Series II Stntopia",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656901.jpg?v=1742562333",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":109,
    "name":"1\/18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase Midnight Purple",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656886.jpg?v=1742562336",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":110,
    "name":"1\/18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase Series II Moonlight Silver",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656879.jpg?v=1742562338",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":111,
    "name":"1\/18 Resin Model - H&H Rolls Royce Ghost Electroplating Green",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656871.jpg?v=1742562340",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":112,
    "name":"1\/18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase Storm Grey Black Series",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656861.jpg?v=1742562341",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":113,
    "name":"1\/18 Resin Model - H&H Rolls Royce Phantom Extended Wheelbase Series II Partridge Gold",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5773825841862656852.jpg?v=1742562343",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":114,
    "name":"1\/18 Resin Model H&H Rolls Royce Cullinan - Limited 30 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5997056762777289692.jpg?v=1742562485",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":115,
    "name":"1\/18 Resin H&H Rolls Royce Phantom Extended Wheelbase Series II in Diamond Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5987788395151214172.jpg?v=1742562546",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":116,
    "name":"H&H Rolls Royce Phantom Extended Wheelbase Series II 1\/18 Scale Resin Model",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5987788395151214140.jpg?v=1742562548",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":117,
    "name":"1\/8 scale Amalgam Rolls-Royce Cullinan in a pristine white finish with luxurious maroon interior",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5974106098224973266.jpg?v=1742562639",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":118,
    "name":"1\/8 scale Amalgam Rolls-Royce Cullinan in a stunning white finish with gold line",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5974106098224973246.jpg?v=1742562641",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":119,
    "name":"1\/18 Resin Model - H&H Rolls Royce Spectre in Lava Red, Limited to 30 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5895774192622748229.jpg?v=1742562846",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":120,
    "name":"1\/18 Resin Model - H&H Rolls Royce Cullinan in Silver\/Black Badge, Limited to 30 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5895774192622748220.jpg?v=1742562847",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":121,
    "name":"1\/18 Diecast Kyosho Rolls Royce Phantom Extended Wheelbase in White (Full Opening)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5886293073791666889.jpg?v=1742562880",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":122,
    "name":"1\/18 Resin Model - H&H Rolls Royce DAWN in White, Limited to 50 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5866057167872836218.jpg?v=1742562992",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":123,
    "name":"1\/18 Resin Model - H&H Rolls Royce Cullinan in Highland Black Badge, Limited to 30 Pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5850633875888391407.jpg?v=1742563072",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":124,
    "name":"\ud83d\ude98 1:18 Rolls-Royce Ghost Black Badge | Brown | H & H | Limited to 25 pcs",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5843968116709769943.jpg?v=1742563128",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":125,
    "name":"1\/18 Resin Model - H&H Rolls Royce Spectre in Chartreuse, Limited to 50 Pieces",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5843968116709769919.jpg?v=1742563130",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":126,
    "name":"KengFai Rolls Royce Phantom VIII Diecast Model - White | 1\/18 Scale, All Opening",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5825787889512990266.jpg?v=1742563181",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":127,
    "name":"KengFai Rolls Royce Phantom VIII Diecast Model - White\/Blue | 1\/18 Scale, All Opening",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5825787889512990277.jpg?v=1742563183",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":128,
    "name":"H&H Rolls Royce Wraith Resin Model - Black | 1\/18 Scale",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5823536089699304727.jpg?v=1742563216",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":129,
    "name":"H&H Rolls Royce Spectre Resin Model - White & Black | 1\/18 Scale",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5823536089699304735.jpg?v=1742563227",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":130,
    "name":"HH Rolls Royce Cullinan Resin Limited Edition  - Diamond Black | 1\/18 Scale",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-4514.jpg?v=1742563301",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":131,
    "name":"Exclusive YY Model Rolls Royce Cullinan [Resin| Orange | Limited Edition]",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-4249.jpg?v=1742563351",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":132,
    "name":"Exclusive YY Model Rolls Royce Cullinan Resin Model - Tiffany | Limited Edition!",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_5875063907566075539_y.jpg?v=1742563356",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":133,
    "name":"1\/18 YY Model Rolls Royce Cullinan Resin Model - Black | Limited Edition",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo_5875063907566075522_y.jpg?v=1742563358",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":134,
    "name":"HH Rolls Royce Phantom Extended Wheelbase Resin Model - Diamond Black | Limited Edition",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-4202.jpg?v=1742563360",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":135,
    "name":"1\/18 HH Rolls Royce Dawn Resin Model - Diamond Black | Limited Edition",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-4192.jpg?v=1742563362",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":136,
    "name":"1\/18 Resin Model HH Rolls Royce Cullinan - Diamond Black Badge (Limited Edition)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-4106.jpg?v=1742563388",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":137,
    "name":"AutoBarn Models Rolls-Royce Sweptail - 1\/18 Resin Model, Grey",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-3743.jpg?v=1742563442",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":138,
    "name":"Paragon Models Rolls Royce Silver Shadow MPW 2-Door Coupe - 1\/18 Diecast, Black - Paint Rashes Present",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-3216.jpg?v=1742563521",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":139,
    "name":"Davis & Giovanni Rolls Royce Wraith Novitec - 1\/18 Resin Model,Black \/ Silver",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-2716.jpg?v=1742563606",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":140,
    "name":"Kyosho Rolls Royce Cullinan - 1\/18 Diecast Model, All Opening - Blue",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-2102.jpg?v=1742563686",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":141,
    "name":"Kyosho Rolls Royce Phantom Drop Head - 1\/12 Diecast Model, All Opening - Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-2059.jpg?v=1742563695",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":142,
    "name":"Xerox Rolls Royce Phantom 6x6 - 1\/18 Resin Model, Working Lights Matt Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-2001.jpg?v=1742563701",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":143,
    "name":"Davis & Giovanni Rolls Royce Wraith 1\/18 Resin Model - White\/Gold",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-1693.jpg?v=1742563757",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":144,
    "name":"1\/18 Henson & Heaven Resin Model - Rolls-Royce Cullinan Limited Edition in Elegant White",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-1406.jpg?v=1742563792",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":145,
    "name":"1\/18 Henson&Heaven Resin Model - Rolls-Royce Cullinan Limited Edition in Baby Blue",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-1411.jpg?v=1742563794",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":146,
    "name":"Exclusive 1\/8 AMALGAM Scale - Rolls-Royce Cullinan with Full Opening and Working Lights (Remote Included)",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1704809999.jpg?v=1742563798",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":147,
    "name":"1\/18 Resin Model - Davis & Giovanni Rolls-Royce WRAITH NOVITEC Limited Edition (50pcs), White\/Metallic Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/IMG-20231219_002121_694.jpg?v=1742563886",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":148,
    "name":"AutoBarnModels Rolls-Royce SWEPTAIL - 1\/18 Resin Model, Blue",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-427.jpg?v=1742563889",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":149,
    "name":"AutoBarnModels Rolls-Royce SWEPTAIL - 1\/18 Resin Model, Black",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-379_1.jpg?v=1742563896",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":150,
    "name":"AutoBarn Models Rolls-Royce SWEPTAIL - 1\/18 Resin Model, Pearl White",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-368.jpg?v=1742563898",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":151,
    "name":"1\/18 Diecast Metal Full Opening - Rolls-Royce Phantom 8 by Kengfai, Grey",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5785334138012812358.jpg?v=1742563907",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":152,
    "name":"Rolls Royce Phantom - Elegance in Black by Rolls Royce Motor Company\"",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-16928-PhotoRoom.jpg?v=1742563986",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":153,
    "name":"1\/18 Resin Rolls Royce WRAITH Novitec Davis & Giovanni Grey Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15732.jpg?v=1742564132",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":154,
    "name":"1\/18 Resin Rolls Royce WRAITH Novitec Davis & Giovanni Black Metallic Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15671_abf68049-8d7a-4caf-9990-204a00c1d011.jpg?v=1742564134",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":155,
    "name":"1\/18 Diecast Rolls-Royce Motors Rolls-Royce Phantom VIII Silver Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15570-PhotoRoom.jpg?v=1742564145",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":156,
    "name":"1\/18 Resin Model: Rolls Royce PHANTOM VIII Mansory by Muse\u2019s Secret Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15406.jpg?v=1742564155",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":157,
    "name":"1\/18 Resin Muse\u2019s Secret  Rolls Royce- PHANTOM VIII Mansory Pearl White and Gold Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15397.jpg?v=1742564156",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":158,
    "name":"1\/18 Resin Davis & Giovanni  Rolls Royce  WRAITH novitec silver Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-1002020340470-477.jpg?v=1742564158",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":159,
    "name":"1\/18 Rolls-Royce BOAT TAIL Blue Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15098-PhotoRoom.jpg?v=1742564177",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":160,
    "name":"1\/18 Rolls-Royce BOAT TAIL WHITE Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-15079-PhotoRoom.jpg?v=1742564178",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":161,
    "name":"1\/18 Davis & Giovanni Rolls-Royce WRAITH NOVITEC  Matt Green Limited Edition",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/msg-961503572-13598-PhotoRoom.jpg?v=1742564365",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":162,
    "name":"Figure \"Charles Rolls and Henry Royce\" by SF 1:18",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1691674127-PhotoRoom.png?v=1742564610",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":163,
    "name":"1\/18 Diecast Miniature  Rolls Royce Cullinan White Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/Diecast_car_enthusiasts_Dubai.png?v=1742564620",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":164,
    "name":"1\/18 Diecast Miniature Rolls Royce Cullinan Purple Box Dark Blue Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1693050545-PhotoRoom.jpg?v=1742564629",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":165,
    "name":"1\/18 Diecast Miniature Rolls-Royce Cullinan Grey Silver Rolls Royce Motor Cars Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1689182661-5.jpg?v=1742564773",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":166,
    "name":"1\/18 Diecast Miniature Rolls-Royce Cullinan Black Rolls Royce Motor Cars Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/5785334138012812500_7c331219-4ee0-420a-b0dd-24835d868a16.jpg?v=1742564776",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":167,
    "name":"1\/18 Rolls-Royce Spectre  Purple Rolls-Royce Motor Cars",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1689177906-8.jpg?v=1742564784",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":168,
    "name":"1\/18 Rolls-Royce Spectre Pearl White Rolls-Royce Motor Cars",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1689177890.jpg?v=1742564786",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":169,
    "name":"1\/18 Rolls-Royce Spectre Strom Grey  Rolls-Royce Motor Cars",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1689172642-3.jpg?v=1742564799",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":170,
    "name":"1\/18 Diecast Rolls-Royce Ghost White & Red Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1686473782-3.jpg?v=1742564892",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":171,
    "name":"1\/18 Diecast Rolls-Royce Phantom VI Burgundy & Black Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1686306184-4.jpg?v=1742564898",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":172,
    "name":"Rolls-Royce Wraith Limited Edition by VIP Models [1\/18 Black Resin ]",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1685274222-3.jpg?v=1742564964",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":173,
    "name":"1\/18 Diecast Rolls-Royce Phantom VIII Purple Mansory Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1683464526-3.jpg?v=1742565066",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":174,
    "name":"1\/18 Diecast Rolls-Royce Phantom Drophead Coupe White Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/photo1683464698-4.jpg?v=1742565068",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":175,
    "name":"1\/18 Diecast Rolls-Royce Phantom Coupe White Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1678281008-2.jpg?v=1742565353",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":176,
    "name":"Rolls-Royce Phantom V 1964 Paragon Models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1677510265-5.jpg?v=1742565387",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":177,
    "name":"1\/18 Diecast Rolls-Royce Phantom EWB White and Gold Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1676988281-4.jpg?v=1742565445",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":178,
    "name":"1\/18 Diecast Rolls-Royce Ghost Black Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1676988281-9.jpg?v=1742565447",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":179,
    "name":"1\/18 Diecast Rolls-Royce Ghost Grey Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1674748972-6.jpg?v=1742565460",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":180,
    "name":"1\/18 Diecast Rolls-Royce Phantom EWB White Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1676543662-2.jpg?v=1742565504",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":181,
    "name":"1\/18 Diecast Rolls-Royce Phantom EWB Gold Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1676299529-6.jpg?v=1742565548",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":182,
    "name":"Rolls-Royce Silver Shadow MPW 2 DR Coupe Paragon Models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1676299529-11.jpg?v=1742565549",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":183,
    "name":"1\/18 Diecast Rolls-Royce Phantom EWB Green Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1674232423-9.jpg?v=1742565699",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":184,
    "name":"Rolls-Royce Phantom VIII Mansory",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1674232423-3.jpg?v=1742565701",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":185,
    "name":"Rolls-Royce Wraith VIP Models [1\/18 Camo]",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1673526255-6.jpg?v=1742565832",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":186,
    "name":"1\/18 Diecast Rolls-Royce Phantom Coupe Dark Grey Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1673453101-4.jpg?v=1742565920",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":187,
    "name":"1\/18 Diecast Rolls-Royce Cullinan Black Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/photo1673453035-10.jpg?v=1742565942",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":188,
    "name":"1\/18 Diecast Rolls-Royce Ghost White Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/RRghpstwhite1.jpg?v=1742566001",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":189,
    "name":"1\/18 Resin Rolls-Royce Ghost EWB White Resin Model Car by Motorhelix",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/motorhelixphantom1.jpg?v=1742566127",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":190,
    "name":"1\/18 Diecast Rolls-Royce Cullinan Red Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/kyoshocullinanred1.jpg?v=1742566136",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":191,
    "name":"1\/18 Diecast Rolls-Royce Cullinan Grey Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/kyoshocullinangrey1.jpg?v=1742566137",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":192,
    "name":"Rolls-Royce Phantom VIII Mansory",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/mansory1.jpg?v=1742566325",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":193,
    "name":"1\/18 Diecast Rolls-Royce Cullinan Tiffany & Silver Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/kyoshocullinantif1.jpg?v=1742566326",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":194,
    "name":"1\/18 Diecast Rolls-Royce Cullinan White FuelMe Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/fuelmecullinan1.jpg?v=1742566341",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":195,
    "name":"1\/18 Diecast Rolls-Royce Cullinan Baby Blue Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/rolls1.jpg?v=1742566391",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":196,
    "name":"1\/18 Diecast Rolls-Royce Phantom EWB Purple Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/phantompurple1.jpg?v=1742566392",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":197,
    "name":"1\/18 Diecast  Rolls-Royce Phantom VI Blue Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/phantomblue1-_1-PhotoRoom.jpg?v=1742566394",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":198,
    "name":"Rolls-Royce Dawn 1\/18 Diecast Car by SC models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/dawnblack1.jpg?v=1742566537",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":199,
    "name":"Rolls-Royce Dawn Supreme 1\/18 Diecast Car by SC models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/dawn1red.jpg?v=1742566538",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":200,
    "name":"Rolls-Royce Silver Shadow MPW 2DR Coupe Paragon Models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/rollsshadow1.jpg?v=1742566570",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":201,
    "name":"1\/18 Diecast Rolls-Royce Cullinan white & silver Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/cullinan2.jpg?v=1742566571",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":202,
    "name":"1\/18 Diecast Rolls-Royce Cullinan White Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/2cullinan2.jpg?v=1742566573",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":203,
    "name":"1\/18 Diecast  Rolls-Royce Phantom VI  Silver Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/files\/phantomsr1-_1.jpg?v=1742566616",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":204,
    "name":"1\/18 Diecast Rolls-Royce Phantom VI  Red & Beige Kyosho Scale Model Car",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/phantomred2.jpg?v=1742566632",
    "price":null,
    "category":"rolls-royce"
  },
  {
    "id":205,
    "name":"Rolls-Royce Phantom V \"Lennon\" 1\/18 by Paragon Models",
    "image":"https:\/\/cdn.shopify.com\/s\/files\/1\/1786\/0103\/products\/WhatsAppImage2022-12-28at15.38.26.jpg?v=1747653082",
    "price":null,
    "category":"rolls-royce"
  }
 
];

// Categories for diecast cars
export const categories = [
  'land-rover',
  'accessories'
];

// Generate additional products to fill the catalog while keeping the real ones
const generateAdditionalProducts = (startId: number, count: number): Product[] => {
  const additionalProducts: Product[] = [];
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
    const model = models[Math.floor(Math.random() * models.length)];
    const scale = scales[Math.floor(Math.random() * scales.length)];
    const manufacturer = manufacturers[Math.floor(Math.random() * manufacturers.length)];
    const year = 1990 + Math.floor(Math.random() * 34); // 1990-2024
    
    const name = `${scale} Diecast ${manufacturer} Land Rover ${model} (${year})`;
    const image = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    const price = Math.floor(Math.random() * 15000) + 5000; // ₹5000 - ₹20000
    
    additionalProducts.push({
      id,
      name,
      image,
      price,
      category: 'land-rover'
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
