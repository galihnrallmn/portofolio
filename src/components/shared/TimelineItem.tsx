import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: IconType;
}

export default function TimelineItem({
  year,
  title,
  company,
  description,
  icon: Icon,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-14"
    >
      {/* Garis */}
      <div className="absolute left-5 top-0 h-full w-0.5 bg-slate-200" />

      {/* Titik */}
      <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
        <Icon size={18} />
      </div>

      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
        {year}
      </span>

      <h3 className="mt-3 text-2xl font-bold">{title}</h3>

      <p className="mt-1 font-medium text-blue-600">{company}</p>

      <p className="mt-4 leading-8 text-slate-600">{description}</p>
    </motion.div>
  );
}
