"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import { navItems } from './NavItems'

const SideNav = () => {

    const pathName = usePathname();
    const className = "flex-row flex items-center justify-start cursor-pointer gap-2 w-full hover:text-blue-700 hover:bg-gray-100 rounded-r-full px-12 py-4"
    const activeClassName = "flex-row flex items-center justify-start cursor-pointer gap-2 w-full rounded-r-full px-12 py-4 bg-gray-100 text-blue-700"

    return (
        <div className="min-h-screen flex-col hidden sm:flex gap-8 py-10  pr-8 text-lg border-r-2 border-gray-200">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={`${pathName === item.href ? activeClassName : className}`}>
                    {item.icon}
                    <p className='font-medium'>{item.label}</p>
                </Link>
            ))}
        </div>
    )
}

export default SideNav