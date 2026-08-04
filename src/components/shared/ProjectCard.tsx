import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import type { Project } from "@/data/projects";

interface Props {
  project: Project;
  onView: (project: Project) => void;
}

export default function ProjectCard({ project, onView }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.25 }}>
      <Card className="group overflow-hidden border-slate-200 dark:border-slate-700 dark:bg-slate-900">
        {/* Image */}

        <div className="overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h3>

            <Badge
              variant={project.status === "Completed" ? "success" : "default"}
            >
              {project.status}
            </Badge>
          </div>

          <p className="mt-5 line-clamp-3 leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>

          {/* Tech */}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action */}

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="outline" size="sm">
                  <FaGithub className="mr-2" />
                  GitHub
                </Button>
              </a>
            )}

            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Button variant="outline" size="sm">
                  <FaExternalLinkAlt className="mr-2" />
                  Demo
                </Button>
              </a>
            )}
          </div>

          {/* View Detail */}

          <Button className="mt-6 w-full" onClick={() => onView(project)}>
            View Detail
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
