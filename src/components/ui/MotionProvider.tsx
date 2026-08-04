import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MotionProvider({ children }: Props) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
