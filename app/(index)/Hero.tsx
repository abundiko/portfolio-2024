/* eslint-disable @next/next/no-img-element */
"use client";

import SpinningCube from "@/components/3d/SpinningCube";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaDotCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
    target: heroRef,
  });
  const smallY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const bigY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <>
      <div className="overflow-hidden relative">
        <img
          src="/images/hero.jpeg"
          alt="hero background"
          className="h-full w-full absolute top-0 left-0 scale-125 animate-[hero-spin_200s_linear_infinite]"
        />
        <div className="relative flex justify-center items-center app-container min-h-[80vh] bg-primary-dark/80 backdrop-blur-xl">
          <div className="w-full md:w-10/12 lg:w-9/12 rounded-xl border relative">
            <motion.div
              style={{
                translateY: smallY,
              }}
              className="size-[300px] max-sm:hidden absolute top-[-70%] md:top-[-40%] left-[-20%]"
            >
              <SpinningCube />
            </motion.div>
            <div className="relative max-md:z-[3] bg-primary-dark/10 backdrop-blur-sm p-6 border rounded-xl flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl xl:text-6xl text-transparent bg-gradient-to-t from-primary to-purple-300 font-semibold [-webkit-text-fill-color:transparent] [-webkit-background-clip:text]">
                I create visually stunning user experiences that convert clients
              </h1>
              <div className="gap-1 md:gap-3 flex max-md:flex-col md:items-center text-neutral-300">
                <h2 className="font-[500]">Abundance Ken-Dickson</h2>
                <FaDotCircle className="text-xs max-md:hidden" />
                <h2 className="text-primary underline">
                  User Experience Developer
                </h2>
              </div>
              <div className="flex gap-4">
                <Link href="/#Projects" className="btn-primary w-fit">
                  My Projects
                </Link>
                <a
                  href="/files/Abundance_Ken-Dickson_Resume.pdf"
                  download
                  target="_blank"
                  className="btn-secondary w-fit"
                >
                  <BiDownload />
                  My Resume
                </a>
              </div>
            </div>
            <motion.div
              style={{
                translateY: bigY,
              }}
              className="size-[400px] absolute bottom-[-60%] md:bottom-[-50%] right-[-40%] md:right-[-20%]"
            >
              <SpinningCube />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="h-4 bg-primary-dark/75" />
      <div className="h-4 bg-primary-dark/50" />
      <div className="h-4 bg-primary-dark/25" />
    </>
  );
}
