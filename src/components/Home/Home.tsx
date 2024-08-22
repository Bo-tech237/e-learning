import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Courses from './Course/Courses';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import Article from './Article/Article';

export default function Home() {
    return (
        <div className="overflow-clip">
            <Hero />
            <About />
            <Courses />
            <Feature />
            <Review />
            <Article />
        </div>
    );
}
