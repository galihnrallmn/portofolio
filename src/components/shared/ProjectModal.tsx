import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Card from "@/components/shared/Card";
import Divider from "@/components/shared/Divider";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-5 backdrop-blur-md"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.92,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] w-full max-w-5xl overflow-y-auto"
          >
            <Card className="overflow-hidden border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
              {/* Header */}

              <div className="flex items-start justify-between p-8">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h2>

                  <div className="mt-4">
                    <Badge
                      variant={
                        project.status === "Completed" ? "success" : "default"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <HiOutlineXMark size={28} className="dark:text-white" />
                </button>
              </div>

              <Divider />

              {/* Image */}

              <div className="p-8 pt-6">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="h-80 w-full rounded-2xl object-cover"
                />
              </div>

              {/* Content */}

              <div className="space-y-10 px-8 pb-8">
                {/* Description */}

                <section>
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    Description
                  </h3>

                  <p className="leading-8 text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                </section>

                <Divider />

                {/* Technologies */}

                <section>
                  <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </section>

                <Divider />

                {/* Features */}

                <section>
                  <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                    Features
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    {project.features.map((feature) => (
                      <Card
                        key={feature}
                        className="flex items-center gap-3 border-slate-200 p-4 shadow-sm hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
                      >
                        <FaCheckCircle className="text-blue-600" />

                        <span className="dark:text-slate-200">{feature}</span>
                      </Card>
                    ))}
                  </div>
                </section>

                <Divider />

                {/* Buttons */}

                <div className="flex flex-wrap gap-4">
                  {project.github && project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button variant="secondary">
                        <FaGithub className="mr-2" />
                        GitHub
                      </Button>
                    </a>
                  )}

                  {project.demo && project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <Button>
                        <FaExternalLinkAlt className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  <Button variant="outline" onClick={onClose}>
                    Close
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
