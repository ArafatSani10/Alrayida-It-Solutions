import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendly = () => {
    const [date, setDate] = useState(new Date());
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const timeNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    useEffect(() => {
        // Set the page title
        document.title = "Select a date & Time | Calendly";

        // Set the favicon
        const favicon = document.getElementById("favicon");
        if (favicon) {
            favicon.href = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgyn8Ng8PXWBZX5eLh8orPs-6Ntz65mAJHhg&s"; // replace with your actual favicon URL
        } else {
            const link = document.createElement('link');
            link.id = 'favicon';
            link.rel = 'icon';
            link.href = 'https://i.ibb.co/xK8Zhtx/favicon.png'; // replace with your actual favicon URL
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto my-10 animate-fade-in">
            {/* Left Panel */}
            <div className="md:w-1/2 p-6 border-r border-gray-200 flex flex-col items-center text-start">
                <img 
                    src="https://i.ibb.co.com/xK8Zhtxb/Screenshot-2025-05-02-012602.png" 
                    alt="Alraayida Logo" 
                    className="w-32 h-32 rounded-full shadow-md mb-6 hover:scale-105 transition-transform duration-300"
                />
                <h2 className="text-2xl font-extrabold text-gray-800 mb-2">Alraayida/AIS Consultation</h2>
                <p className="text-blue-600 font-medium">🕒 30 min</p>
                <p className="mt-2 text-sm text-gray-600 max-w-xs">
                    📹 Web conferencing details will be provided upon confirmation.
                </p>
                <div className="mt-auto text-xs text-gray-400 pt-6">
                    <p className="hover:underline cursor-pointer">Cookie settings</p>
                    <p className="hover:underline cursor-pointer">Report abuse</p>
                </div>
            </div>

            {/* Right Panel */}
            <div className="md:w-1/2 p-6 flex flex-col justify-start">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Select a Date & Time</h3>
                <div className="bg-white rounded-xl shadow-inner p-4">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        className="rounded border border-gray-200"
                    />
                </div>
                <p className="mt-4 text-sm text-gray-600 text-right">
                    Time zone: <strong>{timeZone}</strong> ({timeNow})
                </p>
            </div>
        </div>
    );
};

export default Calendly;
