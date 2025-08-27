import About from "./About";
import Hero from "./Hero";
import { ReactLenis } from "lenis/react";

export default function Page() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <About />
    </>
  );
}
