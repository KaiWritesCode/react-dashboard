import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../App.css"

export default function Chart() {

  const data = [
    { day: "Monday", total: 1200 },
    { day: "Tuesday", total: 1300 },
    { day: "Wednesday", total: 1000 },
    { day: "Thursday", total: 1400 },
    { day: "Friday", total: 960 },
    { day: "Saturday", total: 1900 },
    { day: "Sunday", total: 2588 },
  ]

  return (
    <div className=" bg-white rounded-lg border border-gray-200 h-[450px] shadow-md w-full flex-1 p-6">
      <div className='text-gray-500 mb-3'>Last Week's Revenue</div>
      <ResponsiveContainer width="99%" height={380} >
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6385f7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6385f7" stopOpacity={0} />
            </linearGradient>

          </defs>
          <XAxis dataKey="day" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#6385f7" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>

      </ResponsiveContainer>
    </div >
  )
}
