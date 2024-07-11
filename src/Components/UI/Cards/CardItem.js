import React from 'react';
const CardItem = ({ title, image }) => {
  
  return (
    <div className="bg-black text-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center w-30 h-30 m-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl
        hover:text-orange-500 transition-colors duration-300">
      <h1 className="text-md font-semibold mb-2">{title}</h1>
      <img src={image} alt={title} className="h-16 w-16 object-contain" />
    </div>
  );
};

export default CardItem;
