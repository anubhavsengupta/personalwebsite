import React from 'react'
import ProjectItem from '../UI/ProjectItem'
import "../styles/Projects.css"

import {projectList} from '../helpers/ProjectList'
function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, idx) => {
          console.log(project);
            return <ProjectItem image={project.image} name={project.name} id={idx}/>
          })}
          
        
        
      </div>
    </div>
  )
}

export default Projects