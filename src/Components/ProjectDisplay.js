import React from 'react'
import { useParams } from "react-router-dom";
import {projectList} from '../helpers/ProjectList'
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css'
import Animation1 from '../helpers/Animation1';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
    return (
      <Animation1>

      
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="Project"/>
        <p><b>Skills</b> {project.skills}</p>
        <GitHubIcon />
      </div>
    </Animation1>
    )
}

export default ProjectDisplay