import React from "react";

function WhyScootspace() {
  return (
    <>
      <div className="h-32"></div>
      <div className="flex flex=col w-full bg-red-200 h-auto items-center justify-center">
        <div className="flex flex-col ml-24 mr-24 w-full bg-slate-500">
          <div className="flex flex-col justify-center items-center bg-yellow-300 text-black gap-9 ">
            <div className="flex flex-col justify-center items-center gap-5 ">
              <div className="text-black font-sofia font-black text-5xl leading-10 ">
                Why ScootSpace?
              </div>
              <div className="max-w-screen-xl text-center text-black text-base font-light font-['Sofia Pro'] leading-tight">
                At ScootSpace, we're more than just a parking facility; we're a
                revolution in urban mobility. As the sole company offering
                electric scooter parking solutions in the country, our
                commitment to convenience, sustainability, and security is
                unrivaled.
              </div>
            </div>
            <div className="flex flex-row gap-14 flex-wrap flex-grow-1">
              <div className="flex bg-white border-solid rounded-2xl border-borderColor ">
                <div className="flex flex-col justify-center items-center gap-5 ">
                  <div>Exclusive Provider</div>
                  <img src="" alt="" />
                  <div>
                    ScootSpace is the sole provider of electric scooter parking
                    services in North Macedonia. We are your dedicated and
                    trusted partner in elevating your urban mobility experience.
                  </div>
                </div>
              </div>

              <div className="flex bg-white border-solid rounded-2xl border-borderColor"></div>
              <div className="flex bg-white border-solid rounded-2xl border-borderColor"></div>
            </div>
            {/* <div className='text-6xl font-black leading-10 font-sofia'>Why ScootSpace?</div>
                <div className=' font-black leading-10 font-sofia'>
                    At ScootSpace, we're more than just a parking facility; we're a revolution in urban mobility. As the sole company offering electric scooter parking solutions in the country, our commitment to convenience, sustainability, and security is unrivaled.
                    </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyScootspace;
