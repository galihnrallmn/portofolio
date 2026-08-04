import {
  DEFAULT_DESCRIPTION,
  DEFAULT_IMAGE,
  DEFAULT_LOCALE,
  DEFAULT_SITE_URL,
  DEFAULT_TITLE,
  DEFAULT_TYPE,
} from "./constants";

interface OpenGraphOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function createOpenGraph(options: OpenGraphOptions = {}) {
  return {
    title: options.title ?? DEFAULT_TITLE,
    description: options.description ?? DEFAULT_DESCRIPTION,
    image: options.image ?? DEFAULT_IMAGE,
    url: options.url ?? DEFAULT_SITE_URL,
    type: options.type ?? DEFAULT_TYPE,
    locale: DEFAULT_LOCALE,
  };
}
