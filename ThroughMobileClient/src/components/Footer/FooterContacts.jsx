import { MdEmail, MdLocalPhone, MdLocationPin } from 'react-icons/md';
import FooterContactItem from './FooterContactItem';

const FooterContacts = () => {
    return (
        <div className="flex flex-col gap-1 ">
            <h2 className="text-brand-2 mb-2 text-sm">CONTACT</h2>
            <FooterContactItem icon={<MdEmail size={20} />}>
                contact@throughmobile.co.tz
            </FooterContactItem>
            <FooterContactItem icon={<MdLocalPhone size={20} />}>
                +255 768 212 121
            </FooterContactItem>
            <FooterContactItem icon={<MdLocationPin size={20} />}>
                <span>Dar Es Salaam</span>
                <span>89 Victoria Noble Center, </span>
                <span>New Bagamoyo Road</span>
            </FooterContactItem>
        </div>
    );
};

export default FooterContacts;
