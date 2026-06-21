export interface StaffMember {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  location?: string;
  age?: number;
  image: string;
}

export const founder: StaffMember = {
  id: "founder",
  name: "Darío",
  role: "Fundador & CEO",
  roleEn: "Founder & CEO",
  image: "/images/staff/founder.jpg",
};

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Jimena Micle",
    role: "Socia Gerente",
    roleEn: "Managing Partner",
    image: "/images/staff/jimena.jpg",
  },
  {
    id: "2",
    name: "Sara Rodríguez Carvajal",
    role: "Coordinadora de Ventas y Logística",
    roleEn: "Sales & Logistics Coordinator",
    image: "/images/staff/sara.jpg",
  },
  {
    id: "3",
    name: "Gastón Lemon",
    role: "Vendedor y Coordinador a Bordo",
    roleEn: "Salesperson & Onboard Coordinator",
    location: "San Nicolás, Buenos Aires",
    age: 47,
    image: "/images/staff/gaston.jpg",
  },
  {
    id: "4",
    name: "Valentina Ruggeri",
    role: "Vendedora Oficial",
    roleEn: "Official Sales Agent",
    location: "Santo Tomé, Santa Fe",
    age: 27,
    image: "/images/staff/valentina.jpg",
  },
  {
    id: "5",
    name: "Roxana Lazo",
    role: "Vendedora Oficial",
    roleEn: "Official Sales Agent",
    location: "Mendoza Capital",
    age: 37,
    image: "/images/staff/roxana.jpg",
  },
  {
    id: "6",
    name: "Yuliana Pastrana",
    role: "Vendedora Oficial",
    roleEn: "Official Sales Agent",
    location: "Salta Capital",
    image: "/images/staff/yuliana.jpg",
  },
  {
    id: "7",
    name: "Luciano A. Zeballos",
    role: "Vendedor Oficial",
    roleEn: "Official Sales Agent",
    location: "Victoria, Entre Ríos",
    age: 32,
    image: "/images/staff/luciano.jpg",
  },
  {
    id: "8",
    name: "Jesús García",
    role: "Desarrollador Web",
    roleEn: "Web Developer",
    image: "/images/staff/jesus.jpg",
  },
];
