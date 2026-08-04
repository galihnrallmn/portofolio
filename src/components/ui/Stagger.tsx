import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Stagger({ children, className = "" }: Props) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
