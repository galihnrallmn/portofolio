import { AnimatePresence, motion } from "framer-motion";

import SmartImage from "@/components/shared/SmartImage";
import { siteConfig } from "@/config/site";

interface Props {
  loading: boolean;
}

export default function LoadingScreen({ loading }: Props) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 opacity-30 blur-[110px] dark:opacity-15" />
          </div>

          {/* Avatar with spinning ring */}
          <div className="relative flex h-28 w-28 items-center justify-center">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-600 border-r-blue-600 dark:border-t-blue-500 dark:border-r-blue-500"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <SmartImage
              src={siteConfig.avatar}
              alt={siteConfig.name}
              className="h-[92px] w-[92px] rounded-full border-4 border-white object-cover shadow-xl dark:border-slate-900"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="relative mt-6 text-2xl font-bold text-slate-900 dark:text-slate-100"
          >
            {siteConfig.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="relative mt-2 text-slate-500 dark:text-slate-400"
          >
            Loading Portfolio...
          </motion.p>

          <div className="relative mt-8 h-1.5 w-60 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-[length:200%_100%]"
              initial={{ width: 0, backgroundPosition: "0% 0%" }}
              animate={{
                width: "100%",
                backgroundPosition: ["0% 0%", "100% 0%"],
              }}
              transition={{
                width: {
                  duration: 1.4,
                },
                backgroundPosition: {
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
