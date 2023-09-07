import React, { useState } from 'react'
// import Emical from './images/emical.png'
import Github from './images/github-mark.png'
import Link from './images/link.png';
import Thumb from './images/thumb3.png';
import Dislike from './images/dislike.png';

export default function Cards(props) {
  const [count,setCount]=useState(0);
  const [dislike,setDislike]=useState(0);  
  const [likechangecolor,setLikeChangecolor]=useState(false);
  const [dislikechangecolor,setdislikeChangecolor]=useState(false);
  function increment(){
    setCount(count+1);
    
  }

  function decrement(){
    setDislike(dislike+1)
  }


  function handleLikeClick(){
    setLikeChangecolor(!likechangecolor)
  }
  
  function handleDislikeClick(){
    setdislikeChangecolor(!dislikechangecolor)
  }

  return (
      <div className=" bg-blue-50 inline-block card-container rounded-lg h-96 w-80 m-10 ">
        <div className='img-container w-auto h-1/2'>
          <img src={props.Image} className=' w-full h-full rounded-lg' alt={props.title} />
        </div>

        <div className=' h-1/2 w-full'>
          <a href={props.Hosted} className=' flex items-center justify-center h-1/3'>
            <div className=" title flex items-center justify-center h-1/2 w-1/2 bg-purple-200 font-semibold text-center rounded-sm">
              <span>{props.title}</span>
            </div>
          </a>
          <div className=' w-full flex items-center justify-center justify-around h-1/3'>
            <a href={props.GitHub}> <img src={Github} className=' w-9 h-9' alt="" /></a>
            <a href={props.Hosted}><img src={Link} className=' w-7 h-7' alt="" /></a>
        </div>

          <div className=' w-full h-1/3 flex items-center justify-center justify-around'>
            <div className='like w-1/3 h-1/2 flex border-2 rounded-2xl  border-gray-500 ' >
              <div onClick={handleLikeClick}   className={` like-contains w-1/2 h-full flex items-center justify-center border border-l-0 border-t-0 border-b-0 rounded-l-2xl border-gray-500 ${(likechangecolor === true)? 'bg-blue-100' : 'bg-blue-50'}`}>
                <button ><img src={Thumb} onClick={increment}  className='w-8 h-8' alt="" /></button>
              </div>
              <div className='w-1/2 h-full flex items-center justify-center font-semibold text-2xl'>
                {count}
              </div>
            </div>
            <div className='dislike w-1/3 h-1/2 border-2 rounded-2xl border-gray-500 flex '>
              <div onClick={handleDislikeClick}   className={` dislike-contains w-1/2 h-full flex items-center justify-center border border-l-0 border-t-0 border-b-0 rounded-l-2xl border-gray-500 ${(dislikechangecolor === true)? 'bg-blue-100' : 'bg-blue-50'}`}>
                <button ><img src={Dislike} onClick={decrement}  className='w-7 h-7' alt="" /></button>
              </div>
              <div className='w-1/2 h-full flex items-center justify-center font-semibold text-2xl'>
                {dislike}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}



