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
    id: "2",
    name: "Ruta del Vino",
    slug: "ruta-del-vino",
    provinceSlug: "mendoza",
    provinceName: "Mendoza",
    description: "Circuito enoturístico que recorre las bodegas más prestigiosas de Argentina. Desde pequeñas bodegas boutique hasta grandes establecimientos, cada parada ofrece degustaciones, maridajes y vistas de viñedos con los Andes de fondo.",
    shortDescription: "Viñedos infinitos y Malbec",
    image: "/images/places/ruta-vino.jpg",
    galleryImages: ["/images/places/ruta-vino-1.jpg", "/images/places/ruta-vino-2.jpg", "/images/places/ruta-vino-3.jpg"],
    rating: 4.9,
    tags: ["Enoturismo", "Gastronomía", "Paisajes", "Premium"],
    history: "La tradición vitivinícola mendocina se remonta a 1551, con la llegada de los primeros viñedos. Hoy, Mendoza produce el 70% del vino argentino y es reconocida mundialmente por su Malbec.",
    activities: ["Degustación de vinos", "Tour por bodegas", "Maridaje gourmet", "Paseo en bicicleta entre viñedos"],
    recommendations: ["Reservar con anticipación", "Contratar chofer", "Probar el Malbec de altura", "Visitar Valle de Uco"],
    bestTimeToVisit: "Marzo a mayo (vendimia)",
    duration: "Día completo"
  },
  {
    id: "3",
    name: "Aconcagua",
    slug: "aconcagua",
    provinceSlug: "mendoza",
    provinceName: "Mendoza",
    description: "El techo de América, con sus 6.962 metros, desafía a montañistas de todo el mundo. Incluso sin escalar, el Parque Provincial ofrece trekkings espectaculares y vistas que cortan la respiración.",
    shortDescription: "El coloso de América",
    image: "/images/places/aconcagua.jpg",
    galleryImages: ["/images/places/aconcagua-1.jpg", "/images/places/aconcagua-2.jpg", "/images/places/aconcagua-3.jpg"],
    rating: 4.9,
    tags: ["Montaña", "Trekking", "Aventura", "Naturaleza"],
    history: "Venerado por los pueblos originarios como 'Centinela de Piedra', el Aconcagua ha sido meta de expediciones desde 1897. Cada año, miles de aventureros intentan alcanzar su cumbre.",
    activities: ["Trekking a Confluencia", "Expedición a cumbre", "Fotografía de paisajes", "Observación de cóndores"],
    recommendations: ["Aclimatarse previamente", "Contratar guía certificado", "Llevar equipo adecuado", "Tramitar permisos"],
    bestTimeToVisit: "Noviembre a marzo",
    duration: "1 día a 3 semanas (según actividad)"
  },
  {
    id: "4",
    name: "Tren a las Nubes",
    slug: "tren-nubes",
    provinceSlug: "salta",
    provinceName: "Salta",
    description: "Una de las rutas ferroviarias más altas del mundo, que asciende hasta los 4.220 metros. El tren atraviesa puentes, túneles y viaductos en un recorrido de ensueño por la Quebrada del Toro.",
    shortDescription: "Viaje épico a las alturas",
    image: "/images/places/tren-nubes.jpg",
    galleryImages: ["/images/places/tren-nubes-1.jpg", "/images/places/tren-nubes-2.jpg", "/images/places/tren-nubes-3.jpg"],
    rating: 4.7,
    tags: ["Tren", "Aventura", "Paisajes", "Único"],
    history: "Construido entre 1921 y 1948 como vía de carga hacia Chile, el tren se convirtió en atracción turística en 1972. Su punto culminante es el viaducto La Polvorilla.",
    activities: ["Viaje en tren panorámico", "Fotografía de viaductos", "Compra de artesanías", "Degustación de coca"],
    recommendations: ["Reservar con meses de anticipación", "Llevar ropa de abrigo", "Tomar hojas de coca para la altura", "Sentarse junto a la ventana"],
    bestTimeToVisit: "Abril a noviembre",
    duration: "Día completo"
  },
  {
    id: "5",
    name: "Purmamarca",
    slug: "purmamarca",
    provinceSlug: "jujuy",
    provinceName: "Jujuy",
    description: "Pueblo de adobe al pie del Cerro de los Siete Colores, Purmamarca es un museo viviente de tradiciones ancestrales. Su feria artesanal y calles empedradas transportan a otra época.",
    shortDescription: "Siete colores, mil emociones",
    image: "/images/places/purmamarca.jpg",
    galleryImages: ["/images/places/purmamarca-1.jpg", "/images/places/purmamarca-2.jpg", "/images/places/purmamarca-3.jpg"],
    rating: 4.9,
    tags: ["Paisajes", "Cultura", "Artesanías", "Fotografía"],
    history: "Habitado desde hace más de 10.000 años, Purmamarca fue parte del Camino del Inca. Su iglesia de Santa Rosa de Lima data de 1648.",
    activities: ["Paseo de los Colorados", "Feria artesanal", "Visita a la iglesia", "Amanecer en el cerro"],
    recommendations: ["Madrugar para el amanecer", "Regatear en la feria", "Probar la llama", "Hospedarse una noche"],
    bestTimeToVisit: "Mayo a octubre",
    duration: "1-2 días"
  },
  {
    id: "6",
    name: "Salinas Grandes",
    slug: "salinas-grandes",
    provinceSlug: "jujuy",
    provinceName: "Jujuy",
    description: "Un mar blanco a 3.450 metros de altura, las Salinas Grandes son el tercer salar más grande del mundo. Sus 212 km² de sal pura crean un paisaje surrealista perfecto para fotografías.",
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
    id: "7",
    name: "La Cumbrecita",
    slug: "la-cumbrecita",
    provinceSlug: "cordoba",
    provinceName: "Córdoba",
    description: "Aldea peatonal de estilo alpino enclavada en las Sierras Grandes. Sin autos ni estrés, La Cumbrecita invita a desconectar entre bosques, arroyos y senderos de montaña.",
    shortDescription: "Aldea de ensueño sin autos",
    image: "/images/places/la-cumbrecita.jpg",
    galleryImages: ["/images/places/la-cumbrecita-1.jpg", "/images/places/la-cumbrecita-2.jpg", "/images/places/la-cumbrecita-3.jpg"],
    rating: 4.8,
    tags: ["Naturaleza", "Trekking", "Relax", "Romántico"],
    history: "Fundada en 1934 por la familia Behrend, La Cumbrecita fue diseñada siguiendo el estilo de aldeas de la Selva Negra alemana. Desde 1996 es pueblo peatonal.",
    activities: ["Trekking a cascadas", "Baño en arroyos", "Avistaje de aves", "Paseo por senderos"],
    recommendations: ["Dejar el auto en el estacionamiento", "Llevar calzado de trekking", "Visitar la Olla", "Probar la cerveza artesanal"],
    bestTimeToVisit: "Todo el año",
    duration: "1-2 días"
  },
  {
    id: "8",
    name: "Tafí del Valle",
    slug: "tafi-del-valle",
    provinceSlug: "tucuman",
    provinceName: "Tucumán",
    description: "Valle de altura rodeado de cumbres nevadas, Tafí combina paisajes andinos con la calidez tucumana. Sus quesos artesanales y menhires prehispánicos lo hacen único.",
    shortDescription: "El valle encantado",
    image: "/images/places/tafi-valle.jpg",
    galleryImages: ["/images/places/tafi-valle-1.jpg", "/images/places/tafi-valle-2.jpg", "/images/places/tafi-valle-3.jpg"],
    rating: 4.6,
    tags: ["Montaña", "Cultura", "Gastronomía", "Historia"],
    history: "Habitado por la cultura Tafí hace más de 2.000 años, el valle conserva menhires sagrados y vestigios arqueológicos. Los jesuitas introdujeron la ganadería en el siglo XVII.",
    activities: ["Visita a los Menhires", "Degustación de quesos", "Cabalgatas", "Trekking al Cerro Pelao"],
    recommendations: ["Probar el queso de Tafí", "Visitar la Reserva de Los Menhires", "Llevar abrigo", "Disfrutar del silencio"],
    bestTimeToVisit: "Abril a octubre",
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
