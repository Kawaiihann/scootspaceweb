import React from "react";

function PricingPlan() {
  return (
    <>
      <div className="flex xl:flex-row-reverse flex-col w-full mb-40 bg-b-pricingPlanBg ">
        <div className="flex flex=col w-full xl:w-2/6 justify-end mr-28 ">
          <div className="flex flex-col items-end gap-6">
            <div className="text-black text-5xl font-black font-sofia leading-10  text-end ">
              Pricing Plan
            </div>
            <div className="text-black text-sm text-end max-w-md font-light font-sofia leading-snug">
              We believe in keeping things straightforward and budget-friendly.
              Our pricing structure consists of a single plan:
            </div>
          </div>
        </div>
        <div className="flex flex=col w-full xl:w-2/6  justify-center items-center mx-4">
          <div className="flex flex-col items-center ">
            <div className="mainrectangle flex flex-col justify-between h-[700px] w-[500px] bg-gradient-to-b from-teal-500 to-teal-700  rounded-3xl border-4 border-white">
              <div className="flex flex-row justify-between pt-4">
                <div className="w-32 h-16 text-white text-2xl font-black font-sofia leading-tight">
                  Price per hour
                </div>{" "}
                <div className="w-48 h-24 text-center ">
                  <span className="text-white text-6xl font-black font-sofia">
                    120
                  </span>
                  <span className="text-white text-3xl font-black font-sofia">
                    den/h
                  </span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                {" "}
                <div className="w-80 h-[0.5px] rounded-full border-2  justify-center items-center border-white">
                  -
                </div>
              </div>
              <div className="flex flex-col gap-6 justify-center items-center ">
                <ul className="flex flex-col gap-6 text-start">
                  <li>Secure Scooter Lock</li>
                  <li>Easy and Safe Payment Options</li>
                  <li>Free Scooter Charger</li>
                  <li>Prime Location Advantage</li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-end">
                <button className="flex w-full sm:w-44 justify-center items-center text-center text-black py-2 px-3 bg-white rounded-2xl gap-2.5 border-2 border-teal-500 ">
                  How to park?
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex=col w-full xl:w-2/6 justify-start items-end ml-28">
          <div className="flex-col justify-center items-center">
            <div className="text-black text-sm text-start max-w-md font-light font-sofia leading-snug">
              With ScootSpace, you get more than just parking; you get a
              hassle-free and comprehensive solution for your electric scooter.{" "}
              <br />
              Enjoy peace of mind knowing that your scooter is safe, charged,
              and ready to go whenever you need it. Discover the convenience,
              security, and sustainability that ScootSpace offers for just 120
              denar per hour.{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PricingPlan;
