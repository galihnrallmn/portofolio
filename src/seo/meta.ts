import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "./constants";

export interface MetaOptions {
  title?: string;
  description?: string;
}

export function createMeta(options: MetaOptions = {}) {
  return {
    title: options.title ?? DEFAULT_TITLE,
    description: options.description ?? DEFAULT_DESCRIPTION,
  };
}
