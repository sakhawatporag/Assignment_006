import React from 'react';
import Image from 'next/image';
import banner from '@/asset/banner.png'

const Banner = () => {
    return (
        <div className="container mx-auto mt-5 flex w-full flex-col items-center justify-between gap-8 bg-[#222630] px-5 pt-8 sm:mt-10 sm:px-10 sm:pt-12 lg:flex-row lg:gap-4">
            <div className="w-full lg:max-w-2xl">
                <p className="mt-0 text-[#C2F800] sm:mt-2">WORKOUT LIBRARY</p>
                <p className="mt-2 text-4xl font-bold text-[#FFFFFF] sm:text-6xl lg:text-7xl">
                    <span className="lg:whitespace-nowrap">TRAIN WITH INTENT. LOG</span>
                    <br className="hidden sm:block" />
                    EVERY SET.
                </p>
                <p className="mt-5 text-sm text-[#9CA3AF] sm:text-base">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br className="hidden sm:block" />
                     into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <button className="mb-8 mt-5 rounded-xl bg-[#ccff00] px-7 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition-all hover:brightness-95 active:scale-95 sm:mb-14">BROWSE WORKOUTS</button>
            </div>
            <div className="mb-8 mt-0 w-full max-w-md sm:mb-14 lg:mt-10">
                <Image src={banner} alt="" className="h-auto w-full" />
            </div>
        </div>
    );
};

export default Banner;