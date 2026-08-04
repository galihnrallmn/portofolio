import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { siteConfig } from "@/config/site";

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
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: FaGithub,
    title: "GitHub",
    value: siteConfig.github.replace("https://", ""),
    href: siteConfig.github,
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    value: siteConfig.linkedin.replace("https://", ""),
    href: siteConfig.linkedin,
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: siteConfig.location,
    href: "#",
  },
];
