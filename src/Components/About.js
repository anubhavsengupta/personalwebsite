import React from 'react'
import personalimg from '../assets/myphoto1.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Animation1 from '../helpers/Animation1';
function About() {

    return (
        <Animation1>
            <div className="about flex flex-col md:flex-row justify-between items-baseline mx-4 md:mx-12 mt-12 md:mt-32">
                <div className="flex flex-col justify-center items-center mr-4 flex-1">
                    <h1 className="font-raleway text-7xl text-center">Hi, my name is Akki.</h1>

                    <div className="flex space-x-6 justify-center items-center mt-4">
                        <a href="mailto:a24sengu@uwaterloo.ca" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" className="text-gray-400 hover:text-orange-300 transition duration-300" />
                        </a>
                        <a href="https://github.com/anubhavsengupta" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="text-gray-400 hover:text-orange-300 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/akkisengupta" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-gray-400 hover:text-orange-300 transition duration-300" />
                        </a>
                    </div>

                    <img src={personalimg} alt="Personal" className="w-80 h-80 rounded-full object-cover mt-8 md:mt-24" />
                </div>
    
                <div className="flex flex-col justify-center items-center md:items-start md:justify-star md:items-center text-center flex-1">
                    <h1 className="font-raleway text-6xl mb-4">About Me</h1>
                    <p className="text-lg">
                        I am a second-year Computer Science student at the University of Waterloo, and am currently
                        seeking 2025 Winter internship opportunities. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec accumsan viverra lacinia. Integer eleifend dapibus metus in efficitur. Vivamus vulputate leo metus, a imperdiet tortor laoreet a. Ut quis dui mi. Suspendisse ac dolor ex. In hac habitasse platea dictumst. Duis accumsan justo eget cursus dignissim.
                    </p>
                </div>
        </div>
      </Animation1>
    )
}

export default About