"use client";
import Image from "next/image";
import React, { useState } from "react";
import BA from "../../public/BG-A.jpg";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

function Carrusel() {
  const [SlideIndex, setSlideIndex] = useState(0);

  const goToPrev = () => {
    setSlideIndex(SlideIndex === 0 ? Carusels.length - 1 : SlideIndex - 1);
  };

  const goToNext = () => {
    setSlideIndex(SlideIndex === Carusels.length - 1 ? 0 : SlideIndex + 1);
  };
  const Dots = Array(Carusels.length).fill(null);

  return (
    <div className="flex w-full h-full relative  ">
      <ArrowLongLeftIcon
        onClick={goToPrev}
        className="absolute text-white z-20 cursor-pointer left-0 self-center lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 xs:w-10 xs:h-10 "
      />
      <div className="flex w-full  h-full justify-center z-10  ">
        <Image
          src={Carusels[SlideIndex].image}
          alt=" "
          width={1000}
          height={1000}
          className=" lg:w-[43.30rem]  lg:h-[43.90rem] md:w-[40.30rem] md:h-[40.70rem] sm:w-[40.30rem] sm:h-[40.70rem]  mr-36 xs:mt-14 sm:mt-10 md:mt-6 lg:mt-2  "
        />
        <div className="Dots"></div>
        <ArrowLongRightIcon
          onClick={goToNext}
          className="absolute text-white z-20 cursor-pointer right-0 self-center lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 xs:w-10 xs:h-10"
        />
        <div className="Dots flex absolute bottom-0 self-center z-20 ">
          {Dots.map((dots, index) => {
            return (
              <div
                onClick={() => setSlideIndex(index)}
                className={`h-3 cursor-pointer w-3 rounded-full m-2 ${
                  SlideIndex === index ? "bg-white" : "bg-gray-500"
                }  `}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carrusel;

const Carusels = [
  {
    image:
      "https://static.nike.com/a/images/xc039s1dqknncoifzahz/air-jordan-13.png",
  },
  {
    image:
      "https://static.nike.com/a/images/d7kgfyw9idjkekci1grr/air-jordan-10.png",
  },
  {
    image:
      "https://static.nike.com/a/images/u4k4bp8ppsbg2t8llkzt/air-jordan-19.png",
  },
];
