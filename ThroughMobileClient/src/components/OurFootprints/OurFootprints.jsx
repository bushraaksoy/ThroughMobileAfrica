import React from 'react';
import Heading1 from '../ui/Heading1';
import FootprintText from './FootprintText';

const OurFootprints = () => {
    return (
        <section
            id="our-footprints"
            className=" bg-cover text-white p-12 text-center max-sm:h-full max-sm:px-4 "
        >
            <Heading1
                first={'Out'}
                second={'Footprint'}
                className="text-stone-700 text-2xl"
            />
            <FootprintText />
        </section>
    );
};

export default OurFootprints;
