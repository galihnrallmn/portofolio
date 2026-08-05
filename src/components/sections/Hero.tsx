import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SmartImage from "@/components/shared/SmartImage";
import SocialButton from "@/components/shared/SocialButton";
import BlurBlob from "@/components/ui/BlurBlob";
import { fadeLeft, fadeRight, floating } from "@/config/motion";
import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}

      <BlurBlob className="top-0 -left-40 h-96 w-96" />

      <BlurBlob className="right-0 bottom-0 h-[420px] w-[420px]" />

      {/* Grid */}

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:45px_45px]" />

      <Container>
        <div className="relative grid min-h-screen grid-cols-1 items-center gap-20 pt-32 pb-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div variants={fadeLeft} initial="hidden" animate="visible">
            <Badge variant="primary" className="px-4 py-2 text-sm">
              Hello, I'm
            </Badge>

            <h1 className="mt-6 text-5xl leading-tight font-black text-slate-900 lg:text-7xl dark:text-white">
              {siteConfig.name}
            </h1>

            <div className="mt-6 h-12">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Laravel Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Freelancer",
                  2000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                className="text-2xl font-bold text-blue-600 lg:text-3xl"
              />
            </div>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {siteConfig.description}
            </p>

            {/* Badges */}

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>{siteConfig.location}</Badge>

              <Badge variant="success">Available for Freelance</Badge>
            </div>

            {/* CTA */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="projects" smooth duration={500} offset={-80}>
                <Button>View Projects</Button>
              </Link>

              <a href={siteConfig.cv} download>
                <Button variant="secondary">Download CV</Button>
              </a>
            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">
              <SocialButton
                icon={FaGithub}
                href={siteConfig.github}
                label="GitHub"
              />

              <SocialButton
                icon={FaLinkedin}
                href={siteConfig.linkedin}
                label="LinkedIn"
              />

              <SocialButton
                icon={FaEnvelope}
                href={`mailto:${siteConfig.email}`}
                label="Email"
              />
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <motion.div animate={floating} className="relative">
              {/* Glow */}

              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 blur-3xl" />

              {/* Status */}

              <Badge
                variant="success"
                className="absolute top-8 -right-3 z-20 px-4 py-2 shadow-lg"
              >
                Available
              </Badge>

              <SmartImage
                src={siteConfig.avatar}
                alt={siteConfig.name}
                className="relative h-72 w-72 rounded-full border-8 border-white object-cover shadow-2xl lg:h-[420px] lg:w-[420px] dark:border-slate-900"
              />

              {/* Card */}

              <div className="absolute -bottom-8 left-1/2 w-[260px] -translate-x-1/2 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/80">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-600" />

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Based in
                    </p>

                    <p className="font-semibold dark:text-white">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-sm text-slate-500 lg:block dark:text-slate-400"
      >
        Scroll Down ↓
      </motion.div>
    </section>
  );
}
