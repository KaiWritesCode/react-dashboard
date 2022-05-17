import React, { useState, useEffect } from "react";
import {
  GlobeAltIcon,
  ChatAltIcon,
  BellIcon,
  AdjustmentsIcon,
  MoonIcon,
  MenuIcon
} from "@heroicons/react/outline";

export default function Navigation({ isOpen, openModal }: any) {


  return (
    <nav>
      <div className="flex items-center justify-between border px-6 py-2">
        <MenuIcon
          onClick={openModal} className={`${`w-6 xl:hidden block cursor-pointer absolute
          `} ${isOpen ? "hidden" : "block"}`} />

        <section>
          <div className="ml-8 xl:ml-0 flex items-center justify-center w-full">
            <div className="flex border-2 rounded">
              <input
                type="text"
                className="px-4 py-1.5 w-24 sm:w-40"
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
          <div className="ml-5 text-gray-700 hidden sm:block cursor-pointer">
            <MoonIcon width="25" />
          </div>
          <div className="ml-4 text-gray-700 relative  cursor-pointer">
            <BellIcon width="25" />
            <div className="w-4 h-4 bg-red-600 text-white rounded-full flex justify-center
             items-center text-sm absolute -top-2 -right-1 weight">1</div>
          </div>
          <div className="ml-4 text-gray-700 relative cursor-pointer hidden sm:block">
            <div className="w-4 h-4 bg-red-600 text-white rounded-full flex justify-center items-center
             text-sm absolute -top-2 -right-1 ">2</div>
            <ChatAltIcon width="25" />
          </div>
          <div className="ml-4 text-gray-700 cursor-pointer hidden sm:block">
            <AdjustmentsIcon width="25" />
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
