import { cloudinary } from "@/lib/claudinary";

//comentario de prueba para commit
// otro...

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
  image: cloudinary("images/staff/founder2"),
};

export const staff: StaffMember[] = [
  {
    id: "1",
    name: "Jimena Micle",
    role: ["Socio Gerente"],
    roleEn: ["Managing Partner"],
    location: "San Lorenzo, Santa Fe",
    age: 35,
    image: cloudinary("images/staff/jimena-micle2"),
    instagram: "https://instagram.com/jimena",
    linkedin: "https://linkedin.com/in/jimena",
  },
  {
    id: "2",
    name: "Aneley Arbel",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "San Lorenzo, Santa Fe",
    age: 24,
    image: cloudinary("images/staff/aneley-arbel2"),
    instagram: "https://instagram.com/aneley",
    linkedin: "https://linkedin.com/in/aneley",
  },
  {
    id: "3",
    name: "Sara Rodríguez Carvajal",
    role: ["Coordinadora de Ventas y Logística"],
    roleEn: ["Sales & Logistics Coordinator"],
    location: "San Miguel, Tucumán",
    age: 47,
    image: cloudinary("images/staff/sara-rodriguez2"),
    instagram: "https://instagram.com/sara",
    linkedin: "https://linkedin.com/in/sara",
  },
  {
    id: "4",
    name: "Gastón Lemon",
    role: ["Vendedor y Coordinador a Bordo"],
    roleEn: ["Salesperson & Onboard Coordinator"],
    location: "San Nicolás, Buenos Aires",
    age: 47,
    image: cloudinary("images/staff/gaston-lemon3"),
    instagram: "https://instagram.com/gaston",
    linkedin: "https://linkedin.com/in/gaston",
  },
  {
    id: "5",
    name: "Valentina Ruggeri",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Santo Tomé, Santa Fe",
    age: 27,
    image: cloudinary("images/staff/vantina-ruggeri2"),
    instagram: "https://instagram.com/vantina",
    linkedin: "https://linkedin.com/in/vantina",
  },
  {
    id: "6",
    name: "Lazo Roxana",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Mendoza, Argentina",
    age: 35,
    image: cloudinary("images/staff/lazo-roxana2"),
    instagram: "https://www.instagram.com/roxenlu/",
    linkedin: "https://www.linkedin.com/in/roxanalazo/",
  },
  {
    id: "7",
    name: "Yuliana Pastrana",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Salta Capital",
    age: 24,
    image: cloudinary("images/staff/yuliana-pastrana2"),
    instagram: "https://instagram.com/yuliana",
    linkedin: "https://linkedin.com/in/yuliana",
  },
  {
    id: "8",
    name: "Luciano A. Zeballos",
    role: ["Vendedor Oficial y Coordinador a Bordo"],
    roleEn: ["Official Sales Agent", "Coordinator"],
    location: "Victoria, Entre Ríos",
    age: 32,
    image: cloudinary("images/staff/luciano-zeballos2"),
    instagram: "https://instagram.com/luciano",
    linkedin: "https://linkedin.com/in/luciano",
  },
  {
    id: "9",
    name: "Jesús García",
    role: ["Desarrollador Web"],
    roleEn: ["Web Developer"],
    location: "Rosario, Santa Fe",
    age: 27,
    image: cloudinary("images/staff/jesus-garcia2"),
    instagram: "https://www.instagram.com/jesusjuanandres/",
    linkedin: "https://www.linkedin.com/in/jesusjagarcia/",
  },
];