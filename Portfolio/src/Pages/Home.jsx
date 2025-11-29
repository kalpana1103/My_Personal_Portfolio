import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProfilePic from './Profilepic'
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

const Home = () => {
  return (
    <div className=''>
      <div className='text-sm text-gray-600 ml-28 mt-20'>
        HELLO,MY NAME IS
      </div>

      <div className="flex items-center justify-between  gap-10 p-6">
        <div className='ml-20'>
          <h1 className="text-5xl font-bold">Kalpana Vobinaboina</h1>
          <p className="text-3xl text-gray-600">Web Developer</p>
        </div>
<div className='mr-20'><ProfilePic /></div>
        
      </div>
<div className='ml-25'>
  <p className='flex font-roboto text-xl  gap-3 '>
    <MdEmail />kalpanasalla99@gmail.com
  </p>
  <p className='flex item-center gap-3 '>
<FaSquarePhone />7659872819
  </p>
</div>
      
    </div>
  )
}

export default Home
