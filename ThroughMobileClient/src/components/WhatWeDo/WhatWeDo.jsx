import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

import meltingImg from '../../assets/images/whatwedo.png';
import womanImg from '../../assets/images/creativeexpression.png';
import aidriven from '../../assets/images/aidriven.png';
import Heading1 from '../ui/Heading1';

const WhatWeDo = () => {
    return (
        <section id="what-we-do" className="bg-[#FFFCFA] py-32">
            <Heading1
                first={'What'}
                second={'We DO'}
                className="text-stone-700 text-2xl text-center"
            />
            <MarketIntelligence />
            <CreativeExpression />
            <AIDriven />
        </section>
    );
};

export default WhatWeDo;

const MarketIntelligence = () => {
    return (
        <div className="market flex gap-12 items-center justify-center text-stone-800 font-semibold">
            <img width={500} src={meltingImg} alt="" />
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-5"
            >
                <h2 className="">
                    MARKET INTELLIGENCE & INSIGHT{' '}
                    <span className="block text-sm">[DATA WHISPER]</span>{' '}
                </h2>
                <div>
                    <h2>Insightful Market Analysis and Custom Research:</h2>
                    <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7">
                        <li>Deep Narrative Analytics & Behavioural Research</li>
                        <li>AI-Driven Sentiment & Perception Mapping</li>
                        <li>Misinformation Monitoring & Crisis Anticipation</li>
                        <li>
                            Trend Forecasting & Predictive Influence Modelling
                        </li>
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

const CreativeExpression = () => {
    return (
        <div className="creative flex gap-10 items-center justify-center text-stone-800 font-semibold">
            <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-5"
            >
                <h2>
                    MCREATIVE EXPRESSION{' '}
                    <span className="block text-sm">[STORY ALCHEMIST]</span>
                </h2>
                <div>
                    <h2>Brand Development & Emotional Engagement:</h2>
                    <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7">
                        <li>Emotionally resonant Digital storytelling</li>
                        <li>Strategic narrative deployment </li>
                        <li>Micro-targeted content & Engagement Engineering</li>
                        <li> Ai-Optimized Brand and influence expansion.</li>
                    </ul>
                </div>
                <button className=" flex items-center justify between text-xs gap-2 text-white font-light rounded-full py-1.5 px-3 bg-linear-to-r from-brand-1 to-brand-2">
                    Learn More
                    <FaChevronRight className="" />
                </button>
            </motion.div>
            <img width={550} src={womanImg} alt="" />
        </div>
    );
};

const AIDriven = () => {
    return (
        <div className="market flex gap-12 items-center justify-center text-stone-800 font-semibold">
            <img width={500} src={aidriven} alt="" />
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-5"
            >
                <h2 className="text-xl">AI DRIVEN TECHNOLOGY DEVELOPMENT</h2>
                <div>
                    {/* <h2>Insightful Market Analysis and Custom Research:</h2> */}
                    <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7">
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
