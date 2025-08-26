import React from 'react';
import bg from '../../assets/images/hero.png';
import { FaAngleDown } from 'react-icons/fa';
import HeroText from './HeroText';

const Hero = () => {
    return (
        <section
            id="home"
            className="h-screen bg-cover w-screen text-white flex items-center justify-between px-36 relative bg-linear-to-b max-sm:flex-col max-sm:px-4 max-sm:justify-center"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(9, 7, 31, 1)), url(${bg})`,
            }}
        >
            <span className="max-sm:hidden"></span>
            <HeroText />
            <a
                href="/#our-story"
                className="hover:text-brand-2 absolute bottom-3 right-[50%]  flex flex-col items-center "
            >
                <span className="text-xs">Scroll Down</span>
                <FaAngleDown className="animate-bounce" size={25} />
            </a>
        </section>
    );
};

export default Hero;
