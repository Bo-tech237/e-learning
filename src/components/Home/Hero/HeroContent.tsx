'use client';

import {
    BLUR_IN,
    FADE_UP_ANIMATION_VARIANTS,
    MULTIDIRECTION_SLIDE_VARIANTS,
} from '@/constant/framerVariants';
import { Button } from '../../ui/button';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function HeroContent() {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef}>
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
            >
                Best online platform for education.
            </motion.h1>
            <motion.p
                initial="right"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="mt-6 text-white"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur, non! Tenetur omnis eum eos quisquam deleniti
                temporibus nam exercitationem
            </motion.p>
            <div className="mt-8 flex items-center space-x-4">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ root: scrollRef }}
                    transition={{ duration: 1 }}
                    variants={BLUR_IN}
                >
                    <Button className="bg-green-700 hover:bg-green-900 font-semibold md:text-lg py-1.5 px-6 md:px-12 md:py-4">
                        Get Started
                    </Button>
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ root: scrollRef }}
                    transition={{ duration: 1 }}
                    variants={BLUR_IN}
                >
                    <Button className="bg-yellow-700 hover:bg-yellow-900 font-semibold md:text-lg py-1.5 px-6 md:px-12 md:py-4">
                        Learn More
                    </Button>
                </motion.div>
            </div>
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ root: scrollRef }}
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.5,
                        },
                    },
                }}
                className="flex space-x-16 flex-wrap items-center mt-8"
            >
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                    <p className="text-white text-base font-bold md:text-xl lg:text-2xl">
                        260+
                    </p>
                    <p className="w-[100px] h-[3px] bg-green-600 my-2 rounded-lg" />
                    <p className="text-white text-sm md:text-lg text-opacity-70">
                        Tutors
                    </p>
                </motion.div>
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                    <p className="text-white text-base font-bold md:text-xl lg:text-2xl">
                        2260+
                    </p>
                    <p className="w-[100px] h-[3px] bg-blue-600 my-2 rounded-lg" />
                    <p className="text-white text-sm md:text-lg text-opacity-70">
                        Students
                    </p>
                </motion.div>
                <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                    <p className="text-white text-base font-bold md:text-xl lg:text-2xl">
                        60+
                    </p>
                    <p className="w-[100px] h-[3px] bg-pink-600 my-2 rounded-lg" />
                    <p className="text-white text-sm md:text-lg text-opacity-70">
                        Courses
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
