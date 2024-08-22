'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1324 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1324, min: 764 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

export default function Slider() {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows={true}
            responsive={responsive}
            infinite={true}
            centerMode={false}
            autoPlay={true}
            autoPlaySpeed={5000}
            itemClass="carousel-item"
        >
            <SliderCard
                image="/images/r1.jpg"
                name="Jessica Doe"
                role="Web developer"
            />
            <SliderCard
                image="/images/r2.jpg"
                name="John Doe"
                role="Next JS developer"
            />
            <SliderCard
                image="/images/r3.jpg"
                name="Jonas Doe"
                role="Mern developer"
            />
        </Carousel>
    );
}
