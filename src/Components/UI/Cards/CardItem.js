import React from 'react';

const CardItem = ({ title, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center w-24 h-24 m-4">
      <h1 className="text-md font-semibold mb-2">{title}</h1>
      <img src={image} alt={title} className="h-8 w-8 object-contain" />
    </div>
  );
};

export default CardItem;