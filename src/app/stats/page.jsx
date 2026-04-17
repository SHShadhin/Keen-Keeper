'use client';
import { FriendContext } from '@/components/context/FriendContext';
import { useContext } from 'react';

import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const COLORS = {
  Call: '#244D3F',
  Text: '#a855f7',
  Video: '#22c55e',
};

const StatsPage = () => {
  const { cart } = useContext(FriendContext);

  const counts = cart.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const data = Object.keys(counts).map(key => ({
    name: key,
    value: counts[key],
  }));

  return (
    <div className="container py-10 max-w-2xl ">
      <div className="mx-[20px] md:mx-[20px] lg:mx-[20px] xl:mx-0">
        <h1 className="text-2xl font-bold mb-6">Friendship Analytics</h1>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm ">
          <p className="text-gray-500 mb-4">By Interaction Type</p>

          <div className="flex justify-center">
            {data.length === 0 ? (
              <p className="text-gray-400 italic">No data yet.</p>
            ) : (
              <PieChart width={400} height={300}>
                <Pie
                  data={data}
                  cx={200}
                  cy={130}
                  innerRadius={80}
                  outerRadius={130}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[entry.name] || '#ccc'} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
