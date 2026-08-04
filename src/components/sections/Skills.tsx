import Badge from "@/components/shared/Badge";
import Container from "@/components/shared/Container";
import Divider from "@/components/shared/Divider";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import SkillCard from "@/components/shared/SkillCard";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <Container>
          <SectionTitle title="Skills & Technologies" subtitle="Tech Stack" />

          <div className="mt-14 space-y-16">
            {skillCategories.map((category, index) => (
              <div key={category.title}>
                <div className="mb-8 flex items-center gap-4">
                  <Badge variant="primary">
                    {String(index + 1).padStart(2, "0")}
                  </Badge>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <Stagger className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <SkillCard {...skill} />
                    </StaggerItem>
                  ))}
                </Stagger>

                {index !== skillCategories.length - 1 && (
                  <Divider className="mt-14" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
