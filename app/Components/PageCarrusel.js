"use client";
import Image from "next/image";
import React, { useState } from "react";
import {ArrowLongRightIcon,ArrowLongLeftIcon,} from "@heroicons/react/24/solid";
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
    <div className="flex items-end w-full h-screen relative">
            <ArrowLongLeftIcon
        onClick={GoToPrev}
        className="absolute mt-20 text-white z-20 cursor-pointer left-0 self-center lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-10 sm:h-10 xs:w-10 xs:h-10 "
      />
      <Image src={Data.shoes[SlideIndex]} className="w-[60.80rem] h-[43.90rem]  " alt="" width={1000} height={1000} />
      <ArrowLongRightIcon
          onClick={GoToNext}
          className="absolute mt-20 text-white z-20 cursor-pointer right-0 self-center lg:w-16 lg:h-16 md:w-14 md:h-14 sm:w-10 sm:h-10 xs:w-10 xs:h-10"
        />
    </div>
  );
}

export default PageCarrusel;
