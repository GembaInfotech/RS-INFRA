import React from 'react';
import Card from '../cards/Cards_S';

const Sidebar = ({ cards, onSelectCard }) => {
  return (
    <div className="bg-[#BBBFCA] p-4 border-r border-[#BBBFCA] h-full overflow-hidden relative flex flex-col">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl bg-white font-bold mb-4 sticky top-0 z-10">
        Dashboards
      </h1>
      <div className="overflow-y-auto flex-grow scrollbar-hidden">
        {cards.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm md:text-base">No content available</p>
          </div>
        ) : (
          cards.map((card) => (
            <Card key={card.id} card={card} onSelectCard={onSelectCard} />
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
