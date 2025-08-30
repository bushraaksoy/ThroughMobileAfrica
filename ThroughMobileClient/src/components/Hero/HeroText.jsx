import { motion } from 'framer-motion';

const HeroText = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-text w-sm flex flex-col items-start font-light gap-5 max-sm:w-full max-sm:items-center"
        >
            <div className="max-sm:text-center">
                <h1 className="text-3xl">Engineering Influence</h1>
                <h2 className="text-xl font-medium">
                    Crafting Unstopable Narratives
                </h2>
            </div>
            <div className="text-sm max-sm:text-sm max-sm:text-center">
                Through Mobile Africa is a powerhouse of strategic digital
                influence, creative mastery, and behavioural intelligence
            </div>
            <button className=" hidden gap-2 bg-linear-to-r from-brand-1 to-brand-2 border border-brand-3 py-1.5 px-8 text-sm rounded-full">
                Book a Consult
            </button>
        </motion.div>
    );
};

export default HeroText;
