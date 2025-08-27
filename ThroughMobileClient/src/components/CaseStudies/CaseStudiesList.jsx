import { motion } from 'framer-motion';
import { caseStudies } from '../../utils/constants';
import CaseStudyCard from './CaseStudyCard';

const CaseStudiesList = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            // viewport={{ once: true }}
            className="case-studies flex flex-wrap justify-center gap-7 overflow-x-scroll py-10 max-sm:px-5"
        >
            {caseStudies?.map((study) => {
                return <CaseStudyCard key={study.id} study={study} />;
            })}
        </motion.div>
    );
};

export default CaseStudiesList;
