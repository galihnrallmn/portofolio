import { motion } from "framer-motion";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import SkillCard from "../shared/SkillCard";

import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <SectionTitle title="Skills" subtitle="Technologies" />

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
                        grid
                        grid-cols-2
                        gap-5
                        sm:grid-cols-3
                        md:grid-cols-4
                        lg:grid-cols-5
                    "
        >
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
