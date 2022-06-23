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

                <main className='w-full xl:w-[1100px] mx-auto'>
                    <section className='flex'>
                        <div>
                            <img className='rounded-full w-32' src="/images/accounts/2.jpg" alt="" />
                        </div>
                        <div>
                            <div>John Doe</div>
                            <div><a href="/">johndoe@gmail.com</a> <span>- Administrator</span></div>
                        </div>
                    </section>
                    {inputForms.map((item, index) => {
                        return (
                            <section key={index} className='flex p-4 flex-col'>
                                <div className='flex w-full justify-between items-center '>
                                    <label className="block text-gray-600 mr-auto" htmlFor={item.label}>
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