import aidriven from '../../assets/images/aidriven.png';
import WhatWeDoLayout from './WhatWeDoLayout';

const AIDriven = () => {
    const content = {
        image: aidriven,
        title: 'AI DRIVEN TECHNOLOGY DEVELOPMENT',
        subtitle: '',
        points: [
            'Conversational AI for influence and engagement',
            'Automated Digital command centres',
            'AI Enhanced sentiment & Persuasion Mapping',
            'Real-time adaptation & Influence optimization',
        ],
    };

    return <WhatWeDoLayout {...content} />;
};

export default AIDriven;
