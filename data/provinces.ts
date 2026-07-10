import { cloudinary } from "@/lib/claudinary";

export interface Province {
  id: string;
  name: string;
  slug: string;

  description: string;
  descriptionEn: string;

  shortDescription: string;
  shortDescriptionEn: string;

  temperature: number;
  altitude: number;
  latitude: number;
  longitude: number;

  image: string;
  heroImage: string;

  tagline: string;
  taglineEn: string;

  climate: string;
  climateEn: string;

  culture: string;
  cultureEn: string;

  gastronomy: string;
  gastronomyEn: string;

  landscapes: string;
  landscapesEn: string;

  highlights: string[];
  highlightsEn: string[];

  order: number;
}

export const provinces: Province[] = [
  {
    id: "1",
    name: "Buenos Aires",
    slug: "buenos-aires",
    description:
      "La capital cosmopolita de Argentina y punto de partida de la Ruta Argentina. Buenos Aires deslumbra con su mezcla de arquitectura europea, pasión futbolera y la cuna del tango. Recorré el Obelisco, el majestuoso Teatro Colón, Puerto Madero y la espiritualidad de Luján.",
    descriptionEn:
      "The cosmopolitan capital of Argentina and starting point of the Argentine Route. Buenos Aires dazzles with its blend of European architecture, football passion, and the birthplace of tango. Explore the Obelisk, the magnificent Colón Theatre, Puerto Madero, and the spirituality of Luján.",
    shortDescription: "La capital cosmopolita",
    shortDescriptionEn: "The cosmopolitan capital",
    temperature: 22,
    altitude: 25,
    latitude: -34.6037,
    longitude: -58.3816,
    image: cloudinary("images/provinces/buenos-aires"),
    heroImage: cloudinary("images/provinces/buenos-aires-hero"),
    tagline: "Donde comienza la aventura",
    taglineEn: "Where the adventure begins",
    climate:
      "Clima templado húmedo con veranos cálidos e inviernos suaves. Ideal para visitar durante todo el año.",
    climateEn:
      "Temperate and humid climate with warm summers and mild winters. Ideal for visiting throughout the year.",
    culture:
      "Cuna del tango y capital cultural de Argentina. Teatros de clase mundial, museos, milongas y una vibrante vida urbana que nunca duerme.",
    cultureEn:
      "The birthplace of tango and Argentina's cultural capital. World-class theaters, museums, milongas, and a vibrant urban life that never sleeps.",
    gastronomy:
      "Parrillas legendarias, cafés porteños históricos, pizza al estilo argentino y la mejor selección gastronómica de Puerto Madero.",
    gastronomyEn:
      "Legendary steakhouses, historic porteño coffee shops, Argentine-style pizza, and the best culinary selection in Puerto Madero.",
    landscapes:
      "Arquitectura europea, amplias avenidas, los diques modernos de Puerto Madero y la espiritualidad de la Basílica de Luján.",
    landscapesEn:
      "European architecture, wide avenues, the modern piers of Puerto Madero, and the spirituality of the Basilica of Luján.",
    highlights: [
      "Obelisco",
      "Teatro Colón",
      "Casa del Tango",
      "Cancha de River",
      "Puerto Madero",
      "Basílica de Luján",
    ],
    highlightsEn: [
      "Obelisk",
      "Colón Theatre",
      "Tango House",
      "River Stadium",
      "Puerto Madero",
      "Luján Basilica",
    ],
    order: 1,
  },
  {
    id: "2",
    name: "Rosario",
    slug: "rosario",
    description:
      "Ciudad vibrante a orillas del río Paraná, cuna de la bandera argentina y del astro Lionel Messi. Rosario combina su monumento patrio más importante con la pasión del fútbol, hermosas costaneras y una moderna escena cultural.",
    descriptionEn:
      "Vibrant city on the banks of the Paraná River, birthplace of the Argentine flag and football star Lionel Messi. Rosario combines its most important patriotic monument with the passion for football, beautiful coastlines, and a modern cultural scene.",
    shortDescription: "Cuna de la bandera y de Messi",
    shortDescriptionEn: "Birthplace of the flag and Messi",
    temperature: 24,
    altitude: 25,
    latitude: -32.9442,
    longitude: -60.6505,
    image: cloudinary("images/provinces/rosario"),
    heroImage: cloudinary("images/provinces/rosario-hero"),
    tagline: "Pasión, fútbol y bandera",
    taglineEn: "Passion, football, and flag",
    climate:
      "Clima templado húmedo con veranos cálidos e inviernos suaves. Ideal para visitar durante la primavera y el otoño.",
    climateEn:
      "Temperate and humid climate with warm summers and mild winters. Ideal for visiting throughout the year.",
    culture:
      "Cuna de Lionel Messi y de la bandera argentina. La ciudad respira fútbol y patriotismo en cada esquina, desde el Monumento a la Bandera hasta sus estadios míticos.",
    cultureEn:
      "Birthplace of Lionel Messi and the Argentine flag. The city pulses with football and patriotism on every corner, from the Monument to the Flag to its iconic stadiums.",
    gastronomy:
      "Famosa por sus parrillas, heladerías artesanales y el pescado de río fresco. La tradición del mate se vive a orillas del Paraná.",
    gastronomyEn:
      "Famous for its steakhouses, artisanal ice cream shops, and fresh river fish. The tradition of mate is experienced along the Paraná River.",
    landscapes:
      "Costaneras sobre el río Paraná, islas verdes, y una arquitectura que mezcla lo histórico con lo moderno.",
    landscapesEn:
      "Coastlines along the Paraná River, green islands, and architecture that blends the historic with the modern.",
    highlights: [
      "Monumento a la Bandera",
      "Casa de Messi",
      "Estadios de Fútbol",
      "Costanera del Paraná",
    ],
    highlightsEn: [
      "Monument to the Flag",
      "Messi's House",
      "Football Stadiums",
      "Paraná River Embankment",
    ],
    order: 2,
  },
  {
    id: "3",
    name: "Córdoba",
    slug: "cordoba",
    description:
      "La ciudad universitaria por excelencia, corazón de Argentina. Córdoba combina su histórica catedral colonial con las Altas Cumbres, los misterios de Capilla del Monte y el icónico Hotel Edén de La Falda. Sierras verdes y cultura en partes iguales.",
    descriptionEn:
      "The university city par excellence, the heart of Argentina. Córdoba combines its historic colonial cathedral with the Altas Cumbres, the mysteries of Capilla del Monte, and the iconic Hotel Edén in La Falda. Green mountains and culture in equal parts.",
    shortDescription: "La ciudad universitaria",
    shortDescriptionEn: "The university city",
    temperature: 21,
    altitude: 390,
    latitude: -31.4201,
    longitude: -64.1888,
    image: cloudinary("images/provinces/cordoba"),
    heroImage: cloudinary("images/provinces/cordoba-hero"),
    tagline: "El corazón de Argentina",
    taglineEn: "The heart of Argentina",
    climate:
      "Clima templado serrano con veranos cálidos e inviernos frescos. Ideal todo el año.",
    climateEn:
      "Temperate and mountainous climate with warm summers and cool winters. Ideal for visiting throughout the year.",
    culture:
      "Ciudad universitaria por excelencia con su catedral histórica. Cuarteto, festivales y una escena artística efervescente.",
    cultureEn:
      "The university city by excellence with its historic cathedral. Quartet, festivals, and a vibrant artistic scene.",
    gastronomy:
      "Fernet con cola, alfajores cordobeses, cabrito y una escena gastronómica universitaria vibrante con bares y cervecerías artesanales.",
    gastronomyEn:
      "Fernet with cola, Cordoban alfajores, kid goat, and a vibrant university food scene with bars and craft breweries.",
    landscapes:
      "Las Altas Cumbres, Capilla del Monte y el misterioso Cerro Uritorco, y el histórico Hotel Edén de La Falda.",
    landscapesEn:
      "The Altas Cumbres, Capilla del Monte, and the mysterious Cerro Uritorco, and the historic Hotel Edén in La Falda.",
    highlights: [
      "Catedral de Córdoba",
      "Altas Cumbres",
      "Capilla del Monte",
      "Hotel Edén",
    ],
    highlightsEn: [
      "Córdoba Cathedral",
      "Altas Cumbres",
      "Capilla del Monte",
      "Hotel Edén",
    ],
    order: 3,
  },
  {
    id: "4",
    name: "San Juan",
    slug: "san-juan",
    description:
      "Tierra de paisajes lunares y vientos. San Juan alberga el sorprendente Valle de la Luna (Ischigualasto), un paisaje desértico de formaciones rocosas únicas, y la imponente Cuesta del Viento, paraíso de los deportes acuáticos.",
    descriptionEn:
      "Land of moonlike landscapes and wind. San Juan is home to the astonishing Valle de la Luna (Ischigualasto), a desert landscape of unique rock formations, and the impressive Cuesta del Viento, a paradise for water sports.",
    shortDescription: "El Valle de la Luna",
    shortDescriptionEn: "The Valley of the Moon",
    temperature: 20,
    altitude: 650,
    latitude: -31.5375,
    longitude: -68.5375,
    image: cloudinary("images/provinces/san-juan"),
    heroImage: cloudinary("images/provinces/san-juan-hero"),
    tagline: "Paisajes de otro planeta",
    taglineEn: "Landscapes from another planet",
    climate:
      "Clima árido y seco con gran amplitud térmica. Los días son soleados durante casi todo el año.",
    climateEn:
      "Arid and dry climate with wide temperature swings. Sunny days almost all year round.",
    culture:
      "Tradición vitivinícola y minera. Pueblos tranquilos donde se preserva la cultura cuyana y las tradiciones gauchas.",
    cultureEn:
      "Winemaking and mining tradition. Peaceful towns where Cuyo culture and gaucho traditions are preserved.",
    gastronomy:
      "Vinos de altura, aceite de oliva premium, jamones serranos y dulces regionales artesanales.",
    gastronomyEn:
      "High-altitude wines, premium olive oil, cured hams, and artisanal regional sweets.",
    landscapes:
      "El Valle de la Luna con sus formaciones geológicas únicas, y la Cuesta del Viento, un embalse turquesa rodeado de cerros.",
    landscapesEn:
      "The Valle de la Luna with its unique geological formations, and the Cuesta del Viento, a turquoise reservoir surrounded by hills.",
    highlights: [
      "Valle de la Luna",
      "Cuesta del Viento",
      "Parque Ischigualasto",
      "Dique Cuesta del Viento",
    ],
    highlightsEn: [
      "Valley of the Moon",
      "Cuesta del Viento",
      "Ischigualasto Park",
      "Cuesta del Viento Dam",
    ],
    order: 4,
  },
  {
    id: "5",
    name: "La Rioja",
    slug: "la-rioja",
    description:
      "Hogar del Parque Nacional Talampaya, Patrimonio de la Humanidad. La Rioja sorprende con sus cañones de paredes rojas de 150 metros, la histórica Cuesta de Miranda, Chilecito y los vestigios mineros de La Mejicana con su mítico cable carril.",
    descriptionEn:
      "Home to Talampaya National Park, a World Heritage Site. La Rioja amazes with its 150-meter red-walled canyons, the historic Cuesta de Miranda, Chilecito, and the mining remnants of La Mejicana with its legendary cable car.",
    shortDescription: "Parque Nacional Talampaya",
    shortDescriptionEn: "Talampaya National Park",
    temperature: 23,
    altitude: 498,
    latitude: -29.4139,
    longitude: -66.8558,
    image: cloudinary("images/provinces/la-rioja"),
    heroImage: cloudinary("images/provinces/la-rioja-hero"),
    tagline: "Cañones milenarios de roca roja",
    taglineEn: "Ancient canyons of red rock",
    climate:
      "Clima árido y cálido. Los inviernos templados son la mejor época para recorrer los cañones.",
    climateEn:
      "Arid and warm climate. Mild winters are the best time to explore the canyons.",
    culture:
      "Rica herencia minera y diaguita. Tradiciones que perduran en sus pueblos como Chilecito y Famatina.",
    cultureEn:
      "Rich mining and Diaguita heritage. Traditions that endure in towns like Chilecito and Famatina.",
    gastronomy:
      "Cocina regional con cabrito, aceitunas, nueces y los famosos vinos torrontés de altura.",
    gastronomyEn:
      "Regional cuisine with kid goat, olives, walnuts, and the famous high-altitude Torrontés wines.",
    landscapes:
      "Los cañones rojos de Talampaya, la sinuosa Cuesta de Miranda, y el cable carril minero de La Mejicana en el cerro Famatina.",
    landscapesEn:
      "The red canyons of Talampaya, the winding Cuesta de Miranda, and the La Mejicana mining cable car on Cerro Famatina.",
    highlights: [
      "Parque Nacional Talampaya",
      "Cuesta de Miranda",
      "Chilecito",
      "Mina La Mejicana",
      "Cable Carril",
    ],
    highlightsEn: [
      "Talampaya National Park",
      "Cuesta de Miranda",
      "Chilecito",
      "La Mejicana Mine",
      "Cable Car",
    ],
    order: 5,
  },
  {
    id: "6",
    name: "Salta",
    slug: "salta",
    description:
      "La Linda, con su Cafayate de bodegas internacionales. Salta cautiva con la Ruta 68 y sus formaciones rocosas, el Cerro San Bernardo con vistas panorámicas, el legendario Tren a las Nubes y los vinos de altura más reconocidos del mundo.",
    descriptionEn:
      "La Linda, with its Cafayate and internationally renowned wineries. Salta captivates with Route 68 and its rock formations, Cerro San Bernardo with its panoramic views, the legendary Train to the Clouds, and the world's most celebrated high-altitude wines.",
    shortDescription: "Cafayate y sus bodegas",
    shortDescriptionEn: "Cafayate and its wineries",
    temperature: 22,
    altitude: 1187,
    latitude: -24.7833,
    longitude: -65.4167,
    image: cloudinary("images/provinces/salta"),
    heroImage: cloudinary("images/provinces/salta-hero"),
    tagline: "Tan linda que enamora",
    taglineEn: "So lovely it steals your heart",
    climate:
      "Clima subtropical con estación seca. Los inviernos son ideales para visitar, con días templados y noches frescas.",
    climateEn:
      "Subtropical climate with a dry season. Winters are ideal for visiting, with mild days and cool nights.",
    culture:
      "Rica herencia colonial y precolombina. Peñas folclóricas, artesanías y fiestas patronales que mantienen viva la tradición.",
    cultureEn:
      "Rich colonial and pre-Columbian heritage. Folk music gatherings, crafts, and patron saint festivals that keep tradition alive.",
    gastronomy:
      "Empanadas salteñas, locro, tamales y humitas. Los vinos torrontés de altura de Cafayate son imperdibles a nivel internacional.",
    gastronomyEn:
      "Salta-style empanadas, locro, tamales, and humitas. The high-altitude Torrontés wines of Cafayate are a must, celebrated worldwide.",
    landscapes:
      "La Ruta 68 con sus formaciones rocosas, el Cerro San Bernardo, los viñedos de Cafayate y el ascenso del Tren a las Nubes.",
    landscapesEn:
      "Route 68 with its rock formations, Cerro San Bernardo, the vineyards of Cafayate, and the ascent of the Train to the Clouds.",
    highlights: [
      "Cafayate",
      "Ruta 68",
      "Cerro San Bernardo",
      "Tren a las Nubes",
      "Bodegas de Vino",
    ],
    highlightsEn: [
      "Cafayate",
      "Route 68",
      "Cerro San Bernardo",
      "Train to the Clouds",
      "Wineries",
    ],
    order: 6,
  },
  {
    id: "7",
    name: "Jujuy",
    slug: "jujuy",
    description:
      "Tierra de contrastes donde los cerros pintan el cielo de siete colores. Jujuy ofrece Purmamarca, la vertiginosa Cuesta de Lipán, las infinitas Salinas Grandes, la histórica Humahuaca, el espectacular Cerro de los 14 Colores (Hornocal) e Iruya.",
    descriptionEn:
      "A land of contrasts where the hills paint the sky in seven colors. Jujuy offers Purmamarca, the dizzying Cuesta de Lipán, the endless Salinas Grandes, historic Humahuaca, the spectacular Hill of 14 Colors (Hornocal), and Iruya.",
    shortDescription: "Cerros de siete colores",
    shortDescriptionEn: "Hills of seven colors",
    temperature: 19,
    altitude: 1259,
    latitude: -24.2167,
    longitude: -65.3,
    image: cloudinary("images/provinces/jujuy"),
    heroImage: cloudinary("images/provinces/jujuy-hero"),
    tagline: "Donde la tierra toca el cielo",
    taglineEn: "Where the earth touches the sky",
    climate:
      "Clima de altura con gran amplitud térmica. Veranos lluviosos e inviernos secos y soleados.",
    climateEn:
      "High-altitude climate with wide temperature swings. Rainy summers and dry, sunny winters.",
    culture:
      "Patrimonio vivo de pueblos originarios. Carnaval jujeño, ceremonias a la Pachamama y artesanías milenarias.",
    cultureEn:
      "Living heritage of native peoples. Jujuy Carnival, ceremonies to the Pachamama, and centuries-old crafts.",
    gastronomy:
      "Cocina andina ancestral: quinoa, llama, papines y ajíes. Chicha y api para acompañar.",
    gastronomyEn:
      "Ancestral Andean cuisine: quinoa, llama meat, small potatoes, and chili peppers. Chicha and api to wash it down.",
    landscapes:
      "El Cerro de los Siete Colores en Purmamarca, la Cuesta de Lipán, Salinas Grandes, el Hornocal de 14 colores y el pueblo escondido de Iruya.",
    landscapesEn:
      "The Hill of Seven Colors in Purmamarca, the Cuesta de Lipán, Salinas Grandes, the 14-colored Hornocal, and the hidden village of Iruya.",
    highlights: [
      "Purmamarca",
      "Cuesta de Lipán",
      "Salinas Grandes",
      "Humahuaca",
      "Hornocal",
      "Iruya",
    ],
    highlightsEn: [
      "Purmamarca",
      "Cuesta de Lipán",
      "Salinas Grandes",
      "Humahuaca",
      "Hornocal",
      "Iruya",
    ],
    order: 7,
  },
  {
    id: "8",
    name: "Misiones",
    slug: "misiones",
    description:
      "El gran final de la Ruta Argentina: las Cataratas del Iguazú, una de las Siete Maravillas Naturales del Mundo. Misiones envuelve en su selva subtropical y el rugido de 275 saltos de agua. La experiencia del gomón navegando hasta la Garganta del Diablo es inolvidable.",
    descriptionEn:
      "The grand finale of the Argentine Route: the Iguazú Falls, one of the Seven Natural Wonders of the World. Misiones is enveloped in subtropical jungle and the roar of 275 waterfalls. Riding the rubber dinghy up to the Devil's Throat is an unforgettable experience.",
    shortDescription: "Las Cataratas del Iguazú",
    shortDescriptionEn: "The Iguazú Falls",
    temperature: 26,
    altitude: 180,
    latitude: -27.3667,
    longitude: -55.9167,
    image: cloudinary("images/provinces/misiones"),
    heroImage: cloudinary("images/provinces/misiones-hero"),
    tagline: "El rugido de la naturaleza",
    taglineEn: "The roar of nature",
    climate:
      "Clima subtropical húmedo, cálido todo el año con lluvias frecuentes que alimentan la exuberante selva.",
    climateEn:
      "Humid subtropical climate, warm all year round with frequent rains that feed the lush jungle.",
    culture:
      "Herencia guaraní y jesuítica. Tierra roja, selva misionera y tradiciones que se mezclan con la cultura del litoral.",
    cultureEn:
      "Guaraní and Jesuit heritage. Red earth, Misiones jungle, and traditions blended with the culture of the Litoral region.",
    gastronomy:
      "Mandioca, pescados de río, chipá, reviro y el infaltable mate y tereré de la región yerbatera.",
    gastronomyEn:
      "Cassava, river fish, chipá, reviro, and the essential mate and tereré of the yerba mate-growing region.",
    landscapes:
      "Las majestuosas Cataratas del Iguazú con sus 275 saltos, la Garganta del Diablo y la densa selva subtropical misionera.",
    landscapesEn:
      "The majestic Iguazú Falls with their 275 cascades, the Devil's Throat, and the dense Misiones subtropical jungle.",
    highlights: [
      "Cataratas del Iguazú",
      "Garganta del Diablo",
      "Gran Aventura (Gomón)",
      "Selva Misionera",
    ],
    highlightsEn: [
      "Iguazú Falls",
      "Devil's Throat",
      "Great Adventure (Rubber Dinghy)",
      "Misiones Jungle",
    ],
    order: 8,
  },
];

export function getProvinceBySlug(
  slug: string,
): Province | undefined {
  return provinces.find((province) => province.slug === slug);
}

export function getAllProvinceSlugs(): string[] {
  return provinces.map((province) => province.slug);
}