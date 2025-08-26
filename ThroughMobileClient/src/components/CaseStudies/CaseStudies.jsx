import Heading1 from '../ui/Heading1';
import CaseStudiesList from './CaseStudiesList';

const CaseStudies = () => {
    return (
        <section className="p-25 max-sm:px-4" id="our-clients">
            <Heading1
                first={'Case'}
                second={'Studies'}
                className="text-2xl text-stone-700 text-center"
            />
            <CaseStudiesList />
        </section>
    );
};

export default CaseStudies;
