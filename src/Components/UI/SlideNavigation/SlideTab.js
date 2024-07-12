import React from 'react'
import { useState } from 'react' 
import { motion } from 'framer-motion'
import Tab from './Tab'
import { Link } from 'react-router-dom';
function SlideTab() {
  return (
    <div className="grid place-content-center">
        <SlideTabs></SlideTabs>
    </div>
  )
}

const SlideTabs = () => {
    const [pos, setPos] = useState({
        left: 0,
        width: 0,
        opacity: 0
    })
    return (
        <ul className="relative flex w-fit rounded-full border-2 border-orange-200 bg-white p-1">
            <Tab setPosition={setPos}> <Link to="/">Home</Link></Tab>
            <Tab setPosition={setPos}><a href="/#projects">Projects</a></Tab>
            <Tab setPosition={setPos}><a href="/#experience">Experience</a></Tab>
            <UserCursor position={pos}></UserCursor>
        </ul> 
    )
}

const UserCursor = (props) => {
    return <motion.li className="absolute z-0 h-7 rounded-full bg-orange-200 md:h-12 "
    animate={props.position}>

    </motion.li>
}

export default SlideTab