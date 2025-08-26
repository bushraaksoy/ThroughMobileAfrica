import React from 'react';
import aidriven from '../../assets/images/aidriven.png';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const AIDriven = () => {
    return (
        <div className="market flex gap-12 items-center justify-center text-stone-800 font-semibold max-sm:flex-col">
            <img width={500} src={aidriven} className="max-sm:w-xs" />
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-5 max-sm:items-center"
            >
                <h2 className="text-xl">AI DRIVEN TECHNOLOGY DEVELOPMENT</h2>
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                    {/* <h2>Insightful Market Analysis and Custom Research:</h2> */}
                    <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7 max-sm:ml-0">
                        <li>Conversational AI for influence and engagement</li>
                        <li> Automated Digital command centres</li>
                        <li> Ai Enhanced sentiment & Persuasion Mapping</li>
                        <li>Real-time adaptation & Influence optimization </li>
                    </ul>
                </div>
                <button className=" flex items-center justify between text-xs gap-2 text-white font-light rounded-full py-1.5 px-3 bg-linear-to-r from-brand-1 to-brand-2">
                    Learn More
                    <FaChevronRight className="" />
                </button>
            </motion.div>
        </div>
    );
};

export default AIDriven;
