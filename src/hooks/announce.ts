export function announce(message: string) {
  const region = document.getElementById("aria-live");

  if (!region) {
    return;
  }

  region.textContent = "";

  requestAnimationFrame(() => {
    region.textContent = message;
  });
}
