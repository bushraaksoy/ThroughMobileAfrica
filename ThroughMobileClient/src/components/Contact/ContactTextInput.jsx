import React from 'react';

const ContactTextInput = ({ placeholder, value, type }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            className="bg-white p-3 rounded-xl text-xs border border-brand-2 w-full"
        />
    );
};

export default ContactTextInput;
