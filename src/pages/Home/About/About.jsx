import React from 'react';
import img2 from '../../../assets/about/2.png';
import img3 from '../../../assets/about/3.png';
import img4 from '../../../assets/about/4.png';

const About = () => {
  return (
    <div className="bg-[#222224] text-white py-16 px-6 md:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-30">
        {/* Left: Three Images */}
        <div className="grid grid-cols-2 gap-4">
          <img src={img2} alt="Fitness 1" className="rounded-lg shadow-lg col-span-2 h-64 object-cover" />
          <img src={img3} alt="Fitness 2" className="rounded-lg shadow-lg h-40 object-cover" />
          <img src={img4} alt="Fitness 3" className="rounded-lg shadow-lg h-40 object-cover" />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-6">
            About Us
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            From the moment you walk through the door you know GymBase is a unique place.
          </p>
          <p className="text-gray-400 mb-4">
            When we created Gym Base, we knew we wanted to be more than just a simple gym...
          </p>
          <p className="text-gray-400">
            Our most important goal was to create a welcoming atmosphere and community in which
            everyone feels a sense of belonging.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800 p-4 rounded shadow text-center">
              <h4 className="text-lg font-semibold text-green-400 mb-1">ENVIRONMENT</h4>
              <p className="text-sm text-gray-300">Clean and Airy</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow text-center">
              <h4 className="text-lg font-semibold text-green-400 mb-1">CLASSES</h4>
              <p className="text-sm text-gray-300">Every Level</p>
            </div>
            <div className="bg-gray-800 p-4 rounded shadow text-center">
              <h4 className="text-lg font-semibold text-green-400 mb-1">PRICES</h4>
              <p className="text-sm text-gray-300">Affordable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
