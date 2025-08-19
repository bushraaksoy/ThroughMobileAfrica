import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import logo from '../../assets/images/logofull.png';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdLocalPhone, MdLocationPin } from 'react-icons/md';
import { Link } from 'react-router';
const Footer = () => {
    return (
        <footer className=" p-20 flex justify-between bg-gray-50 text-stone-700 text-xs">
            <div>
                <img width={150} src={logo} alt="logo" />
                <div className="flex gap-4 mt-4  hover:text-brand-2">
                    <FiFacebook size={26} />
                    <FiInstagram size={26} />
                    <FiLinkedin size={26} />
                    <FaTiktok size={26} />
                    <FaWhatsapp size={26} />
                    <FaXTwitter size={26} />
                </div>
            </div>
            <div className="flex flex-col gap-1 ">
                <h2 className="text-brand-2 mb-2 text-sm">CONTACT</h2>
                <span className="flex gap-2">
                    <MdEmail size={20} />
                    contact@throughmobile.co.tz
                </span>
                <span className="flex gap-2">
                    <MdLocalPhone size={20} /> +255 768 212 121
                </span>
                <span className="flex gap-2">
                    <MdLocationPin size={20} />
                    <div className="flex flex-col">
                        <span>Dar Es Salaam</span>
                        <span>89 Victoria Noble Center, </span>
                        <span>New Bagamoyo Road</span>
                    </div>
                </span>
            </div>
            <div>
                <h2 className="text-brand-2 mb-2 text-sm">QUICK LINKS</h2>
                <ul className="">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="/#our-story">Our Story</a>
                    </li>
                    <li>
                        <a href="/#what-we-do">What We Do</a>
                    </li>
                    <li>
                        <li>
                            <a href="#our-partners">Our Partners</a>
                        </li>
                        <a href="#our-clients">Our Clients</a>
                    </li>
                    <li>
                        <a href="#client-login">Client Login</a>
                    </li>
                    <li>
                        <a href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
