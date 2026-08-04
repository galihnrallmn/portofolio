export function preloadFont(href: string, type = "font/woff2") {
  const link = document.createElement("link");

  link.rel = "preload";

  link.as = "font";

  link.type = type;

  link.href = href;

  link.crossOrigin = "anonymous";

  document.head.appendChild(link);
}
