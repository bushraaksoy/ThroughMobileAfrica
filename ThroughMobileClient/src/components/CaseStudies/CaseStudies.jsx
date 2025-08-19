import React from 'react';
import Heading1 from '../ui/Heading1';
import { caseStudies } from '../../utils/constants';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    return (
        <section className="p-25" id="our-clients">
            <Heading1
                first={'Case'}
                second={'Studies'}
                className="text-2xl text-stone-700 text-center"
            />
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="case-studies flex justify-center gap-7 overflow-x-scroll py-10"
            >
                {caseStudies?.map((study) => {
                    return <CaseStudyCard key={study.id} study={study} />;
                })}
            </motion.div>
        </section>
    );
};

export default CaseStudies;

const CaseStudyCard = ({ study }) => {
    return (
        <div className="rounded-[35px] w-80 h-[400px] border border-brand-4 flex flex-col backdrop-blur-md overflow-hidden shadow-lg">
            <img
                src={study?.thumbnail}
                alt="Case Study Image"
                className="w-full h-[250px] object-cover "
            />
            <div className="px-2 pt-2 pb-5 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-sm font-semibold text-stone-800">
                        {study?.title}
                    </h2>
                    <p className="text-[11px] text-stone-700">
                        {study?.description}
                    </p>
                </div>
                <button className=" mt-auto ml-auto py-1 px-3 text-xs rounded-full bg-brand-4 text-white">
                    View Study
                </button>
            </div>
        </div>
    );
};
