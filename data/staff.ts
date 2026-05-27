export interface StaffMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const founder: StaffMember = {
  id: "founder",
  name: "Martín Aguirre",
  role: "Fundador & CEO",
  description: "Apasionado viajero con más de 15 años recorriendo cada rincón de Argentina. Martín fundó ARGENTINEROUTE con el sueño de compartir la belleza de su país con el mundo. Su visión es crear experiencias de viaje que transformen vidas y conecten a las personas con la naturaleza y cultura argentina.",
  image: "/images/staff/founder.jpg"
};

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Lucía Fernández",
    role: "Directora de Experiencias",
    description: "Experta en diseñar itinerarios únicos y memorables.",
    image: "/images/staff/lucia.jpg"
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    role: "Guía Senior",
    description: "Conocedor de cada sendero y secreto de la Patagonia.",
    image: "/images/staff/carlos.jpg"
  },
  {
    id: "3",
    name: "Ana Belén Torres",
    role: "Coordinadora de Viajes",
    description: "Especialista en logística y atención al cliente.",
    image: "/images/staff/ana.jpg"
  },
  {
    id: "4",
    name: "Diego Ramírez",
    role: "Fotógrafo de Expediciones",
    description: "Captura los momentos más épicos de cada aventura.",
    image: "/images/staff/diego.jpg"
  },
  {
    id: "5",
    name: "Valentina Sosa",
    role: "Especialista en Enoturismo",
    description: "Sommelier certificada y amante de los viñedos mendocinos.",
    image: "/images/staff/valentina.jpg"
  },
  {
    id: "6",
    name: "Nicolás Herrera",
    role: "Guía de Montaña",
    description: "Montañista profesional con certificación internacional.",
    image: "/images/staff/nicolas.jpg"
  }
];
