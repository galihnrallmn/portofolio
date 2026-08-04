import type { Project } from "@/data/projects";

export const mockProject: Project = {
  id: 999,

  title: "Mock Project",

  description: "This is a mock project used for testing.",

  image: "/mock/project.jpg",

  status: "Completed",

  technologies: ["React", "TypeScript", "Tailwind CSS"],

  features: ["Feature 1", "Feature 2", "Feature 3"],

  github: "https://github.com/example/project",

  demo: "https://example.com",
};

export const mockProjects: Project[] = [mockProject];
