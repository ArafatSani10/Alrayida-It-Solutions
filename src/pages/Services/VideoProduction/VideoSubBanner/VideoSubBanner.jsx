import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const VideoSubBanner = () => {
    return (
        <section className="bg-[#111] text-white py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Image Section - Always on the Left */}
                <div className="w-full md:w-[45%] flex justify-center md:justify-start">
                    <img
                        src="https://i.ibb.co.com/MDwF3MtK/Screenshot-2025-04-23-220015.png"
                        alt="Backend Illustration"
                        className="w-[422px] h-[494px] rounded-xl shadow-lg"
                    />
                </div>

                {/* Text Section - Always on the Right */}
                <div className="w-full md:w-[50%] text-start">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
                    Best Video Production
                    Alraayida It Solutions
                    </h1>
                    <p className="text-base md:text-lg text-gray-300 mb-6">
                    Alraayida IT Solution delivers top-tier video production services, blending creativity, technology, and storytelling to elevate your brand's vision.
                    </p>

                    <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-semibold rounded-full px-6 py-3 text-base md:text-lg shadow-lg">
                        Work With Us
                        <span className="bg-white text-black p-1 rounded-full">

                            <FaArrowRight size={20}></FaArrowRight>
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSubBanner;