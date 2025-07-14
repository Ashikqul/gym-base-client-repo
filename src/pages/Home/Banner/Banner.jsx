import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../../../assets/banner/1.png';
import image2 from '../../../assets/banner/2.png';
import image3 from '../../../assets/banner/3.png';
import image4 from '../../../assets/banner/4.png';
import image5 from '../../../assets/banner/5.png';
import { FaClock, FaUsers } from 'react-icons/fa';

const Banner = () => {
    const banners = [image1, image2, image3, image4, image5];

    return (
        <div className="relative">
            {/* Background Carousel */}
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop
                interval={4000}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
            >
                {banners.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Banner ${index + 1}`} className="w-full h-[80vh] object-cover" />
                    </div>
                ))}
            </Carousel>

            {/* Overlay Cards */}
            <div className="absolute bottom-0 left-0 w-full px-4 md:px-20 mb-[-100px] z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg">

        {/* Card 1: Upcoming Classes */}
        <div className="bg-white p-6 text-black">
          <h2 className="text-xl font-bold">Upcoming Classes</h2>
          <p className="italic text-gray-500 mt-1 mb-3">See what is next</p>
          <p className="text-gray-500">No upcoming classes for today</p>
        </div>

        {/* Card 2: Achieve Your Goals */}
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-xl font-bold">Achieve Your Goals</h2>
          <p className="italic text-sm mb-3">Experience healthier life</p>
          <div className="flex items-start gap-3">
            <FaUsers className="text-3xl mt-1" />
            <p>
              Ready to kick start your new healthy lifestyle? Contact us for a 20% off your introductory training session.
            </p>
          </div>
          <button className="mt-4 border border-white px-4 py-2 text-sm hover:bg-white hover:text-green-700 transition">
            VIEW CLASS SCHEDULE
          </button>
        </div>

        {/* Card 3: Train Day and Night */}
        <div className="bg-green-600 text-white p-6">
          <h2 className="text-xl font-bold">Train Day and Night</h2>
          <p className="italic text-sm mb-3">Around-the-clock access</p>
          <div className="flex items-start gap-3">
            <FaClock className="text-3xl mt-1" />
            <p>
              Our members wanted more flexible opening hours, so we offer them 24/7 access since the last year.
            </p>
          </div>
          <button className="mt-4 border border-white px-4 py-2 text-sm hover:bg-white hover:text-green-700 transition">
            FIND MY PERFECT PLAN
          </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
