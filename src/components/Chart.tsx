import React from 'react'
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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
      <div className="flex items-center justify-between w-full mb-3">
        <div className='text-gray-500 '>Last Week's Revenue</div>
        <div id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5 cursor-pointer" >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </div>
      </div>
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
