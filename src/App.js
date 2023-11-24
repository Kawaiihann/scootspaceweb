import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyScootspace from "./components/WhyScootspace.jsx";
import MobileNav from "./components/mobileNav.jsx";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1024;

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`App flex flex-col justify-center items-center`}>
      {isMobile ? (
        <MobileNav showSidebar={showSidebar} toggleSidebar={toggleSidebar} /> // Render Topbar for screen size less than or equal to 1024px
      ) : (
        <Navbar /> // Render Navbar for screen size greater than 1024px
      )}
      <Hero />
      <WhyScootspace />
    </div>
  );
}

export default App;
