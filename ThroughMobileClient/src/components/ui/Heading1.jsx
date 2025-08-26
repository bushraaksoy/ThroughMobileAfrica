import React from 'react';
import { motion } from 'framer-motion';
const Heading1 = ({ first, second, className }) => {
    return (
        <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // viewport={{ once: true }}
            className={className}
        >
            <span className="font-bold">{first}</span> {second}
        </motion.h1>
    );
};

export default Heading1;
