import React from "react";
import { motion } from "framer-motion";

const GetTouch = () => {
  return (
    <div className=" font-sans bg-[#111] flex items-center justify-center px-4 py-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 w-full max-w-6xl">

        {/* Floating Image Animation */}
        <motion.div
          className="w-full max-w-sm"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <img
            src="https://i.ibb.co.com/whxt7KYp/Dark-Green-Techno-AI-School-Academy-Invitation-Instagram-Post-2-1.png"
            alt="Contact Illustration"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Contact Form */}
        <div className="card w-full bg-[#1c1c1c] shadow-2xl rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 text-center text-white">Get In Touch</h2>
          <form className="space-y-4">

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input w-full bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input w-full bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Country & Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Country"
                className="input w-full bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400"
              />
              <input
                type="text"
                placeholder="Subject"
                className="input w-full bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <textarea
              className="textarea w-full h-32 bg-[#2a2a2a] border border-gray-600 text-white placeholder-gray-400"
              placeholder="Your Message"
            ></textarea>

            {/* Submit Button */}
            <div className="text-center bg-[#2a2a2a] ">
              <button type="submit" className="p-5  btn-neutral w-full md:w-1/2">Submit</button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default GetTouch;
