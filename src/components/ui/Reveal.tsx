import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { fadeUp } from "@/config/motion";

interface Props {
  children: ReactNode;
}

export default function Reveal({ children }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {children}
    </motion.div>
  );
}
