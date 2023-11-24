import logo from "../assets/logo/logo.svg";
import dropdown from "../assets/icons/navdrop.svg";
import { useState } from "react";

const MobileNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className="flex flex-row h-20 items-center justify-between px-12 border-b border-gray-300 border-opacity-0.5 shadow-md shadow-white text-basee">
        <div>
          <img src={logo} width={154} alt="Scootspace logo" />
        </div>
        <div>
          <button onClick={() => setShowSidebar(true)}>
            <img src={dropdown} alt="dropdown" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
