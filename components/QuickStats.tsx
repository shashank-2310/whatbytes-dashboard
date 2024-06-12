import { Divider } from 'antd';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const QuickStats = () => {

    const searchParams = useSearchParams();
    const currentScore: number = parseInt(searchParams.get('currentScore') as string) || 10;
    const percentile: number = parseInt(searchParams.get('percentile') as string) || 30;
    const rank: number = parseInt(searchParams.get('rank') as string) || 1;

    return (
        <div className="border-2 border-gray-200 rounded-lg p-3 lg:p-5 w-full flex-between flex-col lg:flex-row gap-2 lg:gap-5">
            <div className="flex flex-col gap-6 text-center lg:text-justify w-full">
                <h1 className='font-semibold text-base lg:text-lg'>Quick Statistics</h1>
                <div className="lg:flex-between flex justify-center flex-col lg:flex-row gap-5 text-right">
                    <div className="flex-between flex-row lg:flex-center gap-2">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src={"/trophy.png"} alt='trophy' width={25} height={25} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='font-semibold text-base lg:text-lg'>{rank}</h2>
                            <p className='uppercase text-gray-500 text-base'>your rank</p>
                        </div>
                    </div>
                    <Divider type="vertical" className='bg-gray-200 h-20 hidden lg:flex' />
                    <div className="flex-between flex-row lg:flex-center gap-2">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src={"/calculator.png"} alt='calculator' width={25} height={25} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='font-semibold text-base lg:text-lg'>{percentile}%</h2>
                            <p className='uppercase text-gray-500 text-sm lg:text-base'>percentile</p>
                        </div>
                    </div>
                    <Divider type="vertical" className='bg-gray-200 h-20 hidden lg:flex' />
                    <div className="flex-between flex-row lg:flex-center gap-2">
                        <div className="bg-gray-200 rounded-full p-2">
                            <Image src={"/check.png"} alt='check' width={25} height={25} />
                        </div>
                        <div className="flex flex-col">
                            <h2 className='font-semibold text-base lg:text-lg'>{currentScore}/15</h2>
                            <p className='uppercase text-gray-500 text-sm lg:text-base'>correct answers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickStats