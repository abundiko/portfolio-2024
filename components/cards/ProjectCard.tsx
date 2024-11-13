"use client";

import { Project } from "@/data/projects";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiLink } from "react-icons/hi2";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  logo,
  live,
  github,
}: Project) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    layoutEffect: false,
    offset: ["start 110%", "end 110%"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
      }}
      className="shadow-[0_0_30px_1px_#00000011] border gap-4 md:gap-6 border-neutral-200 bg-white text-black p-4 md:p-6 grid md:grid-cols-2 rounded-3xl"
    >
      <Image
        src={`/images/projects/${image}`}
        alt={title}
        height={500}
        width={600}
        className="rounded-2xl aspect-[1920/1080] object-cover bg-slate-200 w-full border"
      />
      <div className="flex flex-col gap-4 justify-center">
        <div className="flex items-center gap-1">
          {logo && (
            <Image
              height={80}
              width={80}
              src={`/images/projects/${logo}`}
              alt={"company logo"}
              className="rounded-xl border size-12 bg-slate-200 p-2 object-contain"
            />
          )}
          <h4 className="font-semibold text-primary-dark text-lg md:text-2xl">
            {title}
          </h4>
        </div>
        <p className="text-neutral-600">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((tech, i) => (
            <span
              key={i}
              className="bg-neutral-800 text-neutral-200 px-2 py-1 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:flex gap-4 items-center">
          {live && (
            <Link className="btn-primary" target="_blank" href={live}>
              <HiLink /> Visit
            </Link>
          )}
          {github && (
            <Link className="btn-secondary" target="_blank" href={github}>
              <FaGithub /> Github
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
