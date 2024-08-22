import Image from 'next/image';
import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa6';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Footer() {
    return (
        <div className="pt-20 pb-12 bg-black">
            <div className="w-4/5 mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20">
                {/* first apart */}
                <div className="">
                    <Image
                        src={'/images/logo.png'}
                        alt="Logo"
                        height={100}
                        width={100}
                    />
                    <p className="text-white text-opacity-50">
                        Lorem ipsum dolor sit amet consectetur Lorem, ipsum.
                    </p>
                    <div className="flex items-center space-x-4 mt-6">
                        <FaFacebookF className="w-6 h-6 text-blue-600" />
                        <FaTwitter className="w-6 h-6 text-sky-500" />
                        <FaYoutube className="w-6 h-6 text-red-700" />
                        <FaInstagram className="w-6 h-6 text-pink-600" />
                    </div>
                </div>
                {/* second part */}
                <div>
                    <h1 className="text-lg text-white font-bold mb-4">
                        Popular
                    </h1>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Web development
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Hacking
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        UI/UX Design
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        App Development
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Desktop Development
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Digital Marketing
                    </p>
                </div>
                {/* third part */}
                <div>
                    <h1 className="text-lg text-white font-bold mb-4">
                        Quick Link
                    </h1>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Home
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        About
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Courses
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Instructor
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Profile
                    </p>
                    <p className="text-sm text-white hover:text-green-700 cursor-pointer text-opacity-60 mb-3 w-fit">
                        Privacy Police
                    </p>
                </div>
                {/* fourth part */}
                <div className="">
                    <h1 className="text-lg text-white font-bold mb-4">
                        Subscribe our Newsletter
                    </h1>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-gray-400 text-white"
                    />
                    <Button className="w-full bg-rose-700 mt-4 hover:bg-rose-900 text-white">
                        Subscribe
                    </Button>
                </div>
            </div>
            <p className="text-center mt-4 text-base text-white opacity-70">
                ©Copyright 2024 by webdev warriors
            </p>
        </div>
    );
}
