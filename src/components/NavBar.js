'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Twirl as Hamburger } from 'hamburger-react';
import { links, userData } from '@/lib/utils';

function NavBar() {
    const [activeLink, setActiveLink] = useState("#home");
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const hideMenu = (url) => {
        setActiveLink(url);
        if(isOpenMenu){
            setIsOpenMenu((isOpen) => !isOpen);
        }
    };
    return (
    <nav className="border-b mb-4 border-blue-900/95 shadow-sm shadow-blue-900 rounded-lg p-2 sticky flex items-center justify-between top-0 z-10 container mx-auto bg-inherit max-w-[1280px] xl:mx-auto">
        <div className="flex items-center gap-1 py-1 transition-opacity duration-1000  hover:opacity-75">
            <Link href="">
                <Image className="rounded-3xl" width={40} src={userData.image} alt="logo" />
            </Link>
            <Link href="">
                <span className=" antialiased font-bold text-neutral-300 text-2xl">{userData.name}</span>
            </Link>
        </div>

        <ul className={`${!isOpenMenu ? "hidden" : "flex"} flex-col justify-around items-center absolute top-0 py-8 right-0 min-h-[420px] bg-gray-600 rounded-2xl w-full sm:w-[70%]
        md:flex md:flex-row md:justify-evenly md:p-3 md:bg-inherit md:min-h-max md:w-2/3`}>
        {   links.map((item, index) =>
                (<li key={index} className={`${activeLink === item.url && "title-blue"} font-bold w-1/2 py-1 text-center shadow-2xl shadow-black rounded-xl outline outline-gray-800 text-xl md:shadow-none md:text-lg md:outline-none md:rounded-none`}>
                    <Link
                        onClick={() => hideMenu(item.url)}
                        className="block md:inline hover:opacity-55"
                        href={item.url}>
                        {item.text}
                    </Link>
                </li>))
        }
        </ul>
        <div className="md:hidden transition-opacity duration-700 hover:opacity-55 absolute top-1 right-1">
            <Hamburger toggled={isOpenMenu} toggle={setIsOpenMenu} />
        </div>

    </nav>
    );
}

export default NavBar;