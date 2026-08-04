import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_SITE_URL,
  DEFAULT_TITLE,
} from "./constants";

interface PersonSchemaOptions {
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  sameAs?: string[];
}

export function createPersonSchema(options: PersonSchemaOptions = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",

    name: options.name ?? DEFAULT_TITLE,

    description: options.description ?? DEFAULT_DESCRIPTION,

    image: options.image ?? DEFAULT_IMAGE,

    url: options.url ?? DEFAULT_SITE_URL,

    sameAs: options.sameAs ?? [],
  };
}
