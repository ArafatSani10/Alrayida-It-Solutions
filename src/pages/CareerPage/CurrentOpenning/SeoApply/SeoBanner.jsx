import React from 'react';

const SeoBanner = () => {
    return (
         <div className="relative fixed -mt-24 rounded-2xl  w-full text-white overflow-hidden shadow-xl z-10">
            {/* Background Image with Gradient Overlay */}
            <div
                className="absolute opacity-75 inset-0 "
                style={{    
                    backgroundImage:
                        "linear-gradient( rgba(10, 22, 30, 0.6)), url('https://i.postimg.cc/c4MXSmgQ/image-34.png')",
                }}
            ></div>

            {/* Content Overlay */}
            <div className="relative z-10 mt-16 px-4 py-20 sm:px-8 lg:px-16">
                <div className="text-start flex items-center justify-between max-sm:flex-col font-sans">
                   <div>
                   <h1 className="text-4xl md:text-[75px] font-extrabold max-w-3xl  leading-tight drop-shadow-md">
                    Career with
                    Alraayida it solution
                    </h1>
                    <p className="mt-5 max-w-3xl text-white/85 text-lg md:text-xl">
                        A curated selection of innovative, impactful, and expertly crafted projects—
                        reflecting our passion, skill, and creativity.
                    </p>
                   </div>

                   {/* image */}
                   <div>
                        <img src="https://i.imgur.com/fm0rO9j.png" alt="" />
                   </div>
                </div>

               
            </div>
        </div>
    );
};

export default SeoBanner;