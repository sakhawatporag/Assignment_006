"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../asset/logo.png'
import { CardContext } from '@/context/Cardprovider';

const Nav = () => {
  const { cardItems, wishlist } = useContext(CardContext);

  return (
    <div className="navbar container mx-auto flex min-h-14 w-full items-center justify-between gap-2 bg-[#0C0D10] px-3 shadow-sm sm:px-5">
      <div className="navbar-start min-w-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
         
        </div >
        <div className="ml-2 flex items-center gap-2 sm:gap-3">
      <Image src={logo} alt="Logo" className="h-6 w-auto sm:h-7" />
      <h1 className="ml-1 hidden text-lg font-bold text-white sm:block sm:text-2xl">FITLOOG</h1>
      </div></div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex justify-between items-center gap-4">
            <Link href="/" className="px-6 py-2.5 rounded-full bg-[#1b2207] text-[#cbfb00] font-semibold text-base transition-colors hover:brightness-125 focus:outline-none">Workouts</Link>
            <Link href="/plan" className="text-[#9CA3AF] hover:text-white transition-colors duration-200">My Plan</Link>
        </ul>
      </div>
      <div className="navbar-end flex shrink-0 gap-1 sm:gap-2">

        
        <Link href="/plan" className="flex items-center gap-1 rounded-full bg-[#0d0f12] px-2 py-2 text-sm font-medium text-white transition-colors hover:text-[#9CA3AF] sm:gap-2 sm:px-4 sm:text-lg">Plan <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ccff00] text-xs font-bold text-black sm:h-7 sm:w-7 sm:text-sm">{cardItems.length}</span></Link>
        <Link href="/saved" className="ml-1 flex items-center gap-1 rounded-full bg-[#0d0f12] px-2 py-2 text-sm font-medium text-[#9CA3AF] transition-colors hover:text-white sm:gap-2 sm:px-4 sm:text-lg">Saved <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D313B] text-xs font-bold text-[#D1D5DB] sm:h-7 sm:w-7 sm:text-sm">{wishlist.length}</span></Link>
      </div>
      <div className="order-last flex basis-full items-center justify-center gap-6 border-t border-gray-800 py-2 text-xs md:hidden">
        <Link href="/" className="text-[#ccff00]">Workouts</Link>
        <Link href="/plan" className="text-gray-400 hover:text-white">My Plan</Link>
        <Link href="/saved" className="text-gray-400 hover:text-white">Saved</Link>
      </div>
    </div>
  );
};

export default Nav;