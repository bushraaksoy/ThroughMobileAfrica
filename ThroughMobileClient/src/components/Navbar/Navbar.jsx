import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { PiUserCircleLight } from 'react-icons/pi';
import { Link } from 'react-router';
import LogoWhite from '../ui/LogoWhite';
const Navbar = () => {
    return (
        <div className="fixed top-0 right-0 w-full z-50 flex justify-between items-center bg-nav/90 backdrop-blur-sm text-white border-b border-b-gray-500 py-2 px-24 ">
            <div className="flex items-center gap-10">
                <LogoWhite />
                <ul className="flex gap-6 text-sm">
                    <li>
                        <a href={'/#'}>Home</a>
                    </li>
                    <li>
                        <a href={'/#our-story'}>Our Story</a>
                    </li>
                    <li>
                        <a href={'/#what-we-do'}>What we do</a>
                    </li>
                    <li>
                        <a href={'/#our-clients'}>Our Clients</a>
                    </li>
                    <li>
                        <a href={'/#our-partners'}>Partners</a>
                    </li>
                </ul>
            </div>
            <div className="buttons text-xs flex gap-3">
                <button>
                    <Link
                        to={'/contact'}
                        className="flex gap-2 bg-brand-3 py-2 px-4 items-center rounded-full"
                    >
                        <TfiHeadphoneAlt size={20} /> talk to us
                    </Link>
                </button>
                <button className="flex gap-2 bg-brand-4 py-2 px-4 items-center rounded-full">
                    <PiUserCircleLight size={20} />
                    Client Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
