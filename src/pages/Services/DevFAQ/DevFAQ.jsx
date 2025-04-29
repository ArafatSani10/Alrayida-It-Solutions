import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';

const faqs = [
  {
    question: 'What services does Alraayida provide?',
    answer:
      'We provide end-to-end web development services including design, development, deployment, and digital marketing strategies.',
  },
  {
    question: 'Do you offer backend and frontend development?',
    answer:
      'Yes! We specialize in building modern frontend UIs and powerful backend systems using the latest tech stack.',
  },
  {
    question: 'Can you help with SEO and performance?',
    answer:
      'Absolutely! Our websites are optimized for speed, SEO, and responsive performance across devices.',
  },
  {
    question: 'Is Alraayida suitable for startups?',
    answer:
      'Definitely. We love working with startups and help build scalable products from scratch.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use React, Node.js, MongoDB, Express, Tailwind CSS, and other modern frameworks tailored to your project.',
  },
  {
    question: 'How long does a project usually take?',
    answer:
      'Project duration depends on scope. Small projects can be done in 1–2 weeks; larger ones take 1–2 months.',
  },
];

const DevFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full font-sans bg-[#111] py-16 px-5 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="md:mb-16 mb-10 w-full md:w-[800px]">
          <h1 className="md:text-4xl text-xl">Frequently Asked Questions</h1>
          <p className="mt-5 text-sm text-gray-400">
            Alraayida IT Solutions delivers custom, results-driven websites and digital strategies tailored to your business goals for maximum impact.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-700"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h2 className="text-lg md:text-xl font-semibold">{faq.question}</h2>
                <span className="text-blue-400">
                  {openIndex === index ? (
                    <FaMinus size={18} />
                  ) : (
                    <FaPlus size={18} />
                  )}
                </span>
              </div>

              <div
                className={`mt-3 text-sm text-gray-300 transition-all duration-500 overflow-hidden ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevFAQ;
