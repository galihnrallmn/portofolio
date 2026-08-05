import type { IconType } from "react-icons";
import {
  SiAndroidstudio,
  SiBootstrap,
  SiCapacitor,
  SiCodeigniter,
  SiCss,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiIonic,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
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
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Ionic",
        icon: SiIonic,
        color: "#3880FF",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
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
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
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
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#5FA04E",
      },
    ],
  },

  {
    title: "Database & Cloud",
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
    title: "Mobile",
    skills: [
      {
        name: "Capacitor",
        icon: SiCapacitor,
        color: "#119EFF",
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
        name: "Postman",
        icon: SiPostman,
        color: "#FF6C37",
      },
      {
        name: "Android Studio",
        icon: SiAndroidstudio,
        color: "#3DDC84",
      },
      {
        name: "npm",
        icon: SiNpm,
        color: "#CB3837",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "#F24E1E",
      },
    ],
  },
];
