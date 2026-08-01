import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import AchievementCard from "@/components/shared/AchievementCard";

import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements">
      <Container>
        <SectionTitle title="Achievements" subtitle="Highlights" />

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
          "
        >
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.title} {...achievement} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
