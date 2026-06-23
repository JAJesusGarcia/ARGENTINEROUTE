export interface StaffMember {
  id: string;
  name: string;
  role: string[];
  roleEn: string[];
  location?: string;
  age?: number;
  image: string;
  instagram?: string;
  linkedin?: string;
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
    image: "/images/staff/jimena-micle2.webp",
    instagram: "https://instagram.com/jimena",
    linkedin: "https://linkedin.com/in/jimena"
  },
  {
    id: "2",
    name: "Aneley Arbel",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "San Lorenzo, Santa Fe",
    age: 24,
    image: "/images/staff/aneley-arbel2.webp",
    instagram: "https://instagram.com/aneley",
    linkedin: "https://linkedin.com/in/aneley"
  },
  {
    id: "3",
    name: "Sara Rodríguez Carvajal",
    role: ["Coordinadora de Ventas y Logística"],
    roleEn: ["Sales & Logistics Coordinator"],
    location: "San Miguel, Tucumán",
    age: 47,
    image: "/images/staff/sara-rodriguez2.webp",
    instagram: "https://instagram.com/sara",
    linkedin: "https://linkedin.com/in/sara"
  },
  {
    id: "4",
    name: "Gastón Lemon",
    role: ["Vendedor y Coordinador a Bordo"],
    roleEn: ["Salesperson & Onboard Coordinator"],
    location: "San Nicolás, Buenos Aires",
    age: 47,
    image: "/images/staff/gaston-lemon2.webp",
    instagram: "https://instagram.com/gaston",
    linkedin: "https://linkedin.com/in/gaston"
  },
  {
    id: "5",
    name: "Valentina Ruggeri",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Santo Tomé, Santa Fe",
    age: 27,
    image: "/images/staff/vantina-ruggeri2.webp",
    instagram: "https://instagram.com/vantina",
    linkedin: "https://linkedin.com/in/vantina"
  },
  {
    id: "6",
    name: "Roxana Lazo",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Mendoza Capital",
    age: 37,
    image: "/images/staff/lazo-roxana2.webp",
    instagram: "https://instagram.com/roxana",
    linkedin: "https://linkedin.com/in/roxana"
  },
  {
    id: "7",
    name: "Yuliana Pastrana",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Salta Capital",
    age: 24,
    image: "/images/staff/yuliana-pastrana2.webp",
    instagram: "https://instagram.com/yuliana",
    linkedin: "https://linkedin.com/in/yuliana"
  },
  {
    id: "8",
    name: "Luciano A. Zeballos",
    role: ["Vendedor Oficial y Coordinador a Bordo"],
    roleEn: ["Official Sales Agent", "Coordinator"],
    location: "Victoria, Entre Ríos",
    age: 32,
    image: "/images/staff/luciano-zeballos2.webp",
    instagram: "https://instagram.com/luciano",
    linkedin: "https://linkedin.com/in/luciano"
  },
  {
    id: "9",
    name: "Jesús García",
    role: ["Desarrollador Web"],
    roleEn: ["Web Developer"],
    location: "Rosario, Santa Fe",
    age: 27,
    image: "/images/staff/jesus-garcia.webp",
    instagram: "https://instagram.com/jesus",
    linkedin: "https://linkedin.com/in/jesus"
  },
];
