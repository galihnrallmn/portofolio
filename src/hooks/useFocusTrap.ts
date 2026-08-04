import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = `
a[href],
button:not([disabled]),
textarea:not([disabled]),
input:not([disabled]),
select:not([disabled]),
[tabindex]:not([tabindex="-1"])
`;

export default function useFocusTrap(
  ref: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled || !ref.current) {
      return;
    }

    const container = ref.current;

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
    );

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab") {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    container.addEventListener("keydown", handleKeyDown);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, ref]);
}
