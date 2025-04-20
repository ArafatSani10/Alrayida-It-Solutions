import React from 'react';
import './Ourwork.css';

const imageColumns = [
  [
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
  ],
  [
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
  ],
  [
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
  ],
  [
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
    'https://img.freepik.com/free-photo/programming-background-collage_23-2149901777.jpg?uid=R180247483&ga=GA1.1.4438153.1705418444&semt=ais_hybrid&w=740',
  ],
];

const Ourwork = () => {
  return (
    <div className="py-20 bg-black text-white relative">
      <div className="text-center mb-16 z-10 relative">
      <button className="btn bg-white text-black shadow-[0_0_25px_8px_rgba(255,255,255,0.6)] rounded-full border border-white/30 px-6 py-2 mb-4 hover:shadow-[0_0_35px_12px_rgba(0,149,255,0.8)] transition-all duration-300 backdrop-blur">
  Project View
</button>

        <h1 className="text-4xl max-sm:text-2xl font-bold tracking-wide">
          Explore Our <span className="text-blue-500">Work</span>
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-6 px-6 max-sm:grid-cols-2">
        {imageColumns.map((column, colIndex) => (
          <div
            key={colIndex}
            className={`vertical-marquee column-${colIndex % 2 === 0 ? 'up' : 'down'} relative`}
          >
            <div className="fade-overlay-top" />
            <div className="fade-overlay-bottom" />
            <div className="marquee-content">
              {[...column, ...column].map((img, i) => (
                <div
                  key={i}
                  className="mb-6 w-full h-40 overflow-hidden rounded-xl shadow-md bg-white/10 border border-white/10"
                >
                  <img
                    src={img}
                    alt={`Work ${colIndex}-${i}`}
                    className="w-full h-full object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourwork;
