import React from 'react'
import { Link } from 'react-router-dom'
import drop from '../assets/drop.svg'

const Register = () => {
  return (
    <>
            <div className='flex justify-center items-center h-[100vh]'>
                <div className='w-[50%] md:h-[70vh] bg-white rounded-3xl border p-4'>
                            <span className='flex justify-center'>
                                <img src={drop} className='w-[1.9rem] mr-2' />
                                <h1 className='font-primaryRegula text-2xl font-semibold text'>Bluedrop</h1>
                            </span>
                            <span className='p-5 mt-2 flex justify-between '>
                                <Link to='/Login' className='w-full mr-2'>
                                     <button className='w-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 m-1 p-2 rounded text-white font-primaryRegula'>Login</button>
                                </Link>
                                    <button className='w-full  m-1 p-2 backB rounded text-white font-primaryRegula'>Register</button>
                             </span>

                            <div className=' md:grid md:grid-cols-2 md:gap-4'>
                                 <div className='mt-4'>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Full Name </label>
                                    <input placeholder='' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>

                                <div className='mt-4  '>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Email </label>
                                    <input type='password' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>

                                <div className='mt-4  '>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Address </label>
                                    <input type='password' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>

                                <div className='mt-4  '>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Phone Number </label>
                                    <input type='password' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>

                                <div className='mt-4  '>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Password </label>
                                    <input type='password' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>

                                <div className='mt-4  '>
                                    <label className='text-gray-500 font-primaryRegular m-2 '>Confirm Password </label>
                                    <input type='password' className='outline-none bg-gray-100 mt-3 p-1 w-full rounded' />
                                </div>
                            </div>
                        
                        <Link to='Dashboard' className=' mt-6'>
                         <button className='w-full p-2 backB rounded-xl text-white'>Sign Up</button>

                        </Link>
                </div>
            </div>
    </>
  )
}

export default Register
      