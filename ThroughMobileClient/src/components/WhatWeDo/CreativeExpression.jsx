import womanImg from '../../assets/images/creativeexpression.png';
import WhatWeDoLayout from './WhatWeDoLayout';
import WhatWeDoLayoutReverse from './WhatWeDoLayoutReverse';

const CreativeExpression = () => {
    const content = {
        image: womanImg,
        title: (
            <>
                CREATIVE EXPRESSION
                <div className="text-sm">[STORY ALCHEMIST]</div>
            </>
        ),
        subtitle: 'Brand Development & Emotional Engagement',
        points: [
            'Emotionally resonant Digital storytelling',
            'Strategic narrative deployment',
            'Micro-targeted content & Engagement Engineering',
            'Ai-Optimized Brand and influence expansion.',
        ],
    };

    return (
        <>
            <div className="md:hidden">
                <WhatWeDoLayout {...content} />
            </div>
            <div className="hidden md:block">
                <WhatWeDoLayoutReverse {...content} />
            </div>
        </>
    );
};

export default CreativeExpression;
