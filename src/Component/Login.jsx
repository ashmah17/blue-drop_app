import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import password from '../assets/password.svg'
import graypassword from '../assets/gray-password.svg'
import drop from '../assets/drop.svg'
import grayfingerscan from '../assets/gray-finger-scan.svg'
import fingerscan from '../assets/finger-scan.svg'
import facescan from '../assets/face-scan.svg'
import grayfacescan from '../assets/gray-face-scan.svg'
import BackButton from './BackButton'

const Login = () => {
    const [faceScan, setfaceScan] = useState(false)
    const handleFaceScan = ()=>{
        setfaceScan(!faceScan)
    }
    const [fingerScan, setfingerScan] = useState(false)
    const handleFingerScan = ()=>{
        setfingerScan(!fingerScan)
    }
    const [Scan, setScan] = useState(false)
    const handleScan = ()=>{
        setScan(!Scan)
    }

  return (

    <>
    <BackButton/>
       <div className='flex justify-center items-center h-[100vh]'>
            <div className='w-[50%] bg-white h-[70vh] rounded-3xl border p-4'>
                    <div className={`${faceScan ? 'hidden': '' } ${fingerScan ? 'hidden': ''}`}>
                        <span className='flex justify-center'>
                            <img src={drop} className='w-[1.9rem] mr-2' />
                            <h1 className='font-primaryRegula text-2xl font-semibold text'>BlueTick</h1>
                        </span>
                        <span className='p-5 mt-10 flex justify-between '>
                            <button className='w-full backB m-1 p-2 rounded text-white font-primaryRegula'>Login</button>
                            <Link to='/Register' className='w-full'>
                                <button className='w-full bg-gray-300 hover:bg-gray-400 transition-all duration-300 m-1 p-2 rounded text-white font-primaryRegula'>Register</button>
                            </Link>
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
                            <img src={grayfacescan} className='w-7 m-2 cursor-pointer'onClick={handleFaceScan} />
                            <img src={grayfingerscan} className='w-7 m-2 cursor-pointer' onClick={handleFingerScan} />
                        </div>
                    </div>

                    <div className={`${faceScan? '': 'hidden'} ${fingerScan ? 'hidden':''} flex flex-col items-center justify-center`}>
                    <div>
                        {Scan ?  <img src={facescan} className='w-[20rem]' /> :  <img src={grayfacescan} className='w-[20rem]' />}
                    </div>
                    <div className=' w-[100%]'>
                        {
                            Scan ? <Link to='/Dashboard'><button className='backB w-[100%] p-2 mt-10 rounded-xl text-white font-primaryRegular ' onClick={handleScan}>Scanned proceed</button></Link>
                                    :
                                    <button className='backB w-full p-2 mt-10 rounded-xl text-white font-primaryRegular ' onClick={handleScan}>Scan</button>

                        }
                    </div>
                    <div className=' flex  p-4 justify-center'>
                            <img src={graypassword} className='w-8 m-2 cursor-pointer'onClick={handleFaceScan} />
                            <img src={facescan} className='w-7 m-2 cursor-pointer'/>
                            <img src={grayfingerscan} className='w-7 m-2 cursor-pointer' onClick={handleFingerScan} />
                        </div>
                    </div> 

                    <div className={`${fingerScan? '': 'hidden'} ${faceScan? '': ''} flex flex-col items-center justify-center`}>
                    <div>
                        {Scan ?  <img src={fingerscan} className='w-[20rem]' /> :  <img src={grayfingerscan} className='w-[20rem]' />}
                    </div>
                    <div className=' w-[100%]'>
                        {
                            Scan ? <Link to='/Dashboard'><button className='backB w-[100%] p-2 mt-10 rounded-xl text-white font-primaryRegular ' onClick={handleScan}>Scanned proceed</button></Link>
                                    :
                                    <button className='backB w-full p-2 mt-10 rounded-xl text-white font-primaryRegular ' onClick={handleScan}>Scan</button>

                        }
                    </div>
                    <div className=' flex  p-4 justify-center'>
                            <img src={graypassword} className='w-8 m-2 cursor-pointer' onClick={handleFingerScan} />
                            <img src={grayfacescan} className='w-7 m-2 cursor-pointer'onClick={handleFaceScan} />
                            <img src={fingerscan} className='w-7 m-2 cursor-pointer' />
                        </div>
                    </div>
                    <Link to='/Dashboard' className=' mt-4'>
                         <button className='w-full p-2 backB rounded-xl text-white'>Sign Up</button>

                    </Link >

            </div>
            
        
       </div>
    </>
  )
}

export default Login
