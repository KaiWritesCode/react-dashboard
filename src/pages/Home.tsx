import React, { useState, useEffect } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
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
        <main className='flex justify-evenly flex-wrap md:flex-nowrap'>
          <Statbox type="user" />
          <Statbox type="order" />
          <Statbox type="earning" />
          <Statbox type="balance" />
        </main>
      </div>

    </div>
  );
}

export default Home;
