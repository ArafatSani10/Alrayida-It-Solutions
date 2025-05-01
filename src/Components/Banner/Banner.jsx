import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <div
      ref={sectionRef}
      className="bg-right max-w-7xl mx-auto  bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/TMYgywRk/d19ddfe76503ad219794e0661c2d0cb7.png')`,
      }}
    >
      <div className="bg-black/60 max-w-7xl mx-auto w-full h-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-12">

          {/* Left Section */}
          <motion.div
            className="flex-1 text-start md:text-left space-y-6"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <div className='flex items-center justify-start md:justify-start gap-3'>
              <img
                className='w-[40px] border-2 rounded-full bg-white'
                src="https://i.ibb.co.com/1fHBtB9M/google-logo.png"
                alt="Google"
              />
              <span className='text-white text-lg font-semibold'>5</span>
              <div className="rating flex gap-1">
                {Array(5).fill(0).map((_, i) => (
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

            <h1 className='text-white font-extrabold text-xl  md:text-4xl leading-tight drop-shadow-lg'>
              Your Pro Team Alraayida<br />
              <span className="text-blue-400 drop-shadow-md inline-block mt-2">
                <TypeAnimation
                  sequence={[
                    'Web Development', 2000,
                    '', 800,
                    'Digital Marketing', 2000,
                    '', 800,
                    'Graphics Design', 2000,
                    '', 800,
                    'UI/UX Design', 2000,
                    '', 800,
                    'Video Production', 2000,
                    '', 800,
                    'Branding', 2000,
                    '', 800,
                    'CRM and Saas development', 2000,
                    '', 800,
                    'Software development', 2000,
                    '', 800,
                  ]}
                  speed={60}
                  deletionSpeed={40}
                  wrapper="span"
                  repeat={Infinity}
                  className='inline-block'
                />
              </span>
            </h1>

            <p className='text-white text-base sm:text-lg opacity-50 leading-relaxed md:max-w-xl  md:mx-0'>
              Alraayida is a website and software development company dedicated to empowering startups and businesses. We specialize in building SaaS, mobile apps, and websites while helping organizations establish and manage efficient remote teams.
            </p>

            <div className="mt-6">
              <a
                href="calendly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-blue-600 text-white border border-white/30 backdrop-blur transition-all duration-300 ease-in-out shadow-[0_0_18px_4px_rgba(0,149,255,0.4)] hover:shadow-[0_0_30px_8px_rgba(0,149,255,0.7)] hover:scale-105">
                  Book Consultation <FaArrowRight size={20} />
                </button>
              </a>
            </div>

          </motion.div>

          {/* Right Section - Entrance + Floating Animation */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ y: 90, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.img
              className="w-full max-w-sm sm:max-w-md rounded-xl shadow-2xl "
              src="https://i.ibb.co.com/whxt7KYp/Dark-Green-Techno-AI-School-Academy-Invitation-Instagram-Post-2-1.png"
              alt="Banner Visual"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
