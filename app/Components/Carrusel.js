"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Carrusel() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === Carusels.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Cambia 2000 a la cantidad de milisegundos que quieres para el cambio de imagen (2 segundos en este caso)
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <>
      <div className="bg-white w-full grid lg:grid-cols-2 md:grid-cols-1 lg:px-[10rem] md:px-[5rem] sm:px-[0rem] xs:px-[0rem] relative  h-3/4  ">
        {/*Carrusel  <Carrusel />*/}
        
        <div className="flex flex-col pt-24 xs:px-3 phone:px-5 gap-5">

          <motion.p className="font-bold text-5xl lg:max-w-xl md:max-w-xl phone:max-w-sm ">
          Find your dream sneakers
          </motion.p>
          <motion.p className="lg:max-w-xl md:max-w-xl phone:max-w-sm "> 
          Welcome to our web of sneakers, where style meets comfort and passion meets culture. Explore the latest releases, iconic classics,
          and everything in between. Join our community of sneakerheads and find your perfect pair of kicks.
          </motion.p>
        </div>
        <div className="flex border-none ">
   
          <Image
            key={slideIndex}
            src={Carusels[slideIndex].image}
            alt=""
            width={500}
            height={500}
            className=" -rotate-45 lg:w-[40rem] md:w-[30rem]  sm:w-[30rem] xs:w-[30rem] phone:w-[20rem] border-none  "
          />
        </div>
      </div>
    </>
  );
}

export default Carrusel;

const TitlesShow = [
  "Find your dream sneakers",
  "The Ultimate Sneaker Collection",
  "Where Your Sole Meets Style",
  "A World of Sneaker Culture",
  " Your One-Stop Shop for Footwear",
  "A Sneaker Lover's Paradise",
  "Finding the Perfect Pair",
];
const Carusels = [
  {
    image:
      "https://static.nike.com/a/images/tzmrnqqixkaczkdyqlor/university-red-black-%E2%80%94-white.png",
  },
  {
    image:
      "https://static.nike.com/a/images/qr1azdeoxsfmubkeew3v/concord-black-%E2%80%94-barely-volt-%E2%80%94-bright-mango.png",
  },
  {
    image:
      "https://static.nike.com/a/images/yohqo7izg7zkmihpokwv/air-jordan-xxxi-og-green-abyss-white-%E2%80%94-ghost-green.png",
  },
  {
    image:
      "https://static.nike.com/a/images/m8gslp3yagk5mw8olauk/air-jordan-xxxi-og-cool-grey-metallic-gold-%E2%80%94-dark-grey-%E2%80%94-wolf-grey-battle-grey.png",
  },
];

/*
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
*/
