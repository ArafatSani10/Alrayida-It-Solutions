import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div
            className="w-full bg-cover bg-center text-white relative overflow-hidden"
            style={{
                backgroundImage: `url("https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?semt=ais_hybrid&w=740")`,
            }}
        >
            <div className="">
                {/* Newsletter */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <button className="px-6 py-2 mt-5 my-3 bg-white text-black font-semibold rounded-2xl shadow-xl hover:scale-105 transition">
                        Join Newsletter
                    </button>

                    <h1 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg">
                        Start a Journey With Us
                    </h1>

                    <form className="flex flex-col md:flex-row items-center justify-center gap-4 bg-transparent">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="px-5 py-3 rounded-xl w-auto md:w-auto bg-white/10 border border-white placeholder-white text-white outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-xl hover:scale-105 transition text-lg font-semibold"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Divider */}
                <hr className="my-10 border-blue-400 opacity-40" />

                {/* Main Footer Content */}
                <div className="flex flex-col md:max-w-7xl mx-auto lg:flex-row justify-between items-start gap-10 lg:items-center">
                    <img
                        className="w-[130px] hover:scale-105 transition-transform duration-300 mx-auto lg:mx-0"
                        src="https://i.ibb.co/G3MTtRss/download-1.png"
                        alt="Logo"
                    />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm opacity-80 text-center md:text-left w-full">
                        <div>
                       
                            <ul className="space-y-1">
                                <li>Services</li>
                                <li>Support Center</li>
                            </ul>
                        </div>
                        <div>
                         
                            <ul className="space-y-1">
                                <li>Contact Us</li>
                                <li>Join Our Team</li>
                            </ul>
                        </div>
                        <div>
                         
                            <ul className="space-y-1">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-semibold mb-2 text-white">Follow Us</h2>
                            <div className="flex justify-center md:justify-start gap-3 mt-2">
                                <a href="#"><Facebook size={20} /></a>
                                <a href="#"><Twitter size={20} /></a>
                                <a href="#"><Instagram size={20} /></a>
                                <a href="#"><Linkedin size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="my-10 border-white opacity-30" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row md:max-w-7xl my-3 mx-auto justify-between items-center text-sm opacity-50 text-center md:text-left gap-4">
                    <p className='max-sm:text-xs'>Privacy Policy | Terms & Conditions</p>
                    <p className='max-sm:text-xs'>© 2025 Alrayida IT Solutions. All Rights Reserved.</p>
                    <p className='max-sm:text-xs'>Developed by Arafat</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
