"use client"
import { useSearchParams } from 'next/navigation';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PercentileLineChart = () => {

    const searchParams = useSearchParams();
    const percentile: number = parseInt(searchParams.get('percentile') as string) || 30;

    const data = [
        { name: 0, uv: 10 },
        { name: 25, uv: 12 },
        { name: 50, uv: 5 },
        { name: 75, uv: 4 },
        { name: 100, uv: 2 },
    ];

    const updatedData = [
        ...(data.some((item: { name: number }) => item.name === percentile) ? data.map((item: { name: number, uv: number }) => {
            if (item.name === percentile) {
                return { ...item, uv: item.uv + 1 };
            }
            return item;
        }) : [{ name: percentile, uv: 1 }])
    ];
    const sortedData = [...data, ...updatedData].sort((a, b) => a.name - b.name);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart width={500} height={300} data={sortedData} margin={{ top: 5, right: 20, bottom: 5, left: 20 }}>
                <Line name='numberOfStudents' type="monotone" dataKey="uv" stroke="#8884d8" />
                <XAxis dataKey="name" allowDuplicatedCategory={false} />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default PercentileLineChart;