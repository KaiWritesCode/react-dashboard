import React, { useState, useEffect } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/sidebar/Sidebar";
import Statbox from "../components/Statbox"

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)

  }

  useEffect(() => {
    openModal()
  }, [setIsOpen])

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full" onClick={() => setIsOpen(false)}>
        <Navigation openModal={openModal} isOpen={isOpen} />
        <main className="p-3">
          <div className='flex justify-evenly flex-wrap lg:flex-nowrap'>
            <Statbox type="user" />
            <Statbox type="order" />
            <Statbox type="earning" />
            <Statbox type="balance" />
          </div>
        </main>
      </div>

    </div>
  );
}

export default Home;
