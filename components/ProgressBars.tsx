"use client"
import { Progress } from 'antd'
import { useSearchParams } from 'next/navigation'
import React from 'react'



type ProgressData = {
    label: string
    percent: number
    trailColor: string
    strokeColor: string
}

const ProgressBars = () => {
    const searchParams = useSearchParams();
    const currentScore: number = parseInt(searchParams.get('currentScore') as string) || 10;

    const progressData: ProgressData[] = [
        { label: 'HTML Tools, Forms, History', percent: 80, trailColor: '#A0DEFF', strokeColor: '#1890FF' },
        { label: 'Tags & References in HTML', percent: 60, trailColor: '#FFBF78', strokeColor: '#FC4100' },
        { label: 'Tables & References in HTML', percent: 24, trailColor: '#FF6868', strokeColor: '#FF004D' },
        { label: 'Tables & CSS Basics', percent: 96, trailColor: '#ADD899', strokeColor: '#06D001' },
    ]
    return (
        <div className='flex flex-col gap-4 lg:min-w-96 w-full lg:w-1/2 overflow-hidden'>
            <div className="p-5 border-2 border-gray-200 rounded-lg flex flex-col gap-8">
                <h1 className='font-semibold text-lg lg:text-xl'>Syllabus Wise Analysis</h1>
                <div className="flex flex-col gap-4 w-full">
                    {progressData.map((data) => (
                        <div key={data.percent} className="flex flex-col gap-2">
                            <h3 className='text-base lg:text-lg text-neutral-500'>{data.label}</h3>
                            <Progress percent={data.percent} strokeColor={data.strokeColor} trailColor={data.trailColor} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-8 py-10 gap-4 border-2 border-gray-200 rounded-lg flex flex-col">
                <div className="flex-between">
                    <h1 className='font-semibold text-lg'>Question Analysis</h1>
                    <p className='text-blue-800 font-medium'>{currentScore}/15</p>
                </div>
                <p className='text-gray-500'><span className='font-medium'>You scored {currentScore} question out of 15.</span>&nbsp;However, it still needs some improvements.</p>
                <div className="w-full flex-center">
                    <Progress percent={Math.ceil((currentScore / 15) * 100)} strokeWidth={15} strokeColor='#1890FF' trailColor='#A0DEFF' type='circle' />
                </div>
            </div>
        </div>
    )
}

export default ProgressBars