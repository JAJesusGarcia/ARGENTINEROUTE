import { cloudinary } from "@/lib/claudinary";


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
    name: "Sara Rodríguez",
    role: ["Coordinadora de Ventas y Logística"],
    roleEn: ["Sales & Logistics Coordinator"],
    location: "Rosario, Santa Fe",
    age: 44,
    image: cloudinary("images/staff/sara-rodriguez2"),
    instagram: "https://www.instagram.com/saraelerod?utm_source=qr",
    linkedin: "https://www.linkedin.com/in/sara-elena-rodriguez-carbajal-a9a76010b/",
  },
  {
    id: "4",
    name: "Gastón Lemos",
    role: ["Vendedor y Coordinador a Bordo"],
    roleEn: ["Salesperson & Onboard Coordinator"],
    location: "San Nicolás, Buenos Aires",
    age: 47,
    image: cloudinary("images/staff/gaston-lemon3"),
    instagram: "https://www.instagram.com/gastonacho/",
    linkedin: "https://www.linkedin.com/in/gaston-lemos-a98725167/",
  },
  {
    id: "5",
    name: "Valentina Ruggenini",
    role: ["Vendedora Oficial"],
    roleEn: ["Official Sales Agent"],
    location: "Santo Tomé, Santa Fe",
    age: 22,
    image: cloudinary("images/staff/vantina-ruggeri2"),
    instagram: "https://www.instagram.com/_tinarouge/",
    linkedin: "https://www.linkedin.com/in/vantina-ruggenini/",
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