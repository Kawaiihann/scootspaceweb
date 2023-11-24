// MobileNav.jsx

import logo from "../assets/logo/logo.svg";
import dropdown from "../assets/icons/navdrop.svg";
import { useState } from "react";

const MobileNav = ({ showSidebar, toggleSidebar }) => {
  return (
    <>
      <div className="flex w-full flex-row h-20 items-center justify-between px-12 border-b border-gray-300 border-opacity-0.5 shadow-md shadow-white text-basee">
        <div>
          <img src={logo} width={154} alt="Scootspace logo" />
        </div>
        <div>
          <button onClick={toggleSidebar}>
            <img src={dropdown} alt="dropdown" />
          </button>
        </div>
      </div>

      {showSidebar && (
        <div className="flex w-full  overflow-hidden">
          <div className="fixed top-0 left-0 h-screen w-[30%] bg-black bg-opacity-50 text-borderColor p-4"></div>

          <div className="fixed top-0 right-0 h-screen w-[70%] bg-white text-borderColor p-4">
            <button onClick={toggleSidebar} className="text-4xl">
              &times;
            </button>
            <ul className="mt-4 text-borderColor">
              <li>
                <a href="#" className="">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="">
                  How to park
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Locations
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
