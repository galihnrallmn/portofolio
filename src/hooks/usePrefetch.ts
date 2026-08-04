import { useEffect } from "react";

type IdleHandle = number;

export default function usePrefetch(callback: () => void, enabled = true) {
  useEffect(() => {
    if (!enabled) return;

    let handle: IdleHandle;

    if (typeof window.requestIdleCallback === "function") {
      handle = window.requestIdleCallback(callback);
    } else {
      handle = window.setTimeout(callback, 1);
    }

    return () => {
      if (typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(handle);
      } else {
        window.clearTimeout(handle);
      }
    };
  }, [callback, enabled]);
}
