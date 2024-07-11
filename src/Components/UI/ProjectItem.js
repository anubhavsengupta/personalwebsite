import React from 'react';
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden 
      transition transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5
      bg-gradient-to-r from-orange-300 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 
      hover:bg-gradient-to-l hover:shadow-3xl hover:shadow-orange-600/40"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage h-64 bg-cover bg-center bg-white"
      />
      <div className="p-6 bg-white hover:bg-orange-100">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
}

export default ProjectItem;
