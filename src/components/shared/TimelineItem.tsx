import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import Badge from "@/components/shared/Badge";
import Card from "@/components/shared/Card";

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
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className="relative pl-16"
    >
      {/* Timeline Line */}

      <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-blue-500 via-blue-300 to-transparent" />

      {/* Timeline Icon */}

      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 10,
        }}
        className="absolute top-2 left-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg ring-4 ring-blue-100 dark:ring-slate-800"
      >
        <Icon size={20} />
      </motion.div>

      <Card className="group p-7 transition-all duration-300 hover:border-blue-500 hover:shadow-2xl">
        <Badge variant="primary">{year}</Badge>

        <h3 className="mt-4 text-2xl font-bold transition-colors group-hover:text-blue-600 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 font-semibold text-blue-600">{company}</p>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
