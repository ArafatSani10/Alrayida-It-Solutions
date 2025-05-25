// import React, { useEffect, useState } from 'react';
// import { Outlet } from 'react-router-dom';


// import Navbar from '../pages/shared/Navbar/Navbar';
// import Footer from '../pages/shared/Navbar/Footer/Footer';

// const Mainlayout = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timeout);
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-black text-white relative overflow-hidden">
//         <div className="relative flex flex-col items-center gap-4">
//           <h1 className="text-3xl font-zendots md:text-5xl font-extrabold animate-pulse bg-gradient-to-r from-orange-500 via-red-600 to-yellow-400 text-transparent bg-clip-text drop-shadow-lg">
//             Alrayida
//           </h1>
//           <div className="w-16 h-16 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>
//           <p className="text-sm text-gray-400 mt-4 font-zendots animate-pulse">Loading the Experience...</p>
//         </div>

//         {/* Fire-like particles (optional) */}
//         <div className="absolute inset-0 font-zendots z-0 pointer-events-none overflow-hidden">
//           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,69,0,0.1),transparent)] animate-ping absolute" />
//           <div className="w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,165,0,0.1),transparent)] animate-pulse absolute delay-500" />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative font-sans bg-black max-w-[1600px] mx-auto min-h-screen overflow-x-hidden">
    

//       {/* Glowing radial background */}
//       <div className="relative h-full w-full">
//         <div className="absolute bottom-0 left-[-20%] top-[-10%] 
//           h-[500px] w-[500px] rounded-full 
//         ">
//         </div>
//         <div className="absolute bottom-0 right-[-20%] top-[-10%] 
//           h-[500px] w-[500px] rounded-full 
//          ">
//         </div>
//       </div>

//       <Navbar />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// export default Mainlayout;


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
            Alraayida
          </h1>
          <div className="w-16 h-16 border-4 border-t-transparent border-orange-400 rounded-full animate-spin"></div>
          <p className="text-sm text-gray-400 mt-4 font-zendots animate-pulse">Loading the Experience...</p>
        </div>

        {/* Fire-like particles */}
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
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full"></div>
      </div>

      <Navbar />
      <Outlet />
      <Footer />

      {/* ✅ WhatsApp Floating Button with Tooltip */}
<div className="fixed bottom-6 right-6 z-50 group">
  {/* Tooltip on top */}
  <div className="absolute bottom-16 right-1/2 translate-x-1/2 bg-black text-white text-xs font-semibold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md whitespace-nowrap">
    Chat on WhatsApp
  </div>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/+8801870594400"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition-transform duration-300 hover:scale-110 flex items-center justify-center"
  >
    {/* WhatsApp SVG Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 32 32"
      className="h-6 w-6"
    >
      <path d="M16.004 2.003c-7.719 0-13.99 6.271-13.99 13.99 0 2.465.66 4.873 1.915 6.994l-2.02 7.39 7.564-1.984a13.87 13.87 0 006.53 1.656h.001c7.719 0 13.99-6.271 13.99-13.99 0-3.738-1.455-7.25-4.099-9.894s-6.155-4.19-9.89-4.19zm0 25.457a11.5 11.5 0 01-5.892-1.608l-.423-.254-4.495 1.18 1.193-4.362-.273-.447a11.463 11.463 0 01-1.771-6.003c0-6.342 5.157-11.5 11.5-11.5 3.072 0 5.958 1.197 8.127 3.365s3.373 5.05 3.373 8.122c0 6.343-5.157 11.507-11.507 11.507zm6.307-8.352c-.348-.175-2.063-1.016-2.384-1.132-.321-.117-.556-.175-.791.175s-.908 1.132-1.113 1.365c-.205.234-.41.263-.758.088-.347-.175-1.469-.541-2.799-1.727-1.036-.922-1.735-2.06-1.938-2.408-.205-.349-.022-.538.153-.713.158-.158.348-.41.521-.615.174-.205.232-.351.348-.584.116-.234.058-.438-.029-.614-.087-.175-.791-1.908-1.085-2.609-.285-.686-.575-.593-.791-.602-.205-.008-.438-.01-.671-.01-.234 0-.615.088-.937.438s-1.23 1.202-1.23 2.93 1.259 3.396 1.433 3.631c.175.234 2.469 3.771 5.983 5.114.837.36 1.49.574 1.998.734.839.267 1.601.229 2.192.139.668-.1 2.063-.842 2.354-1.654.29-.812.29-1.527.203-1.654-.087-.128-.317-.205-.665-.38z" />
    </svg>
  </a>
</div>

    </div>
  );
};

export default Mainlayout;
