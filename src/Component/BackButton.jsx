import React from 'react'
import angleleft from '../assets/angle-left.svg'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate();
        const back = ()=>{
            navigate(-1)
        }
  return (
    <div className='p-4 fixed'>
       <button className='shadow rounded-2xl' onClick={back}>
        <img src={angleleft} className='w-9 m-3' />
       </button>
    </div>
  )
}

export default BackButton
