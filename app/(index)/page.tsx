import About from "./About";
import Hero from "./Hero";
import { ReactLenis } from "lenis/react";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Page() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
