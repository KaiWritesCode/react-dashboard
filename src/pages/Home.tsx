import React, { useState } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import Statbox from "../components/Statbox"
import { MenuIcon } from "@heroicons/react/solid";
import Chart from "../components/Chart"
import Revenue from "../components/Revenue";
import Orders from "../components/Orders";
import Products from "../components/Products";

function Home() {
  let [isOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  return (
    <div className="flex w-full overflow-hidden">
      <Sidebar isOpen={isOpen} />
      <MenuIcon
        onClick={openModal} className={`${`w-6 xl:hidden transition-all ease-in-out duration-300 block cursor-pointer absolute top-6 left-6`}
        ${isOpen ? "invisible opacity-0" : "visible opacity-100"}`} />
      <div className="w-full overflow-scroll ml-0 xl:ml-[280px]"
        onClick={() => setIsOpen(false)}>
        <Navigation isOpen={isOpen} />
        <main className="p-3">
          <div className='flex justify-evenly flex-wrap lg:flex-nowrap'>
            <Statbox type="user" />
            <Statbox type="order" />
            <Statbox type="earning" />
            <Statbox type="balance" />
          </div>
          <div className="flex-col md:items-stretch items-center mt-3 mx-1 h-full gap-5 flex md:flex-row">
            <Revenue />
            <Chart />
          </div>
          <div className="flex-col md:items-stretch items-center mt-5 mx-1 h-full gap-5 flex md:flex-row">
            <div className="md:w-[65%] w-full flex">  <Orders /></div>
            <div className="md:w-[35%] w-full flex">    <Products /></div>


          </div>
        </main>
        <div className={`${`w-full xl:bg-transparent fixed h-full top-0 left-0 bottom-0 pointer-events-none opacity-50`} 
        ${isOpen ? "bg-black" : "bg-transparent"}`}></div>
      </div>
    </div>
  );
}

export default Home;
