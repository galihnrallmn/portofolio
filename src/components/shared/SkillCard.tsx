import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import Card from "@/components/shared/Card";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
}

export default function SkillCard({ name, icon: Icon, color }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="group relative flex flex-col items-center justify-center overflow-hidden p-8 text-center transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
        {/* Glow */}

        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: [-6, 6, -4, 4, 0],
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <Icon
            size={54}
            style={{ color }}
            className="relative z-10 transition-transform duration-300 group-hover:scale-110"
          />
        </motion.div>

        {/* Name */}

        <h3 className="relative z-10 mt-5 text-base font-semibold text-slate-800 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {name}
        </h3>
      </Card>
    </motion.div>
  );
}
