import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// Team members data
const teamMembers = [
  { name: 'Md. Shamim Hossain', title: 'Founder & CEO', image: 'https://www.zentexx.com/assets/Ceo-C3KUFrMf.webp' },
  { name: 'Md. Abid Hasan', title: 'Co‑Founder & COO', image: 'https://www.zentexx.com/assets/Abid-r7RapVpK.webp' },
  { name: 'Safayet Hossain', title: 'Creative Director', image: 'https://www.zentexx.com/assets/Safayet-DNfqtDp_.webp' },
  { name: 'Alvee Rahman', title: 'Sr. UI/UX Designer', image: 'https://www.zentexx.com/assets/Alvee-Br9y-wNX.webp' },
  { name: 'Riyad Mahmud', title: 'Sr. Frontend Dev', image: 'https://www.zentexx.com/assets/Riyad-l2ur54lV.webp' },
  { name: 'Thanvir Hossain', title: 'Backend Developer', image: 'https://www.zentexx.com/assets/Thanvir-cO2Kz00n.webp' },
  { name: 'Rasibul Islam', title: 'Project Manager', image: 'https://www.zentexx.com/assets/Rasibul-BNaO4MLH.webp' },
  { name: 'Sajid Hasan', title: 'Frontend Developer', image: 'https://www.zentexx.com/assets/Sajid-BHbeSdML.webp' },
  { name: 'Athick Rahman', title: 'Graphic Designer', image: 'https://www.zentexx.com/assets/Athick-BWN_Wq-j.webp' },
  { name: 'Hasan Ahmed', title: 'Web Designer', image: 'https://www.zentexx.com/assets/Hasan-DNIFJgxZ.webp' },
  { name: 'Rakib Hossain', title: 'Software Engineer', image: 'https://www.zentexx.com/assets/Rakib-SbwTsGm4.webp' },
  { name: 'Tultul', title: 'Marketing Executive', image: 'https://www.zentexx.com/assets/Tultul-BEJ1pA_-.png' },
  { name: 'Sohail Rana', title: 'SEO Specialist', image: 'https://www.zentexx.com/assets/Sohail-BWmZ4mBo.webp' },
  { name: 'Sahriar Islam', title: 'Support Engineer', image: 'https://www.zentexx.com/assets/Sahriar-BiB5vJw_.webp' },
  { name: 'Siyem Ahmed', title: 'QA Tester', image: 'https://www.zentexx.com/assets/Siyem-CIehNtai.webp' },
  { name: 'Mojahidul Islam', title: 'Video Editor', image: 'https://www.zentexx.com/assets/Mojahid-Ci9O3QVF.webp' },
];

// Split into rows
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const MeetAlrayida = () => {
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const updateCols = () => {
      const w = window.innerWidth;
      if (w >= 1024) setCols(4);
      else if (w >= 768) setCols(3);
      else setCols(2);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);

  const rows = chunk(teamMembers, cols);

  // Base speed in pixels per second (same on all devices)
  const baseSpeed = 80;

  return (
    <div className="p-5 text-white font-sans max-w-[1440px] mx-auto">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-row {
            display: flex;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
      </style>

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-5xl font-bold opacity-90">
          Meet the <span className="text-gray-500">Alrayida</span> Team
        </h1>
        <p className="max-w-3xl mt-4 text-sm md:text-lg opacity-70 mx-auto px-4">
          Get to know the passionate experts behind Alrayida! Our team of skilled designers, developers, and strategists is dedicated to delivering innovative solutions and exceptional results.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="space-y-8">
        {rows.map((row, idx) => {
          const totalWidth = (row.length * 2) * (100 / cols);
          const itemWidthPx = 240; // Approximate width of each card
          const fullRowWidthPx = row.length * 2 * itemWidthPx;
          const duration = fullRowWidthPx / baseSpeed; // px/s

          return (
            <div key={idx} className="overflow-hidden relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/80 to-transparent z-10" />

              <div
                className="marquee-row"
                style={{
                  width: `${totalWidth}%`,
                  animationName: 'marquee',
                  animationDuration: `${duration}s`,
                  animationDelay: `${idx * 2}s`,
                  animationDirection: idx % 2 === 0 ? 'normal' : 'reverse'
                }}
              >
                {[...row, ...row].map((member, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / (row.length * 2)}%` }}
                  >
                    <div className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-xl transition-transform duration-500 hover:scale-105 overflow-hidden">
                      <div className="relative">
                        <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-white via-black to-white shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full  h-full object-cover object-top rounded-xl"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center p-4">
                          {/* Social icons or overlay could go here */}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-400 text-sm mt-1">{member.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MeetAlrayida;
