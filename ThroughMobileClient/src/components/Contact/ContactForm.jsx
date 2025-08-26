import React from 'react';
import ContactTextInput from './ContactTextInput';
import { FaChevronRight } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema } from '../../schemas/contact.schema';

const ContactForm = () => {
    // const {
    //     register,
    //     handleStubmit,
    //     formState: { errors },
    // } = useForm({ resolver: zodResolver(contactSchema) });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <form
            // onSubmit={handleStubmit(onSubmit)}
            className="bg-gray-100 rounded-3xl p-18 flex flex-col gap-6"
        >
            <div className="title ">
                <h1 className="text-stone-800 font-bold text-3xl">
                    Talk to Us
                </h1>
                <h2 className="text-sm">
                    We are happy to get back to you promptly
                </h2>
            </div>
            <UserInfo />
            <UserInterest />
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
            <button
                type="submit"
                className=" flex items-center justify-between mx-auto mt-10 w-fit text-xs gap-2 text-white font-light rounded-full py-2 px-10 bg-linear-to-r from-brand-1 to-brand-2"
            >
                Send Message
                <FaChevronRight className="" />
            </button>
        </form>
    );
};

export default ContactForm;

const RadioInput = ({ name, value }) => {
    return (
        <label className="flex items-center justify-center gap-2">
            <input
                type="radio"
                name={name}
                id=""
                value={value}
                className="appearance-none h-4 w-4 rounded-sm border-2 border-brand-2 bg-white cursor-pointer checked:before:content-[''] checked:before:block checked:before:w-2 checked:before:h-2 checked:before:bg-brand-2 checked:before:mt-0.5 checked:before:ml-0.5 checked:before:rounded-xs "
            />
            {value}
        </label>
    );
};

const UserInfo = () => {
    return (
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
    );
};

const UserInterest = () => {
    return (
        <div className="interest">
            <h2>What are you interested in engaging us with ?</h2>
            <div className="radios py-10 flex flex-col gap-5 text-xs text-stone-700">
                <span className="flex justify-between ">
                    <RadioInput
                        name={'interest'}
                        value={
                            'Market Intelligence & Insight ( Data Whisperer)'
                        }
                    />
                    <RadioInput
                        name={'interest'}
                        value={'AI driven Technology Development'}
                    />
                    <RadioInput name={'interest'} value={'All of the above'} />
                </span>
                <span className="flex justify-between">
                    <RadioInput
                        name={'interest'}
                        value={'Creative Expression (Story Alchemist)'}
                    />
                    <RadioInput name={'interest'} value={'Partnership'} />
                    <RadioInput name={'interest'} value={'Other'} />
                </span>
            </div>
        </div>
    );
};
