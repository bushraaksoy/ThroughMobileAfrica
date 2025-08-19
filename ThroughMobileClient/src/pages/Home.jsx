import React from 'react';
import Hero from '../components/Hero/Hero';
import OurStory from '../components/OurStory/OurStory';
import OurFootprints from '../components/OurFootprints/OurFootprints';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Partners from '../components/Partners/Partners';
import CaseStudies from '../components/CaseStudies/CaseStudies';
import WhyUs from '../components/WhyUs/WhyUs';

const Home = () => {
    return (
        <div className="h-full">
            <Hero />
            <OurStory />
            <OurFootprints />
            <WhatWeDo />
            <Partners />
            <CaseStudies />
            <WhyUs />
        </div>
    );
};

export default Home;
