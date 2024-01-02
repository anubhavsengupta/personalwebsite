import React from 'react'
import ProjectItem from '../UI/ProjectItem'
import "../styles/Projects.css"
import Animation1 from '../helpers/Animation1'
import {projectList} from '../helpers/ProjectList'
function Projects() {
  return (
    <Animation1>

   
    <div className="myprojects">
      <h1>My Personal Projects</h1>
      <div className="list">
        {projectList.map((project, idx) => {
          console.log(project);
            return <ProjectItem image={project.image} name={project.name} id={idx}/>
          })}

      </div>
    </div>
    </Animation1>
  )
}

export default Projects