import React, { useContext, useState } from 'react';
import logo from '../../../assets/Screenshot_24.png';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../../contexts/AuthContext/AuthContext';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Logged Out!", "", "success");
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then(() => {
        Swal.fire("Logged in with Google!", "", "success");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Login Failed", err.message, "error");
      });
  };

  const navItems = (
    <>
      <li><NavLink to="/" className="text-gray-800 hover:text-[#59B42D]">Home</NavLink></li>
      <li><NavLink to="/trainers" className="text-gray-800 hover:text-[#59B42D]">AllTrainers</NavLink></li>
      <li><NavLink to="/featured" className="text-gray-800 hover:text-[#59B42D]">Featured Classes</NavLink></li>
      <li><NavLink to="/pricing" className="text-gray-800 hover:text-[#59B42D]">Pricing</NavLink></li>
      <li><NavLink to="/contact" className="text-gray-800 hover:text-[#59B42D]">Contact</NavLink></li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Top Row: Logo + Mobile Menu Button */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <NavLink to="/" className="flex items-center space-x-3">
            <img src={logo} className="h-14" alt="GymBase Logo" />
            <span className="text-2xl font-bold text-gray-800">GymBase</span>
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu for Desktop */}
        <div className={`w-full md:flex md:items-center md:justify-between mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          {/* Centered Nav Items */}
          <ul className="font-medium flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10 text-center mb-4 md:mb-0 ml-50">
            {navItems}
          </ul>

          {/* Auth Buttons (Right Aligned) */}
          <div className="flex justify-end items-center gap-3">
            {user ? (
              <>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <button
                  onClick={handleLogout}
                  className="bg-green-500 hover:bg-black text-white px-4 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-black">
                  Login
                </NavLink>
                <NavLink to="/register" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-black">
                  Register
                </NavLink>
               <button
  onClick={handleGoogleLogin}
  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-black flex items-center gap-2"
>
  <FcGoogle className="text-xl" /> Google Sign In
</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
