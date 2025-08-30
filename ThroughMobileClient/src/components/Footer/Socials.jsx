import logo from '../../assets/images/logofull.png';
import { socials } from '@/utils/constants';

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
