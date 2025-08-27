import { motion } from 'framer-motion';
import map from '../../assets/images/footprint.png';

const FootprintText = () => {
    return (
        <div className="flex justify-center gap-20 p-10 items-center max-sm:flex-col max-sm:p-5">
            <img src={map} alt="map" width="240px" />
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                // viewport={{ once: true }}
                className="flex flex-col gap-5 text-black text-sm w-[450px] text-start max-sm:w-full"
            >
                <p>
                    From Tanzania to Kenya to Morocco, South Sudan to South
                    Africa, Through Mobile Africa has delivered impact in over
                    12 countries.
                </p>
                <p>
                    We’ve co-created civic tools, youth campaigns, and digital
                    platforms tailored to local realities driving transformation
                    across the continent through digital-first innovation.
                </p>
            </motion.div>
        </div>
    );
};

export default FootprintText;
