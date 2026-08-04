import Container from "@/components/shared/Container";
import Divider from "@/components/shared/Divider";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import TimelineItem from "@/components/shared/TimelineItem";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <Container>
          <SectionTitle title="Experience" subtitle="Journey" />

          <Stagger className="mt-14 space-y-16">
            {experiences.map((item, index) => (
              <StaggerItem key={item.year}>
                <>
                  <TimelineItem {...item} />

                  {index !== experiences.length - 1 && (
                    <Divider className="mt-16" />
                  )}
                </>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Reveal>
    </Section>
  );
}
