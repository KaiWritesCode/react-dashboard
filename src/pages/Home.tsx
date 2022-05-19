import React, { useState, useEffect } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import Statbox from "../components/Statbox"
import { MenuIcon } from "@heroicons/react/solid";

function Home() {
  let [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    console.log(isOpen)

    setIsOpen(true)
  }

  return (
    <div className="flex w-full">
      <Sidebar isOpen={isOpen} />
      <MenuIcon
        onClick={openModal} className={`${`w-6 xl:hidden block cursor-pointer absolute top-6 left-6`}
        ${isOpen ? "hidden" : "block"}`} />
      <div className="w-full relative"
        onClick={() => setIsOpen(false)}>
        <Navigation isOpen={isOpen} />
        <main className="p-3">
          <div className='flex justify-evenly flex-wrap lg:flex-nowrap'>
            <Statbox type="user" />
            <Statbox type="order" />
            <Statbox type="earning" />
            <Statbox type="balance" />
          </div>
        </main>
        <div className={`${`w-full fixed h-full top-0 left-0 bottom-0 opacity-50`} ${isOpen ? "bg-black" : null}`}></div>
      </div>
    </div>
  );
}

export default Home;
