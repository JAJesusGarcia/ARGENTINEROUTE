export interface Place {
  id: string;
  name: string;
  slug: string;
  provinceSlug: string;
  provinceName: string;
  description: string;
  shortDescription: string;
  image: string;
  galleryImages: string[];
  rating: number;
  tags: string[];
  history: string;
  activities: string[];
  recommendations: string[];
  bestTimeToVisit: string;
  duration: string;
}

export const places: Place[] = [
  {
    id: "1",
    name: "Obelisco y Teatro Colón",
    slug: "obelisco-teatro-colon",
    provinceSlug: "buenos-aires",
    provinceName: "Buenos Aires",
    description: "El corazón de Buenos Aires late en el Obelisco, ícono de la ciudad sobre la Avenida 9 de Julio, la más ancha del mundo. A pocas cuadras, el majestuoso Teatro Colón deslumbra como una de las salas líricas más importantes del planeta por su acústica perfecta.",
    shortDescription: "Íconos de la capital porteña",
    image: "/images/places/obelisco.jpg",
    galleryImages: ["/images/places/obelisco-1.jpg", "/images/places/teatro-colon-1.jpg", "/images/places/buenos-aires-1.jpg"],
    rating: 4.8,
    tags: ["Histórico", "Arquitectura", "Cultura", "Ciudad"],
    history: "El Obelisco fue erigido en 1936 para conmemorar el cuarto centenario de la primera fundación de Buenos Aires. El Teatro Colón fue inaugurado en 1908 y es considerado uno de los cinco mejores teatros del mundo por su acústica.",
    activities: ["Tour guiado por el Teatro Colón", "Fotografía en el Obelisco", "Paseo por Avenida 9 de Julio", "Espectáculos líricos"],
    recommendations: ["Reservar tour del Teatro Colón", "Visitar al atardecer", "Combinar con paseo por el centro", "Asistir a una función"],
    bestTimeToVisit: "Todo el año",
    duration: "Medio día"
  },
  {
    id: "2",
    name: "Puerto Madero y Basílica de Luján",
    slug: "puerto-madero-lujan",
    provinceSlug: "buenos-aires",
    provinceName: "Buenos Aires",
    description: "Puerto Madero es el barrio más moderno de Buenos Aires, con sus diques, rascacielos de vidrio y el Puente de la Mujer. A las afueras, la imponente Basílica de Luján, de estilo neogótico, es el principal centro de peregrinación religiosa del país.",
    shortDescription: "Modernidad y espiritualidad",
    image: "/images/places/puerto-madero.jpg",
    galleryImages: ["/images/places/puerto-madero-1.jpg", "/images/places/lujan-1.jpg", "/images/places/puerto-madero-2.jpg"],
    rating: 4.7,
    tags: ["Moderno", "Arquitectura", "Religioso", "Gastronomía"],
    history: "Puerto Madero fue el antiguo puerto de la ciudad, reconvertido en los años 90 en el barrio más exclusivo. La Basílica de Luján se construyó entre 1887 y 1935, dedicada a la Virgen de Luján, patrona de Argentina.",
    activities: ["Paseo por los diques", "Cruce del Puente de la Mujer", "Visita a la Basílica", "Cena gourmet frente al agua"],
    recommendations: ["Cenar en Puerto Madero", "Visitar Luján un fin de semana", "Llevar cámara", "Recorrer la Reserva Ecológica"],
    bestTimeToVisit: "Todo el año",
    duration: "1 día"
  },
  {
    id: "3",
    name: "Monumento a la Bandera",
    slug: "monumento-bandera",
    provinceSlug: "rosario",
    provinceName: "Rosario",
    description: "Imponente monumento nacional que conmemora la creación de la bandera argentina por Manuel Belgrano. Su torre de 70 metros ofrece vistas panorámicas de la ciudad y el río Paraná. Un símbolo de orgullo nacional y arquitectura monumental.",
    shortDescription: "Símbolo patrio junto al Paraná",
    image: "/images/places/monumento-bandera.jpg",
    galleryImages: ["/images/places/monumento-bandera-1.jpg", "/images/places/monumento-bandera-2.jpg", "/images/places/monumento-bandera-3.jpg"],
    rating: 4.8,
    tags: ["Histórico", "Arquitectura", "Vistas", "Cultura"],
    history: "Inaugurado en 1957, el monumento fue diseñado por los arquitectos Ángel Guido y Alejandro Bustillo. Se erige en el lugar donde Manuel Belgrano izó por primera vez la bandera argentina el 27 de febrero de 1812.",
    activities: ["Visita al mirador", "Museo de la Bandera", "Ceremonia de izamiento", "Paseo por el Parque Nacional"],
    recommendations: ["Llevar cámara fotográfica", "Visitar al atardecer", "Reservar tour guiado", "Combinar con paseo costanero"],
    bestTimeToVisit: "Todo el año, especialmente en fechas patrias",
    duration: "2-3 horas"
  },
  {
    id: "4",
    name: "Casa de Messi y Costanera",
    slug: "casa-messi-costanera",
    provinceSlug: "rosario",
    provinceName: "Rosario",
    description: "Rosario es la cuna de Lionel Messi, el mejor futbolista del mundo. Recorré los lugares que marcaron su infancia, las canchas de fútbol donde dio sus primeros pasos y disfrutá de la hermosa costanera sobre el río Paraná.",
    shortDescription: "La cuna del fútbol mundial",
    image: "/images/places/casa-messi.jpg",
    galleryImages: ["/images/places/casa-messi-1.jpg", "/images/places/costanera-rosario-1.jpg", "/images/places/rosario-futbol-1.jpg"],
    rating: 4.6,
    tags: ["Fútbol", "Cultura", "Paisajes", "Deporte"],
    history: "Lionel Messi nació en Rosario en 1987 y comenzó a jugar en el club Newell's Old Boys. La ciudad rinde homenaje a su figura mientras mantiene viva su pasión futbolera en cada barrio.",
    activities: ["Tour futbolero por la ciudad", "Visita al barrio de Messi", "Paseo por la costanera", "Recorrido por estadios"],
    recommendations: ["Hacer el tour de Messi", "Disfrutar la costanera al atardecer", "Probar un asado a la orilla", "Visitar el barrio La Bajada"],
    bestTimeToVisit: "Todo el año",
    duration: "Medio día"
  },
  {
    id: "5",
    name: "Altas Cumbres y Capilla del Monte",
    slug: "altas-cumbres-capilla-monte",
    provinceSlug: "cordoba",
    provinceName: "Córdoba",
    description: "El camino de las Altas Cumbres serpentea entre las Sierras Grandes ofreciendo vistas espectaculares. Capilla del Monte, a los pies del misterioso Cerro Uritorco, es famosa por sus leyendas, su energía y el histórico Hotel Edén de La Falda.",
    shortDescription: "Sierras místicas y leyendas",
    image: "/images/places/altas-cumbres.jpg",
    galleryImages: ["/images/places/altas-cumbres-1.jpg", "/images/places/capilla-monte-1.jpg", "/images/places/hotel-eden-1.jpg"],
    rating: 4.7,
    tags: ["Naturaleza", "Sierras", "Misterio", "Historia"],
    history: "El camino de las Altas Cumbres une el valle de Punilla con Traslasierra. Capilla del Monte y el Cerro Uritorco son célebres por sus avistamientos y leyendas. El Hotel Edén fue uno de los hoteles más lujosos de Sudamérica a principios del siglo XX.",
    activities: ["Recorrido panorámico por las sierras", "Ascenso al Cerro Uritorco", "Visita guiada al Hotel Edén", "Caminatas serranas"],
    recommendations: ["Conducir con precaución en la cuesta", "Visitar el Hotel Edén de noche", "Llevar abrigo", "Probar el cabrito serrano"],
    bestTimeToVisit: "Primavera y otoño",
    duration: "1-2 días"
  },
  {
    id: "6",
    name: "Valle de la Luna",
    slug: "valle-de-la-luna",
    provinceSlug: "san-juan",
    provinceName: "San Juan",
    description: "El Parque Provincial Ischigualasto, conocido como Valle de la Luna, es un paisaje desértico de formaciones rocosas surrealistas y yacimientos paleontológicos. Declarado Patrimonio de la Humanidad, parece sacado de otro planeta.",
    shortDescription: "Paisaje lunar y fósiles",
    image: "/images/places/valle-luna.jpg",
    galleryImages: ["/images/places/valle-luna-1.jpg", "/images/places/valle-luna-2.jpg", "/images/places/valle-luna-3.jpg"],
    rating: 4.8,
    tags: ["Paisajes", "Naturaleza", "Único", "Geología"],
    history: "Ischigualasto fue declarado Patrimonio de la Humanidad por la UNESCO en 2000. Sus estratos contienen los restos de dinosaurios más antiguos del mundo, de hace más de 230 millones de años.",
    activities: ["Circuito guiado en vehículo", "Fotografía de formaciones", "Visita al museo paleontológico", "Observación de estrellas"],
    recommendations: ["Llevar agua y protector solar", "Hacer el circuito al atardecer", "Llevar calzado cómodo", "Contratar guía oficial"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "Día completo"
  },
  {
    id: "7",
    name: "Cuesta del Viento",
    slug: "cuesta-del-viento",
    provinceSlug: "san-juan",
    provinceName: "San Juan",
    description: "Un embalse de aguas turquesas rodeado de cerros rojizos, famoso por un fenómeno único: cada tarde se levanta un viento intenso y constante que lo convierte en uno de los mejores lugares del mundo para el windsurf y el kitesurf.",
    shortDescription: "Paraíso del windsurf",
    image: "/images/places/cuesta-viento.jpg",
    galleryImages: ["/images/places/cuesta-viento-1.jpg", "/images/places/cuesta-viento-2.jpg", "/images/places/cuesta-viento-3.jpg"],
    rating: 4.6,
    tags: ["Deportes", "Paisajes", "Aventura", "Naturaleza"],
    history: "El dique Cuesta del Viento se construyó sobre el río Jáchal. El fenómeno del viento vespertino, único en su intensidad y regularidad, atrajo a deportistas de todo el mundo convirtiendo a Rodeo en capital del windsurf.",
    activities: ["Windsurf y kitesurf", "Kayak", "Fotografía del embalse", "Recorrido por Rodeo"],
    recommendations: ["Ir por la tarde para ver el viento", "Llevar abrigo cortaviento", "Probar deportes acuáticos", "Hospedarse en Rodeo"],
    bestTimeToVisit: "Octubre a abril",
    duration: "Medio día a 1 día"
  },
  {
    id: "8",
    name: "Parque Nacional Talampaya",
    slug: "talampaya",
    provinceSlug: "la-rioja",
    provinceName: "La Rioja",
    description: "Cañones de paredes rojas que se elevan hasta 150 metros, esculpidos por millones de años de erosión. Patrimonio de la Humanidad, Talampaya combina geología imponente, arte rupestre y fauna autóctona en un escenario de película.",
    shortDescription: "Cañones rojos milenarios",
    image: "/images/places/talampaya.jpg",
    galleryImages: ["/images/places/talampaya-1.jpg", "/images/places/talampaya-2.jpg", "/images/places/talampaya-3.jpg"],
    rating: 4.8,
    tags: ["Paisajes", "Naturaleza", "Patrimonio", "Geología"],
    history: "Declarado Patrimonio de la Humanidad por la UNESCO en 2000 junto a Ischigualasto. El cañón fue el lecho de un antiguo río y conserva petroglifos de culturas que habitaron la zona hace más de 2.500 años.",
    activities: ["Recorrido en vehículo por el cañón", "Observación de petroglifos", "Avistaje de cóndores y guanacos", "Caminatas guiadas"],
    recommendations: ["Llevar agua abundante", "Usar protector solar y gorra", "Ir temprano por la mañana", "Contratar excursión oficial"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "Día completo"
  },
  {
    id: "9",
    name: "Chilecito y Mina La Mejicana",
    slug: "chilecito-mina-mejicana",
    provinceSlug: "la-rioja",
    provinceName: "La Rioja",
    description: "Chilecito, la segunda ciudad de La Rioja, es la puerta al cerro Famatina. Desde aquí se accede a la histórica Mina La Mejicana y su impresionante cable carril, una proeza de ingeniería que asciende hasta los 4.600 metros, atravesando la Cuesta de Miranda.",
    shortDescription: "Historia minera de altura",
    image: "/images/places/chilecito.jpg",
    galleryImages: ["/images/places/chilecito-1.jpg", "/images/places/mina-mejicana-1.jpg", "/images/places/cuesta-miranda-1.jpg"],
    rating: 4.5,
    tags: ["Historia", "Minería", "Aventura", "Paisajes"],
    history: "El cable carril fue construido entre 1903 y 1905 para transportar minerales desde la Mina La Mejicana en el cerro Famatina. Con 35 km de longitud y nueve estaciones, fue una de las obras de ingeniería más importantes de su época.",
    activities: ["Visita a las estaciones del cable carril", "Recorrido por la Cuesta de Miranda", "Tour minero", "Degustación de vinos torrontés"],
    recommendations: ["Contratar excursión 4x4", "Llevar abrigo para la altura", "Recorrer la Cuesta de Miranda de día", "Visitar bodegas locales"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "Día completo"
  },
  {
    id: "10",
    name: "Cafayate y Ruta 68",
    slug: "cafayate-ruta-68",
    provinceSlug: "salta",
    provinceName: "Salta",
    description: "La Ruta 68 atraviesa la Quebrada de las Conchas, con formaciones rocosas espectaculares como la Garganta del Diablo y el Anfiteatro. Al final del camino, Cafayate deslumbra con sus bodegas de vino torrontés de altura, reconocidas internacionalmente.",
    shortDescription: "Vinos de altura y formaciones rocosas",
    image: "/images/places/cafayate.jpg",
    galleryImages: ["/images/places/cafayate-1.jpg", "/images/places/ruta-68-1.jpg", "/images/places/bodega-cafayate-1.jpg"],
    rating: 4.8,
    tags: ["Enoturismo", "Paisajes", "Gastronomía", "Naturaleza"],
    history: "Cafayate es el corazón de los Valles Calchaquíes y cuna del torrontés, la cepa emblemática de Argentina. Sus viñedos de altura, a más de 1.700 metros, producen vinos únicos en el mundo desde la época colonial.",
    activities: ["Degustación en bodegas", "Recorrido por la Quebrada de las Conchas", "Visita a la Garganta del Diablo", "Compra de artesanías"],
    recommendations: ["Reservar visitas a bodegas", "Parar a fotografiar las formaciones", "Probar el helado de vino", "Recorrer la Ruta 68 de día"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "1-2 días"
  },
  {
    id: "11",
    name: "Tren a las Nubes",
    slug: "tren-nubes",
    provinceSlug: "salta",
    provinceName: "Salta",
    description: "Una de las rutas ferroviarias más altas del mundo, que asciende hasta los 4.220 metros. El tren atraviesa puentes, túneles y viaductos en un recorrido de ensueño, culminando en el imponente Viaducto La Polvorilla.",
    shortDescription: "Viaje épico a las alturas",
    image: "/images/places/tren-nubes.jpg",
    galleryImages: ["/images/places/tren-nubes-1.jpg", "/images/places/tren-nubes-2.jpg", "/images/places/tren-nubes-3.jpg"],
    rating: 4.7,
    tags: ["Tren", "Aventura", "Paisajes", "Único"],
    history: "Construido entre 1921 y 1948 como vía de carga hacia Chile, el tren se convirtió en atracción turística en 1972. Su punto culminante es el viaducto La Polvorilla, a 4.220 metros de altura.",
    activities: ["Viaje en tren panorámico", "Fotografía de viaductos", "Compra de artesanías", "Visita a San Antonio de los Cobres"],
    recommendations: ["Reservar con meses de anticipación", "Llevar ropa de abrigo", "Tomar hojas de coca para la altura", "Sentarse junto a la ventana"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "Día completo"
  },
  {
    id: "12",
    name: "Purmamarca y Cuesta de Lipán",
    slug: "purmamarca",
    provinceSlug: "jujuy",
    provinceName: "Jujuy",
    description: "Pueblo de adobe al pie del Cerro de los Siete Colores, Purmamarca es un museo viviente de tradiciones ancestrales. Desde aquí, la vertiginosa Cuesta de Lipán asciende en zigzag hasta los 4.170 metros camino a las Salinas Grandes.",
    shortDescription: "Siete colores, mil emociones",
    image: "/images/places/purmamarca.jpg",
    galleryImages: ["/images/places/purmamarca-1.jpg", "/images/places/purmamarca-2.jpg", "/images/places/cuesta-lipan-1.jpg"],
    rating: 4.9,
    tags: ["Paisajes", "Cultura", "Artesanías", "Fotografía"],
    history: "Habitado desde hace más de 10.000 años, Purmamarca fue parte del Camino del Inca. Su iglesia de Santa Rosa de Lima data de 1648. La Cuesta de Lipán es el acceso histórico al altiplano jujeño.",
    activities: ["Paseo de los Colorados", "Feria artesanal", "Ascenso por la Cuesta de Lipán", "Amanecer en el cerro"],
    recommendations: ["Madrugar para el amanecer", "Regatear en la feria", "Probar la llama", "Hospedarse una noche"],
    bestTimeToVisit: "Mayo a octubre",
    duration: "1-2 días"
  },
  {
    id: "13",
    name: "Salinas Grandes",
    slug: "salinas-grandes",
    provinceSlug: "jujuy",
    provinceName: "Jujuy",
    description: "Un mar blanco a 3.450 metros de altura, las Salinas Grandes son uno de los salares más impresionantes del mundo. Sus kilómetros de sal pura crean un paisaje surrealista perfecto para fotografías de perspectiva infinita.",
    shortDescription: "El espejo del cielo",
    image: "/images/places/salinas-grandes.jpg",
    galleryImages: ["/images/places/salinas-grandes-1.jpg", "/images/places/salinas-grandes-2.jpg", "/images/places/salinas-grandes-3.jpg"],
    rating: 4.8,
    tags: ["Paisajes", "Fotografía", "Único", "Naturaleza"],
    history: "Formadas hace millones de años por la evaporación de un antiguo mar interior, las salinas son explotadas artesanalmente por comunidades locales desde tiempos precolombinos.",
    activities: ["Sesión fotográfica", "Extracción artesanal de sal", "Compra de artesanías de sal", "Contemplación del paisaje"],
    recommendations: ["Llevar lentes de sol", "Usar protector solar", "Ir temprano", "Llevar agua"],
    bestTimeToVisit: "Abril a noviembre (época seca)",
    duration: "Medio día"
  },
  {
    id: "14",
    name: "Humahuaca y Hornocal",
    slug: "humahuaca-hornocal",
    provinceSlug: "jujuy",
    provinceName: "Jujuy",
    description: "La histórica Humahuaca, declarada Patrimonio de la Humanidad, es la puerta al espectacular Cerro Hornocal, el imponente 'Cerro de los 14 Colores'. Una formación montañosa de tonos increíbles a más de 4.300 metros de altura.",
    shortDescription: "El cerro de los 14 colores",
    image: "/images/places/hornocal.jpg",
    galleryImages: ["/images/places/hornocal-1.jpg", "/images/places/humahuaca-1.jpg", "/images/places/hornocal-2.jpg"],
    rating: 4.9,
    tags: ["Paisajes", "Fotografía", "Cultura", "Naturaleza"],
    history: "La Quebrada de Humahuaca fue declarada Patrimonio de la Humanidad por la UNESCO en 2003. El pueblo de Humahuaca conserva su arquitectura colonial y fue un punto clave del Camino del Inca y de las guerras de la independencia.",
    activities: ["Excursión al Cerro Hornocal", "Recorrido por el casco histórico", "Visita al Monumento a la Independencia", "Compra de tejidos andinos"],
    recommendations: ["Ir al mirador del Hornocal al mediodía", "Llevar abrigo para la altura", "Hidratarse bien", "Hacer parada en Tilcara"],
    bestTimeToVisit: "Mayo a octubre",
    duration: "1 día"
  },
  {
    id: "15",
    name: "Cataratas del Iguazú",
    slug: "cataratas-iguazu",
    provinceSlug: "misiones",
    provinceName: "Misiones",
    description: "Una de las Siete Maravillas Naturales del Mundo. Las Cataratas del Iguazú reúnen 275 saltos de agua rodeados de selva subtropical. La experiencia culmina con el paseo en gomón que navega hasta la base de la imponente Garganta del Diablo.",
    shortDescription: "Maravilla natural del mundo",
    image: "/images/places/cataratas-iguazu.jpg",
    galleryImages: ["/images/places/cataratas-iguazu-1.jpg", "/images/places/cataratas-iguazu-2.jpg", "/images/places/garganta-diablo-1.jpg"],
    rating: 5.0,
    tags: ["Naturaleza", "Aventura", "Único", "Maravilla"],
    history: "Las cataratas se formaron hace unos 200.000 años. Declaradas Patrimonio de la Humanidad en 1984 y elegidas una de las Siete Maravillas Naturales del Mundo en 2011. El Parque Nacional Iguazú protege la selva paranaense que las rodea.",
    activities: ["Paseo en gomón (Gran Aventura)", "Circuito Garganta del Diablo", "Circuitos Superior e Inferior", "Tren ecológico de la selva"],
    recommendations: ["Llevar ropa impermeable", "Hacer la Gran Aventura en gomón", "Dedicar un día completo", "Proteger la cámara del agua"],
    bestTimeToVisit: "Todo el año",
    duration: "1-2 días"
  }
];

export function getPlaceBySlug(slug: string): Place | undefined {
  return places.find(p => p.slug === slug);
}

export function getPlacesByProvince(provinceSlug: string): Place[] {
  return places.filter(p => p.provinceSlug === provinceSlug);
}

export function getAllPlaceSlugs(): string[] {
  return places.map(p => p.slug);
}
