'use client'

import { motion } from 'framer-motion';
import HeroScene from '@/components/3d/HeroScene'
import { useGlobalState } from '@/state/globalState';
import { useCallback, useEffect, useState } from 'react';


export default function Hero() {
    const { pageIndex, setPageIndex } = useGlobalState();
    const [isVisible, setIsVisible] = useState(true);
    const animateProps = useCallback((delay: number) => {
        return {
            initial: { opacity: 0, },
            animate: { opacity: pageIndex === 0 ? 1 : 0, },
            transition: {
                delay: delay * .2
            }
        }
    }, [pageIndex])

    useEffect(()=>{
        setTimeout(() => {
            setIsVisible(pageIndex === 0);
        }, 1600);
    }, [pageIndex])


    return (
        <motion.section className="h-screen w-full fixed">
            <HeroScene />
           {isVisible && <motion.div
                {...animateProps(pageIndex == 0 ? 0 : 5)}
                className="absolute gap-y-3 border border-blue-500 bg-blue-800/30 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col p-10 w-11/12 md:w-[70%] lg:w-[50%] backdrop-blur-lg">
                <motion.h2
                    {...animateProps(4)}
                    className="text-blue-300 font-semibold">Bad Decision Developers</motion.h2>
                <motion.h1
                    {...animateProps(3)}
                    className="font-semibold text-6xl font-bauserif">We Build Cool Shit</motion.h1>
                <motion.p
                    {...animateProps(2)}
                    className="text-neutral-400">
                    Don't mind our name, that was prolly one of the many bad decisions we made.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit reprehenderit,
                    necessitatibus et cum illo dolores. Perferendis natus ipsum vel eum dolore,
                    eaque corporis saepe distinctio aut debitis nobis assumenda consequuntur.</motion.p>
                <motion.button
                    {...animateProps(1)}
                    onClick={() => setPageIndex(1)}
                    className="rounded-lg bg-blue-200 text-blue-900 px-8 py-2 w-fit">Take me on a tour</motion.button>
            </motion.div>}
        </motion.section>
    )
}
