export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LarisPOS",
    description:
      "Aplikasi Point of Sale berbasis web untuk UMKM dengan fitur transaksi, laporan, dan manajemen produk.",
    technologies: ["React", "TypeScript", "Laravel", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Sistem Informasi Kos",
    description:
      "Sistem informasi kos berbasis web dengan fitur pembayaran dan peta lokasi.",
    technologies: ["Laravel", "Filament", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Website Puskesmas",
    description:
      "Website informasi Puskesmas yang dikembangkan dalam proyek PBL.",
    technologies: ["CodeIgniter", "Bootstrap", "MySQL"],
    github: "#",
    demo: "#",
  },
];
