'use client';
import { MULTIDIRECTION_SLIDE_VARIANTS } from '@/constant/framerVariants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';

export default function HeroImage() {
    const scrollRef = useRef(null);
    return (
        <Tilt ref={scrollRef}>
            <motion.div
                initial="right"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="hidden lg:block overflow-hidden"
            >
                <Image
                    src={'/images/hero.png'}
                    width={800}
                    height={600}
                    alt="hero"
                />
            </motion.div>
        </Tilt>
    );
}
