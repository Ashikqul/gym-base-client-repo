import React, { useState } from 'react';
import logo from '../../../assets/Screenshot_24.png';
import { NavLink, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hook/UseAuth';

const Navbar = () => {
  const { user, logOut, googleSignIn } = useAuth(); 
  const [isOpen, setIsOpen] = useState(false);
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
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trainers"
          className={({ isActive }) =>
            isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
          }
        >
          All Trainers
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/featured"
          className={({ isActive }) =>
            isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
          }
        >
          Featured Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
          }
        >
          Pricing
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
            }
          >
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-[#59B42D] font-semibold" : "text-gray-800 hover:text-[#59B42D] font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo + Text */}
        <NavLink to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-14" alt="GymBase Logo" />
          <span className="text-2xl font-bold text-gray-800">GymBase</span>
        </NavLink>

        {/* Menu & Auth */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <ul className="flex items-center gap-6">{navItems}</ul>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-green-500"
                />
                <button
                  onClick={handleLogout}
                  className="bg-green-500 hover:bg-black text-white px-4 py-1 rounded font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-black font-semibold">
                  Login
                </NavLink>
                <NavLink to="/register" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-black font-semibold">
                  Register
                </NavLink>
                <button
                  onClick={handleGoogleLogin}
                  className="bg-green-500 text-white px-4 py-1 rounded hover:bg-black flex items-center gap-2 font-semibold"
                >
                  <FcGoogle className="text-xl" /> Google Sign In
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col items-center gap-4">{navItems}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
