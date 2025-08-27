import React from 'react';
import { motion } from 'framer-motion';
import Heading1 from '../ui/Heading1';
import partners1 from '../../assets/images/partners1.png';
import partners2 from '../../assets/images/partners2.png';
import partners3 from '../../assets/images/partners3.png';

const Partners = () => {
    return (
        <section className="p-25 max-sm:px-4" id="our-partners">
            <div className=" rounded-[54px] bg-linear-to-r from-brand-1 to-brand-2 p-1">
                <div className="rounded-[50px] bg-white p-10">
                    <Heading1
                        first={'Our'}
                        second={'Partners'}
                        className={'text-center text-2xl text-stone-700'}
                    />
                    <div className="p-5 flex flex-col items-center gap-5">
                        <img
                            src={partners1}
                            alt=""
                            width={600}
                            className="max-sm:w-xs"
                        />
                        {/* TODO: change the images into broken down individual images */}
                        <img
                            src={partners2}
                            alt=""
                            width={800}
                            className="max-sm:w-xs"
                        />
                        <img
                            src={partners3}
                            alt=""
                            width={600}
                            className="max-sm:w-xs"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
