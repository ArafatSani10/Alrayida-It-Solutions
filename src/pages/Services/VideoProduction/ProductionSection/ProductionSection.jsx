import React from 'react';

const productionData = [
  {
    id: 1,
    title: 'Video Editing Services',
    description: 'Trendy, captivating, concise, viral, impactful.',
    thumbnail: 'https://i.ibb.co.com/4RwwrMhM/image-16.png',
  },
  {
    id: 2,
    title: 'Short Form Reels',
    description: 'A sleek animated logo sequence to enhance brand recall.',
    thumbnail: 'https://i.ibb.co.com/MyNd0G5y/image-17.png',
  },
  {
    id: 3,
    title: 'Talking Head Editing',
    description: 'Clean, focused, engaging, professional, seamless.',
    thumbnail: 'https://i.ibb.co.com/cX1fLK6S/image-18.png',
  },
  {
    id: 4,
    title: 'Model Video Ads',
    description: 'Stylish, persuasive, dynamic, high-converting, branded.',
    thumbnail: 'https://i.ibb.co.com/dwXycW53/image-19.png',
  },
  {
    id: 5,
    title: 'Motion Graphics Ads',
    description: 'Animated, eye-catching, modern, energetic, informative.',
    thumbnail: 'https://i.ibb.co.com/S4jKdNBb/image-21.png',
  },
  {
    id: 6,
    title: 'Stock Footage Ads',
    description: 'Versatile, polished, budget-friendly, professional, impactful.',
    thumbnail: 'https://i.ibb.co.com/m5X8N0Ct/image-22.png',
  },
];

// 🟡 Replace this with your actual Google Drive video link
const fixedDriveLink = 'https://drive.google.com/file/d/YOUR_VIDEO_ID/view';

const ProductionSection = () => {
  return (
    <div className="bg-[#111] py-10 text-white">
      <div className="text-center max-w-4xl leading-tight mx-auto px-4">
        <h1 className="text-2xl md:text-[45px]">
          Editing, Animation, Advertising, Production.
        </h1>
        <p className="mt-5 text-gray-300">
          Showcase of our projects: a curated selection of innovative, impactful, and expertly crafted works reflecting our passion, skill, and creativity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 px-4 md:w-[1450px] mx-auto w-full p-10">
        {productionData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full max-sm:w-full max-sm:h-56 object-cover"
            />
            <div className="p-5 flex text-center flex-col flex-1">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400 flex-1">{item.description}</p>
              <a
                href={fixedDriveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 mx-auto bg-blue-600 text-white  hover:bg-transparent hover:text-white  py-2 px-4 rounded transition-all duration-300 self-start"
              >
                Watch Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductionSection;
