import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function ScreenReaderText({ children }: Props) {
  return <span className="sr-only">{children}</span>;
}
