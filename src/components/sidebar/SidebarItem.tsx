import React from 'react'
import { ChartBarIcon, UsersIcon, ShoppingBagIcon, CogIcon, ChartSquareBarIcon, UserIcon } from "@heroicons/react/solid";


export default function SidebarItem({ type }: any) {

    let data

    if (type === "dashboard") {
        data = {
            icon: <ChartBarIcon width="28" className='mr-1 ' />,
            name: "Dashboard"
        }
    }
    else if (type === "customers") {
        data = {
            icon: <UsersIcon width="28" className='mr-1 ' />,
            name: "Customers"
        }
    }
    else if (type === "products") {
        data = {
            icon: <ShoppingBagIcon width="28" className='mr-1 ' />,
            name: "Products"
        }
    }
    else if (type === "logs") {
        data = {
            icon: <ChartSquareBarIcon width="28" className='mr-1 ' />,
            name: "Logs"
        }
    }
    else if (type === "profile") {
        data = {
            icon: <UserIcon width="28" className='mr-1 ' />,
            name: "Profile"
        }
    }
    else {
        data = {
            icon: <CogIcon width="28" className='mr-1 ' />,
            name: "Settings"
        }
    }
    return (
        <div className='text-white flex font-bold leading-7 
    cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
     mx-2 my-1 hover:transition-all ease-in-out duration-300 
     '>
            {data.icon}
            {data.name}
        </div>
    )
}
