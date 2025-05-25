import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // COUNTERS
  const countersData = [
    { label: 'Countries Served', end: 30 },
    { label: 'Tech Partners', end: 13 },
    { label: 'Projects', end: 250 },
  ];

  const [counts, setCounts] = useState(countersData.map(() => 0));

  useEffect(() => {
    if (!isInView) return;

    const intervals = countersData.map((item, i) => {
      return setInterval(() => {
        setCounts(prev => {
          const newCounts = [...prev];
          if (newCounts[i] < item.end) {
            newCounts[i] += 1;
          }
          return newCounts;
        });
      }, 100);
    });

    const stopIntervals = setInterval(() => {
      setCounts(prev => {
        const done = prev.every((val, i) => val >= countersData[i].end);
        if (done) {
          intervals.forEach(clearInterval);
          clearInterval(stopIntervals);
        }
        return prev;
      });
    }, 100);

    return () => intervals.forEach(clearInterval);
  }, [isInView]);

  return (
    <div
      ref={sectionRef}
      className="bg-cover bg-center relative -mt-24 max-w-7xl mx-auto"
      style={{
        backgroundImage: `url('https://i.ibb.co/k2XkT87z/image-35.png')`,
      }}
    >
      <div className="max-w-7xl mx-auto w-full h-full">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12">
          {/* Left Section */}
          <motion.div
            className="flex-1 text-start md:text-left space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className="flex items-center mt-20 justify-start md:justify-start gap-3">
              <img
                className="w-[40px] border-2 rounded-full bg-white"
                src="https://i.ibb.co.com/1fHBtB9M/google-logo.png"
                alt="Google"
              />
              <span className="text-white text-lg font-semibold">5</span>
              <div className="rating flex gap-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${i}`}
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                      readOnly
                    />
                  ))}
              </div>
            </div>

            <h1 className="text-white font-extrabold text-xl md:text-4xl leading-tight drop-shadow-lg">
              Your Pro Team Alraayida
              <br />
              <span className="text-blue-400 drop-shadow-md inline-block mt-2">
                <TypeAnimation
                  sequence={[
                    'Web Development',
                    2000,
                    '',
                    800,
                    'Digital Marketing',
                    2000,
                    '',
                    800,
                    'Graphics Design',
                    2000,
                    '',
                    800,
                    'UI/UX Design',
                    2000,
                    '',
                    800,
                    'Video Production',
                    2000,
                    '',
                    800,
                    'Branding',
                    2000,
                    '',
                    800,
                    'CRM and Saas development',
                    2000,
                    '',
                    800,
                    'Software development',
                    2000,
                    '',
                    800,
                  ]}
                  speed={60}
                  deletionSpeed={40}
                  wrapper="span"
                  repeat={Infinity}
                  className="inline-block"
                />
              </span>
            </h1>

            <p className="text-white text-base sm:text-lg opacity-50 leading-relaxed md:max-w-xl md:mx-0">
              Alraayida is a website and software development company dedicated to empowering startups and businesses. We specialize in building SaaS, mobile apps, and websites while helping organizations establish and manage efficient remote teams.
            </p>

            <div className="mt-6">
              <a href="calendly" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-5 max-sm:flex-col max-sm:items-start">
                  <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:scale-105">
                    Book Consultation <FaArrowRight size={20} />
                  </button>
                  <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-transparent text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:scale-105">
                    Contact Us <FaArrowRight size={20} />
                  </button>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="flex-1 flex justify-center max-sm:justify-start max-sm:items-start max-sm:-mb-32 -mb-48  md:mt-32  relative"
            initial={{ y: 90, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Shared Up-Down Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
              className="relative"
            ></motion.div>
            {/* Base Image */}
            <motion.img
              className="w-[450px]  rounded-xl shadow-2xl"
              src="https://i.ibb.co/V0nV0h87/download-12.png"
              alt="Banner Visual"

            />

            {/* Overlay AI Image */}
            <img
              src="https://i.ibb.co/k68qQhqL/download-11.png"
              alt="Overlay"

              className="absolute w-[500px] p-5  h-auto max-sm:-mx-2 mx-5 max-sm:-mt-32 -mt-48 rounded-full    pointer-events-none"
            />
          </motion.div>

        </div>

        {/* Counter Section */}
        <motion.div
          className="flex    items-start text-white gap-8 p-2  max-sm:my-20 "
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {countersData.map((item, i) => (
            <div key={i} className="text-center border-r last:border-none pr-6 last:pr-0">
              <h2 className="text-4xl max-sm:text-xl font-bold text-pink-100">{counts[i]}+</h2>
              <p className="text-sm max-sm:text-xs text-white/80 mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
