import React from 'react';
import { useParams } from "react-router-dom";
import { projectList } from '../helpers/ProjectList';
import Animation1 from '../helpers/Animation1';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  
  return (
    <Animation1>
      <div className="project flex flex-col items-center justify-center min-h-screen bg-white text-orange-600 p-4">
        <div className="s1 text-center">
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <img src={project.image} alt="Project" className="w-48 h-auto rounded-lg shadow-md mb-4" />
        </div>
        <div className="s2 text-center">
          <p className="mb-2"><b>Skills:</b> {project.skills}</p>
          <b><p><a href={project.link} className="text-blue-400 hover:text-blue-800">Github</a></p></b>
        </div>
      </div>
    </Animation1>
  );
}

export default ProjectDisplay;
