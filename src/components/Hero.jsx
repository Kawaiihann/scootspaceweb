import heroIcon from "../assets/icons/heroIcon.svg";

function Hero() {
  return (
    <>
      <div className="flex pt-20 w-full h-auto bg-heroBg flex-col xl:flex-row items-center justify-center mx-auto">
        <div className="flex flex-col lg:flex-row justify-center">
          <div className="flex flex-col text-center xl:text-start items-center xl:items-start px-10 w-full lg:w-auto gap-5 mx-auto pt-10 justify-start">
            <div className="text-black text-5xl font-black font-sofia w-full lg:w-[531px] flex align-center max-xl:justify-center">
              <h1>Scoot In, Secure Up Welcome to ScootSpace Parking!</h1>
            </div>
            <div className="text-black text-lg font-light font-['Sofia Pro'] w-full lg:w-[531px] leading-tight">
              Our hubs in Skopje offer convenience, sustainability, and
              security. Enjoy easy payments, free charging, and peace of mind as
              you explore the city. Discover a cleaner, greener way to get
              around."
            </div>
            <div className="flex items-center justify-center gap-5">
              <button className="flex justify-center items-center text-white text-center py-[9px] w-44 p-4 bg-primary gap-2.5 border-2 rounded-2xl">
                Download the App
              </button>
              <button className="flex justify-center items-center text-center text-black py-[9px] w-44 p-4 bg-white rounded-2xl gap-2.5 border-2 border-teal-500">
                How to park?
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-14 lg:pt-24 w-full lg:w-auto">
          <img src={heroIcon} alt="heroImage" />
        </div>
      </div>

      <div className="flex w-full flex-row text-center justify-center items-center"></div>
    </>
  );
}

export default Hero;
