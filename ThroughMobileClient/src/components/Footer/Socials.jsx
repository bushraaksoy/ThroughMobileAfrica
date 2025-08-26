import logo from '../../assets/images/logofull.png';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Socials = () => {
    return (
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
    );
};

export default Socials;
