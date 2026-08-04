import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function StaggerItem({ children }: Props) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.div>
  );
}
