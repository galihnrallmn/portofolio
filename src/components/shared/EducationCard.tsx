import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import type { Education } from "@/data/education";

interface Props {
  education: Education;
}

export default function EducationCard({
  education,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white/70
        p-8
        shadow-lg
        backdrop-blur
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-blue-600
            text-white
          "
        >
          <FaGraduationCap size={22} />
        </div>

        <div>
          <p className="font-semibold text-blue-600">
            {education.year}
          </p>

          <h3 className="text-2xl font-bold">
            {education.institution}
          </h3>
        </div>

      </div>

      <h4 className="mt-6 text-lg font-semibold">
        {education.degree}
      </h4>

      <p className="mt-3 leading-8 text-slate-600">
        {education.description}
      </p>
    </motion.div>
  );
}