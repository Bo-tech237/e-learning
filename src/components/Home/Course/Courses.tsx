import { coursesData } from '@/data/data';
import Image from 'next/image';
import React from 'react';
import CourseCard from './CourseCard';

export default function Courses() {
    return (
        <div className="pt-16 pb-12 relative bg-gray-200">
            {/* bounce ball */}
            <Image
                src={'/images/cb.png'}
                width={800}
                height={800}
                alt="image"
                className="absolute top-[30%] animate-bounce"
            />
            <div className="w-[80%] py-8 mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Popular Courses
                </h1>
                <div className="mt-10 md:mt-16 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {coursesData.map((course) => {
                        return (
                            <div key={course.id}>
                                <CourseCard course={course} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
