import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/images/ourstory.png';
import astronauts from '../../assets/images/astronauts.png';
import Heading1 from '../ui/Heading1';

const OurStory = () => {
    return (
        <section
            id="our-story"
            className=" h-full bg-cover text-white  w-screen py-20 px-36 relative max-sm:px-4"
            style={{
                backgroundColor: '#0C0216',
            }}
        >
            <div
                className="absolute bg-cover top-0 left-0 w-full h-full opacity-30 "
                style={{
                    backgroundImage: `url(${bg})`,
                    // backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.), rgba(0, 0,0,0)), url(${bg})`,
                }}
            ></div>
            <div className="z-10 flex flex-col relative">
                <Heading1
                    first={'Our'}
                    second={'Story'}
                    style={{ color: '#ffffff' }}
                />
                <div className="flex items-center max-sm:flex-col">
                    <img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        // viewport={{ once: true }}
                        src={astronauts}
                        alt="astronauts"
                        className="w-xl max-sm:w-xs brightness-80"
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        // viewport={{ once: true }}
                        className="mb-20  max-sm:text-center font-light"
                    >
                        We are a precision driven force where technology meets
                        influence, and strategy merges with innovation, crafting
                        solutions that define outcomes. Through a fusion of AI
                        powered insights, digital mastery, and creative
                        intelligence, we transform complexity into controlled
                        narratives, ensuring our partners lead the conversation,
                        set the agenda, and shape the future.
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
