import React from 'react';
import { Link } from 'react-router-dom';

const CurrentOpening = () => {
    const jobs = [
        {
            title: 'SEO Specialist',
            location: 'Chittagong, Bangladesh (On-Site)',
            experience: '2 Years',
            link: '/seo'
        },
        {
            title: 'UI/UX Designer',
            location: 'Chittagong, Bangladesh (On-Site)',
            experience: '1 Years',
            link: '/uiuxApply'
        },
    ];

    return (
        <div className="text-white bg-[#111]  px-4 md:px-12 py-5">
            <div className="text-center mb-10">
                <h1 className="md:text-5xl text-2xl font-bold">Current Opening..</h1>
            </div>

            <div className="space-y-4">
                {jobs.map((job, idx) => (
                    <div
                        key={idx}
                        className="bg-[#0B1220] border-b border-gray-800 py-6 px-4 md:px-8 flex items-center justify-between"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">{job.title}</h2>
                            <div className="flex gap-6 text-sm text-gray-400 mt-2">
                                <span className="flex items-center gap-1">📍 {job.location}</span>
                                <span className="flex items-center gap-1">⭐ {job.experience} Exp</span>
                            </div>
                        </div>
                        <Link to={job.link}>
                            <button className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-white text-sm">
                                Apply Now
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurrentOpening;
