export interface ProfileStat {
  value: string;
  label: string;
}

export interface Profile {
  title: string;
  description: string;
  experience: string;
  location: string;
  education: string;
  stats: ProfileStat[];
}

export const profile: Profile = {
  title: "Web Developer",

  description:
    "Saya adalah Web Developer yang berfokus pada pengembangan aplikasi web modern menggunakan React, TypeScript, Laravel, dan berbagai teknologi terkini. Saya senang membangun antarmuka yang cepat, responsif, dan mudah digunakan.",

  experience: "Freelance Web Developer sejak 2024",

  location: "Pelaihari, Kalimantan Selatan",

  education: "D3 Teknologi Informasi",

  stats: [
    {
      value: "10+",
      label: "Projects",
    },
    {
      value: "2+",
      label: "Years Learning",
    },
    {
      value: "5+",
      label: "Technologies",
    },
    {
      value: "100%",
      label: "Commitment",
    },
  ],
};
