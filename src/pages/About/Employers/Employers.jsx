import React from 'react';
import { FaAlignRight } from 'react-icons/fa';

const Employers = () => {
    return (
        <div>
            <div className='my-5 text-white text-center '>
                <h1 className='md:text-4xl text-lg'><span className='text-gray-500'>Our</span> employees <span className='text-gray-600'>are our</span> greatest asset</h1>
            </div>
            <div>
                <img className='mx-auto my-3' src="https://i.ibb.co.com/LDmFR3SW/Screenshot-2025-04-20-001254.png" alt="" />
            </div>

            {/* another space */}
            <div className='w-full mt-5 p-5 flex max-sm:flex-col items-center  justify-between'>
               <div className='text-white w-full md:w-[800px] '>
               <h1 className='opacity-75 md:text-4xl text-2xl'>We are from another space</h1>
               <p className='text-sm mt-6 my-5 text-red-200 opacity-75'>We are Alrayida. We design, develop, and deliver our clients the highest-quality responsive website development. We promise pixel-perfect results for our client's websites.</p>

               <button className='btn'> Work with us <FaAlignRight size={20} className='text-white'></FaAlignRight></button>
               </div>

               {/* image */}
               <div>
                <img src="https://i.ibb.co.com/WNRVw94x/Screenshot-2025-04-20-001836.png" alt="" />
               </div>
            </div>
        </div>
    );
};

export default Employers;