import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { PiUserCircleLight } from 'react-icons/pi';
import { Link, useLocation } from 'react-router';
import LogoWhite from '../ui/LogoWhite';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { navLinks } from '@/utils/constants';

const Navbar = () => {
    const { hash } = useLocation();
    console.log(hash);

    return (
        <div className="fixed top-0 right-0 w-full z-50 flex justify-between items-center bg-nav/90 backdrop-blur-sm text-white border-b border-b-gray-500  py-2 px-20 max-sm:px-4 ">
            <div className="flex items-center gap-10">
                <LogoWhite />
                <ul className="navbar max-sm:hidden flex gap-6 text-sm">
                    {navLinks?.map((navLink, inx) => {
                        console.log(`/${hash}`, navLink.href);
                        console.log(`/${hash}` == navLink.href);
                        return (
                            <li
                                key={inx}
                                className=" relative hover:text-brand-3 tracking-[2px] transition-all duration-300 font-[400]  "
                            >
                                <a className="" href={navLink.href}>
                                    {navLink.title}
                                </a>
                                <span
                                    style={{
                                        display:
                                            `/${hash}` == navLink.href
                                                ? 'block'
                                                : 'none',
                                    }}
                                ></span>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex text-xs  gap-3 hidden max-sm:hidden ">
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

            <div className="md:hidden">
                <NavSidebar />
            </div>
        </div>
    );
};

export default Navbar;

const NavSidebar = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <FiMenu size={25} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <a href={'/#'}>Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href={'/#our-story'}>Our Story</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href={'/#what-we-do'}>What we do</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href={'/#our-clients'}>Our Clients</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <a href={'/#our-partners'}>Partners</a>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
