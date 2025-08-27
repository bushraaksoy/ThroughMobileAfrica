import Heading1 from '../ui/Heading1';
import bot from '../../assets/images/bot.png';
import { motion } from 'framer-motion';

const WhyUs = () => {
    return (
        <section className="p-20 max-sm:px-4 max-sm:py-2" id="why-us">
            <div className="px-10 py-20 flex justify-between items-center gap-10 border-2 border-brand-2 rounded-4xl max-sm:flex-col max-sm:px-4">
                <motion.img
                    className="w-[215px]"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    // viewport={{ once: true }}
                    src={bot}
                    alt="bot"
                />
                <div className="flex flex-col justify-between text-center gap-10">
                    <Heading1 first={'Why Work'} second={'With Us?'} />

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-sm text-stone-800"
                    >
                        Through Mobile Africa is the driving force behind
                        transformative digital influence, merging cutting-edge
                        technology, behavioral intelligence, and creative
                        execution to shape perceptions, engineer engagement, and
                        control narratives in high impact environments.
                    </motion.p>
                    <button className=" text-white shadow-md shadow-stone-500 py-1.5 px-3 rounded-full bg-gradient-to-r from-brand-1 to-brand-2">
                        Reach Out To Us
                    </button>
                </div>
                <motion.img
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    // viewport={{ once: true }}
                    src={bot}
                    alt="bot"
                    className="transform scale-x-[-1] w-[215px] max-sm:hidden"
                />
            </div>
        </section>
    );
};

export default WhyUs;
