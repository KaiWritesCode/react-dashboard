import React, { useState, useEffect } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import Statbox from "../components/Statbox"
import { MenuIcon } from "@heroicons/react/solid";
import Revenue from "../components/Revenue";

function Home() {
  let [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="flex w-full">
      <Sidebar isOpen={isOpen} />
      <MenuIcon
        onClick={openModal} className={`${`w-6 xl:hidden transition-all ease-in-out duration-300 block cursor-pointer absolute top-6 left-6`}
        ${isOpen ? "invisible opacity-0" : "visible opacity-100"}`} />
      <div className="w-full "
        onClick={() => setIsOpen(false)}>
        <Navigation isOpen={isOpen} />
        <main className="p-3">
          <div className='flex justify-evenly flex-wrap lg:flex-nowrap'>
            <Statbox type="user" />
            <Statbox type="order" />
            <Statbox type="earning" />
            <Statbox type="balance" />
          </div>
          <div>
            <Revenue />
          </div>
        </main>
        <div className={`${`w-full xl:bg-transparent fixed h-full top-0 left-0 bottom-0 pointer-events-none opacity-50`} 
        ${isOpen ? "bg-black" : "bg-transparent"}`}></div>
      </div>
    </div>
  );
}

export default Home;
