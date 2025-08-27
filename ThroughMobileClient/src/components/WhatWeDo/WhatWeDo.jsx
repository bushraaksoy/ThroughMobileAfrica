import React from 'react';

import Heading1 from '../ui/Heading1';
import CreativeExpression from './CreativeExpression';
import MarketIntelligence from './MarketIntelligence';
import AIDriven from './AIDriven';
import WhatWeDoLayout from './WhatWeDoLayout';

const WhatWeDo = () => {
    return (
        <section
            id="what-we-do"
            className="bg-[#FFFCFA] py-32 px-4 max-sm:flex max-sm:flex-col max-sm:gap-12 max-sm:px-4"
        >
            <Heading1
                first={'What'}
                second={'We DO'}
                className="text-stone-700 text-2xl text-center"
            />
            <MarketIntelligence />
            <CreativeExpression />
            <AIDriven />
        </section>
    );
};

export default WhatWeDo;
