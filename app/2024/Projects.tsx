"use client";

import { motion } from "framer-motion";
import { animateProps } from "./About";
import { ProjectCard } from "@/components/cards";
import { PROJECTS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="Projects" className="py-12 app-container bg-white overflow-x-hidden">
      <div className="max-w-[1024px] mx-auto">
      <motion.h3
        {...animateProps}
        className="font-bold text-2xl md:text-4xl pb-6"
      >
        <span className="text-primary-dark underline">Creative</span> Projects I&apos;ve worked on
      </motion.h3>
      <div className="flex flex-col gap-4 md:gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
      </div>
    </section>
  );
}
