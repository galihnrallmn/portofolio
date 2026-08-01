import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import TimelineItem from "../shared/TimelineItem";

import { experiences } from "../../data/experiences";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <Container>
        <SectionTitle title="Experience" subtitle="Journey" />

        <div className="space-y-16">
          {experiences.map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
