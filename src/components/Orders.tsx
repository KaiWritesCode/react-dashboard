import React from 'react'

export default function Orders() {

    const data = [
        { orderRef: "CDD1049", customer: "Ekaterina Tankova", date: "10/04/2019", status: "pending", color: "bg-[#FFB020]" },
        { orderRef: "CDD1048", customer: "Cao Yu", date: "11/04/2019", status: "delivered", color: "bg-[#14B8A6]" },
        { orderRef: "CDD1047", customer: "Alexa Richardson", date: "10/04/2019", status: "refunded", color: "bg-red-500" },
        { orderRef: "CDD1046", customer: "Anje Keizer", date: "8/04/2019", status: "pending", color: "bg-[#FFB020]" },
        { orderRef: "CDD1045", customer: "Clarke Gillebert", date: "11/08/2019", status: "delievered", color: "bg-[#14B8A6]" },
        { orderRef: "CDD1044", customer: "Adam Denisov", date: "1/25/2019", status: "delievered", color: "bg-[#14B8A6]" }
    ]

    return (
        <div className=" bg-white rounded-lg border border-gray-200  shadow-md w-full flex-1 py-6">
            <div className="flex items-center justify-between w-full mb-3 px-5">
                <div className='text-gray-500 '>Latest Orders</div>
                <div id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 hover:bg-gray-100 rounded-lg text-sm p-1.5" >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </div>
            </div>
            <section>
                <div className="bg-gray-100 py-2 w-full">
                    <div className=' items-center flex p-5 h-10'>
                        <div className='flex-1 '>Order Ref</div>
                        <div className='flex-1 '>Customer</div>
                        <div className='flex-1 '>Date</div>
                        <div className='flex-1 '>Status</div>
                    </div>
                </div>
                <div>
                    {
                        data.map((item) => {
                            return (
                                <div className="flex px-5 py-3 items-center h-14 text-sm hover:bg-gray-100">
                                    <div className="flex-1">{item.orderRef}</div>
                                    <div className="flex-1">{item.customer}</div>
                                    <div className="flex-1">{item.date}</div>
                                    <div className="flex-1">
                                        <div className={`${item.color} ${"inline-block font-semibold uppercase text-white p-0.5 px-2 rounded-xl"}`}> {item.status}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}
