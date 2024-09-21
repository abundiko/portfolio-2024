'use client'

import { useGlobalState } from '@/state';
import React, { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowLeft } from 'react-icons/hi2';

export default function AboutUs() {
    const { pageIndex, setPageIndex } = useGlobalState();
    const [isVisible, setIsVisible] = useState(false);
    const animateProps = useCallback((delay: number) => {
        return {
            initial: { opacity: 0, },
            animate: { opacity: pageIndex === 1 ? 1 : 0, },
            transition: {
                delay: delay * .2
            }
        }
    }, [pageIndex])

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(pageIndex === 1);
        }, 1600);
    }, [pageIndex])

    if (isVisible)
        return (
            <section className='fixed top-0 h-full w-full left-0 z-10'>
                <button
                    onClick={() => {
                        setPageIndex(0)
                    }}
                    className="absolute top-4 left-4 text-lg z-10 text-white">
                    <HiArrowLeft />

                </button>
                <div className="flex justify-end relative z-[2]">
                    <div className="w-[70%] pt-16 md:pt-40 flex flex-col gap-6 items-end px-[10vw]">
                        <motion.h2
                            {...animateProps(2)}
                            className="font-bold text-blue-950 text-3xl md:text-6xl font-bauserif">What We Do?</motion.h2>
                        <motion.p
                            {...animateProps(3)}
                            className="text-neutral-800 leading-[1.5] text-right font-[600] text-lg">
                            Why would you even ask that?...

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, aperiam dolorum? Ipsa hic quaerat dolorem laboriosam fuga porro sapiente consequatur, ullam, doloribus perferendis quasi iste velit provident vel sunt nemo.
                        </motion.p>
                        <motion.button
                    {...animateProps(4)}
                    onClick={() => setPageIndex(2)}
                    className="rounded-lg bg-blue-900 text-blue-200 px-8 py-2 w-fit">See Our Projects</motion.button>
                    </div>
                </div>
                <motion.div {...animateProps(0)} className="rounded-full w-[500px] bg-red-300/60 aspect-square absolute z-[1] -right-40 -bottom-40 blur-[50px]"></motion.div>
                <motion.div {...animateProps(0)} className="rounded-full w-[500px] bg-green-300/60 aspect-square absolute z-[1] right-10 -bottom-80 blur-[50px]"></motion.div>
            </section>
        )
}
