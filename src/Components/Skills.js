import React from 'react'
import Toolcard from './UI/Cards/Toolcard'
function Skills() {
    const languages = [
        { title: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
        { title: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },

        // Add more cards as needed
      ];
  return (
    <div>
        <h1 className="text-4xl font-semibold text-gradient text-center mt-8">
            Skills
        </h1>
        <h1 className="text-center mt-14">Languages</h1>
        <Toolcard list={languages}></Toolcard>
        <h1 className="text-center mt-14">Frameworks</h1>
        <Toolcard list={languages}></Toolcard>
        <h1 className="text-center mt-14">Tools</h1>
        <Toolcard list={languages}></Toolcard>
    </div>
  )
}

export default Skills