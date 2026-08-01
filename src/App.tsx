import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

import GradientBackground from "./components/ui/GradientBackground";
import LoadingScreen from "./components/ui/LoadingScreen";

import ScrollTop from "./components/shared/ScrollTop";

import useLoading from "./hooks/useLoading";

import SEO from "@/components/shared/SEO";

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

            <About />

            <Skills />

            <Experience />

            <Projects />

            <Education />

            <Achievements />

            <Contact />
          </main>

          <Footer />

          <ScrollTop />
        </>
      )}
    </>
  );
}

export default App;
