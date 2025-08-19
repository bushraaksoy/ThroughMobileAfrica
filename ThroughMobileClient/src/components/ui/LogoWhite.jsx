import React from 'react';
import logo from '../../assets/images/logoW.png';
import { Link } from 'react-router';

const LogoWhite = () => {
    return (
        <Link to={'/'}>
            <img src={logo} alt="logo" width={65} height={65} />
        </Link>
    );
};

export default LogoWhite;
