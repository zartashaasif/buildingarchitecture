import React from 'react';
import {FaBars,FaTimes} from "react-icons/fa";

function Navbar() {
  return (
    <>
    <nav className='px-5 bg-[#2B2B2B] text-white flex justify-between items-center h-10 md:hidden'>
        <div className='text-[20px] font-bold ' >Logo</div>
        <div><FaBars /></div>
    </nav>
    <nav className='bg-[#2B2B2B] '>
    <div className='px-5  text-white hidden justify-between items-center h-10 md:flex max-w-[1200px] mx-auto h-[60px] '>
        <div className='text-[20px] font-bold ' >Logo</div>
        <ul className='flex justify-between gap-20 items-center'>
          <li><a href='#' className='cursor-pointer'>Home</a></li>
          <li><a href='#' className='cursor-pointer'>Services</a></li>
          <li><a href='#' className='cursor-pointer'>Find a Team</a></li>
          <li><a href='#' className='cursor-pointer'>About us</a></li>
          <li><a href='#' className='cursor-pointer'>Articles</a></li>
          <li><a href='#' className='cursor-pointer'>portfolio</a></li>
          <li><a href='#' className='cursor-pointer'>Contact</a></li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar

