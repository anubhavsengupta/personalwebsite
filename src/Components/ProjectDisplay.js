import React from 'react'
import { useParams } from "react-router-dom";
import {projectList} from '../helpers/ProjectList'
import Animation1 from '../helpers/Animation1';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
      <Animation1>

      
      <div className="project">
        <div className="s1">
          <h1>{project.name}</h1>
          <img src={project.image} alt="Project"/>
        </div>

        <div className="s2">
          <p><b>Skills</b> {project.skills}</p>
          <p><a href="https://github.com/anubhavsengupta/">Github</a></p>
        </div>
      </div>
    </Animation1>
    )
}

export default ProjectDisplay