import { useEffect, useState } from "react";

export default function useImage(src: string) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.src = src;

    img.onload = () => {
      setLoaded(true);
      setError(false);
    };

    img.onerror = () => {
      setLoaded(false);
      setError(true);
    };
  }, [src]);

  return {
    loaded,
    error,
  };
}
