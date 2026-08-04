import { useEffect } from "react";

interface Options {
  onEscape?: () => void;
  onEnter?: () => void;
}

export default function useKeyboardNavigation({
  onEscape,
  onEnter,
}: Options = {}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      switch (event.key) {
        case "Escape":
          onEscape?.();
          break;

        case "Enter":
          onEnter?.();
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onEscape, onEnter]);
}
