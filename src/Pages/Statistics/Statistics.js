import React from 'react';
import { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = [
        {
            name: 'Jan',

            buyer: 400,
            seller: 240,
            totalSell: 340,
        },
        {
            name: 'Feb',

            buyer: 300,
            seller: 139,
            totalSell: 390,
        },
        {
            name: 'Mar',

            buyer: 200,
            seller: 600,
            totalSell: 529,
        },
        {
            name: 'Apr',

            buyer: 278,
            seller: 390,
            totalSell: 400,
        },
        {
            name: 'May',
            buyer: 189,
            seller: 480,
            totalSell: 518,
        },
        {
            name: 'Jun',
            buyer: 239,
            seller: 380,
            totalSell: 150,
        },
        {
            name: 'Jul',
            buyer: 349,
            seller: 430,
            totalSell: 510,
        },
        {
            name: 'Aug',
            buyer: 549,
            seller: 500,
            totalSell: 410,
        },
        {
            name: 'Sep',
            buyer: 349,
            seller: 200,
            totalSell: 610,
        },
        {
            name: 'Oct',
            buyer: 549,
            seller: 340,
            totalSell: 410,
        },
        {
            name: 'Nov',
            buyer: 449,
            seller: 330,
            totalSell: 510,
        },
        {
            name: 'Dec',
            buyer: 349,
            seller: 230,
            totalSell: 610,
        },

    ];

    return (
        <div>
            <div>
                <h2 className=' text-3xl p-6 font-bold text-secondary'>User statistics</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="buyer" fill="#0066ff" />
                        <Bar dataKey="seller" fill="#00cc66" />
                    </BarChart>
                </ResponsiveContainer>

            </div>
            <div>
                <h2 className=' text-3xl p-6 font-bold text-secondary'>Our Progress</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width="100%"
                        height={400}
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <Line type="monotone" dataKey="totalSell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;