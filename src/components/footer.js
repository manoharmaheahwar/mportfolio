import React from 'react'
import Github from './images/github-mark.png'
import Linkdin from './images/linkedin.png';
import Instagram from './images/instagram.jpeg'

export default function contact() {
  return (
    <div className=' footer flex justify-around items-center footer bg-gray-300 mt-0 pt-0'>
        <div className=' social-links justify-evenly w-1/3 flex items-center h-full social-link-container'>
            <a href=""><img src={Github} alt="github" className=' github w-10 h-10' /></a>
            <a href=""><img src={Linkdin} alt="linkdin" className='linkdin w-10 h-10'/></a>
            <a href=""><img src={Instagram} alt="instagram" className='instagram rounded-lg w-10 h-10'/></a>
        </div>
        <div className=' services-container w-1/3 pt-2 right-0'>
            <h1 className=' text-center font-bold text-lg font-serif'>Services</h1>
            <ul className='services flex justify-evenly mt-2 font-serif'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React-js</li>
                <li>Node-js</li>
            </ul>
        </div>
        
    </div>
  )
}
