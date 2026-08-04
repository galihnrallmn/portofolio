import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_TITLE } from "./constants";

interface TwitterOptions {
  title?: string;
  description?: string;
  image?: string;
  card?: "summary" | "summary_large_image";
}

export function createTwitterCard(options: TwitterOptions = {}) {
  return {
    card: options.card ?? "summary_large_image",
    title: options.title ?? DEFAULT_TITLE,
    description: options.description ?? DEFAULT_DESCRIPTION,
    image: options.image ?? DEFAULT_IMAGE,
  };
}
