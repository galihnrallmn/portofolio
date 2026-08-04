import type { ReactNode } from "react";

interface Props {
  as?: "main" | "section" | "nav" | "aside";
  label?: string;
  children: ReactNode;
  className?: string;
}

export default function Landmark({
  as: Component = "section",
  label,
  children,
  className = "",
}: Props) {
  return (
    <Component aria-label={label} className={className}>
      {children}
    </Component>
  );
}
