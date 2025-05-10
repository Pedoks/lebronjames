import React from 'react';
import eLogo from '../assets/lakerslogo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from './Button';
import { LogOut } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate(); // Initialize navigate hook
  const activeLinkStyle =
    'bg-[#552583] text-[#FDB927] rounded-full px-8 py-3 font-bold shadow-lg transition-all duration-300 transform hover:scale-105';

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#552583] to-[#3a1c6b] border-b-4 border-[#FDB927] shadow-2xl">
      <div className="max-w-screen-xl mx-auto px-8 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4 group">
          <img 
            src={eLogo} 
            alt="logo" 
            className="w-16 h-16 transition-transform duration-300 group-hover:rotate-12" 
          />
          <h1 className="text-[#FDB927] font-extrabold text-3xl tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-[#FDB927] to-[#f8d56a]">
            King Lebron
          </h1>
        </div>

        <ul className="flex space-x-6 text-[#FDB927] font-bold text-lg">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? activeLinkStyle
                  : 'hover:bg-[#FDB927]/20 hover:text-white rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? activeLinkStyle
                  : 'hover:bg-[#FDB927]/20 hover:text-white rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg'
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive
                  ? activeLinkStyle
                  : 'hover:bg-[#FDB927]/20 hover:text-white rounded-full px-8 py-3 transition-all duration-300 hover:shadow-lg'
              }
            >
              ARTICLES
            </NavLink>
          </li>
        </ul>

        <Button
          className="bg-[#FDB927] hover:bg-[#ffd343] text-[#552583] font-bold px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group"
          onClick={handleLoginClick}
        >
          <LogOut className="w-5 h-5 group-hover:animate-pulse" />
          <span></span>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
