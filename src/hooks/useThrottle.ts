import { useEffect, useRef, useState } from "react";

export default function useThrottle<T>(value: T, delay = 300) {
  const [throttledValue, setThrottledValue] = useState(value);

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const now = Date.now();

    if (now - lastExecuted.current >= delay) {
      lastExecuted.current = now;
      setThrottledValue(value);
      return;
    }

    const timer = window.setTimeout(
      () => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      },
      delay - (now - lastExecuted.current),
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [value, delay]);

  return throttledValue;
}
