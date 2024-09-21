import HeroScene from "@/components/3d/HeroScene";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Projects />
    </main>
  );
}
