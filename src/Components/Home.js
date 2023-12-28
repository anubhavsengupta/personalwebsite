import React from 'react'
import "../styles/Home.css";
import {motion, AnimatePresence } from 'framer-motion';




function Home() {
  const text = "A student with a passion for software development and learning!".split(" ");
  const desc = "Hi! My name is Akki!".split(" ");
  

  return (
    
    <div className="home">
      <div className="about" style={{ whiteSpace: "nowrap" }}>
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
          {text.map((el, i) => (
          <motion.span
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: i / 10
            }}
            key={i}
          >
            {el}{" "}
          </motion.span>
        ))}
        </div>


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