import { useEffect, useRef } from "react";

export default function usePreviousFocus(enabled = true) {
  const previous = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    previous.current = document.activeElement as HTMLElement;

    return () => {
      previous.current?.focus();
    };
  }, [enabled]);
}
