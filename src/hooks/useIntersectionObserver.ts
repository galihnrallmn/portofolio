import { useEffect, useRef, useState, type RefObject } from "react";

export default function useIntersectionObserver<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isVisible];
}
