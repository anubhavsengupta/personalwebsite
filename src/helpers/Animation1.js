import React from 'react'
import { motion } from 'framer-motion';
const animationData = {
    initial: {opacity: 0, x: 100},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: -100}, 
}

function Animation1({children}) {
  return (
    <motion.div variants={animationData} initial="initial"
    animate="animate" exit="exit"
    transition={{duration: 1}}>
        {children}
    </motion.div>
  )
}

export default Animation1