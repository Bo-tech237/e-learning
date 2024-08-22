'use client';

import { Briefcase } from 'lucide-react';
import React, { useRef } from 'react';
import { MULTIDIRECTION_SLIDE_VARIANTS } from '@/constant/framerVariants';
import { motion } from 'framer-motion';

export default function FeatureContent() {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef}>
            <motion.div
                initial="right"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
            >
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                        <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <h1 className="text-xl font-semibold">
                        Premium learning experience
                    </h1>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
                    Providing amazing online courses.
                </h1>
                <div className="mt-8">
                    <h1 className="text-lg md:text-2xl text-black mb-3 font-semibold text-opacity-70">
                        Master the skills that matter to you
                    </h1>
                    <p className="text-sm text-black md:text-base text-opacity-60 mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Placeat, adipisci? Perferendis a non totam laborum
                        modi placeat eum iusto quam.
                    </p>
                </div>
                <div className="mt-8">
                    <h1 className="text-xl md:text-2xl text-black mb-3 font-semibold text-opacity-70">
                        Increase your learning skills
                    </h1>
                    <p className="text-sm text-black md:text-base text-opacity-60 mt-4">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Placeat, adipisci? Perferendis a non totam laborum
                        modi placeat eum iusto quam.
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
