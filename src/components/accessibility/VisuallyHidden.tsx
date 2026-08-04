import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function VisuallyHidden({ children }: Props) {
  return <span className="sr-only">{children}</span>;
}
