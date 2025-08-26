import React from 'react';
import { motion } from 'framer-motion';
import womanImg from '../../assets/images/creativeexpression.png';
import { FaChevronRight } from 'react-icons/fa';

const CreativeExpression = () => {
    return (
        <div className="creative flex gap-10 items-center justify-center text-stone-800 font-semibold max-md:flex-col">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start gap-5 "
            >
                <div>
                    <h2>
                        CREATIVE EXPRESSION
                        <span className="block text-sm">[STORY ALCHEMIST]</span>
                    </h2>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <h2>Brand Development & Emotional Engagement:</h2>
                        <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7 max-sm:ml-0">
                            <li>Emotionally resonant Digital storytelling</li>
                            <li>Strategic narrative deployment </li>
                            <li>
                                Micro-targeted content & Engagement Engineering
                            </li>
                            <li>Ai-Optimized Brand and influence expansion.</li>
                        </ul>
                    </div>
                    <button className=" flex items-center justify between text-xs gap-2 text-white font-light rounded-full py-1.5 px-3 bg-linear-to-r from-brand-1 to-brand-2">
                        Learn More
                        <FaChevronRight className="" />
                    </button>
                </div>
            </motion.div>
            <img width={550} className="max-sm:w-xs" src={womanImg} />
        </div>
    );
};

export default CreativeExpression;
