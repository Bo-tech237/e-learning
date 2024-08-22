import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type Props = { name: string; image: string; role: string };

export default function SliderCard({ image, name, role }: Props) {
    return (
        <div className="flex flex-wrap sm:flex-nowrap items-center space-x-10">
            <div className="h-full w-full">
                <Image
                    src={image}
                    alt="image"
                    width={350}
                    height={350}
                    className="w-full h-full"
                />
            </div>
            <div className="mt-6 mb-7">
                <div className="flex items-center">
                    <Star
                        fill="yellow"
                        className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-300"
                    />
                    <Star
                        fill="yellow"
                        className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-300"
                    />
                    <Star
                        fill="yellow"
                        className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-300"
                    />
                    <Star
                        fill="yellow"
                        className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-300"
                    />
                    <Star
                        fill="yellow"
                        className="xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-300"
                    />
                </div>
                <p className="mt-6 text-gray-800 w-[95%] md:w-4/5 text-xs md:text-sm lg:text-base font-bold text-opacity-65">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Inventore modi distinctio deserunt voluptates esse dicta
                    officia earum. Nisi, tempora officia iure cupiditate rerum
                    veritatis minima?
                </p>
                <div className="mt-7">
                    <h1 className="text-xl text-black font-semibold">{name}</h1>
                    <p className="text-lg text-black text-opacity-60">{role}</p>
                </div>
            </div>
        </div>
    );
}
