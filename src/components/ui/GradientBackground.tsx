import { motion } from "framer-motion";

export default function GradientBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed top-0 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/20 blur-[120px] dark:bg-blue-500/10"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed right-0 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/10"
      />
    </>
  );
}
