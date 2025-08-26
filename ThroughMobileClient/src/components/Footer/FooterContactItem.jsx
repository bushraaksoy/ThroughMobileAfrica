import React from 'react';

const FooterContactItem = ({ icon, children }) => {
    return (
        <span className="flex gap-2">
            {icon}
            <div className="flex flex-col">{children}</div>
        </span>
    );
};

export default FooterContactItem;
