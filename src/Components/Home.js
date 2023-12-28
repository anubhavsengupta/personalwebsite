import React from 'react'
import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Akki!</h2>
        <p>A student with a passion for software development and learning!
          
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol>
          <li className="item">
            <h2>Tools</h2>
            <span>Docker Git NPM Android Studio</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>Python Java Javascript HTML CSS </span>
          </li>

          <li className="item">
            <h2>Frameworks</h2>
            <span>ReactJS MongoDB Selenium BeautifulSoup Flask Bootstrap </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home