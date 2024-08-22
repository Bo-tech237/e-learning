'use client';

import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import {
    BLUR_IN,
    MULTIDIRECTION_SLIDE_VARIANTS,
} from '@/constant/framerVariants';
import { motion } from 'framer-motion';
import { useRef } from 'react';

type Props = {
    article: {
        id: number;
        userImage: string;
        username: string;
        reaction: number;
        coverImage: string;
        title: string;
    };
};

export default function ArticleCard({ article }: Props) {
    const scrollRef = useRef(null);

    return (
        <div ref={scrollRef}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ root: scrollRef }}
                transition={{ duration: 1 }}
                variants={MULTIDIRECTION_SLIDE_VARIANTS}
                className="bg-white rounded-lg overflow-hidden"
            >
                <Image
                    src={article.coverImage}
                    alt={article.title}
                    width={300}
                    height={300}
                    className="w-full h-full"
                />
                <div className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={article.userImage}
                                alt={article.username}
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <p className="text-base text-black text-opacity-70">
                                {article.username}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Heart className="text-red-600" />
                            <p className="text-sm text-gray-800">
                                {article.reaction}
                            </p>
                        </div>
                    </div>
                    <h1 className="my-4 text-xl font-semibold">
                        {article.title}
                    </h1>
                    <p className="text-base text-gray-700">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quo
                    </p>
                    <Button
                        variant={'link'}
                        className="mt-4 mb-3 hover:text-green-600 text-black underline"
                    >
                        Learn More
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
