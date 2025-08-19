import React from 'react';
import { motion } from 'framer-motion';
import bg from '../../assets/images/ourstory.png';
import astronauts from '../../assets/images/astronauts.png';
import Heading1 from '../ui/Heading1';

const OurStory = () => {
    return (
        <section
            id="our-story"
            className=" h-dvh text-white w-screen container py-8 px-36 relative"
            style={{
                backgroundColor: '#0C0216',
            }}
            x
        >
            <div
                className="absolute top-0 left-0 w-full h-full opacity-40"
                style={{
                    backgroundImage: `url(${bg})`,
                }}
            ></div>
            <div className="z-10 flex flex-col relative">
                <Heading1
                    first={'Our'}
                    second={'Story'}
                    className="text-3xl text-center mt-15"
                />
                <div className="flex items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        src={astronauts}
                        alt="astronauts"
                        className="w-xl "
                    />
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm mb-20"
                    >
                        We are a precision-driven force where technology meets
                        influence, and strategy merges with innovation, crafting
                        solutions that define outcomes. Through a fusion of
                        AI-powered insights, digital mastery, and creative
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
