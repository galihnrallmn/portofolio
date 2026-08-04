import { lazy } from "react";

export const Hero = lazy(() => import("@/components/sections/Hero"));

export const About = lazy(() => import("@/components/sections/About"));

export const Skills = lazy(() => import("@/components/sections/Skills"));

export const Experience = lazy(
  () => import("@/components/sections/Experience"),
);

export const Projects = lazy(() => import("@/components/sections/Projects"));

export const Education = lazy(() => import("@/components/sections/Education"));

export const Achievements = lazy(
  () => import("@/components/sections/Achievements"),
);

export const Contact = lazy(() => import("@/components/sections/Contact"));

export const Footer = lazy(() => import("@/components/layout/Footer"));
