import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import type { IconType } from "react-icons";

export interface ContactItem {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}

export const contacts: ContactItem[] = [
  {
    icon: FaEnvelope,
    title: "Email",
    value: "email@example.com",
    href: "mailto:email@example.com",
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: "github.com/username",
    href: "https://github.com/username",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/username",
    href: "https://linkedin.com/in/username",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "South Kalimantan, Indonesia",
    href: "#",
  },
];
