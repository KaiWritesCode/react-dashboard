import React from 'react'
import { ArrowSmUpIcon, UsersIcon, ShoppingCartIcon, CreditCardIcon, BriefcaseIcon } from '@heroicons/react/solid'
import { ArrowDownIcon, ArrowSmDownIcon } from '@heroicons/react/outline'

export default function Statbox({ type }: any) {
    let data

    const amount = 100
    const diff = 20

    if (type === 'user') {
        data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: <UsersIcon className='w-4' />,
            iconStyles: {
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
            },
            diff: "18",
            isPositive: true,
            amount: 156
        }
    } else if (type === "order") {
        data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: <ShoppingCartIcon className='w-4' />,
            iconStyles: {
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
            },
            diff: "12",
            isPositive: false,
            amount: 3
        }
    } else if (type === "earning") {
        data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: <CreditCardIcon className='w-4' />,
            iconStyles: {
                backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green"
            },
            diff: "14",
            isPositive: true,
            amount: 1200

        }
    } else {
        data = {
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: <BriefcaseIcon className='w-4' />,
            iconStyles: {
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
            },
            diff: "10",
            isPositive: true,
            amount: 5400
        }
    }



    return (
        <>
            <div className="bg-white sm:w-[45%] w-full justify-between shadow
                rounded p-4 m-2 border flex border-transparent">
                <section className='flex flex-col justify-evenly'>
                    <div className='text-lg text-gray-700'>{data.title}</div>
                    <div className='font-bold text-2xl py-0 md:py-3'>{data.isMoney && "$"} {data.amount}</div>
                    <div className='flex'>
                        <a className='text-sm text-gray-500 cursor-pointer hover:underline' href="/">{data.link}</a>
                    </div>
                </section>
                <div className="flex flex-col justify-between">
                    <div className='flex justify-center items-center align-middle'>
                        {data.isPositive ? <ArrowSmUpIcon className='text-green-500 w-8' /> :
                            <ArrowSmDownIcon className='text-red-500 w-8' />}
                        <div className='font-semi-bold text-xl'>{data.diff}%</div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div style={data.iconStyles} className='p-2 bg-purple-400 rounded-lg mr-1 self-end'>
                            {data.icon}
                        </div>
                        <button className="text-gray-500 hover:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
