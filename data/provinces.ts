export interface Province {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  temperature: number;
  altitude: number;
  weatherIcon: "sun" | "cloud" | "cloud-sun" | "snow" | "wind";
  image: string;
  heroImage: string;
  tagline: string;
  climate: string;
  culture: string;
  gastronomy: string;
  landscapes: string;
  highlights: string[];
}

export const provinces: Province[] = [
  {
    id: "1",
    name: "Rosario",
    slug: "rosario",
    description: "Ciudad vibrante a orillas del río Paraná, cuna del tango y la bandera argentina. Rosario combina arquitectura histórica con una moderna escena cultural y gastronómica. Sus costaneras, museos y vida nocturna la convierten en un destino imperdible.",
    shortDescription: "Cuna de la bandera y el tango",
    temperature: 24,
    altitude: 25,
    weatherIcon: "sun",
    image: "/images/provinces/rosario.jpg",
    heroImage: "/images/provinces/rosario-hero.jpg",
    tagline: "Donde nace la aventura",
    climate: "Clima templado húmedo con veranos cálidos e inviernos suaves. Ideal para visitar durante la primavera y el otoño.",
    culture: "Cuna de artistas, músicos y escritores. La ciudad respira arte en cada esquina, desde el Monumento a la Bandera hasta sus numerosos centros culturales.",
    gastronomy: "Famosa por sus parrillas, heladerías artesanales y la tradición del mate. No te pierdas el pescado de río fresco.",
    landscapes: "Costaneras sobre el río Paraná, islas verdes, y una arquitectura que mezcla lo colonial con lo moderno.",
    highlights: ["Monumento a la Bandera", "Costanera Norte", "Parque de la Independencia", "Isla de los Inventos"]
  },
  {
    id: "2",
    name: "Mendoza",
    slug: "mendoza",
    description: "Capital del vino argentino, Mendoza deslumbra con sus viñedos al pie de la Cordillera de los Andes. Un paraíso para amantes del enoturismo, deportes de aventura y paisajes de montaña que quitan el aliento.",
    shortDescription: "Tierra del vino y los Andes",
    temperature: 18,
    altitude: 750,
    weatherIcon: "sun",
    image: "/images/provinces/mendoza.jpg",
    heroImage: "/images/provinces/mendoza-hero.jpg",
    tagline: "Entre viñedos y montañas",
    climate: "Clima árido con veranos calurosos e inviernos fríos. La mejor época es de marzo a mayo para la vendimia.",
    culture: "Cultura vitivinícola de renombre mundial. Festivales de vendimia, bodegas centenarias y tradiciones gauchas.",
    gastronomy: "Malbec de clase mundial, asado mendocino, empanadas y dulces regionales. Las bodegas ofrecen experiencias gastronómicas únicas.",
    landscapes: "Cordillera de los Andes, viñedos infinitos, Aconcagua, Puente del Inca y valles de ensueño.",
    highlights: ["Ruta del Vino", "Aconcagua", "Puente del Inca", "Valle de Uco"]
  },
  {
    id: "3",
    name: "Salta",
    slug: "salta",
    description: "La Linda, como se la conoce, cautiva con su arquitectura colonial, cerros multicolores y tradiciones que perduran. Un viaje al corazón del norte argentino donde la historia y la naturaleza se abrazan.",
    shortDescription: "La linda del norte argentino",
    temperature: 22,
    altitude: 1187,
    weatherIcon: "cloud-sun",
    image: "/images/provinces/salta.jpg",
    heroImage: "/images/provinces/salta-hero.jpg",
    tagline: "Tan linda que enamora",
    climate: "Clima subtropical con estación seca. Los inviernos son ideales para visitar, con días templados y noches frescas.",
    culture: "Rica herencia colonial y precolombina. Peñas folclóricas, artesanías y fiestas patronales que mantienen viva la tradición.",
    gastronomy: "Empanadas salteñas, locro, tamales y humitas. Los vinos de altura de Cafayate son imperdibles.",
    landscapes: "Quebradas multicolores, valles calchaquíes, selvas yungas y la majestuosidad de los Andes.",
    highlights: ["Tren a las Nubes", "Quebrada de Humahuaca", "Cafayate", "Cachi"]
  },
  {
    id: "4",
    name: "Jujuy",
    slug: "jujuy",
    description: "Tierra de contrastes donde los cerros pintan el cielo de siete colores. Jujuy es puerta al altiplano, guardián de culturas ancestrales y hogar de paisajes que parecen de otro planeta.",
    shortDescription: "Cerros de siete colores",
    temperature: 19,
    altitude: 1259,
    weatherIcon: "cloud-sun",
    image: "/images/provinces/jujuy.jpg",
    heroImage: "/images/provinces/jujuy-hero.jpg",
    tagline: "Donde la tierra toca el cielo",
    climate: "Clima de altura con gran amplitud térmica. Veranos lluviosos e inviernos secos y soleados.",
    culture: "Patrimonio vivo de pueblos originarios. Carnaval jujeño, ceremonias a la Pachamama y artesanías milenarias.",
    gastronomy: "Cocina andina ancestral: quinoa, llama, papines y ajíes. Chicha y api para acompañar.",
    landscapes: "Cerro de los Siete Colores, Salinas Grandes, Puna argentina y quebradas prehistóricas.",
    highlights: ["Purmamarca", "Tilcara", "Salinas Grandes", "Humahuaca"]
  },
  {
    id: "5",
    name: "Córdoba",
    slug: "cordoba",
    description: "Corazón de Argentina, Córdoba combina sierras verdes, ríos cristalinos y una vibrante vida universitaria. Desde la docta ciudad hasta los pueblos serranos, ofrece aventura y cultura en partes iguales.",
    shortDescription: "Sierras, ríos y cultura",
    temperature: 21,
    altitude: 390,
    weatherIcon: "sun",
    image: "/images/provinces/cordoba.jpg",
    heroImage: "/images/provinces/cordoba-hero.jpg",
    tagline: "El corazón de Argentina",
    climate: "Clima templado serrano con veranos cálidos e inviernos frescos. Ideal todo el año.",
    culture: "Ciudad universitaria por excelencia. Cuarteto, festivales de rock y una escena artística efervescente.",
    gastronomy: "Cabrito serrano, salame de Colonia Caroya, alfajores cordobeses y el famoso fernet con coca.",
    landscapes: "Sierras Chicas y Grandes, ríos de aguas claras, bosques de tabaquillos y cielos estrellados.",
    highlights: ["La Cumbrecita", "Villa General Belgrano", "Carlos Paz", "Mina Clavero"]
  },
  {
    id: "6",
    name: "Tucumán",
    slug: "tucuman",
    description: "El Jardín de la República, donde se declaró la independencia argentina. Tucumán sorprende con sus yungas exuberantes, ruinas precolombinas y una calidez que va más allá del clima.",
    shortDescription: "Jardín de la República",
    temperature: 23,
    altitude: 450,
    weatherIcon: "cloud-sun",
    image: "/images/provinces/tucuman.jpg",
    heroImage: "/images/provinces/tucuman-hero.jpg",
    tagline: "Donde nació la patria",
    climate: "Clima subtropical con lluvias de verano. El invierno es la mejor época para explorar.",
    culture: "Cuna de la independencia argentina. Rica tradición folclórica, zamba y chacarera en cada rincón.",
    gastronomy: "Empanadas tucumanas, locro patrio y los mejores limones del país. Dulces regionales exquisitos.",
    landscapes: "Yungas tropicales, Tafí del Valle, ruinas de Quilmes y cerros que se pierden en las nubes.",
    highlights: ["Casa Histórica", "Tafí del Valle", "Ruinas de Quilmes", "Yerba Buena"]
  }
];

export function getProvinceBySlug(slug: string): Province | undefined {
  return provinces.find(p => p.slug === slug);
}

export function getAllProvinceSlugs(): string[] {
  return provinces.map(p => p.slug);
}
