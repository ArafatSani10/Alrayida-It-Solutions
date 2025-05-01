import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const UiuxApply = () => {
    return (
        <div className="bg-[#0c0c0c] text-white min-h-screen py-12 px-4 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                {/* Left Column: Job Summary */}
                <div className="space-y-6 bg-[#111111] p-6 rounded-xl shadow-lg border border-gray-800">
                    <div>
                        <h3 className="font-semibold flex items-center gap-2
                         text-lg mb-1 text-gray-300"> <IoLocationSharp></IoLocationSharp>Location</h3>
                        <p className="text-gray-400">Chittagong, Bangladesh (On-site)</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">💼 Employment Type</h3>
                        <p className="text-gray-400">Full-time</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">🧾 Position</h3>
                        <p className="text-gray-400">UI/UX Designer</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">💰 Salary</h3>
                        <p className="text-gray-400">Competitive (Market Standard)</p>
                    </div>
                </div>

                {/* Right Column: Job Description */}
                <div className="md:col-span-2 space-y-10">
                    {/* Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Job Description</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We are seeking a talented and creative UI/UX Designer to join our team in Chattogram.
                            The ideal candidate will focus on UI design with solid UX understanding.
                            You will design intuitive, visually appealing interfaces while ensuring seamless user experiences.
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Key Responsibilities</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Design user-friendly interfaces for web & mobile apps aligned with brand identity.</li>
                            <li>Collaborate with product managers and developers on design execution.</li>
                            <li>Create wireframes, prototypes, and high-fidelity mockups.</li>
                            <li>Ensure consistency across design systems and UI elements.</li>
                            <li>Conduct and analyze UX research and usability tests.</li>
                            <li>Stay current on design trends and industry best practices.</li>
                            <li>Align strategies with marketing and business objectives.</li>
                            <li>Analyze campaign results and present actionable insights.</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Required Skills & Experience</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Proven experience with portfolio of UI projects.</li>
                            <li>Proficiency in Adobe XD, Figma, Sketch, etc.</li>
                            <li>Solid knowledge of UX principles and interaction design.</li>
                            <li>Experience with basic UX research methods.</li>
                            <li>Understanding of HTML/CSS for dev collaboration.</li>
                            <li>Strong communication & problem-solving skills.</li>
                            <li>Detail-oriented and self-motivated team player.</li>
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Health insurance coverage.</li>
                            <li>Paid time off & flexible leaves.</li>
                            <li>24 annual leave days.</li>
                            <li>Friendly, collaborative work environment.</li>
                            <li>Learning & professional development opportunities.</li>
                        </ul>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeFxFjI7TjZznA5p5z5ah9xSgdrf1r7n8lJtqp_oB_QkYM-Kw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all text-white py-3 px-6 rounded-full text-sm flex items-center gap-2 shadow-lg">
                                <FaPaperPlane />
                                Apply Now
                            </button>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UiuxApply;
