import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

import Badge from "@/components/shared/Badge";
import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";
import Divider from "@/components/shared/Divider";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import SmartImage from "@/components/shared/SmartImage";
import StatCard from "@/components/shared/StatCard";
import BlurBlob from "@/components/ui/BlurBlob";
import Reveal from "@/components/ui/Reveal";
import { fadeLeft, fadeRight } from "@/config/motion";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <Container>
          <SectionTitle title="About Me" subtitle="Who Am I" />

          <div className="grid items-center gap-20 lg:grid-cols-2">
            {/* LEFT */}

            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative">
                <BlurBlob className="inset-0 h-80 w-80" />

                <SmartImage
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  className="relative h-80 w-80 rounded-full border-8 border-white object-cover shadow-2xl"
                />
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Badge variant="primary">About Me</Badge>

              <h3 className="mt-4 text-4xl font-black dark:text-white">
                {profile.title}
              </h3>

              <p className="mt-6 text-lg leading-9 text-slate-600 dark:text-slate-300">
                {profile.description}
              </p>

              <Divider className="my-8" />

              <div className="space-y-4">
                <InfoCard
                  icon={<FaBriefcase />}
                  title="Experience"
                  value={profile.experience}
                />

                <InfoCard
                  icon={<FaGraduationCap />}
                  title="Education"
                  value={profile.education}
                />

                <InfoCard
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value={profile.location}
                />
              </div>

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
      </Reveal>
    </Section>
  );
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <Card className="flex items-center gap-4 p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-slate-800">
        {icon}
      </div>

      <div>
        <p className="text-sm text-slate-500">{title}</p>

        <h4 className="font-semibold dark:text-white">{value}</h4>
      </div>
    </Card>
  );
}
