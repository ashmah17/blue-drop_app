import React from 'react'
import drop from '../assets/dropy.svg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
// import { div } from 'framer-motion/client'

const Landing = () => {

  const gridContainer ={
    hidden: {opacity:0},
        show:{
        opacity:1,
       
        } 
  }
  const gridSquare={
    hidden: {opacity:0},
     show:{opacity:1}
  }

  return (
    <>
 
    <motion.section 
     variants={gridContainer}
     initial='hidden'
     animate='show'
    className='flex flex-col justify-center items-center h-[100vh]'>
        
        <motion.div variants={gridSquare}
            className='flex items-center'>
            <img src={drop} 
             initial={{opasicity:0, y:100}}
             animate={{opacity:0, y:100}}
             transition={{duration:1, ease:'easeOut', delay:'0.2'}}
             className='w-[6rem]' />
             
            <h1 className='text-8xl font-primaryBold text'>Bluedrop</h1>
        </motion.div>



        <div className=' w-full flex justify-center'>
            <p className='m-4 text-xl text font-primaryBold'>Welcome to the best E-commerce Website</p>
        </div>
        <Link to='/Login'>
            <button className='backB p-1 rounded w-[7rem] text-gray-200'>Get Started</button>
        </Link>
    </motion.section>

    </>
  )
}

export default Landing
