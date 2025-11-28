import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProfilePic from './Profilepic'

const Home = () => {
  return (
    <div>
      

      <div className="flex items-center justify-between  gap-10 p-6">
        <div className='ml-20'>
          <h1 className="text-3xl font-bold">Kalpana Vobinaboina</h1>
          <p className="text-xl text-gray-600">Web Developer</p>
        </div>
<div className='mr-20'><ProfilePic /></div>
        
      </div>

      
    </div>
  )
}

export default Home
