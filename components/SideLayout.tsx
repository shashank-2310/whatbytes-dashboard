import React from 'react'
import SideNav from './SideNav'

const SideLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    return (
        <div className='min-h-screen w-full flex-row flex justify-between'>
            <SideNav />
            <div className="h-full w-full flex-between">
                {children}
            </div>
        </div>
    )
}

export default SideLayout