import React, { useEffect, useRef, useState } from 'react'
import { CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { ArrowSmUpIcon, ArrowSmDownIcon, PencilAltIcon } from '@heroicons/react/outline'
import { useClickOutside } from '../hooks/ClickOutside'
import Modal from './Modal';


export default function Revenue() {
    const [dotModal, setDotModal] = useState(false)

    const total = "$890"
    const percentage = 70
    let text = "70%"

    const tempData = [
        {
            name: "Target",
            value: "12.5k",
            isPositive: true
        },

        {
            name: "Last Week",
            value: "14.7k",
            isPositive: false
        },
        {
            name: "Last Month",
            value: "78.3k",
            isPositive: true
        }
    ]


    let domNode = useClickOutside(() => {
        setDotModal(false)
    })


    return (
        <>
            <div className={`md:max-w-sm max-w-none bg-white rounded-lg border border-gray-200 shadow-md w-full`}
            >
                <main className="flex flex-col justify-end p-6 items-center ">
                    <div className='flex justify-between w-full relative' >
                        <div className='text-gray-500'>Total Revenue</div>
                        <div ref={domNode}>
                            <div onClick={() => setDotModal(!dotModal)} id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5 cursor-pointer" >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                            </div>{
                                dotModal &&
                                <Modal />}
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='w-24 py-3'><CircularProgressbar value={percentage} text={text} /></div>
                        <div className='text-gray-600'>Total sales made today</div>
                        <div className='font-semi-bold text-5xl py-5'>{total}</div>
                        <div className='text-gray-500 text-xs text-center'>Previous transactions processing. Last payment may not be included.</div>
                    </div>
                    <div className='flex justify-evenly w-full pt-4'>
                        {tempData.map((item) => {
                            const { value, isPositive, name } = item
                            return (
                                <div className='flex justify-center flex-col text-center'>
                                    <div className='text-gray-600 mb-1'>{name}</div>
                                    <div className={`${isPositive ? "text-green-600" : "text-red-600"} ${`flex text-center`}`}>
                                        {isPositive ? <ArrowSmUpIcon className='text-green-500 w-6' /> :
                                            <ArrowSmDownIcon className='text-red-500 w-6' />}
                                        {value}</div>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </div>
        </>
    )
}
