import React from 'react';
import Image from 'next/image';
import banner from '@/asset/banner.png'

const Banner = () => {
    return (
        <div className="flex justify-around bg-[#222630] container mx-auto mt-10">
            <div>
                <p className="text-[#C2F800] mt-14 ">WORKOUT LIBRARY</p>
                <p className="text-[#FFFFFF] font-bold text-7xl mt-2">TRAIN WITH INTENT. LOG<br />
                     EVERY SET.</p>
                <p className="text-[#9CA3AF] mt-5">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br />
                     into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className="mt-5 mb-14 rounded-xl bg-[#ccff00] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition-all hover:brightness-95 active:scale-95">BROWSE WORKOUTS</button>
            </div>
            <div className="mt-14 mb-14">
                <Image src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;