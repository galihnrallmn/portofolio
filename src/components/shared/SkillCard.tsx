import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  name: string;
  icon: IconType;
  color: string;
}

export default function SkillCard({ name, icon: Icon, color }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
                rounded-3xl
                border
                border-slate-200
                bg-white/70
                p-8
                shadow-lg
                backdrop-blur
                transition
            "
    >
      <Icon className={`${color} mx-auto`} size={52} />

      <h3 className="mt-5 text-center font-semibold">{name}</h3>
    </motion.div>
  );
}
