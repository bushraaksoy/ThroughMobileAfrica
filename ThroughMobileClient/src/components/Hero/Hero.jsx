import React from 'react';
import bg from '../../assets/images/hero.png';
import { motion } from 'framer-motion';

import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <section
            id="home"
            className="h-dvh bg-cover text-white flex items-center justify-between container px-36 relative"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <span></span>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hero-text w-sm flex flex-col items-start gap-5"
            >
                <div>
                    <h1 className="text-3xl">Engineering Influence</h1>
                    <h2 className="text-xl font-medium">
                        Crafting Unstopable Narratives
                    </h2>
                </div>
                <div className="text-xs">
                    Through Mobile Africa is a powerhouse of strategic digital
                    influence, creative mastery, and behavioural intelligence
                </div>
                <button className="gap-2 bg-linear-to-r from-brand-1 to-brand-2 border border-brand-3 py-1.5 px-8 text-sm rounded-full">
                    Book a Consult
                </button>
            </motion.div>
            <a
                href="#our-story"
                className="absolute bottom-3 right-[50%]  flex flex-col items-center hover:text-brand-2"
            >
                <span className="text-xs">Scroll Down</span>
                <FaAngleDown className="animate-bounce" size={25} />
            </a>
        </section>
    );
    // return <div className="bg-[url(../../assets/images/hero.png)]">hero</div>;
};

export default Hero;
