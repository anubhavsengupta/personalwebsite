import React from 'react'
import Toolcard from './UI/Cards/Toolcard'

const frameworks = [
    { title: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { title: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { title: 'Selenium', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Selenium_Logo.png' },
    { title: 'Tailwind CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { title: 'MySQL', image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg' },
    { title: 'Flask', image: '../../../assets/flasklogo1.png'},
    { title: '.NET', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg' },
    { title: 'Express.js', image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },

  ];

  const languages = [
    { title: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png' },
    { title: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { title: 'Java', image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { title: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { title: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
    { title: 'C', image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
    { title: 'C#', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png' },
    { title: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { title: 'SQL', image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' }
  ];

  const tools = [
    { title: 'GIT', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    { title: 'Docker', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/1200px-Docker-svgrepo-com.svg.png?20230427111848' },
    { title: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg' },
    { title: 'Android Studio', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Android_Studio_icon_%282020%29.svg/640px-Android_Studio_icon_%282020%29.svg.png' },
    { title: 'Postman', image: 'https://res.cloudinary.com/postman/image/upload/t_team_logo/v1629869194/team/2893aede23f01bfcbd2319326bc96a6ed0524eba759745ed6d73405a3a8b67a8' }
  ];

function Skills() {

  return (
    <div>
        <h1 className="text-4xl font-semibold text-gradient text-center mt-8">
            Skills
        </h1>
        <h1 className="text-xl font-semibold text-gradient text-center mt-8">Languages</h1>
        <Toolcard list={languages}></Toolcard>
        <h1 className="text-xl font-semibold text-gradient text-center mt-8">Frameworks</h1>
        <Toolcard list={frameworks}></Toolcard>
        <h1 className="text-xl font-semibold text-gradient text-center mt-8">Tools</h1>
        <Toolcard list={tools}></Toolcard>
    </div>
  )
}

export default Skills