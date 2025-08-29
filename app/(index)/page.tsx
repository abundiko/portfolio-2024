import { redirect, RedirectType } from "next/navigation";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Home() {
  redirect("/new", RedirectType.replace);

  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
