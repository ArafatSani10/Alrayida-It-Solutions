import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';


import Navbar from '../pages/shared/Navbar/Navbar';
import Footer from '../pages/shared/Navbar/Footer/Footer';

const Mainlayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white relative overflow-hidden">
        <div className="relative flex flex-col items-center gap-4">
          <h1 className="text-3xl font-zendots md:text-5xl font-extrabold animate-pulse bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
            Alrayida
          </h1>
          <div className="w-16 h-16 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-400 mt-4 font-zendots animate-pulse">Loading the Experience...</p>
        </div>

        {/* Fire-like particles (optional) */}
        <div className="absolute inset-0 font-zendots z-0 pointer-events-none overflow-hidden">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.1),transparent)] animate-ping absolute" />
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.1),transparent)] animate-pulse absolute delay-500" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative font-sans bg-black max-w-[1600px] mx-auto min-h-screen overflow-x-hidden">
    

      {/* Glowing radial background */}
      <div className="relative h-full w-full">
        <div className="absolute bottom-0 left-[-20%] top-[-10%] 
          h-[500px] w-[500px] rounded-full 
        ">
        </div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] 
          h-[500px] w-[500px] rounded-full 
         ">
        </div>
      </div>

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Mainlayout;
