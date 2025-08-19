import React from 'react';
import ContactTextInput from './ContactTextInput';
import { FaChevronRight } from 'react-icons/fa';

const ContactForm = () => {
    return (
        <form className="bg-gray-100 rounded-3xl p-18 flex flex-col gap-6">
            <div className="title ">
                <h1 className="text-stone-800 font-bold text-3xl">
                    Talk to Us
                </h1>
                <h2 className="text-sm">
                    We are happy to get back to you promptly
                </h2>
            </div>
            <div className="inputs py-10 flex flex-col gap-8">
                <div className="flex gap-10">
                    <ContactTextInput placeholder="Full Name" />
                    <ContactTextInput placeholder="Email Address" />
                </div>
                <div className="flex gap-10">
                    <ContactTextInput placeholder="Phone No" />
                    <ContactTextInput placeholder="Organization Name" />
                </div>
                <ContactTextInput placeholder={'Country'} />
            </div>
            <div className="interest ">
                <h2>What are you interested in engaging us with ?</h2>
                <div className="radios py-10 flex flex-col gap-5 text-xs text-stone-700">
                    <span className="flex justify-between ">
                        <label className="flex items-center justify-center gap-2">
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="Market Intelligence & Insight Data Whisperer"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            Market Intelligence & Insight ( Data Whisperer)
                        </label>
                        <label
                            htmlFor=""
                            className="flex items-center justify-center gap-2"
                        >
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="AI driven Technology Development"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            AI driven Technology Development
                        </label>
                        <label
                            htmlFor=""
                            className="flex items-center justify-center gap-2"
                        >
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="All of the above"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            All of the above
                        </label>
                    </span>
                    <span className="flex justify-between">
                        <label
                            htmlFor=""
                            className="flex items-center justify-center gap-2"
                        >
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="Creative Expression (Story Alchemist)"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            Creative Expression (Story Alchemist)
                        </label>
                        <label
                            htmlFor=""
                            className="flex items-center justify-center gap-2"
                        >
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="Partnership"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            Partnership
                        </label>
                        <label
                            htmlFor=""
                            className="flex items-center justify-center gap-2"
                        >
                            <input
                                type="radio"
                                name="interest"
                                id=""
                                value="Other"
                                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                            />
                            Other
                        </label>
                    </span>
                </div>
            </div>
            <textarea
                className="bg-white p-3 rounded-xl text-xs border border-brand-2 w-full h-40"
                placeholder="Message"
            ></textarea>
            <label className="flex items-center  gap-2 text-sm">
                <input
                    type="checkbox"
                    name="newsletter"
                    id=""
                    value="newsletter"
                    className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
                />
                I would like to receive news and newsletters / articles about
                our latest products
            </label>
            <button className=" flex items-center justify-between mx-auto mt-10 w-fit text-xs gap-2 text-white font-light rounded-full py-2 px-10 bg-linear-to-r from-brand-1 to-brand-2">
                Send Message
                <FaChevronRight className="" />
            </button>
        </form>
    );
};

export default ContactForm;
