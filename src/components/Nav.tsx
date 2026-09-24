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
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </div >
        <div className="flex justify-between gap-3 ml-2">
      <Image src={logo} alt="Logo" />
      <h1 className="text-white font-bold text-2xl ml-2">FITLOOG</h1>
      </div></div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between items-center gap-4">
          <button 
      className="px-6 py-2.5 rounded-full bg-[#1b2207] text-[#cbfb00] font-semibold text-base transition-colors hover:brightness-125 focus:outline-none">Workouts</button>
          <button className="text-[#9CA3AF]">my plan</button>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <button>plan</button>
        <button>saved</button>
      </div>
    </div>
  );
};

export default Nav;