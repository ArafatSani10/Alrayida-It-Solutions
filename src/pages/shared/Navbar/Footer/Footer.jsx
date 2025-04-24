import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#122154] text-white px-6 md:px-12 py-10 font-electrolize">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* 1st Column - Logo and Social */}
        <div>
          <img
            className="w-[130px] mb-4"
            src="https://i.ibb.co/G3MTtRss/download-1.png"
            alt="Logo"
          />
          <p className="opacity-85 text-sm mb-5">
            Alraayida crafts innovative digital solutions through design, strategy, and technology.
          </p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400 transition"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-400 transition"><FaInstagram /></a>
          </div>
        </div>

        {/* 2nd Column - Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <p className="opacity-85 text-sm mb-3">97 Buddhist Temple Road,<br />Nandankanan, Chottogram, Bangladesh</p>
          <p className="opacity-85 text-sm mb-3">contact@alraayidaitsolutions.com</p>
          <p className="opacity-85 text-sm">Join Our Team</p>
        </div>

        {/* 3rd Column - Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <p className="opacity-85 text-sm mb-3">Support Center</p>
          <p className="opacity-85 text-sm mb-3">Custom Solutions</p>
          <p className="opacity-85 text-sm">UI/UX & Web Development</p>
        </div>

        {/* 4th Column - Legal */}
        <div>
          <h2 className="text-xl font-bold mb-4">Privacy & Terms</h2>
          <p className="opacity-85 text-sm mb-3">Privacy Policy</p>
          <p className="opacity-85 text-sm">Terms and Conditions</p>
        </div>
      </div>

      <div className="mt-10 border-t border-white/20 pt-6 text-sm text-center opacity-60">
        © {new Date().getFullYear()} Alraayida IT Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
