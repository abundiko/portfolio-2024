'use client'

import { useGlobalState } from '@/state';
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi2';
import ProjectCard from '@/components/cards/ProjectCard';

export default function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { pageIndex, setPageIndex } = useGlobalState();
    const [isVisible, setIsVisible] = useState(false);
    const animateProps = useCallback((delay: number) => {
        return {
            initial: { opacity: 0, },
            animate: { opacity: pageIndex === 2 ? 1 : 0, },
            transition: {
                delay: delay * .2
            }
        }
    }, [pageIndex])
    const { scrollYProgress } = useScroll({
        // axis: "y",

        container: containerRef,
        layoutEffect: false,
        // smooth: 100

    });

    console.log(scrollYProgress.get());
    

    const topTransform = useTransform(scrollYProgress,
        [0, 1],
        [-100, 500]
    )

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(pageIndex === 2);
        }, 1600);
    }, [pageIndex])

    if (isVisible)
        return (
            <section
                ref={containerRef}
                className='fixed h-screen top-0 w-full left-0 z-10 backdrop-blur-md bg-black/30 overflow-y-auto overflow-x-hidden'>
                <button
                    onClick={() => {
                        setPageIndex(1)
                    }}
                    className="sticky z-30 top-4 left-4 text-lg text-neutral-400">
                    <HiArrowLeft />

                </button>
                <div className="flex justify-center">
                    <div className="w-full md:w-10/12 pt-16 md:pt-24 xl:pt-40 flex flex-col gap-6 items-center px-8 md:px-[10vw] ">
                        <motion.h2
                            {...animateProps(pageIndex == 2 ? 4 : 2)}
                            className="font-bold text-white text-4xl md:text-6xl font-bauserif text-center">Our Projects</motion.h2>
                        <motion.p
                            {...animateProps(pageIndex == 2 ? 3 : 3)}
                            className="text-neutral-200 leading-[1.5] text-center font-[600]  md:text-lg">
                            olorum? Ipsa hic quaerat dolorem laboriosam fuga porro sapiente consequatur, ullam, doloribus perferendis quasi iste velit provident vel sunt nemo.
                        </motion.p>
                        <motion.div
                            {...animateProps(pageIndex == 2 ? 2 : 4)} className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                            {
                                [1, 2, 3, 4, 5, 6].map((num, i) => (
                                    <ProjectCard key={i} />
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    style={{
                        translateY: topTransform,
                        // transition: "all 0s"
                    }}
                    {...animateProps(4)} className="rounded-full w-[500px] bg-blue-300/60 aspect-square fixed -right-40 -bottom-40 blur-[50px]"></motion.div>
                <motion.div
                    style={{
                        translateY: topTransform,
                        // transition: "all 0s"
                    }}
                    {...animateProps(4)} className="rounded-full w-[500px] bg-green-300/60 aspect-square fixed right-10 -bottom-80 blur-[50px]"></motion.div>

                <motion.div
                    style={{
                        translateY: topTransform,
                        // transition: "all 0s"
                    }}
                    {...animateProps(4)} className="rounded-full w-[500px] bg-blue-300/60 aspect-square fixed z-[1] -left-40 -bottom-40 blur-[50px]"></motion.div>
                <motion.div
                    style={{
                        translateY: topTransform,
                        // transition: "all 0s"
                    }}
                    {...animateProps(4)} className="rounded-full w-[500px] bg-green-300/60 aspect-square fixed z-[1] left-10 -bottom-80 blur-[50px]"></motion.div>
            </section>
        )
}
