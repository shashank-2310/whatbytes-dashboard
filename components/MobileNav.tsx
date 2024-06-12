"use client"

import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { RiMenu2Fill } from 'react-icons/ri';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { activeClassName, className, navItems } from './NavItems';


const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const pathName = usePathname();
    

    return (
        <>
            <Button type="primary" onClick={showDrawer} className='bg-white shadow-none p-0'>
                <RiMenu2Fill className='text-lg text-black' />
            </Button>
            <Drawer onClose={onClose} open={open}>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href} onClick={onClose} className={`${pathName === item.href ? activeClassName : className}`}>
                        {item.icon}
                        <p className='font-medium'>{item.label}</p>
                    </Link>
                ))}
            </Drawer>
        </>
    );
};

export default MobileNav;