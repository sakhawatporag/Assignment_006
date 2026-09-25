import React from 'react';
import Image from 'next/image';
import logo from '../asset/logo.png'

const Nav = () => {
  return (
    <div className="navbar shadow-sm container mx-auto bg-[#0C0D10] flex justify-around items-center">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
         
        </div >
        <div className="flex justify-between gap-3 ml-2">
      <Image src={logo} alt="Logo" />
      <h1 className="text-white font-bold text-2xl ml-2">FITLOOG</h1>
      </div></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between items-center gap-4">
          <button 
      className="px-6 py-2.5 rounded-full bg-[#1b2207] text-[#cbfb00] font-semibold text-base transition-colors hover:brightness-125 focus:outline-none">Workouts</button>
          <button className="text-[#9CA3AF] hover:text-white transition-colors duration-200">My Plan</button>
        </ul>
      </div>
      <div className="navbar-end gap-2">

        
        <button className="flex items-center gap-3 bg-[#0d0f12] text-white hover:text-[#9CA3AF] px-4 py-2 rounded-full font-medium text-lg transition-colors">Plan <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#ccff00] text-black font-bold text-sm">0</span></button>
        <button className="ml-1 flex items-center gap-3 bg-[#0d0f12] text-[#9CA3AF] hover:text-white px-4 py-2 rounded-full font-medium text-lg transition-colors">saved <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#2D313B] text-[#D1D5DB] font-bold text-sm">0</span></button>
      </div>
    </div>
  );
};

export default Nav;