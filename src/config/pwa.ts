import { siteConfig } from "./site";
import { themeConfig } from "./theme";

export const pwaConfig = {
  name: siteConfig.name,

  shortName: siteConfig.shortName,

  themeColor: themeConfig.color,

  backgroundColor: themeConfig.background,

  display: "standalone",

  orientation: "portrait-primary",
} as const;
