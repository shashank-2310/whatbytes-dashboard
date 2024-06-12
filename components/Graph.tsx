import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import PercentileLineChart from './PercentileLineChart';

const Graph = () => {

    const searchParams = useSearchParams();
    const percentile: number = parseInt(searchParams.get('percentile') as string) || 30;
    const currentScore: number = parseInt(searchParams.get('currentScore') as string) || 10;
    const rank: number = parseInt(searchParams.get('rank') as string) || 1;

    return (
        <div className="border-2 border-gray-200 rounded-lg p-3 lg:p-5 flex-between flex-col lg:flex-row gap-2 lg:gap-5 w-fit lg:w-max">
            <div className="flex flex-col gap-3 text-center lg:text-justify">
                <div className="flex-between flex-row">
                    <h1 className='font-semibold text-base lg:text-lg'>Comparison Graph</h1>
                    <div className="bg-gray-200 p-2 rounded-full">
                        <Image src={"/trend.png"} alt='trend' width={25} height={25} />
                    </div>
                </div>
                <p className='text-gray-500 text-left'><span className='font-medium'>You scored {percentile}% percentile</span>&nbsp;which is lower than the&nbsp;<br className='hidden lg:flex' />average percentile 72% of all engineers who took this assessment</p>
                <PercentileLineChart />
            </div>
        </div>
    )
}

export default Graph