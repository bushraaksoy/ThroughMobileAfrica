import meltingImg from '../../assets/images/whatwedo.png';
import WhatWeDoLayout from './WhatWeDoLayout';

const MarketIntelligence = () => {
    const content = {
        image: meltingImg,
        title: (
            <>
                MARKET INTELLIGENCE & INSIGHT
                <div className="text-sm">[DATA WHISPER]</div>
            </>
        ),
        subtitle: 'Deep Narrative Analytics & Behavioural Research',
        points: [
            'Deep Narrative Analytics & Behavioural Research',
            'AI-Driven Sentiment & Perception Mapping',
            'Misinformation Monitoring & Crisis Anticipation',
            'Trend Forecasting & Predictive Influence Modelling',
        ],
    };

    return <WhatWeDoLayout {...content} />;
};

export default MarketIntelligence;
