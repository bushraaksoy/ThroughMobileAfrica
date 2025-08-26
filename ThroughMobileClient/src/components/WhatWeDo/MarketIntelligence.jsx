import React from 'react';
import { motion } from 'framer-motion';
import meltingImg from '../../assets/images/whatwedo.png';
import { FaChevronRight } from 'react-icons/fa';

const MarketIntelligence = () => {
    return (
        <div className="market flex gap-12 items-center justify-center text-stone-800 font-semibold max-md:flex-col ">
            <img width={500} className="max-sm:w-xs" src={meltingImg} alt="" />
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-start gap-5 "
            >
                <div>
                    <h2 className="">
                        MARKET INTELLIGENCE & INSIGHT
                        <span className="block text-sm">[DATA WHISPER]</span>
                    </h2>
                    <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                        <h2>Insightful Market Analysis and Custom Research:</h2>
                        <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7 max-sm:ml-0">
                            <li>
                                Deep Narrative Analytics & Behavioural Research
                            </li>
                            <li>AI-Driven Sentiment & Perception Mapping</li>
                            <li>
                                Misinformation Monitoring & Crisis Anticipation
                            </li>
                            <li>
                                Trend Forecasting & Predictive Influence
                                Modelling
                            </li>
                        </ul>
                    </div>
                    <button className=" flex items-center justify between text-xs gap-2 text-white font-light rounded-full py-1.5 px-3 bg-linear-to-r from-brand-1 to-brand-2">
                        Learn More
                        <FaChevronRight className="" />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default MarketIntelligence;
