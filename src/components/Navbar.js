import React from 'react'
import { Link, useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate=useNavigate();



  return (
    <div className="navbar-container bg-gray-900">
        <div className='navlinks-container'>
            <ul className='links text-gray-100 font-mono'>
                <li><Link to="/" className=' cursor-pointer'>Home</Link></li>
                <li><Link to="https://flowcv.com/resume/9ft2qfswid" className=' cursor-pointer'>About</Link></li>
                <li onClick={()=>navigate("/contact")} className=' cursor-pointer'> Contact</li>
                <li onClick={()=>navigate("/projects")} className=' cursor-pointer'>Projects</li>
            </ul>
        </div>
    </div>
  )
}
