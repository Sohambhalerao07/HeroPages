import React from 'react';

function Navbar() {
  return (
    <div>
      <nav className="navbar flex items-center justify-between px-10 py-5 bg-gray-900 text-white">
     
        <div className="navbar-logo Anton text-3xl font-extrabold cursor-pointer tracking-wide">
          PHA5E
        </div>
        <ul className="navbar-menu flex pr-10">
          <li className="navbar-item text-lg font-light cursor-pointer  transition-colors mr-[20px]">OUR VISION</li>
          <li className="navbar-item text-lg font-light cursor-pointer  transition-colors mr-[20px]">OUR TEAM</li>
          <li className="navbar-item text-lg font-light cursor-pointer  transition-colors mr-[20px]">OUR PROJECTS</li>
          <li className="navbar-item text-lg font-light cursor-pointer  transition-colors mr-[20px]">CONTACT US</li>
          <li className="navbar-item text-lg font-light cursor-pointer mr-[20px]">FR/EN</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
