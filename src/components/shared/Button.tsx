import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={clsx(
        "rounded-full px-6 py-3 font-semibold transition",
        variant === "primary"
          ? "bg-blue-600 text-white"
          : "border border-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
