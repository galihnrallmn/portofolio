import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import Card from "@/components/shared/Card";

interface Props {
  icon: IconType;
  title: string;
  value: string;
  href: string;
}

export default function ContactCard({ icon: Icon, title, value, href }: Props) {
  return (
    <motion.a
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.25,
      }}
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noreferrer"
    >
      <Card className="flex items-center gap-5 border-slate-200 p-5 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <Icon size={22} />
        </div>

        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>

          <h3 className="font-semibold text-slate-900 dark:text-white">
            {value}
          </h3>
        </div>
      </Card>
    </motion.a>
  );
}
