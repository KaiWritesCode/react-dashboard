import React, { useState } from "react";
import {
  GlobeAltIcon,
  ChatAltIcon,
  BellIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import { useClickOutside } from '../hooks/ClickOutside'

interface Iprops {
  isOpen: boolean
}


const Navigation = ({ isOpen }: Iprops) => {
  const [imageModal, setImageModal] = useState(false)
  const [notificationModal, setNotificationModal] = useState(false)

  let imageDomNode = useClickOutside(() => {
    setImageModal(false)
  })

  let notificationDomNode = useClickOutside(() => {
    setNotificationModal(false)
  })


  // temp data 
  const notificationData = [
    { image: "/images/accounts/3.jpg", text: "Anthony Hopkins replied to: Hello wide world", time: "Just now" },
    { image: "/images/accounts/9.png", text: "Jenny Simpkins liked your post: How to write", time: "Just now" },
    { image: "/images/accounts/2.jpg", text: "Jenny Simpkins liked your post: How to write", time: "Just now" },
  ]

  return (
    <nav>
      <main className="flex items-center justify-between border px-6 py-2">
        <section>
          <div className={`${`ml-8 xl:ml-0 items-center justify-center hidden sm:flex`} ${isOpen ? "ml-0" : "ml-8"}`}>
            <div className="flex border-2 rounded">
              <input
                type="text"
                className="px-4 py-1.5 w-48 lg:w-full"
                placeholder="Search..."
              />
              <button className="flex items-center justify-center px-2 border-l">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-4 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-center items-center">
          <div className="flex-center items-center hidden sm:flex text-gray-700 cursor-pointer first-letter:">
            <GlobeAltIcon width="25" className="mr-1" />
            English
          </div>

          <MoonIcon className="ml-5 text-gray-700 cursor-pointer" width="25" />

          <div className="ml-4 text-gray-700 relative cursor-pointer" ref={notificationDomNode}>
            <BellIcon onClick={() => setNotificationModal(prevState => !prevState)} width="25" />
            <div className="w-2 h-2 bg-blue-500 text-white rounded-full flex justify-center
             items-center text-sm absolute -top-0.5 right-0.5 weight"></div>


            <div className={`origin-top-right absolute -right-[2.35rem] mt-2 w-72 z-20 translate-y-3 focus:outline-none
             ${notificationModal ? "block" : "hidden"}`}>
              <div className="relative noti-dropdown shadow-lg bg-white ring-1 divide-y divide-gray-100 pt-3 ring-black ring-opacity-5 rounded-md" >
                {notificationData.map((item, idx) => {
                  return (
                    <a href="#" key={idx} className="text-black block border-b-gray-500 flex items-top text-[0.8rem]  p-4 py-2 hover:bg-gray-50">
                      <div className="mr-4">
                        <img className="w-20 min-w-[3rem] rounded-full " src={item.image} alt="headshot" />
                      </div>
                      <div >
                        <div>{item.text}</div>
                        <div className="text-gray-500">{item.time}</div>
                      </div>
                    </a>
                  )
                })}


                <div>
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">View all</a>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-4 text-gray-700 relative cursor-pointer">
            {/* <div className="w-3 h-3 bg-blue-700 text-white rounded-full flex justify-center
             items-center text-sm absolute -top-1 -right-1 weight"></div> */}
            <ChatAltIcon width="25" />
          </div>

          <div className="ml-5 text-gray-700 cursor-pointer dropdown-menu " ref={imageDomNode}>
            <img
              onClick={() => setImageModal(imageModal => !imageModal)}
              src="/images/headshot.jpg"
              className="rounded-full"
              width="35"
              alt="headshot"
            />
            <div className={`origin-top-right absolute right-0 mt-2 w-44 translate-y-3 focus:outline-none ${imageModal ? "absolute" : "hidden"}`}>
              <div className="relative dropdown shadow-lg bg-white ring-1 divide-y divide-gray-100  ring-black ring-opacity-5 rounded-md" >
                <div >
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">Set status</a>
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">Profile & account</a>
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">Feedback</a>
                </div>
                <div>
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">Settings</a>
                  <a href="#" className="text-black block px-4 py-2.5 text-sm hover:bg-gray-50">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>


    </nav>
  );
}

export default Navigation