import React from 'react'
import ProjectItem from './UI/ProjectItem'
import Animation1 from '../helpers/Animation1'
import {projectList} from '../helpers/ProjectList'
function Projects() {
  return (
    <Animation1>

    <h1 className="text-center font-raleway text-4xl pt-12 md:pt-40">My Personal Projects</h1>
    <div>
      
      <div className="flex flex-wrap justify-center gap-8 p-4">
        {projectList.map((project, idx) => {
            return <ProjectItem image={project.image} name={project.name} id={idx}/>
          })}

      </div>
    </div>
    </Animation1>
  )
}

export default Projects