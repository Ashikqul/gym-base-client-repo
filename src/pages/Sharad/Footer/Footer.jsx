import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../../assets/Screenshot_24.png';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaIdCard,
  FaTableTennis,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 mt-50">
      {/* Top Highlight Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4">
        <div className="bg-white text-black py-6 flex flex-col items-center space-y-2">
          <FaIdCard className="text-green-600 text-4xl" />
          <h3 className="font-bold text-xl">Membership Cards</h3>
          <p className="text-green-600">Discount for all members</p>
        </div>
        <div className="bg-green-600 text-black py-6 flex flex-col items-center space-y-2">
          <FaTableTennis className="text-white text-4xl" />
          <h3 className="font-bold text-xl">Rackets Sports</h3>
          <p>Over 40 fitness classes</p>
        </div>
        <div className="bg-white text-black py-6 flex flex-col items-center space-y-2">
          <FaMapMarkerAlt className="text-green-600 text-4xl" />
          <h3 className="font-bold text-xl">Find a Club</h3>
          <p className="text-green-600">at your preferred location</p>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-700 mt-10">
        {/* Gym Info */}
        <div>
          <NavLink to="/" className="flex items-center space-x-3 mb-4">
            <img src={logo} className="h-20 rounded-3xl" alt="GymBase Logo" />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">GymBase</span>
          </NavLink>
          <p className="text-gray-400 mb-3">
            The longest running gym in Chicago. Owned and operated by a personal trainer with over 25 years experience.
          </p>
          <div className="flex items-start space-x-2 text-gray-400 mb-2">
            <FaMapMarkerAlt className="mt-1" />
            <span>2702 Memory Lane, Chicago, IL 60605</span>
          </div>
          <p className="flex items-center space-x-2 mb-1">
            <FaPhoneAlt />
            <span>(510) 210-5225</span>
          </p>
          <p className="flex items-center space-x-2 mb-1">
            <FaPhoneAlt />
            <span>(510) 210-5226</span>
          </p>
          <p className="flex items-center space-x-2">
            <FaEnvelope />
            <span>contact@gymbase.com</span>
          </p>
        </div>

        {/* About Links */}
        <div className='ml-20'>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li><NavLink to="/" className="hover:text-white cursor-pointer">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white cursor-pointer">About</NavLink></li>
            <li><NavLink to="/classes" className="hover:text-white cursor-pointer">Classes</NavLink></li>
            <li><NavLink to="/gallery" className="hover:text-white cursor-pointer">Gallery</NavLink></li>
            <li><NavLink to="/membership" className="hover:text-white cursor-pointer">Membership</NavLink></li>
            <li><NavLink to="/brm-calc" className="hover:text-white cursor-pointer">BRM Calc</NavLink></li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div>
          <h2 className="text-xl font-bold mb-4">Latest Posts</h2>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              How to Build Discipline to Exercise <span className="block text-sm">26 NOV, 2019</span>
            </li>
            <li className="hover:text-white cursor-pointer">
              How to Get Organised for the Week Ahead <span className="block text-sm">23 NOV, 2019</span>
            </li>
            <li className="hover:text-white cursor-pointer">
              Common Workout Mistakes to Avoid <span className="block text-sm">22 NOV, 2019</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h2 className="text-xl font-bold mb-4">Opening Hours</h2>
          <ul className="text-gray-400 space-y-1">
            <li className="flex justify-between"><span>Monday:</span> <span>07:00 pm - 10:00 pm</span></li>
            <li className="flex justify-between"><span>Tuesday:</span> <span>08:00 am - 10:00 pm</span></li>
            <li className="flex justify-between"><span>Wednesday:</span> <span>08:00 am - 10:00 pm</span></li>
            <li className="flex justify-between"><span>Thursday:</span> <span>08:00 am - 10:00 pm</span></li>
            <li className="flex justify-between"><span>Friday:</span> <span>08:00 am - 12:00 pm</span></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© Copyright - <span className="text-green-600">GymBase</span> Theme by QuanticaLabs</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Sitemap</a>
          <a href="#" className="hover:text-white"><FaFacebook /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
