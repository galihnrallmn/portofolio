import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatingProps {
  children: ReactNode;
  delay?: number;
}

export default function Floating({ children, delay = 0 }: FloatingProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
