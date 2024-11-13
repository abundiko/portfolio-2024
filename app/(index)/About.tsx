/* eslint-disable @next/next/no-img-element */
"use client";

import { ExperienceCard } from "@/components/cards";
import { EXPERIENCES } from "@/data/experiences";
import { TECHNOLOGIES } from "@/data/technologies";
import { motion } from "framer-motion";

export const animateProps = {
  initial: { opacity: 0,  },
  whileInView: { opacity: 1,  },
};

export default function About() {
  return (
    <>
      <section className="app-container py-12">
        <motion.h3
          {...animateProps}
          className="font-bold text-2xl md:text-4xl pb-6"
        >
          Discover <span className="text-primary-dark underline">abundiko</span>
        </motion.h3>
        <div className="flex gap-4 flex-col md:grid md:grid-cols-12 md:gap-4">
          <motion.div
            {...animateProps}
            className="bg-white shadow-[0_0_30px_1px_#00000011] p-6 rounded-xl col-span-7"
          >
            <h4 className="text-neutral-800 font-[500] text-lg pb-4">
              About Me
            </h4>
            <p className="text-neutral-600 mb-3">
              As a passionate and dedicated software developer, I thrive on
              creating innovative solutions to complex problems. With a strong
              foundation in various programming languages and frameworks,
              I&apos;m constantly expanding my skill set to stay at the
              forefront of technology. My experience spans from developing
              frontend design systems to crafting intuitive user interfaces.
              I&apos;m committed to writing clean, efficient code and
              collaborating effectively in team environments with attention to
              detail.
            </p>
            <p className="text-neutral-600 mb-3">
              Outside of coding, I enjoy staying active in the tech community,
              gaming, movies, and contributing to open-source projects.
              I&apos;m always eager to take on new challenges and learn from
              every experience, aiming to make a positive impact through
              technology.
            </p>
          </motion.div>
          <motion.div
            {...animateProps}
            className="bg-neutral-800 shadow-[0_0_30px_1px_#00000011] p-6 rounded-xl col-span-5"
          >
            <h4 className="text-neutral-50 font-[500] text-lg pb-4">
              Soft Skills
            </h4>
            <ul className="list-disc px-4 text-neutral-300">
              <li>Critical thinking</li>
              <li>Fast learning</li>
              <li>Research</li>
              <li>Team work</li>
              <li>Efficient cooporation</li>
            </ul>
          </motion.div>
          <motion.div
            {...animateProps}
            className="bg-neutral-950 text-neutral-100 shadow-[0_0_30px_1px_#00000011] p-6 rounded-xl col-span-8 flex flex-col justify-between"
          >
            <div className="flex-col">
              <h4 className="text-neutral-50 font-[500] text-lg pb-2">
                My Experience
              </h4>
              <p className="text-neutral-200 pb-4">
                Excluding experience with firms bounded by an NDA
              </p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-6 [--scrollbar:white]">
              {[...EXPERIENCES].map((exp, i) => (
                <ExperienceCard key={i} {...exp} />
              ))}
            </div>
          </motion.div>
          <motion.div
            {...animateProps}
            className="bg-white shadow-[0_0_30px_1px_#00000011] p-6 rounded-xl col-span-4"
          >
            <h4 className="text-neutral-800 font-[500] text-lg pb-4">
              Frequently Used Technologies
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {TECHNOLOGIES.map((tech, i) => (
                <div
                  key={i}
                  className="rounded flex justify-center items-center flex-col gap-1"
                >
                  <img
                    src={`/images/icons/${tech.img}`}
                    alt={tech.title}
                    loading="lazy"
                    className="object-fit w-10/12 aspect-square max-w-12"
                  />
                  <p className="text-neutral-900 text-sm font-[500] text-center">
                    {tech.title}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-4 bg-white/25" />
      <div className="h-4 bg-white/50" />
      <div className="h-4 bg-white/75" />
      <div className="h-4 bg-white" />
    </>
  );
}
