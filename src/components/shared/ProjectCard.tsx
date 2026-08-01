import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import type { Project } from "@/data/projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        hover:border-blue-400
        hover:shadow-2xl
      "
    >
      {/* Placeholder */}

      <div
        className="
          flex
          aspect-video
          items-center
          justify-center
          border-b
          border-slate-200
          bg-slate-100
        "
      >
        {/* <pre className="text-center text-sm leading-6 text-slate-500 font-mono">
          {`┌──────────────────────────────┐
│                              │
│                              │
│        COMING SOON           │
│                              │
│     Screenshot Preview       │
│                              │
└──────────────────────────────┘`}
        </pre> */}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="mt-4 leading-7 text-slate-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-sm
                font-medium
                text-blue-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex gap-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-medium hover:text-blue-600"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-medium hover:text-blue-600"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
