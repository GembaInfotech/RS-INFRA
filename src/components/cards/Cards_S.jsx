import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Card = ({ card, onSelectCard }) => {
  return (
    <div
      className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl mb-4 p-3 sm:p-4 md:p-5 w-full max-w-xs sm:max-w-md lg:max-w-sm xl:max-w-md 2xl:max-w-lg"
      onClick={() => onSelectCard(card)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <h2 className="text-md sm:text-lg md:text-xl font-bold">{card.title}</h2>
        </div>
        <span className="text-[#4a4c50] text-md sm:text-lg md:text-xl">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
      <div className="bg-gray-100 p-2 sm:p-2 md:p-3 rounded-b-lg mt-2 mb-0">
        <p className="text-gray-700 text-xs sm:text-sm md:text-base">Click to view details</p>
      </div>
    </div>
  );
};

export default Card;
