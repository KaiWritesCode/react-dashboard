import React, { useState } from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import { MenuIcon } from "@heroicons/react/solid";
import Navigation from '../components/Navigation';

function Profile() {
    let [isOpen, setIsOpen] = useState(false)


    const inputForms = [
        { label: "Username", type: "text", value: "JohnDoe42", required: false },
        { label: "Full Name", type: "text", value: "John Doe", required: false },
        { label: "Email", type: "email", value: "johndoe@gmail.com", required: false },
        { label: "Password", type: "password", value: "johnjohn123", required: false },
        { label: "Job Title", type: "text", value: "Web Developer", required: false },
        { label: "Description", type: "text", value: "Frontend Developer at Technext Limited", required: false },
        { label: "Location", type: "text", value: "Port Orange, Florida", required: false },
    ]

    return (
        <div className="flex w-full overflow-hidden" >
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
            <MenuIcon
                onClick={() => setIsOpen(true)} className={`${`w-6 xl:hidden transition-all ease-in-out duration-300 block cursor-pointer absolute top-[1.15rem] left-6`}
                      ${isOpen ? "invisible opacity-0" : "visible opacity-100"}`} />
            <div className="w-full  overflow-scroll ml-0 xl:ml-[280px]"
                onClick={() => setIsOpen(false)}>
                <Navigation isOpen={isOpen} />

                <main className='xl:w-[1000px] w-full mx-auto border'>
                    <section className='flex border-b-2 items-center py-3'>
                        <div>
                            <img className='rounded-full w-32 mr-5' src="/images/accounts/2.jpg" alt="" />
                        </div>
                        <div>
                            <div className='text-3xl'>John Doe</div>
                            <div>Web Developer at Technext Limited</div>
                            <div className='text-gray-500'>Port Orange, Florida</div>
                        </div>
                    </section>
                    {inputForms.map((item, index) => {
                        return (
                            <section key={index} className='p-4 w-full m-auto'>
                                <div className='flex flex-col md:flex-row w-full justify-between items-start md:items-center '>
                                    <label className="block text-gray-600 " htmlFor={item.label}>
                                        {item.label}
                                    </label>
                                    <input className="appearance-none border-2 border-gray-200 rounded  py-2 px-4
                                     text-gray-500 leading-tight focus:outline-none focus:bg-white focus:border-blue-300 w-[70%]" id="full-name" type={item.type} value={item.value} required={item.required} />
                                </div>
                            </section>
                        )
                    })}
                </main>
                <div className={`${`w-full xl:bg-transparent fixed h-full top-0 left-0 bottom-0 pointer-events-none opacity-50`} 
        ${isOpen ? "bg-black" : "bg-transparent"}`}></div>
            </div>
        </div >
    )
}

export default Profile