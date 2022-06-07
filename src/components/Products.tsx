import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'

const data = [
    { img: "/images/icons/dropbox.png", name: "Dropbox", time: "2" },
    { img: "/images/icons/medium.png", name: "Medium Corporation", time: "1" },
    { img: "/images/icons/slack.png", name: "Slack", time: "2" },
    { img: "/images/icons/lyft.png", name: "Lyft", time: "4" },
    { img: "/images/icons/github.png", name: "Github", time: "6" }
]

export default function Products() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md flex-1 py-6">
            <main className="flex flex-col justify-end px-6 ">
                <div className='flex justify-between w-full'>
                    <div className='text-gray-500 mb-6'>Products</div>
                </div>

                <section>
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="items-center flex w-full justify-between mb-5">
                                <div className='flex items-center'>
                                    <img className='w-[60px]' src={item.img} alt="" />
                                    <div className="flex flex-col ml-3 justify-start">
                                        <div className='text-sm'>{item.name}</div>
                                        <div className='text-sm text-gray-500'>Updated about {item.time} hours</div>
                                    </div>
                                </div>
                                <div id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5 cursor-pointer" >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <div className=' text-blue-600 flex justify-end'>
                    <div className='cursor-pointer p-2 flex items-center rounded-lg hover:bg-gray-100'>View all <ChevronRightIcon className='ml-1' width={15} /></div> </div>
            </main>
        </div>
    )
}
