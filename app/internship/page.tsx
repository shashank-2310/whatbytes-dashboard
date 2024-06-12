import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='px-4 sm:px-20'>
            <h1 className='sm:text-4xl text-2xl py-2 sm:py-8 font-semibold'>Careers</h1>
            <p className='text-lg'>
                Visit our&nbsp;
                <Link href={"https://www.whatbytes.com/career"} className='text-blue-700 underline'>Careers</Link>
                &nbsp;page for more information regarding internships & other open roles.
            </p>
        </div>
    )
}

export default page