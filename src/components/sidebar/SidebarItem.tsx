import React from 'react'
import { ChartBarIcon, UsersIcon, ShoppingBagIcon, CogIcon, ChartSquareBarIcon, UserIcon } from "@heroicons/react/solid";
import { ISidebarItem } from '../../interfaces/interface';
import { Link } from 'react-router-dom'

interface IProps {
    type: string;
}

export default function SidebarItem({ type }: IProps) {
    let data: ISidebarItem

    if (type === "dashboard") {
        data = {
            icon: <ChartBarIcon width="28" className='mr-1 ' />,
            name: "Dashboard",
            link: "/"
        }
    }
    else if (type === "customers") {
        data = {
            icon: <UsersIcon width="28" className='mr-1 ' />,
            name: "Customers",
            link: "/customers"
        }
    }
    else if (type === "products") {
        data = {
            icon: <ShoppingBagIcon width="28" className='mr-1 ' />,
            name: "Products",
            link: "/products"
        }
    }
    else if (type === "logs") {
        data = {
            icon: <ChartSquareBarIcon width="28" className='mr-1 ' />,
            name: "Logs",
            link: "/logs"
        }
    }
    else if (type === "profile") {
        data = {
            icon: <UserIcon width="28" className='mr-1 ' />,
            name: "Profile",
            link: "/profile"
        }
    }
    else {
        data = {
            icon: <CogIcon width="28" className='mr-1 ' />,
            name: "Settings",
            link: "/settings"
        }
    }
    return (
        <>
            <Link to={data.link}>
                <div className='text-white flex font-bold leading-7
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                mx-2 my-1 hover:transition-all ease-in-out duration-300 
     '>
                    {data.icon}
                    {data.name}
                </div>
            </Link>
        </>
    )
}
