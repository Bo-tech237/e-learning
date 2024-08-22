'use client';

import { File, Star, User2 } from 'lucide-react';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { MULTIDIRECTION_SLIDE_VARIANTS } from '@/constant/framerVariants';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
    course: {
        id: number;
        image: string;
        title: string;
        price: number;
        author: string;
        reviewNumber: number;
        lessons: number;
        students: number;
        category: string;
    };
};

export default function CourseCard({ course }: Props) {
    const scrollRef = useRef(null);

    return (
        <Tilt ref={scrollRef}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef, margin: '-110px' }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                transition={{ duration: 1 }}
                className="bg-white rounded-lg overflow-hidden cursor-pointer"
            >
                <div>
                    <Image
                        src={course.image}
                        alt={course.title}
                        width={400}
                        height={400}
                        className="w-full h-full"
                    />
                </div>
                <div className="p-4">
                    <h1 className="ml-auto relative z-10 h-20 w-20 flex items-center justify-center font-bold text-lg flex-col -mt-16 rounded-full bg-rose-700 text-white">
                        ${course.price}
                    </h1>

                    <div className="flex items-center mt-6 space-x-4">
                        <span className="text-lg text-black text-opacity-70 font-bold">
                            {course.category}
                        </span>
                        <span className="text-base text-gray-600">
                            {course.author}
                        </span>
                    </div>
                    <h1 className="text-xl text-black font-bold mt-2">
                        {course.title}
                    </h1>
                    <div className="flex mt-2 items-center space-x-2">
                        <div className="flex items-center">
                            <Star
                                fill="yellow"
                                className="w-4 h-4 text-yellow-300"
                            />
                            <Star
                                fill="yellow"
                                className="w-4 h-4 text-yellow-300"
                            />
                            <Star
                                fill="yellow"
                                className="w-4 h-4 text-yellow-300"
                            />
                            <Star
                                fill="yellow"
                                className="w-4 h-4 text-yellow-300"
                            />
                            <Star
                                fill="yellow"
                                className="w-4 h-4 text-yellow-300"
                            />
                        </div>
                        <span className="text-base text-orange-800 font-semibold">
                            ({course.reviewNumber} Reviews)
                        </span>
                    </div>
                    <div className="my-6 w-full h-[2px] bg-gray-500 opacity-15" />
                    <div className="flex mb-8 items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <File className="h-4 w-4 text-orange-600" />
                            <p>{course.lessons} Lessons</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User2 className="h-4 w-4 text-orange-600" />
                            <p>{course.students} Students</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Tilt>
    );
}
