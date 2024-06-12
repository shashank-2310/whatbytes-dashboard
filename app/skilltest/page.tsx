"use client"
import React from 'react'
import SkillsHome from '@/components/SkillsHome';
import ProgressBars from '@/components/ProgressBars';


const page = () => {

    return (
        <div className='lg:py-8 lg:pl-10 lg:pr-8 py-4 pl-5 pr-4 relative flex flex-col size-full overflow-hidden'>
            <h1 className='text-neutral-500 text-lg text-left w-full mb-2'>Skill Test</h1>
            <div className="flex flex-col lg:flex-row items-start justify-between gap-4 ">
                <SkillsHome />
                <ProgressBars />
            </div>
        </div>
    )
}

export default page