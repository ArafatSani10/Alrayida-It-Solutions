import React, { useState } from "react";

const countries = [
  { code: "+880", name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { code: "+91", name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+92", name: "Pakistan", flag: "https://flagcdn.com/w40/pk.png" },
  { code: "+966", name: "Saudi Arabia", flag: "https://flagcdn.com/w40/sa.png" },
];

const ContactUs = () => {
  const [selected, setSelected] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-h-screen bg-black to-black text-white px-6 md:px-16 py-20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-14 items-start">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-5xl font-bold mb-2">Get In Touch</h2>
            <div className="w-20 h-1 bg-indigo-500 rounded-full"></div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">Location</h3>
              <p className="text-gray-400">
                97 Buddhist Template Road Nandankanan, Chottogram, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">Email</h3>
              <p className="text-gray-400">contact@AlraayidaItSolutions.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400">Phone</h3>
              <p className="text-gray-400">+8801330686418</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 bg-transparent p-8 rounded-2xl shadow-lg w-full space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent border-b border-gray-600 py-3 px-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
            />
            <input
              type="email"
              placeholder="Email address"
              className="bg-transparent border-b border-gray-600 py-3 px-2 placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          <input
            type="text"
            placeholder="Your Country"
            className="bg-transparent border-b border-gray-600 py-3 px-2 w-full placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
          />

          {/* Updated Phone Input with Flag Dropdown */}
          <div className="flex items-center border border-gray-600 rounded-lg px-3 py-2 bg-gray-800 relative">
            <div className="relative w-48">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center justify-between w-full bg-gray-700 text-white text-sm rounded-md px-2 py-1 focus:outline-none"
              >
                <div className="flex items-center space-x-2">
                  <img src={selected.flag} alt={selected.name} className="w-5 h-4 rounded-sm" />
                  <span>{selected.name}</span>
                  <span>({selected.code})</span>
                </div>
                <span>▼</span>
              </button>

              {showDropdown && (
                <div className="absolute z-10 bg-black text-white mt-1 w-full rounded shadow-lg max-h-52 overflow-auto">
                  {countries.map((country) => (
                    <div
                      key={country.code}
                      onClick={() => {
                        setSelected(country);
                        setShowDropdown(false);
                      }}
                      className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-200 hover:text-black cursor-pointer"
                    >
                      <img src={country.flag} alt={country.name} className="w-5 h-4 rounded-sm" />
                      <span className="text-sm">{country.name}</span>
                      <span className="text-xs text-gray-500">{country.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="bg-transparent flex-1 ml-3 placeholder-gray-400 text-white focus:outline-none text-sm"
            />
          </div>

          <select className="bg-transparent border-b border-gray-600 py-3 px-2 w-full text-gray-400 focus:outline-none focus:border-indigo-500 transition">
            <option>Select a Subject</option>
            <option className="bg-black">Web Development</option>
            <option className="bg-black">Digital Marketing</option>
            <option className="bg-black">Ui/ux Design</option>
            <option className="bg-black">Graphics Design</option>
            <option className="bg-black">Software Development</option>
            <option className="bg-black">Video Production</option>
            <option className="bg-black">Branding</option>
            <option className="bg-black">Crm and Sass Development</option>
          </select>

          <textarea
            placeholder="Your message"
            className="bg-transparent border-b border-gray-600 py-3 px-2 w-full h-28 resize-none placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition"
          ></textarea>

          <button className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 py-3 rounded-xl text-white font-medium shadow-md hover:shadow-xl transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
