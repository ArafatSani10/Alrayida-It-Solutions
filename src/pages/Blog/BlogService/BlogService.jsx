import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogService = () => {
    return (
        <div className='text-white flex max-sm:flex-col items-center justify-center h-auto py-10 md:p-5 bg-[#111] '>
            {/* left section */}
            <div className='text-start p-3  max-w-3xl '>
                <h1 className='md:text-5xl font-bold leading-tight text-2xl'>Discovering Top IT <br />  services in Bangladesh </h1>

                <p className='mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, dolores voluptates voluptas provident labore qui beatae expedita nisi commodi veniam?</p>

                {/* btn */}
                <button className='flex  items-center gap-2 mt-5 border p-3 rounded-2xl bg-blue-500  text-white hover:text-black border-none '>
                    Work With Us <span className='border p-2 rounded-full bg-white text-black'>
                        <FaArrowRight size={20}></FaArrowRight>
                    </span>
                </button>
            </div>


            {/* right section */}

            <div>
                <div>
                    <img src="https://i.ibb.co.com/2pJmTw5/Screenshot-2025-04-27-203532.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BlogService;