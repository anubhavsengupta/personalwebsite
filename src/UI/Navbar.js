import React from 'react'
import {Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import TocIcon from '@mui/icons-material/Toc';
import { useState, useEffect } from'react';


function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  // notifies local user location.
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);
  
  useEffect(() => { 
    setExpandNavbar(false);
    

  }, [location]);

  useEffect(() => {
    // Check if the current location is on the "Experiences" tab
    if (location.pathname === '/experience') {
      setSticky(false); // Unstick the navbar
    } else {
      setSticky(true); // Stick the navbar for other tabs
    }
  }, [location]);

  return (
    <div id={expandNavbar ? "open" : "close"} className={isSticky ? "navbar sticky" : "navbar"}>  
      <div className="toggleButton">
        
        <button onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}>
          <TocIcon>

          </TocIcon>
        </button>
        </div>
        <div className="links">
            <Link to="/">Home </Link>
            <Link to="/projects">Projects </Link>
            <Link to="/experience">Experience </Link>
        </div> 
    </div>
  )
}

export default Navbar