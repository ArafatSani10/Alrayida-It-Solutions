import React, { useState } from 'react';
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: 'Finding best IT help Bangladesh',
    category: 'Digital Marketing',
    image: 'https://t4.ftcdn.net/jpg/02/52/76/09/360_F_252760983_ZTCURKreID1WJkC7uiX6olt7hH0Q7v8X.jpg',
    date: '2025-01-04',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  {
    id: 2,
    title: 'Tailwind vs Bootstrap',
    category: 'UI/UX Design',
    image: 'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?semt=ais_hybrid&w=740',
    date: '2025-02-05',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  
  {
    id: 3,
    title: 'Searching top IT support Bangladesh ',
    category: 'Web Development',
    image: 'https://t3.ftcdn.net/jpg/02/14/87/96/360_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg',
    date: '2025-03-07',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  {
    id: 4,
    title: 'Need top IT experts Bangladesh',
    category: 'Graphics Design',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxiCZKP-Wbm2CdTP458FR0P4nIDnXRBoH7CQ&s',
    date: '2025-04-11',
    description: 'Discover smart IT solutions and trusted support across Bangladesh today.',
  },
  
];

const categories = [
  'All',
  'Digital Marketing',
  'Software Development',
  'Web Development',
  'UI/UX Design',
  'Graphics Design',
];

const TabBlog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category.trim() === activeCategory.trim());

  return (
    <div className="p-6 w-full mx-auto bg-[#111]">
      {/* Tabs */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-start mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-[7px] md:text-sm font-semibold transition-all duration-300 border
              ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-50'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <LazyMotion features={domAnimation}>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative group rounded-2xl overflow-hidden"
            >
              <div className="animated-border">
                <div className="bg-slate-600 rounded-xl  p-1  overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5 bg-[#122154] text-white">
                   <div className='flex items-center justify-between'> 
                   <p className="text-lg text-white font-semibold uppercase">
                      {post.category}
                    </p>
                    <p className="text-lg  text-white mb-1">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                   </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-white">{post.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </LazyMotion>

      {filteredPosts.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No blog posts found.</p>
      )}
    </div>
  );
};

export default TabBlog;
