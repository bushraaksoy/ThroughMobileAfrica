import React from 'react';

const QuickLinks = () => {
    return (
        <div>
            <h2 className="text-brand-2 mb-2 text-sm">QUICK LINKS</h2>
            <div className="flex flex-col">
                <a href="#">Home</a>
                <a href="/#our-story">Our Story</a>
                <a href="/#what-we-do">What We Do</a>
                <a href="#our-partners">Our Partners</a>
                <a href="#our-clients">Our Clients</a>
                <a href="#client-login">Client Login</a>
                {/* <a href="/contact">Contact Us</a> */}
            </div>
        </div>
    );
};

export default QuickLinks;
