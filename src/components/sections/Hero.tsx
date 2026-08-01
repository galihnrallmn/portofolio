import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Button from "../shared/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-20 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            👋 Hello, I'm
          </span>

          <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
            Muhamad Galih
            <br />
            Noor Allamin
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-blue-600 lg:text-3xl">
            Web Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Building modern web applications using React, Laravel, TypeScript
            and modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>View Portfolio</Button>

            <Button variant="secondary">Download CV</Button>
          </div>

          <div className="mt-10 flex gap-6 text-2xl text-slate-500">
            <FaGithub className="cursor-pointer transition hover:text-blue-600" />
            <FaLinkedin className="cursor-pointer transition hover:text-blue-600" />
            <FaEnvelope className="cursor-pointer transition hover:text-blue-600" />
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20" />

            <img
              src="/profile.jpg"
              alt="Profile"
              className="
                relative
                h-72
                w-72
                rounded-full
                border-8
                border-white
                object-cover
                shadow-2xl
                lg:h-96
                lg:w-96
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
