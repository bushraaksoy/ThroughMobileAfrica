import logo from '../../assets/images/logofull.png';
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
    { icon: FiFacebook, url: 'https://www.facebook.com/throughmobile/' },
    { icon: FiInstagram, url: 'https://www.instagram.com/throughmobile' },
    {
        icon: FiLinkedin,
        url: 'https://www.linkedin.com/company/through-mobile',
    },
    { icon: FaTiktok, url: 'https://www.tiktok.com/@throughmobile' },
    { icon: FaWhatsapp, url: 'https://wa.me/message/XEM4K4UVWE7DN1' },
    { icon: FaXTwitter, url: 'https://twitter.com/throughmobile1' },
];

const Socials = () => {
    return (
        <div>
            <img width={150} src={logo} alt="logo" />
            <div className="flex gap-4 mt-4 ">
                {socials?.map((social, inx) => (
                    <a
                        key={inx}
                        href={social.url}
                        className="hover:text-brand-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <social.icon size={26} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Socials;
