import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CarrerInterface = () => {
    return (
        <div className="bg-[#111] text-white px-6 py-10 md:py-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Text Section */}
                <div className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                        Benefits and workplace
                        culture highlights.
                    </h1>
                    <p className="text-sm sm:text-base md:text-[15px] text-gray-300">
                    We craft targeted, high-converting ad campaigns that drive traffic, increase leads, and maximize ROI through strategic digital advertising solutions.
                    </p>

                    <ul className="list-disc list-inside space-y-1 text-white/90">
                        <li>Competitive salary</li>
                        <li>Flexible Work-Hours</li>
                        <li>Health and wellness benefits</li>
                        <li>Modern office environment</li>
                        <li>Fast-paced startup</li>
                        <li>Innovative team culture</li>
                    </ul>

                    <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-semibold rounded-full px-6 py-3 mt-6 shadow-lg">
                        Work With Us
                        <span className="bg-white text-black p-1.5 rounded-full">
                            <FaArrowRight size={18} />
                        </span>
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full flex justify-center">
                    <img
                        src="https://i.ibb.co.com/MDwF3MtK/Screenshot-2025-04-23-220015.png"
                        alt="UI Preview"
                        className="w-full max-w-md h-auto rounded-xl shadow-xl object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default CarrerInterface;