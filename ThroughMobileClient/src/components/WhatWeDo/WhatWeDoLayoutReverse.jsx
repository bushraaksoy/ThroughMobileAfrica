import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

const WhatWeDoLayoutReverse = ({ image, title, subtitle, points }) => {
    return (
        <div className="market flex gap-12 items-center justify-center text-stone-800 font-semibold max-sm:flex-col">
            <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col items-start gap-5 "
            >
                <h2 className="text-xl uppercase">{title}</h2>
                <div className="max-sm:flex max-sm:flex-col max-sm:items-center">
                    {subtitle && <h2>{subtitle}</h2>}
                    <ul className="text-xs list-disc marker:text-brand-3 marker:text-3xl mt-3 ml-7 max-sm:ml-0">
                        {points.map((point, inx) => {
                            return <li key={inx}>{point}</li>;
                        })}
                    </ul>
                </div>
                <button className=" flex items-center justify between text-xs gap-2 text-white font-light rounded-full py-1.5 px-3 bg-linear-to-r from-brand-1 to-brand-2">
                    Learn More
                    <FaChevronRight className="" />
                </button>
            </motion.div>
            <img width={500} src={image} className="max-sm:w-xs" />
        </div>
    );
};

export default WhatWeDoLayoutReverse;
