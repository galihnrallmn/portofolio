import { lazy, Suspense } from "react";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import SEO from "./components/shared/SEO";
import ScrollTop from "./components/shared/ScrollTop";
import GradientBackground from "./components/ui/GradientBackground";
import LoadingScreen from "./components/ui/LoadingScreen";
import SectionSkeleton from "./components/ui/SectionSkeleton";
import useLoading from "./hooks/useLoading";

// Lazy Sections
const About = lazy(() => import("./components/sections/About"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Education = lazy(() => import("./components/sections/Education"));
const Achievements = lazy(() => import("./components/sections/Achievements"));
const Contact = lazy(() => import("./components/sections/Contact"));

function App() {
  const loading = useLoading();

  return (
    <>
      <SEO
        title="Portfolio"
        description="Portfolio Web Developer menggunakan React, TypeScript, Laravel, dan modern web technologies."
      />

      <LoadingScreen loading={loading} />

      {!loading && (
        <>
          <GradientBackground />

          <Navbar />

          <main>
            <Hero />

            <Suspense fallback={<SectionSkeleton />}>
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Education />
              <Achievements />
              <Contact />
            </Suspense>
          </main>

          <Footer />

          <ScrollTop />
        </>
      )}
    </>
  );
}

export default App;
