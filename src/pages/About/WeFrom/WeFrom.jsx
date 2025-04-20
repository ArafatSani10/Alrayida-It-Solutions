import React from 'react';

const WeFrom = () => {
    return (
        <div className="bg-[#0f0f0f] text-white py-12 px-4 md:px-10">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
                {/* Text */}
                <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-4">We Are From</h1>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        At Alrayida, we believe in a collaborative and transparent approach. We work closely with our clients, understanding their unique needs and challenges, and tailor solutions that drive success. Our team combines creativity, technology, and strategic thinking to deliver results that exceed expectations.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full lg:w-[500px] flex-shrink-0">
                    <img
                        src="https://i.ibb.co.com/Zp9QvQb3/Screenshot-2025-04-19-224713.png"
                        alt="We Are From"
                        className="rounded-xl w-full object-cover shadow-lg"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-14">
                {/* Stat Item 1 */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                    <h1 className="text-4xl font-bold text-white min-w-[120px]">250+</h1>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Project Completed</h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-4xl">
                            With over 250+ projects completed globally, Alrayida has a proven track record of building world-class websites, software, and brands. Our expertise and dedication to excellence empower businesses to thrive in the digital world.
                        </p>
                    </div>
                </div>

                {/* Stat Item 2 */}
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                    <h1 className="text-4xl font-bold text-white min-w-[120px]">100%</h1>
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Success Rate</h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-4xl">
                            We take pride in our 100% success rate, consistently delivering exceptional results that exceed client expectations and drive business growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeFrom;
