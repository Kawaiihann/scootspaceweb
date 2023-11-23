import "./App.css";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/Hero.jsx";
import WhyScootspace from "./components/WhyScootspace.jsx";
import MobileNav from "./components/mobileNav.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MobileNav />
      <Hero />
      <WhyScootspace />
    </div>
  );
}

export default App;
