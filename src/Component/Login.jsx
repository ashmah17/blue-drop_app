import React from 'react'
import { Link } from 'react-router-dom'
import password from '../assets/password.svg'
import drop from '../assets/drop.svg'
import fingerscan from '../assets/finger-scan.svg'
import facescan from '../assets/face-scan.svg'

const Login = () => {
  return (
    <>
       <div className='flex justify-center items-center h-[100vh]'>
        <div className='w-[50%] bg-white h-[70vh] rounded-3xl border p-4'>
                <span className='flex justify-center'>
                    <img src={drop} className='w-[1.9rem] mr-2' />
                    <h1 className='font-primaryRegula text-2xl font-semibold text'>BlueTick</h1>
                </span>
                <span className='p-5 mt-10 flex justify-between '>
                    <button className='w-full bg-blue-900 m-1 p-2 rounded text-white font-primaryRegula'>Login</button>
                    <button className='w-full bg-gray-400 m-1 p-2 rounded text-white font-primaryRegula'>Register</button>
                </span>
                <div className=''>
                    <label className='text-gray-500 font-primaryRegular m-2 '>Email </label>
                    <input placeholder='' className='outline-none bg-gray-100 mt-3 p-2 w-full rounded' />
                </div>

                <div className='mt-6  '>
                    <label className='text-gray-500 font-primaryRegular m-2 '>Password </label>
                    <input type='password' className='outline-none bg-gray-100 mt-3 p-2 w-full rounded' />
                </div>
                <div className=' flex  p-4 justify-center'>
                    <img src={password} className='w-8 m-2 cursor-pointer' />
                    <img src={facescan} className='w-7 m-2 cursor-pointer' />
                    <img src={fingerscan} className='w-7 m-2 cursor-pointer' />
                </div>

            </div>
    
       </div>
    </>
  )
}

export default Login
