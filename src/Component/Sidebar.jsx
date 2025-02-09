 import React from 'react'
 import home from '../assets/home-g.svg' 
 import profile from '../assets/profile-g.svg' 
 import drop from '../assets/dropy.svg' 
 import bell from '../assets/bell-g.svg' 
 import bookg from '../assets/books-g.svg' 
 import search from '../assets/search-g.svg' 
 import downloadg from '../assets/downdoad-g.svg' 
 import nowReading from '../assets/nowReading-g.svg'
import { Link } from 'react-router-dom'
import '../App'
import { useState } from 'react'


 const Sidebar = ({Hover, setHover}) => {

    const Side = [
        {title:'Home' ,img:home, path:'/Dashboard'},
        {title:'Downloads',img:downloadg, path:'/downloads'},
        {title:'Reading now', img:nowReading, path:'/Now-Reading'},
        {title:'Book Store', img:bookg, path:'/Book-Store'}
    ]
    

   return (
     <div>
       <div className={`w-full   ${Hover? 'md:w-[36vh] md:shadow backB':'backB md:shadow md:w-[5rem]'} z-40  transition-all duration-300 md:flex-col flex justify-between overflow-hidden  p-3 w-ful h-[5rem]  md:rounded md:m-2 rounded-tr-[3rem] rounded-tl-[3rem] md:left-0 md:h-[97vh] fixed bottom-0`}
        onMouseOver={()=> setHover(true)}
        onMouseLeave={()=> setHover(false)}
       >
        <div className='hidden md:block flex md:w-[32vh] gap-[3rem]  hover:bg-[#7f83f2] transition-all duration-300 cursor-pointer p-2 rounded'>
          <img src={drop} className=' hidden  md:block shad rounded-full p-2 w-[3rem]' />
            <h1>BlueDrop</h1>
        </div>

          <div className='flex md:flex-col w-[85%] justify-between'>
              {Side.map((nav, index )=>(
                    <Link to={nav.path}>
                    <span className='flex  md:w-[32vh] gap-[3rem]  hover:bg-[#7f83f2] transition-all duration-300 cursor-pointer p-2 rounded' key={index}>
                        <img src={nav.img} className='w-[2.4rem]' />
                        <h2 className='hidden md:block ml-[1rem] text-[1.2rem] font-primaryRegular text-gray-200'>{nav.title}</h2>
                    </span>
                  </Link>
              ))}
          </div>

            <Link to='/Notification'>
              <div className=' relative md:overflow-hidden md:bg-gray-300 md:h-[10rem] flex md:flex-col justify-between items-center rounded-full cursor-pointer'>
                <img src={bell} className='w-[3rem] md:w-10 md:p-1 md:bg-[#7f83f2] rounded-full mt-2' />
                  <h1 className={` hidden md:block absolute bottom-10 font-primaryBold text-blue-800 transition-all duration-300 ${Hover ? '': ' rotate-[270deg]'}`}>
                    {Hover ? <h1 className='flex flex-col items-center'><span>Subscribe</span>  to our Newsletter</h1>  : <h1>Subscribe</h1>}
                  </h1>
              </div>
              </Link>

       </div>
     </div>
   )
 }
 
 export default Sidebar
 