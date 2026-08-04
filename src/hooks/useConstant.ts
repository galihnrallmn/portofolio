import { useRef } from "react";

export default function useConstant<T>(initializer: () => T): T {
  const ref = useRef<T | undefined>(undefined);

  if (ref.current === undefined) {
    ref.current = initializer();
  }

  return ref.current;
}
