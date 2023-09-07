
import React from 'react'
import Image from './images/myimage.png'
import Img from './images/mypic.png'
import Myimage from './images/myprofile.jpeg'


export default function () {
  return (
    <div className=' home-container bg-black flex items-center justify-center pl-20'>
      <div className=' bg-transparent  h-3/5'>
        <h1 className=' text-slate-100  font-semibold text-4xl mb-5'>Hello, I am <span className=' text-orange-500 italic font-mono'>manohar maheshwar</span></h1>
        <h2 className=' text-slate-500 font-semibold  text-3xl'>I' am a web developer</h2>
        <p className=' mt-8 font-normal text-slate-400 text-lg'>FullStack developer & Passion for Building new Projects with new Challenges to solve with full functionality. Strong Javascript & React Js. There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.</p>

        <button className=' w-20 rounded-md h-8 bg-orange-500 mt-5 text-white'>Contact</button>
      </div>
      <div className=" flex h-full w-full items-center justify-center image w-2/5 h-3/5">
        <img className=' myimage opacity-50 w-full h-full rounded-2xl' src={Img} alt="my-img" />
      </div>
    </div>
  )
}
