import React from 'react';
import { CiDumbbell } from "react-icons/ci";

const Footer = () => {
    return (
        <div className="mt-15 bg-[#090A0D] flex justify-between container mx-auto h-35 items-center">
            <div className="flex justify-between gap-2 ml-8">
                <CiDumbbell color="C2F800" size={28} />
            <p>FITLOG</p>
            </div>
            <div>
                <p className="text-[#6B7280] mr-9" >©  2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>

        </div>
    );
};

export default Footer;