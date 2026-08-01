import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: IconType;
}

export const experiences: Experience[] = [
  {
    year: "2026",
    title: "Freelance Web Developer",
    company: "Self Employed",
    description:
      "Mengembangkan aplikasi web modern menggunakan React, Laravel, TypeScript, dan MySQL untuk berbagai kebutuhan klien.",
    icon: FaLaptopCode,
  },
  {
    year: "2025",
    title: "Web Developer Intern",
    company: "PT. Inovasi Informatik Sinergi",
    description:
      "Mengembangkan aplikasi berbasis Laravel 11 dan Filament serta berkolaborasi dengan tim developer.",
    icon: FaBriefcase,
  },
  {
    year: "2024",
    title: "PKM-AI Team Leader",
    company: "Politeknik Negeri Tanah Laut",
    description:
      "Memimpin tim penyusunan artikel ilmiah PKM-AI hingga lolos pendanaan.",
    icon: FaGraduationCap,
  },
];
