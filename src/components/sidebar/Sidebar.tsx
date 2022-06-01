import React from 'react'
import { ExternalLinkIcon } from "@heroicons/react/solid";
import SidebarItem from './SidebarItem';

interface Iprops {
    isOpen: boolean
}

export default function Sidebar({ isOpen }: Iprops) {
    return (
        <>
            <main className={`${`w-[280px] bg-[#111827] xl:opacity-100 xl:visible xl:translate-x-0 fixed  min-h-screen z-50 flex-col h-full overflow-y-hidden xl:flex 
             transition-all ease-in-out duration-300`}
             ${isOpen ? "flex fixed visible opacity-100" : "invisible opacity-0 -translate-x-20"}`}>
                <div className='border-b border-gray-500 flex items-center h-[100px] '>
                    <div className='flex items-center'>
                        <img src="/images/icons/am-logo.png" className='cursor-pointer ml-4' alt="logo" width="40px" />
                        <span className='text-2xl font-bold leading-7 ml-3 translate-y-1 cursor-pointer text-white'>AmDash</span>
                    </div>
                </div>

                <div className='py-4 flex flex-col grow'>
                    <SidebarItem type="dashboard" />
                    <SidebarItem type="customers" />
                    <SidebarItem type="products" />
                    <SidebarItem type="logs" />
                    <SidebarItem type="profile" />
                    <SidebarItem type="settings" />
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
