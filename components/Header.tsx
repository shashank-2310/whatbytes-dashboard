import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import Image from 'next/image'
import React from 'react'
import MobileNav from './MobileNav';
import Link from 'next/link';

const Header = () => {
    return (
        <div className='w-full flex-between p-3 sm:p-6 border-b-2 border-gray-200'>
            <div className="container w-1/2 sm:w-full sm:ml-7">
                <Link href={"/"}>
                    <Image src='/logo.png' alt='logo' width={200} height={200} priority />
                </Link>
            </div>
            <div className="flex-between flex-row gap-1 overflow-hidden">
                <Link href={"/"} className='sm:rounded-lg min-w-max sm:mr-20 lg:mr-14 overflow-hidden p-2 flex sm:flex-row items-center sm:gap-2 sm:border-2 border-gray-200 hover:border-black hover:shadow-lg shadow-gray-200'>
                    <Avatar size={{ xs: 24, sm: 24, md: 30, lg: 30, xl: 30, xxl: 30 }} icon={<UserOutlined />} className='hover:bg-black hover:text-gray-200 bg-gray-200 text-black' />
                    <span className='font-medium hidden sm:flex'>
                        Rahil Siddique
                    </span>
                </Link>
                <div className="sm:hidden flex-center">
                    <MobileNav />
                </div>
            </div>
        </div>
    )
}

export default Header