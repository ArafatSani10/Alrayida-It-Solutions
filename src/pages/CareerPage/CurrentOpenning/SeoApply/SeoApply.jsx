import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import SeoBanner from './SeoBanner';

const SeoApply = () => {
    return (
       <div>
        <SeoBanner></SeoBanner>
         <div className="bg-[#0c0c0c] text-white  py-12 px-4 md:px-16 font-sans">
            <div className="max-w-full  mx-auto grid md:grid-cols-3 gap-12">
                {/* Left Column: Job Summary */}
                <div className="space-y-6  p-6 rounded-xl shadow-lg ">
                    <div>
                        <h3 className="font-semibold flex items-center gap-2 text-lg mb-1 text-gray-300"> <IoLocationSharp size={20}></IoLocationSharp> Location</h3>
                        <p className="text-gray-400">Chittagong, Bangladesh (On-site)</p>
                    </div>
                     <hr className='py-2 border-white opacity-55' />
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">💼 Employment Type</h3>
                        <p className="text-gray-400">Full-time</p>
                    </div>
                     <hr className='py-2 border-white opacity-55' />
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">🧾 Position</h3>
                        <p className="text-gray-400">SEO Specialist</p>
                    </div>
                     <hr className='py-2 border-white opacity-55' />
                    <div>
                        <h3 className="font-semibold text-lg mb-1 text-gray-300">💰 Salary</h3>
                        <p className="text-gray-400">Competitive (Market Standard)</p>
                    </div>
                     <hr className='py-2 border-white opacity-55' />
                </div>

                {/* Right Column: Job Description */}
                <div className="md:col-span-2 space-y-10">
                    {/* Description */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Job Description</h2>
                        <p className="text-gray-300 leading-relaxed">
                            We are looking for a knowledgeable and driven SEO Specialist to join our team in Chattogram.
                            You will be responsible for planning, implementing, and managing our SEO strategies to improve organic rankings and drive qualified traffic.
                        </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Key Responsibilities</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Develop and execute SEO strategies for web properties.</li>
                            <li>Perform keyword research and competitor analysis.</li>
                            <li>Optimize website content, structure, and internal linking.</li>
                            <li>Monitor and report SEO performance using analytics tools.</li>
                            <li>Collaborate with content and dev teams on SEO execution.</li>
                            <li>Stay updated with search engine algorithm changes.</li>
                            <li>Ensure best practices in technical and on-page SEO.</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">Required Skills & Experience</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>3+ years of hands-on SEO experience.</li>
                            <li>Strong knowledge of Google Analytics, Search Console, Ahrefs, SEMrush, etc.</li>
                            <li>Good understanding of HTML/CSS & site performance factors.</li>
                            <li>Experience in on-page, off-page, and technical SEO.</li>
                            <li>Ability to perform audits and present insights clearly.</li>
                            <li>Strong communication and team collaboration skills.</li>
                        </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h2 className="text-2xl font-bold mb-3">What We Offer</h2>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Health insurance and wellness benefits.</li>
                            <li>Flexible working hours and leave policy.</li>
                            <li>24 annual leave days.</li>
                            <li>Dynamic and supportive team culture.</li>
                            <li>Career growth and learning programs.</li>
                        </ul>
                    </div>

                    {/* Apply Button */}
                    <div className="pt-4">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSe4o_CyL4HpC68W2z_s6CiNggVdmPpKzWI1hNjwvo8PXE-1xQ/viewform"
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
       </div>
    );
};

export default SeoApply;
