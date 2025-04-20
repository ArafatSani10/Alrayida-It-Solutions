import React from 'react';
import './Brands.css'; // CSS file ta same thakbe

const Brands = () => {
  const brandLogo = "https://i.ibb.co/Ldvnjr3W/Mask-group.png";

  return (
    <div
      className="relative py-20 px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpW06PVNWpCe7h-FrN1d4wS0DqjN4bIHxIQ&s')`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        <h2 className="text-lg opacity-50  md:text-4xl font-bold text-white  drop-shadow-md">
          Trusted by Brands All Over the World
        </h2>

        {/* First Group - Right Scroll */}
        <div className="marquee-container group">
          <div className="marquee flex gap-6 sm:gap-10">
            {Array(12).fill(0).map((_, idx) => (
              <img
                key={idx}
                src={brandLogo}
                alt="Brand"
                className="h-10 sm:h-12 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>

        {/* Second Group - Left Scroll */}
        <div className="marquee-container group mt-10">
          <div className="marquee-reverse flex gap-6 sm:gap-10 delay-start">
            {Array(12).fill(0).map((_, idx) => (
              <img
                key={idx}
                src={brandLogo}
                alt="Brand"
                className="h-10 sm:h-12 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
