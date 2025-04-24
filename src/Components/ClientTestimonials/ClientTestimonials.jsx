import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import './Client.css'
const testimonials = [
  {
    name: "John Doe",
    country: "USA",
    title: "CEO, TechCorp",
    project: "E-commerce Platform",
    description: "Working with this team was an absolute pleasure. They delivered a world-class e-commerce platform that exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Aisha Rahman",
    country: "Bangladesh",
    title: "Founder, EduBridge",
    project: "Online Learning App",
    description: "They understood our vision perfectly and delivered an app that our users love. Great communication and quality code!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Carlos Rivera",
    country: "Mexico",
    title: "CTO, FinWise",
    project: "Fintech Dashboard",
    description: "Amazing attention to detail and flawless execution. The dashboard UI/UX is sleek and intuitive. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  // Add more...
];

const ClientTestimonials = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.2,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(slider) {
      console.log('slide changed', slider.details().relativeSlide);
    },
    duration: 300, // Quick transition for a smooth experience
  });

  const handlePrev = () => {
    instanceRef.current.prev();
  };

  const handleNext = () => {
    instanceRef.current.next();
  };

  return (
    <div className="py-12 bg-black px-4 md:px-10 lg:px-20">
      <div className='text-center mb-10'>
        <h1 className='text-white text-3xl md:text-4xl font-bold'>
          Client <span className='text-blue-500'>Testimonials</span>
        </h1>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button 
            onClick={handlePrev} 
            className="text-white text-3xl p-2 rounded-full bg-black  transition duration-300">
            <FaChevronLeft />
          </button>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer fire-effect"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border border-white/20"
                />
                <div>
                  <h2 className="text-white font-semibold">{testimonial.name}</h2>
                  <p className="text-sm text-gray-400">{testimonial.title} - {testimonial.country}</p>
                </div>
              </div>
              <div className="text-gray-300 text-sm mb-2 italic">"{testimonial.description}"</div>
              <p className="text-xs text-blue-400 mt-2">Project: {testimonial.project}</p>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button 
            onClick={handleNext} 
            className="text-white text-3xl p-2 rounded-full bg-black transition duration-300">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
