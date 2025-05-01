import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Digital Marketing',
    icon: '📈',
    description: 'Boost your brand visibility and reach with strategic digital campaigns.',
    link: '/service/digitalMarketing',
  },
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Custom websites with seamless user experiences and performance in mind.',
    link: '/service/web',
  },
  {
    title: 'Graphics Design',
    icon: '🎨',
    description: 'Creative visuals that leave a lasting impression.',
    link: '/service/GraphicsDesign',
  },
  {
    title: 'CRM & SaaS Development',
    icon: '🛠️',
    description: 'Tailored CRM systems and SaaS platforms built for growth.',
    link: '/service/crm',
  },
  {
    title: 'UI/UX Design',
    icon: '📱',
    description: 'Intuitive and user-friendly designs to enhance user engagement.',
    link: '/service/uiux',
  },
  {
    title: 'Video Production',
    icon: '☁️',
    description: 'Scalable SaaS solutions to streamline your business operations.',
    link: '/service/video',
  },
  {
    title: 'Branding',
    icon: '🛠️',
    description: 'Branding solutions to streamline your business operations.',
    link: '/service/branding',
  },
];


const OurService = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <button className="btn bg-transparent text-white rounded-full border border-white px-5 py-2 mb-4">
          Your Vision
        </button>
        <h1 className="text-white text-3xl max-sm:text-xl">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-white mt-5 md:max-w-3xl mx-auto text-sm sm:text-base">
          We all know that nothing moves until someone makes a decision. The first action is always in making the decision to proceed.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative w-full p-6 rounded-xl bg-white/10 border-2 border-blue-600 shadow-md backdrop-blur-2xl text-white overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            {/* Blue rotating border animation */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-500 rounded-xl animate-spin-slow z-0"
              aria-hidden
            ></motion.div>

            {/* Card Content */}
            <div className="relative z-10 space-y-4">
              <div className="text-4xl hover:text-blue-700">{service.icon}</div>
              <h3 className="text-xl hover:text-blue-700 font-bold">{service.title}</h3>
              <p className="text-sm hover:text-blue-700 opacity-90">{service.description}</p>
              {/* Arrow with Link */}
              <Link to={service.link} className="inline-block mt-4 text-blue-400 hover:text-blue-600 transition-colors">
                <ArrowRight />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
