import { useEffect, useState } from "react";

export default function useHighContrast() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-contrast: more)");

    const update = () => {
      setHighContrast(media.matches);
    };

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, []);

  return highContrast;
}
