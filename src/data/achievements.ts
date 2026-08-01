import { FaAward } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface Achievement {
  title: string;
  year: string;
  description: string;
  icon: IconType;
}

export const achievements: Achievement[] = [
  {
    title: "PKM-AI 2024",
    year: "2024",
    description:
      "Lolos pendanaan Program Kreativitas Mahasiswa bidang Artikel Ilmiah sebagai Ketua Tim.",
    icon: FaAward,
  },
];
