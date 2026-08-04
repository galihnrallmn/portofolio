import AchievementCard from "@/components/shared/AchievementCard";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Stagger from "@/components/ui/Stagger";
import StaggerItem from "@/components/ui/StaggerItem";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <Section id="achievements">
      <Reveal>
        <Container>
          <SectionTitle title="Achievements" subtitle="Highlights" />

          <Stagger className="mt-14 space-y-8">
            {achievements.map((achievement) => (
              <StaggerItem key={achievement.title}>
                <AchievementCard {...achievement} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Reveal>
    </Section>
  );
}
