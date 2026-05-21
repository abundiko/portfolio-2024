import About from "./About";
import Hero from "./Hero";
import { ReactLenis } from "lenis/react";
import Projects from "./Projects";
import Footer from "./Footer";

export default function Page() {
  return (
    <main>
      <ReactLenis root />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
