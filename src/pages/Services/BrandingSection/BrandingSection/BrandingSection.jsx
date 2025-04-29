import React from 'react';

const productionData = [
  {
    id: 1,
    title: 'Brand Strategy',
    description: 'Vision, Positioning, Growth.',
    thumbnail: 'https://i.ibb.co.com/PG0yw4nB/image-24.png',
  },
  {
    id: 2,
    title: 'Visual Identity',
    description: 'Look, Feel, Style.',
    thumbnail: 'https://i.ibb.co.com/rRWSZwYV/image-25.png',
  },
  {
    id: 3,
    title: 'Brand Guidelines',
    description: 'Consistency, Rules, Structure',
    thumbnail: 'https://i.ibb.co.com/Z6yW1DH3/image-26.png',
  },
  {
    id: 4,
    title: 'Brand Messaging',
    description: 'Voice, Story, Connection.',
    thumbnail: 'https://i.ibb.co.com/rRwy88kL/image-27.png',
  },
  {
    id: 5,
    title: 'Social Media',
    description: 'Engage, Share, Grow',
    thumbnail: 'https://i.ibb.co.com/Qv7xHv7Z/image-28.png',
  },
  {
    id: 6,
    title: 'Marketing Collateral',
    description: 'Bold, clear, strong.',
    thumbnail: 'https://i.ibb.co.com/qLX8ZDNM/image-31.png',
  },
  {
    id: 7,
    title: 'Brand Launch',
    description: 'Exciting, fresh, impactful.',
    thumbnail: 'https://i.ibb.co.com/hRcMT3bs/image-32.png',
  },
  
  {
    id: 8,
    title: 'Brand Launch',
    description: 'Exciting, fresh, impactful.',
    thumbnail: 'https://i.ibb.co.com/WpBtdZtk/image-29.png',
  },
  
  
];



const BrandingSection = () => {
  return (
    <div className="bg-[#111] py-10 text-white">
      <div className="text-center max-w-4xl leading-tight mx-auto px-4">
        <h1 className="text-2xl md:text-[45px]">
        Strategic Brand Planning.
        </h1>
        <p className="mt-5 text-gray-300">
        Showcase of our projects: a curated selection of innovative, impactful, and expertly crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4 md:w-[1450px] mx-auto w-full p-10">
        {productionData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full max-sm:w-full max-sm:h-52 object-cover"
            />
            <div className="p-5 flex flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400 flex-1">{item.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandingSection;
