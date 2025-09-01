"use client";

import { motion } from "framer-motion";

export default function HeroText() {
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-2 md:gap-y-4 font-bold text-4xl sm:text-5xl md:text-6xl justify-center items-center content-center">
      {"Delivering android responsive, performant websites web and apps ios that users love."
        .split(" ")
        .map((item, i) => {
          if (ICONS.includes(item))
            return (
              <Icon key={i} name={item as (typeof ICONS)[number]} index={i} />
            );
          return (
            <motion.span {...animationConfig(i)} key={i}>
              {item}
            </motion.span>
          );
        })}
    </div>
  );
}

const ICONS = ["android", "ios", "web"];
function Icon({
  name,
  index,
}: {
  name: (typeof ICONS)[number];
  index: number;
}) {
  return (
    <motion.img
      {...animationConfig(index)}
      height={100}
      width={100}
      alt={`${name} icon`}
      src={`/images/new/${name}.png`}
      className="size-[.9em] p-1 md:p-2 rounded-3xl bg-gray-200"
    />
  );
}

const animationConfig = (index: number) => ({
  initial: { opacity: 0, y: 20, rotateZ: Math.floor(Math.random() * 10) },
  animate: { opacity: 1, y: 0, rotateZ: 0 },
  exit: { opacity: 0, y: 20 },
  transition: {
    delay: index * 0.05,
    type: "spring",
    stiffness: 100,
    damping: 5,
    mass: 1,
  },
});
