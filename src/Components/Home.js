import React from 'react'
import "../styles/Home.css";
import {motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from'react';
import personalimg from '../assets/myphoto.jpg';



function Home() {
  const text = "A student with a passion for software development and learning!";
  const desc = "Hi! My name is Akki!".split(" ");
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200; // Adjust the threshold as needed

      // Check if the scroll position is beyond the threshold
      setIsVisible(scrollY > threshold);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="home">
    
      <div className={`about ${isVisible ? 'visible' : ''}`} style={{ whiteSpace: "nowrap" }}>
        <AnimatePresence>
          <div className="mydesc">
          {desc.map((el, i) => (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              {el}{" "}
            </motion.h2>
          ))}
        </div>
       </AnimatePresence> 

        <div className="desc">
          <p>{text}</p>
        </div>


      </div>
      <div className="aboutme">

        <div className="photo">
            <img id ="personal" src={personalimg} alt="me"></img>
        </div>
        <div className={`skills ${isVisible ? 'visible' : ''}`}>
          <h1>About me</h1>
          <p> I am a first year Computer Science student at the University of Waterloo, and am currently
             seeking 2024 Summer summer internship oppurtunities.
          </p>
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

          <div className="ProjectButton">
            <button>Projects</button>
            <button>Experience</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home