import React from "react";

const ContactUs = () => {
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

          <div className="flex items-center border-b border-gray-600 py-3">
            <span className="mr-3">BD</span>
            <span className="mr-2 text-gray-300">+880</span>
            <input
              type="tel"
              placeholder="Phone"
              className="bg-transparent flex-1 placeholder-gray-400 focus:outline-none"
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
