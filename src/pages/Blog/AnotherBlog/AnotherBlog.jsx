import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const AnotherBlog = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative bg-white text-gray-800">
            <div className="flex flex-col lg:flex-row p-6 max-w-7xl mx-auto gap-6">
                {/* Left Sidebar Navigation */}
                <aside className="lg:w-1/4">
                    <div className="sticky top-24 space-y-6">
                        {/* Read Time */}
                        <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 shadow-sm">
                            ⏱️ 11 Min Read
                        </div>

                        {/* Scroll Progress */}
                        <div className="h-2 bg-gray-300 rounded overflow-hidden">
                            <div
                                className="h-full bg-blue-600 transition-all duration-200"
                                style={{ width: `${scrollProgress}%` }}
                            ></div>
                        </div>

                        {/* Quick Navigation */}
                        <nav className="space-y-2">
                            <a href="#" className="text-blue-600 font-medium block">Who is Alraayida IT Solutions?</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">What Alraayida Brings to the Table</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">Why Alraayida Stands Out</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">How Alraayida Helps Businesses Grow</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">The Bangladesh Advantage</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">Client Case Studies</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 block">Conclusion</a>
                        </nav>

                        {/* Author Info */}
                        <div className="pt-4 border-t border-gray-200">

                          <div className="flex items-center space-x-1">
                              <div className="flex space-x-2 mt-2">
                                <a href="#" className="text-blue-600">
                                    <img className="w-10 h-10 rounded-full" src="https://i.ibb.co/k68qQhqL/download-11.png" alt="" />
                                </a>


                            </div>
                            <div className="font-medium">Author: Shabaz Mahamood</div>
                            <h1>CEO</h1>

                          </div>

                            <div className="flex items-center gap-3 ">
                                <FaFacebook size={30}></FaFacebook>
                                <FaLinkedin size={30}></FaLinkedin>
                            </div>

                        </div>
                    </div>
                </aside>

                {/* Main Blog Content */}
                <main className="lg:w-2/4 space-y-6 leading-relaxed">
                    <p>
                        Imagine you're a startup founder with a big idea but a small budget...
                        That’s where a company like <strong>Alraayida IT Solutions</strong> comes in.
                    </p>
                    <p>
                        Alraayida is an IT company in Bangladesh. It helps businesses grow with smart, affordable tech solutions.
                    </p>
                    <p>
                        Bangladesh is quickly becoming a hub for quality IT services.
                    </p>
                    <p>
                        Startups love the prices here. I’ve built websites and apps for many new companies.
                    </p>
                    <p>
                        In this article, I’ll explain who Alraayida is and how they can make your business real.
                    </p>

                    <h2 className="text-2xl font-bold">Who is Alraayida IT Solutions?</h2>
                    <p>
                        Alraayida is an IT company from Bangladesh that builds digital tools to help businesses succeed.
                        Whether it's websites, mobile apps, or custom software — they make your ideas real.
                    </p>

                    <h2 className="text-2xl font-bold">What Alraayida Brings to the Table</h2>
                    <p>
                        Alraayida offers everything a modern business needs — from branding to automation, all in one place.
                    </p>

                    <h3 className="text-xl font-semibold">1. Web Development</h3>
                    <p>
                        They build fast, scalable, and reliable websites tailored to startup needs.
                    </p>

                    <h3 className="text-xl font-semibold">2. Digital Marketing</h3>
                    <p>
                        Whether it's SEO, social media, or ads — they ensure your brand reaches the right audience.
                    </p>

                    <h3 className="text-xl font-semibold">3. CRM Development</h3>
                    <p>
                        Need to manage leads, sales, or customer service? Alraayida creates custom CRM solutions that organize and automate your workflow.
                    </p>

                    <h3 className="text-xl font-semibold">4. SaaS Application Development</h3>
                    <p>
                        Want to build your own platform or subscription-based tool? Their team specializes in full-stack SaaS products — ready to scale.
                    </p>

                    <h3 className="text-xl font-semibold">5. Graphics Design</h3>
                    <p>
                        From logos to social posts, their designers craft modern, clean visuals that resonate with your audience.
                    </p>

                    <h3 className="text-xl font-semibold">6. Video Production</h3>
                    <p>
                        Video sells. Whether it's animated explainers, product promos, or corporate videos — they deliver high-quality productions.
                    </p>

                    <h3 className="text-xl font-semibold">7. Branding</h3>
                    <p>
                        Great brands are built, not born. Alraayida helps shape your identity with naming, color strategy, typography, and voice.
                    </p>
                </main>

                {/* Right Sidebar / CTA Section */}
                <aside className="lg:w-1/4 space-y-6">
                    <div className="bg-gray-100 p-4 rounded-xl shadow-sm space-y-3">
                        <h3 className="font-bold text-lg">Find the Ideal Web Design Agency</h3>
                        <p className="text-sm text-gray-600">Unlock innovative solutions, streamlined processes, and expert strategies.</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Hire the Ultimate Team</button>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-xl shadow-sm space-y-3">
                        <h3 className="font-bold text-lg">Stay Ahead with Alraayida</h3>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                        />
                        <button className="bg-blue-600 text-white w-full py-2 rounded-md">Subscribe</button>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default AnotherBlog;
