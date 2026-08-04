export function preloadImage(src: string) {
  const img = new Image();

  img.src = src;
}

export function preloadImages(images: string[]) {
  images.forEach(preloadImage);
}
