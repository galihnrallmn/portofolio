import { siteConfig } from "./site";

export const seoConfig = {
  defaultTitle: siteConfig.name,

  titleTemplate: `%s | ${siteConfig.name}`,

  description:
    "Portfolio website of Muhamad Galih Noor Allamin. Web Developer specializing in React, TypeScript, Laravel, and modern web technologies.",

  keywords: [
    "Portfolio",
    "Web Developer",
    "React",
    "TypeScript",
    "Laravel",
    "Tailwind CSS",
    "Indonesia",
  ],

  author: siteConfig.name,

  language: "id",

  robots: "index,follow",

  image: siteConfig.avatar,
};
