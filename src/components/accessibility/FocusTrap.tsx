import type { ReactNode } from "react";
import { useRef } from "react";

import useFocusTrap from "@/hooks/useFocusTrap";

interface FocusTrapProps {
  children: ReactNode;
  enabled?: boolean;
}

export default function FocusTrap({
  children,
  enabled = true,
}: FocusTrapProps) {
  const ref = useRef<HTMLDivElement>(null);

  useFocusTrap(ref, enabled);

  return <div ref={ref}>{children}</div>;
}
