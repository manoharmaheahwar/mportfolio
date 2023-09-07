import React from 'react'
import Human from './images/human.png';
import Email from './images/email.png';
import Call from './images/call.png';
import Navigate from './images/navigation.png';

export default function contact() {
  return (
    <div className=' flex justify-center items-center   bg-slate-400 w-screen h-screen'>
       <div className=' flex justify-center items-center text-slate-700 h-1/2 w-1/3 rounded-md border-sky-200 border-slate-100'>
       <ul className=' contact-list text-lg font-serif'>
          <h1 className=' text-center font-semibold'>Contact</h1>
          <li className='flex'><img src={Human} className='w-5 h-5' alt="human" /> Name : Manohar Maheshwar</li>
          <li className='flex'><img src={Email} alt="email" className='w-5 h-5' /><span className='ml-1'>Email : manoharmaheshwar28@gmail.com</span></li>
          <li className='flex'><img src={Call} className='w-5 h-5' alt="call" /> Contact : 8459678737</li>
          <li className='flex'><img src={Navigate} className='w-5 h-5' alt="navigation" /> Address : pune, maharashtra</li>
      </ul>
       </div>
    </div>
  )
}
