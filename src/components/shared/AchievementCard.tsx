import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import Badge from "@/components/shared/Badge";
import Card from "@/components/shared/Card";
import Divider from "@/components/shared/Divider";

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
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Card className="border-slate-200 p-8 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
            <Icon size={28} />
          </div>

          <div className="flex-1">
            <Badge variant="primary">{year}</Badge>

            <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
              {title}
            </h3>
          </div>
        </div>

        <Divider className="my-6" />

        <p className="leading-8 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}
