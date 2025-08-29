"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsText() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "top 60%",
      end: "top 40%",
      trigger: "#ProjecstText",
      // markers: true,
      scrub: true,
      onUpdate(st) {
        const pg = st.progress;
        gsap.to("#creative-span", {
          translateX: `${pg * -100}%`,
        });
        gsap.to("#projects-span", {
          translateX: `${pg * -100}%`,
        });
      },
    });

    // "Projects" font scaling
    ScrollTrigger.create({
      start: "top 60%",
      end: "top 40%",
      trigger: "#ProjecstText",
      scrub: true,
      onUpdate(st) {
        const pg = st.progress;
        gsap.to("#creative-span", {
          translateX: `${pg * -100}%`,
        });
        gsap.to("#projects-span", {
          translateX: `${pg * -100}%`,
        });
      },
    });


  });

  return (
    <div id="ProjecstText" className="">
      <h2 className="text-center font-bold text-[12vw] relative overflow-x-clip ">
        <span className="relative block text-center w-full" id="creative-span">
          CREATIVE
        </span>
        <span id="projects-span" className="absolute top-0 left-full block text-center w-full">
          PROJECTS
        </span>
        <div className="h-full w-40 bg-gradient-to-r from-white to-transparent absolute left-0 top-0"></div>
        <div className="h-full w-40 bg-gradient-to-l from-white to-transparent absolute right-0 top-0"></div>
      </h2>
    </div>
  );
}
