import React, { useState, useEffect } from 'react';
import Sidebar from './screen/Sidebar';
import Dashboard from './screen/Dashboard';
import CardsData from './links/CardsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [cards, setCards] = useState(CardsData);  // State to hold cards data
  const [selectedCard, setSelectedCard] = useState(CardsData[0]);  // Initially selected card
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);  // Start with sidebar hidden

  // Automatically change card every 15 seconds (optional)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cards.length;
        setSelectedCard(cards[nextIndex]);
        return nextIndex;
      });
    }, 15000); // Change every 15 seconds

    return () => clearInterval(intervalId);  // Clean up interval on unmount
  }, [cards]);

  // Toggle Sidebar Visibility
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar section */}
      {/* <div
        className={`transition-all duration-300 ${sidebarOpen ? 'lg:w-1/4 w-full' : 'w-0'} 
                    h-full overflow-hidden lg:block block overflow-hidden`}>
        <Sidebar cards={cards} onSelectCard={setSelectedCard} /> */}
        
        {/* Sidebar toggle button - visible only on small screens */}
        {/* <button
          onClick={toggleSidebar}
          className="absolute top-4 z-20 bg-[#4a4c50] text-white p-2 px-3 ml-1">
          <FontAwesomeIcon
            icon={faBars}
            className={`transform transition-all duration-300 ${sidebarOpen ? 'rotate-180' : 'rotate-0'}`}
            size="lg"
          />
        </button>
      </div> */}

      {/* Dashboard section */}
      <div
        className={`transition-all duration-300 ${sidebarOpen ? 'lg:w-3/4 w-full' : 'w-full'}`}>
        <Dashboard card={selectedCard} />
      </div>
    </div>
  );
};

export default Home;
