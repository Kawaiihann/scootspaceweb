import React from "react";
import HowToParkBg from "../assets/background/howToParkBg.svg";
import { useState } from "react";

function HowToPark() {
  const [cards, setCards] = useState({});
  setCards({
    card1: {
      title: "Qr code scanner",
      description: "Can be scan by scootspace app",
      image: "",
    },
    card2: {
      title: "Led indicator",
      description: "Open/Close",
      image: "",
    },
    card3: {
      title: "Scooter charger",
      description: "Most scooter supported",
      image: "",
    },
    card4: {
      title: "Locking bar",
      description: "Closes automatically",
      image: "",
    },
  });

  return (
    <>
      <div className="flex w-full bg-howToParkBg flex-row">
        <div className="flex items-start flex-col basis-4/6 mt-32">
          <div className="flex flex-col gap-3 ml-28 h-auto w-[50%]">
            <div className="text-black text-5xl font-black font-sofia leading-10 ">
              How to park?
            </div>
            <div className="text-black text-normal sm:text-lg font-light font-sofia   leading-tight">
              Parking your electric scooter with ScootSpace is a breeze. Simply
              locate the nearest ScootSpace hub using our app, secure your
              scooter, and make an easy payment. It's that simple! No
              reservations, no complications. Experience the ultimate
              convenience in urban mobility with ScootSpace.{" "}
            </div>

            <div className="flex flex-wrap gap-5 mt-14 ">
              <div className="flex flex-col gap-1 p-7 bg-white rounded-xl border-2 border-borderColor justify-center items-center  ">
                {cards.map((card) => (
                  <div className="flex flex-col gap-1">
                    <div className="text-black text-2xl font-black font-sofia leading-10 ">
                      {card.title}
                    </div>
                    <div className="text-black text-normal sm:text-lg font-light font-sofia   leading-tight">
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex basis-[34%] flex-col items-end">
          <div className=" flex flex-col items-end justify-end ">
            <img
              src={HowToParkBg}
              alt=""
              className=" flex items-end justify-end"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowToPark;
