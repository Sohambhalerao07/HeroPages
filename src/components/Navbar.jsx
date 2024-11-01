import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="navbar flex items-center justify-between px-10 py-5 bg-gray-900 text-white">
        <div className="navbar-logo Anton text-3xl font-extrabold cursor-pointer tracking-wide">
          PHA5E
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className={`navbar-menu flex md:flex-row flex-col items-center ${isOpen ? 'block' : 'hidden'} md:block pr-10`}>
          <li className="navbar-item text-lg font-light cursor-pointer transition-colors mr-[20px]">OUR VISION</li>
          <li className="navbar-item text-lg font-light cursor-pointer transition-colors mr-[20px]">OUR TEAM</li>
          <li className="navbar-item text-lg font-light cursor-pointer transition-colors mr-[20px]">OUR PROJECTS</li>
          <li className="navbar-item text-lg font-light cursor-pointer transition-colors mr-[20px]">CONTACT US</li>
          <li className="navbar-item text-lg font-light cursor-pointer mr-[20px]">FR/EN</li>
        </ul>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white py-4">
          <ul className="flex flex-col items-center">
            <li className="navbar-item text-lg font-light cursor-pointer transition-colors mb-2">OUR VISION</li>
            <li className="navbar-item text-lg font-light cursor-pointer transition-colors mb-2">OUR TEAM</li>
            <li className="navbar-item text-lg font-light cursor-pointer transition-colors mb-2">OUR PROJECTS</li>
            <li className="navbar-item text-lg font-light cursor-pointer transition-colors mb-2">CONTACT US</li>
            <li className="navbar-item text-lg font-light cursor-pointer">FR/EN</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
