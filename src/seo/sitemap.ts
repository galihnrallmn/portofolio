import { DEFAULT_SITE_URL } from "./constants";

export interface SitemapItem {
  path: string;
  lastModified?: string;
  priority?: number;
}

export function createSitemap(pages: SitemapItem[]) {
  return pages.map((page) => ({
    url: `${DEFAULT_SITE_URL}${page.path}`,
    lastModified: page.lastModified ?? new Date().toISOString(),
    priority: page.priority ?? 0.8,
  }));
}
