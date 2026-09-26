import React from 'react';
import { CiDumbbell } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="container mx-auto mt-10 flex h-auto w-full flex-col items-center justify-between gap-4 bg-[#090A0D] px-5 py-6 sm:flex-row sm:px-8">
            <div className="flex items-center gap-2">
                <CiDumbbell color="C2F800" size={28} />
            <p>FITLOG</p>
            </div>
            <div>
                <p className="text-center text-xs text-[#6B7280] sm:mr-0 sm:text-right" >©  2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </div>
    );
};

export default Footer;