import { Link } from 'react-router';
import Socials from './Socials';
import FooterContacts from './FooterContacts';
import QuickLinks from './QuickLinks';

const Footer = () => {
    return (
        <footer className=" p-20 flex justify-between bg-gray-50 text-stone-700 text-sm max-sm:flex-col max-sm:px-6 max-sm:gap-10">
            <Socials />
            <QuickLinks />
            <FooterContacts />
        </footer>
    );
};

export default Footer;
