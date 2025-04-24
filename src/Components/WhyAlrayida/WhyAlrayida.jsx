import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import './Alrayida.css'

const stats = [
  { title: 'Countries Served', end: 30, suffix: '+' },
  { title: 'Tech Partners', end: 12, suffix: '+' },
  { title: 'Total Projects', end: 70, suffix: '+' },
  { title: 'Ad Spend', end: 3, suffix: 'M' },
];

const WhyAlrayida = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <button className="btn bg-transparent text-white rounded-full border border-white px-5 py-2 mb-4">
          Our Dedication
        </button>
        <h1 className="text-white  text-3xl max-sm:text-xl">
          Why <span className="text-blue-600">Alrayidaitsolutions?</span>
        </h1>
        <p className="text-white mt-5 md:max-w-3xl mx-auto text-sm sm:text-base">
          We all know that nothing moves until someone makes a decision. The first action is always in making the decision to proceed. Which most people overlook, we don’t do it intentionally or with malice.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        ref={ref}
        className="grid grid-cols-1 max-sm:w-full sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="relative bg-white/10 border-2 border-blue-500 rounded-xl p-6 text-center text-white shadow-lg backdrop-blur-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400 rounded-xl animate-spin-slow z-0 opacity-20"
              aria-hidden
            ></motion.div>

            <div className="relative z-10 space-y-2">
              <h2 className="text-4xl font-bold text-blue-300">
                {inView && (
                  <CountUp end={stat.end} duration={5} suffix={stat.suffix} />
                )}
              </h2>
              <p className="text-sm opacity-90">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyAlrayida;
