import { useState } from "react";

import Container from "@/components/shared/Container";
import ProjectCard from "@/components/shared/ProjectCard";
import ProjectModal from "@/components/shared/ProjectModal";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Section id="projects">
        <Reveal>
          <Container>
            <SectionTitle title="Featured Projects" subtitle="My Portfolio" />

            <Stagger className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <StaggerItem key={project.id}>
                  <ProjectCard project={project} onView={setSelectedProject} />
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </Reveal>
      </Section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
