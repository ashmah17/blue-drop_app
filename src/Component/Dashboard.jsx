import React from 'react'
import Sidebar from './Sidebar'
import bell from '../assets/bell-c.svg' 
import profile from '../assets/profile-b.svg' 
import search from '../assets/search-g.svg' 
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'



const Dashboard = () => {
  const [Hover, setHover] = useState(false);  

  return (
    <div className=' w-full bg-gray-100 flex'>
        <Sidebar setHover={setHover} Hover={Hover} />
        <div className={`${Hover ? 'md:ml-[38vh]' : ' md:ml-[13vh]'} transition-all duration-300  w-[100%] z-30 h-[100vh]`}>
            <h2 className=' mt-3 font-primaryRegular ml-3 text-xl text-gray-400 w-[20%]'>Hello Aysha</h2>
          <div className='p-3 flex  mt-3'>
            <div className='flex w-[100%] justify-between '>
              <div  className='bg-gray-300 p-1 flex rounded-3xl w-[50%]'>
                 <img src={search} className='ml-2 w-9 cursor-pointer ' />
                <input type="text" className='w-full rounded-full bg-gray-300 outline-none pl-3 text-white' />
              </div>

             <div className='flex w-[10%] justify-between'>
                <Link to='/Profile'>
                  <img src={profile} className='w-10' /> </Link>
                <Link to='/Notification'>
              
              <div className='relative cursor-pointer'>
                <img src={bell} className='w-10' />
                <span className="bg-green-500 w-[1.1rem] h-[1.1rem] absolute rounded-full top-0 right-0 border border-2"></span>
              </div>
              </Link>
             </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Dashboard
