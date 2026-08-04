import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVite,
  SiLaravel,
  SiCodeigniter,
  SiPhp,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";


export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "#646CFF",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: SiLaravel,
        color: "#FF2D20",
      },
      {
        name: "CodeIgniter",
        icon: SiCodeigniter,
        color: "#EF4223",
      },
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
    ],
  },

  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "#FFCA28",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
    ],
  },
];
