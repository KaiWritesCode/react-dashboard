import React, { useState, useEffect } from "react";
import "../App.css"
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
    console.log(isOpen)
  }

  useEffect(() => {
    openModal()
  }, [setIsOpen])

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full" onClick={() => setIsOpen(false)}>
        <Navigation openModal={openModal} isOpen={isOpen} />
      </div>

    </div>
  );
}

export default Home;
