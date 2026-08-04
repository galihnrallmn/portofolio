import Container from "@/components/shared/Container";
import EducationCard from "@/components/shared/EducationCard";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { educations } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <Reveal>
        <Container>
          <SectionTitle title="Education" subtitle="Academic Journey" />

          <Stagger className="mt-14 space-y-8">
            {educations.map((education) => (
              <StaggerItem key={education.year}>
                <EducationCard education={education} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Reveal>
    </Section>
  );
}
