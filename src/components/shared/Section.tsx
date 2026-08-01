import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: Props) {
  return (
    <section id={id} className={clsx("py-28", className)}>
      {children}
    </section>
  );
}
