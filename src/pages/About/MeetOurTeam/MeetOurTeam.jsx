import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const MeetOurTeam = () => {
    return (
        <div className='text-white bg-black  font-sans p-5'>
            <div className='md:text-6xl text-3xl opacity-85'>
                <h1 className='text-center'>United For</h1>

                <h1 className='mt-2 max-w-2xl text-gray-400 mx-auto '>
                    Your Success..
                </h1>
            </div>

            <div>
                <img src="https://i.ibb.co.com/3mMSd5sY/Screenshot-2025-04-17-210132.png" alt="" />

                <div>
                    <h1 className='md:text-7xl text-[20px] mb-3 opacity-80 mt-5'>Alrayida <span className='text-gray-500'>IT Agency</span> Driving <br />
                        Excellence with <span className='text-gray-500'>Dedication</span>  and <br />
                        <span className='text-gray-500'>Innovation</span></h1>
                    <p className='md:p-5 text-sm md:text-xl opacity-60'>
                        We are Alrayida, We design, develop, and deliver our clients the highest-quality responsive website development. We promise pixel-perfect results for our client's websites. At Zentexx, We blend innovation and expertise to deliver solutions that inspire growth and redefine possibilities.
                    </p>

                    {/* <Link to='/calendly'>
                  
                  <button className='flex items-center btn mt-5 bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur'>Book Consultation <FaArrowRight size={20} className='text-black'></FaArrowRight></button>
                  
                  </Link> */}

                    <div className="mt-6">
                        <a
                            href="calendly"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:shadow-[0_0_30px_8px_rgba(0,149,255,0.7)] hover:scale-105">
                                Book Consultation <FaArrowRight size={20} />
                            </button>
                        </a>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default MeetOurTeam;