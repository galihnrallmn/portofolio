import { motion } from "framer-motion";

interface Props {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        p-6
        shadow-lg
        backdrop-blur
      "
    >
      <h3 className="text-4xl font-black text-blue-600">{value}</h3>

      <p className="mt-2 text-slate-600">{label}</p>
    </motion.div>
  );
}
