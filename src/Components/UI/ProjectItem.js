import React from 'react';
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem cursor-pointer bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage h-64 bg-cover bg-center"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
}

export default ProjectItem;
