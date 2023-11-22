import heroIcon from "../assets/icons/heroIcon.svg";

function Hero() {
  return (
    <>
      <div className="flex w-full h-auto bg-heroBg ">
        <div className="flex basis-[50%] justify-start pl-24  ">
          <div className="flex flex-col text-start justify-center items-start pl-44 gap-5">
            <div class=" text-black text-5xl font-black font-sofia w-[531px] flex align-start  ">
              <h1>Scoot In, Secure Up Welcome to ScootSpace Parking!</h1>
            </div>
            <div class=" text-black text-base font-light font-['Sofia Pro'] w-[531px] leading-tight">
              Our hubs in Skopje offer convenience, sustainability, and
              security. Enjoy easy payments, free charging, and peace of mind as
              you explore the city. Discover a cleaner, greener way to get
              around."
            </div>
            <div className="flex items-center justify-center gap-5">
              <button className=" flex justify-center items-center text-white text-center py-[9px] w-44 p-4 bg-primary  rounded-2xl">
                Download the App
              </button>
              <button className="flex justify-center items-center text-center text-black py-[9px] w-44 p-4 bg-white rounded-2xl gap-2.5 border-2 border-teal-500">
                How to park?
              </button>
            </div>
          </div>
        </div>
        <div className="flex basis-[50%]  items-center justify-center pt-24">
          <img src={heroIcon} alt="" className="pr-24" />
        </div>
      </div>
    </>
  );
}

export default Hero;
