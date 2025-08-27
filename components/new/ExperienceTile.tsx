"use client";

import { Experience } from "@/data/experiences";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function ExperienceTile(props: { experience: Experience }) {
  const { at, role, year } = props.experience;
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top bottom",
      end: "bottom 70%",
      scrub: true,
      onUpdate(st) {
        const pr = st.progress;
        gsap.to(ref.current, { opacity: pr });
      },
    });

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top 20%",
      end: "top top",
      scrub: true,
      onUpdate(st) {
        const pr = st.progress;
        gsap.to(ref.current, { opacity: 1 - pr });
      },
    });
  });

  return (
    <div
      className="grid gap-1 text-gray-700 border-b border-gray-100 py-4 opacity-0"
      ref={ref}
    >
      <h3 className="font-semibold text-xl md:text-2xl">{at}</h3>
      <div className="flex justify-between gap-4 items-center text-gray-500">
        <p className="text-sm md:text-base font-semibold">{role}</p>
        <p className="text-sm md:text-base font-semibold">{year}</p>
      </div>
    </div>
  );
}
