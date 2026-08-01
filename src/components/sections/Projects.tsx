import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/shared/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle title="Projects" subtitle="Portfolio" />

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
