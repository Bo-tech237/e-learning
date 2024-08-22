'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { BLUR_IN } from '@/constant/framerVariants';
import { motion } from 'framer-motion';

export default function FeatureImage() {
    const scrollRef = useRef(null);

    return (
        <Tilt ref={scrollRef}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                transition={{ duration: 1 }}
                variants={BLUR_IN}
            >
                <Image
                    src={'/images/f.png'}
                    width={1000}
                    height={1000}
                    alt="image"
                />
            </motion.div>
        </Tilt>
    );
}
