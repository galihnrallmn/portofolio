import { motion } from "framer-motion";

import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";
import StatCard from "../shared/StatCard";

import { profile } from "../../data/profile";

export default function About() {
  return (
    <section id="about" className="py-28">
      <Container>
        <SectionTitle title="About Me" subtitle="Who Am I" />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
          >
            <img
              src="/profile.jpg"
              alt="Profile"
              className="
                mx-auto
                h-80
                w-80
                rounded-full
                border-8
                border-white
                object-cover
                shadow-2xl
              "
            />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-4xl font-black">{profile.title}</h3>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              {profile.description}
            </p>

            <div className="mt-12 grid grid-cols-2 gap-5">
              {profile.stats.map((item) => (
                <StatCard
                  key={item.label}
                  value={item.value}
                  label={item.label}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
