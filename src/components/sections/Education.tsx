import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import EducationCard from "@/components/shared/EducationCard";

import { educations } from "@/data/education";

export default function Education() {
  return (
    <Section id="education">
      <Container>
        <SectionTitle title="Education" subtitle="Academic Journey" />

        <div className="space-y-8">
          {educations.map((education) => (
            <EducationCard key={education.year} education={education} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
