import React from "react";
import {
  GlobeAltIcon,
  ChatAltIcon,
  BellIcon,
  AdjustmentsIcon,
  MoonIcon,
} from "@heroicons/react/outline";

interface Iprops {
  isOpen: boolean
}

const Navigation = ({ isOpen }: Iprops) => {
  return (
    <nav>
      <div className="flex items-center  justify-between border px-6 py-2">
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

          <div className="ml-4 text-gray-700 relative  cursor-pointer">
            <BellIcon width="25" />
            <div className="w-2 h-2 bg-blue-500 text-white rounded-full flex justify-center
             items-center text-sm absolute -top-0.5 right-0.5 weight"></div>
          </div>
          <div className="ml-4 text-gray-700 relative cursor-pointer">
            {/* <div className="w-3 h-3 bg-blue-700 text-white rounded-full flex justify-center
             items-center text-sm absolute -top-1 -right-1 weight"></div> */}
            <ChatAltIcon width="25" />
          </div>

          <div className="ml-5 text-gray-700 cursor-pointer">
            <img
              src="/images/headshot.jpg"
              className="rounded-full"
              width="50"
              alt="headshot"
            />
          </div>
        </section>
      </div>
    </nav>
  );
}

export default Navigation