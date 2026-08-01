import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  title: string;
  year: string;
  description: string;
  icon: IconType;
}

export default function AchievementCard({
  title,
  year,
  description,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white/80
        p-8
        shadow-lg
        backdrop-blur
      "
    >
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-blue-600
          text-white
        "
      >
        <Icon size={28} />
      </div>

      <p className="mt-6 text-sm font-semibold text-blue-600">{year}</p>

      <h3 className="mt-2 text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </motion.div>
  );
}
