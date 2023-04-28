"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
function PageCarrusel({ Data }) {
  const [SlideIndex, setSlideIndex] = useState(0);

  const GoToPrev = () => {
    setSlideIndex(SlideIndex === 0 ? Data.shoes.length - 1 : SlideIndex - 1);
  };
  const GoToNext = () => {
    setSlideIndex(SlideIndex === Data.shoes.length - 1 ? 0 : SlideIndex + 1);
  };

  const dots = Array(Data.shoes.length).fill(null);

  return (
    <div className="flex w-full relative">
      <ArrowLongLeftIcon
        onClick={GoToPrev}
        className="absolute mt-20 text-black self-center z-20 cursor-pointer left-0 lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-10 xs:w-10 phone:w-6 phone:h-6 phone:ml-2  sm:h-10 xs:h-10  "
      />
      <Image
        src={Data.shoes[SlideIndex]}
        className="lg:w-[60.80rem] lg:h-[40.50rem] md:w-[50.80rem] md:h-[25.50rem] sm:w-[48.80rem] sm:h-[40.50rem] xs:w-[38.50rem] phone:w-[32.50rem] xs:h-[25.50rem] phone:h-[20.50rem] xs:self-center "
        alt=""
        width={1000}
        height={1000}
      />
      <ArrowLongRightIcon
        onClick={GoToNext}
        className="absolute mt-20 text-black z-20 self-center cursor-pointer right-0 lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-10  xs:w-10 phone:w-6 phone:mr-2  sm:h-10 xs:h-10 phone:h-6"
      />
    </div>
  );
}

export default PageCarrusel;
