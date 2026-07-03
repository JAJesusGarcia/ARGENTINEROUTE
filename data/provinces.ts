export interface Province {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  temperature: number; // fallback
  altitude: number;
  latitude: number;
  longitude: number;
  image: string;
  heroImage: string;
  tagline: string;
  climate: string;
  culture: string;
  gastronomy: string;
  landscapes: string;
  highlights: string[];
  order: number;
}

export const provinces: Province[] = [
  {
    id: "1",
    name: "Buenos Aires",
    slug: "buenos-aires",
    description: "La capital cosmopolita de Argentina y punto de partida de la Ruta Argentina. Buenos Aires deslumbra con su mezcla de arquitectura europea, pasión futbolera y la cuna del tango. Recorré el Obelisco, el majestuoso Teatro Colón, Puerto Madero y la espiritualidad de Luján.",
    shortDescription: "La capital cosmopolita",
    temperature: 22,
    altitude: 25,
    latitude: -32.9442,
    longitude: -60.6505,
    image: "/images/provinces/buenos-aires.webp",
    heroImage: "/images/provinces/buenos-aires-hero.webp",
    tagline: "Donde comienza la aventura",
    climate: "Clima templado húmedo con veranos cálidos e inviernos suaves. Ideal para visitar durante todo el año.",
    culture: "Cuna del tango y capital cultural de Argentina. Teatros de clase mundial, museos, milongas y una vibrante vida urbana que nunca duerme.",
    gastronomy: "Parrillas legendarias, cafés porteños históricos, pizza al estilo argentino y la mejor selección gastronómica de Puerto Madero.",
    landscapes: "Arquitectura europea, amplias avenidas, los diques modernos de Puerto Madero y la espiritualidad de la Basílica de Luján.",
    highlights: ["Obelisco", "Teatro Colón", "Casa del Tango", "Cancha de River", "Puerto Madero", "Basílica de Luján"],
    order: 1
  },
  {
    id: "2",
    name: "Rosario",
    slug: "rosario",
    description: "Ciudad vibrante a orillas del río Paraná, cuna de la bandera argentina y del astro Lionel Messi. Rosario combina su monumento patrio más importante con la pasión del fútbol, hermosas costaneras y una moderna escena cultural.",
    shortDescription: "Cuna de la bandera y de Messi",
    temperature: 24,
    altitude: 25,
    latitude: -32.9442,
    longitude: -60.6505,
    image: "/images/provinces/rosario.webp",
    heroImage: "/images/provinces/rosario-hero.webp",
    tagline: "Pasión, fútbol y bandera",
    climate: "Clima templado húmedo con veranos cálidos e inviernos suaves. Ideal para visitar durante la primavera y el otoño.",
    culture: "Cuna de Lionel Messi y de la bandera argentina. La ciudad respira fútbol y patriotismo en cada esquina, desde el Monumento a la Bandera hasta sus estadios míticos.",
    gastronomy: "Famosa por sus parrillas, heladerías artesanales y el pescado de río fresco. La tradición del mate se vive a orillas del Paraná.",
    landscapes: "Costaneras sobre el río Paraná, islas verdes, y una arquitectura que mezcla lo histórico con lo moderno.",
    highlights: ["Monumento a la Bandera", "Casa de Messi", "Estadios de Fútbol", "Costanera del Paraná"],
    order: 2
  },
  {
    id: "3",
    name: "Córdoba",
    slug: "cordoba",
    description: "La ciudad universitaria por excelencia, corazón de Argentina. Córdoba combina su histórica catedral colonial con las Altas Cumbres, los misterios de Capilla del Monte y el icónico Hotel Edén de La Falda. Sierras verdes y cultura en partes iguales.",
    shortDescription: "La ciudad universitaria",
    temperature: 21,
    altitude: 390,
    latitude: -31.4201,
    longitude: -64.1888,
    image: "/images/provinces/cordoba.webp",
    heroImage: "/images/provinces/cordoba-hero.webp",
    tagline: "El corazón de Argentina",
    climate: "Clima templado serrano con veranos cálidos e inviernos frescos. Ideal todo el año.",
    culture: "Ciudad universitaria por excelencia con su catedral histórica. Cuarteto, festivales y una escena artística efervescente.",
    gastronomy: "Cabrito serrano, salame de Colonia Caroya, alfajores cordobeses y el famoso fernet con coca.",
    landscapes: "Las Altas Cumbres, Capilla del Monte y el misterioso Cerro Uritorco, y el histórico Hotel Edén de La Falda.",
    highlights: ["Catedral de Córdoba", "Altas Cumbres", "Capilla del Monte", "Hotel Edén"],
    order: 3
  },
  {
    id: "4",
    name: "San Juan",
    slug: "san-juan",
    description: "Tierra de paisajes lunares y vientos. San Juan alberga el sorprendente Valle de la Luna (Ischigualasto), un paisaje desértico de formaciones rocosas únicas, y la imponente Cuesta del Viento, paraíso de los deportes acuáticos.",
    shortDescription: "El Valle de la Luna",
    temperature: 20,
    altitude: 650,
    latitude: -31.5375,
    longitude: -68.5375,
    image: "/images/provinces/san-juan.webp",
    heroImage: "/images/provinces/san-juan-hero.webp",
    tagline: "Paisajes de otro planeta",
    climate: "Clima árido y seco con gran amplitud térmica. Los días son soleados durante casi todo el año.",
    culture: "Tradición vitivinícola y minera. Pueblos tranquilos donde se preserva la cultura cuyana y las tradiciones gauchas.",
    gastronomy: "Vinos de altura, aceite de oliva premium, jamones serranos y dulces regionales artesanales.",
    landscapes: "El Valle de la Luna con sus formaciones geológicas únicas, y la Cuesta del Viento, un embalse turquesa rodeado de cerros.",
    highlights: ["Valle de la Luna", "Cuesta del Viento", "Parque Ischigualasto", "Dique Cuesta del Viento"],
    order: 4
  },
  {
    id: "5",
    name: "La Rioja",
    slug: "la-rioja",
    description: "Hogar del Parque Nacional Talampaya, Patrimonio de la Humanidad. La Rioja sorprende con sus cañones de paredes rojas de 150 metros, la histórica Cuesta de Miranda, Chilecito y los vestigios mineros de La Mejicana con su mítico cable carril.",
    shortDescription: "Parque Nacional Talampaya",
    temperature: 23,
    altitude: 498,
    latitude: -29.4139,
    longitude: -66.8558,
    image: "/images/provinces/la-rioja.webp",
    heroImage: "/images/provinces/la-rioja-hero.webp",
    tagline: "Cañones milenarios de roca roja",
    climate: "Clima árido y cálido. Los inviernos templados son la mejor época para recorrer los cañones.",
    culture: "Rica herencia minera y diaguita. Tradiciones que perduran en sus pueblos como Chilecito y Famatina.",
    gastronomy: "Cocina regional con cabrito, aceitunas, nueces y los famosos vinos torrontés de altura.",
    landscapes: "Los cañones rojos de Talampaya, la sinuosa Cuesta de Miranda, y el cable carril minero de La Mejicana en el cerro Famatina.",
    highlights: ["Parque Nacional Talampaya", "Cuesta de Miranda", "Chilecito", "Mina La Mejicana", "Cable Carril"],
    order: 5
  },
  {
    id: "6",
    name: "Salta",
    slug: "salta",
    description: "La Linda, con su Cafayate de bodegas internacionales. Salta cautiva con la Ruta 68 y sus formaciones rocosas, el Cerro San Bernardo con vistas panorámicas, el legendario Tren a las Nubes y los vinos de altura más reconocidos del mundo.",
    shortDescription: "Cafayate y sus bodegas",
    temperature: 22,
    altitude: 1187,
    latitude: -24.7833,
    longitude: -65.4167,
    image: "/images/provinces/salta.webp",
    heroImage: "/images/provinces/salta-hero.webp",
    tagline: "Tan linda que enamora",
    climate: "Clima subtropical con estación seca. Los inviernos son ideales para visitar, con días templados y noches frescas.",
    culture: "Rica herencia colonial y precolombina. Peñas folclóricas, artesanías y fiestas patronales que mantienen viva la tradición.",
    gastronomy: "Empanadas salteñas, locro, tamales y humitas. Los vinos torrontés de altura de Cafayate son imperdibles a nivel internacional.",
    landscapes: "La Ruta 68 con sus formaciones rocosas, el Cerro San Bernardo, los viñedos de Cafayate y el ascenso del Tren a las Nubes.",
    highlights: ["Cafayate", "Ruta 68", "Cerro San Bernardo", "Tren a las Nubes", "Bodegas de Vino"],
    order: 6
  },
  {
    id: "7",
    name: "Jujuy",
    slug: "jujuy",
    description: "Tierra de contrastes donde los cerros pintan el cielo de siete colores. Jujuy ofrece Purmamarca, la vertiginosa Cuesta de Lipán, las infinitas Salinas Grandes, la histórica Humahuaca, el espectacular Cerro de los 14 Colores (Hornocal) e Iruya.",
    shortDescription: "Cerros de siete colores",
    temperature: 19,
    altitude: 1259,
    latitude: -24.2167,
    longitude: -65.3,
    image: "/images/provinces/jujuy.webp",
    heroImage: "/images/provinces/jujuy-hero.webp",
    tagline: "Donde la tierra toca el cielo",
    climate: "Clima de altura con gran amplitud térmica. Veranos lluviosos e inviernos secos y soleados.",
    culture: "Patrimonio vivo de pueblos originarios. Carnaval jujeño, ceremonias a la Pachamama y artesanías milenarias.",
    gastronomy: "Cocina andina ancestral: quinoa, llama, papines y ajíes. Chicha y api para acompañar.",
    landscapes: "El Cerro de los Siete Colores en Purmamarca, la Cuesta de Lipán, Salinas Grandes, el Hornocal de 14 colores y el pueblo escondido de Iruya.",
    highlights: ["Purmamarca", "Cuesta de Lipán", "Salinas Grandes", "Humahuaca", "Hornocal", "Iruya"],
    order: 7
  },
  {
    id: "8",
    name: "Misiones",
    slug: "misiones",
    description: "El gran final de la Ruta Argentina: las Cataratas del Iguazú, una de las Siete Maravillas Naturales del Mundo. Misiones envuelve en su selva subtropical y el rugido de 275 saltos de agua. La experiencia del gomón navegando hasta la Garganta del Diablo es inolvidable.",
    shortDescription: "Las Cataratas del Iguazú",
    temperature: 26,
    altitude: 180,
    latitude: -27.3667,
    longitude: -55.9167,
    image: "/images/provinces/misiones.webp",
    heroImage: "/images/provinces/misiones-hero.webp",
    tagline: "El rugido de la naturaleza",
    climate: "Clima subtropical húmedo, cálido todo el año con lluvias frecuentes que alimentan la exuberante selva.",
    culture: "Herencia guaraní y jesuítica. Tierra roja, selva misionera y tradiciones que se mezclan con la cultura del litoral.",
    gastronomy: "Mandioca, pescados de río, chipá, reviro y el infaltable mate y tereré de la región yerbatera.",
    landscapes: "Las majestuosas Cataratas del Iguazú con sus 275 saltos, la Garganta del Diablo y la densa selva subtropical misionera.",
    highlights: ["Cataratas del Iguazú", "Garganta del Diablo", "Gran Aventura (Gomón)", "Selva Misionera"],
    order: 8
  }
];

export function getProvinceBySlug(slug: string): Province | undefined {
  return provinces.find(p => p.slug === slug);
}

export function getAllProvinceSlugs(): string[] {
  return provinces.map(p => p.slug);
}
