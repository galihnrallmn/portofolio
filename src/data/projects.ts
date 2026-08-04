import defaultImage from "@/assets/project/default.jpg";
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  status: string;
  technologies: string[];
  features: string[];
  github: string;
  demo: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LarisPOS",
    description:
      "Aplikasi Point of Sale modern untuk UMKM dengan dashboard owner, kasir, laporan, QRIS dan export CSV.",

    image: defaultImage,

    status: "Completed",

    technologies: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],

    features: [
      "Dashboard Owner",
      "Dashboard Kasir",
      "QRIS Payment",
      "Cash Payment",
      "Export CSV",
      "Print Receipt",
      "Role Management",
      "Transaction History",
    ],

    github: "#",

    demo: "#",
  },

  {
    id: 2,
    title: "Sistem Informasi Kos",

    description:
      "Sistem informasi kos berbasis Laravel dengan pembayaran dan peta lokasi.",

    image: defaultImage,

    status: "Completed",

    technologies: ["Laravel", "Filament", "MySQL"],

    features: ["Booking", "Pembayaran", "Peta Lokasi", "Dashboard Admin"],

    github: "#",

    demo: "#",
  },

  {
    id: 3,

    title: "Website Puskesmas",

    description: "Website informasi Puskesmas berbasis CodeIgniter.",

    image: defaultImage,

    status: "Completed",

    technologies: ["CodeIgniter", "Bootstrap", "MySQL"],

    features: ["Artikel", "Profil", "Layanan", "Galeri"],

    github: "#",

    demo: "#",
  },
];
