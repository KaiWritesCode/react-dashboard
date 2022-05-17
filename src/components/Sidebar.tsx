import React from 'react'
import { ChartBarIcon, MenuIcon, UsersIcon, ExternalLinkIcon, ShoppingBagIcon, CogIcon, ChartSquareBarIcon, UserIcon } from "@heroicons/react/solid";

export default function Sidebar() {
    return (
        <>
            <main className='w-[380px] bg-[#111827] z-1000 hidden flex-col min-h-screen overflow-y-auto xl:flex'>
                <div className='border-b border-gray-500 flex items-center h-[100px] '>
                    <img src="/images/icons/main-logo.png" className='cursor-pointer ml-4' alt="logo" width="80px" />
                    <span className='text-xl font-bold leading-7 cursor-pointer text-white'>Chekit</span>
                </div>
                <div className='py-4 flex flex-col grow'>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 '>
                        <ChartBarIcon width="28" className='mr-1 ' />
                        Dashboard
                    </div>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 '>
                        <UsersIcon width="28" className='mr-1 ' />
                        Customers
                    </div>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 '>
                        <ShoppingBagIcon width="28" className='mr-1 ' />
                        Products
                    </div>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 '>
                        <ChartSquareBarIcon width="28" className='mr-1 ' />
                        Logs
                    </div>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 '>
                        <UserIcon width="28" className='mr-1 ' />
                        Profile
                    </div>
                    <div className='text-white flex font-bold leading-7 
                cursor-pointer hover:bg-[#ffffff14] px-4 py-2 rounded-lg
                 mx-2 my-1 hover:transition-all ease-in-out duration-300 
                 '>
                        <CogIcon width="28" className='mr-1 ' />
                        Settings
                    </div>
                </div>

                <div className='border-t border-gray-500 px-4 py-10 h-[450px] mt-auto'>
                    <div className='flex flex-col justify-end'>
                        <span className='text-white font-semibold text-sm'>
                            Need more features?
                        </span>
                        <span className='text-gray-400 font-semibold text-sm'>
                            Check out our Pro solution template.
                        </span>
                        <div className='py-4'>
                            <img src="/images/sidebar_pro.png" width="80%" alt="" />
                        </div>
                        <div className='text-white cursor-pointer 
                    hover:bg-blue-500 bg-blue-400 px-4
                     align-middle font-bold py-2.5 rounded-lg flex items-center justify-center'>
                            Try Pro Version
                            <ExternalLinkIcon width="25" />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
