'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Award } from 'lucide-react';
import Link from 'next/link';
import { MULTIDIRECTION_SLIDE_VARIANTS } from '@/constant/framerVariants';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
    const scrollRef = useRef(null);
    return (
        <div ref={scrollRef} className="py-16">
            <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ root: scrollRef }}
                    variants={MULTIDIRECTION_SLIDE_VARIANTS}
                    transition={{ duration: 1 }}
                >
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
                            <Award className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-xl font-semibold">
                            Guaranteed and certified
                        </h1>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800">
                        Online learning wherever and whenever.
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Cupiditate non repellendus aliquam, dicta
                        blanditiis voluptatum autem error culpa inventore.
                    </p>
                    <Button className="mt-8 rounded-full px-7 py-6" asChild>
                        <Link
                            className="flex items-center space-x-2 font-bold text-xl"
                            href={'#'}
                        >
                            <span>Learn More</span>
                            <ArrowRight size={20} />
                        </Link>
                    </Button>
                </motion.div>
                <div>
                    <motion.div
                        initial="right"
                        whileInView="visible"
                        viewport={{ root: scrollRef }}
                        variants={MULTIDIRECTION_SLIDE_VARIANTS}
                        transition={{ duration: 1.5 }}
                    >
                        <h1 className="text-7xl lg:text-9xl text-black font-bold text-opacity-5">
                            01
                        </h1>
                        <div className="-mt-10">
                            <h1 className="text-xl md:text-2xl text-black mb-3 font-bold text-opacity-70">
                                Flexible schedule
                            </h1>
                            <p className="w-[90%] lg:w-[70%] text-black text-base text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit Lorem ipsum dolor sit amet.
                                Temporibus, similique?
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="right"
                        whileInView="visible"
                        viewport={{ root: scrollRef }}
                        variants={MULTIDIRECTION_SLIDE_VARIANTS}
                        transition={{ duration: 2 }}
                        className="mt-8"
                    >
                        <h1 className="text-7xl lg:text-9xl text-black font-bold text-opacity-5">
                            02
                        </h1>
                        <div className="-mt-10">
                            <h1 className="text-xl md:text-2xl text-black mb-3 font-bold text-opacity-70">
                                Pocket Friendly
                            </h1>
                            <p className="w-[90%] lg:w-[70%] text-black text-base text-opacity-60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit Lorem ipsum dolor sit amet.
                                Temporibus, similique?
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
