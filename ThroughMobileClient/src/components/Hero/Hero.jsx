import React from 'react';
import bg from '../../assets/images/hero.png';
import { FaAngleDown } from 'react-icons/fa';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen bg-cover w-screen text-white font-semibold flex items-center justify-between px-36 relative bg-linear-to-b max-sm:flex-col max-sm:px-4 max-sm:justify-center"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(9, 7, 31, 1)), url(${bg})`,
            }}
        >
            <span className="max-sm:hidden"></span>
            <HeroText />
            <a
                href="/#our-story"
                className="text-muted-foreground hover:text-brand-2  absolute bottom-3 right-1/2  flex flex-col items-center  max-sm:right-[40%] max-sm:bottom-30 "
            >
                <span className="text-xs hover:text-brand-2">Scroll Down</span>
                <FaAngleDown
                    className="animate-bounce hover:text-brand-2"
                    size={25}
                />
            </a>
        </section>
    );
};

export default Hero;
