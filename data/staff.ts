export interface StaffMember {
  id: string;
  name: string;
  role: string[];
  roleEn: string[];
  location?: string;
  age?: number;
  image: string;
}

export const founder: StaffMember = {
  id: "founder",
  name: "Darío",
  role: ["Fundador & CEO"],
  roleEn: ["Founder & CEO"],
  image: "/images/staff/founder.webp",
};

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Jimena Micle",
    role: ["Socio Gerente"],
    roleEn: ["Managing Partner"],
    location: "San Lorenzo, Santa Fe",
    age: 35,
    image: "/images/staff/jimena-micle.webp",
  },
  {
    id: "2",
    name: "Aneley Arbel",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "San Lorenzo, Santa Fe",
    age: 24,
    image: "/images/staff/aneley-arbel.webp",
  },
  {
    id: "3",
    name: "Sara Rodríguez Carvajal",
    role: ["Coordinadora de Ventas y Logística"],
    roleEn: ["Sales & Logistics Coordinator"],
    location: "San Miguel, Tucumán",
    age: 47,
    image: "/images/staff/sara-rodriguez.webp",
  },
  {
    id: "4",
    name: "Gastón Lemon",
    role: ["Vendedor y Coordinador a Bordo"],
    roleEn: ["Salesperson & Onboard Coordinator"],
    location: "San Nicolás, Buenos Aires",
    age: 47,
    image: "/images/staff/gaston-lemon.webp",
  },
  {
    id: "5",
    name: "Valentina Ruggeri",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Santo Tomé, Santa Fe",
    age: 27,
    image: "/images/staff/vantina-ruggeri.webp",
  },
  {
    id: "6",
    name: "Roxana Lazo",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Mendoza Capital",
    age: 37,
    image: "/images/staff/lazo-roxana.webp",
  },
  {
    id: "7",
    name: "Yuliana Pastrana",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Salta Capital",
    age: 24,
    image: "/images/staff/yuliana-pastrana.webp",
  },
  {
    id: "8",
    name: "Luciano A. Zeballos",
    role: ["Vendedor Oficial y Coordinador a Bordo"],
    roleEn: ["Official Sales Agent", "Coordinator"],
    location: "Victoria, Entre Ríos",
    age: 32,
    image: "/images/staff/luciano-zeballos.webp",
  },
  {
    id: "9",
    name: "Jesús García",
    role: ["Desarrollador Web"],
    roleEn: ["Web Developer"],
    location: "Rosario, Santa Fe",
    age: 27,
    image: "/images/staff/jesus-garcia.webp",
  },
];
