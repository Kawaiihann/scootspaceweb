import logo from "../assets/logo/logo.svg";

function Navbar() {
  return (
    <>
      <div className="flex h-[80px] border-b border-gray-300 border-opacity-0.5 shadow-md shadow-white text-basee">
        <div className="flex basis-1/6 items-center justify-center">
          <img className="ml-4" src={logo} width={150} alt="" />
        </div>
        <div className="flex basis-full pl-8">
          <div className="flex pl-28 basis-full flex-row justify-start gap-8 items-center font-normal  ">
            <h2>About </h2>
            <h2>How to park</h2>
            <h2>Pricing</h2>
            <h2>Locations</h2>
          </div>
        </div>
        <div className="flex basis-1/4 items-center justify-center flex-row pr-6 gap-3">
          <button className="h-10 w-36  items-center justify-center flex flex-row text-black gap-3">
            <svg
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5683 13.07L10.6789 10.56L10.713 10.53C12.6402 8.6471 14.0801 6.41925 14.9334 4H18.2665V2H10.3035V0H8.02838V2H0.0654297V4H12.772C12.0099 5.92 10.804 7.75 9.16594 9.35C8.10801 8.32 7.23208 7.19 6.53817 6H4.26304C5.09346 7.63 6.23103 9.17 7.65298 10.56L1.86278 15.58L3.47812 17L9.16594 12L12.7038 15.11L13.5683 13.07ZM19.9728 8H17.6977L12.5786 20H14.8538L16.1278 17H21.5313L22.8167 20H25.0918L19.9728 8ZM16.9924 15L18.8352 10.67L20.6781 15H16.9924Z"
                fill="black"
              />
            </svg>
            English
          </button>
          <button className="text-white h-10 w-36 bg-primary   rounded-[20px] ">
            The App
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
