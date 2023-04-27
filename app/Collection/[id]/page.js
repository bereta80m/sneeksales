import PageCarrusel from "@/app/Components/PageCarrusel";
import { db } from "@/app/Firebase/FireConfig";
import { collection, getDocs } from "firebase/firestore";
import { Inter, Roboto, Sigmar_One } from "next/font/google";
import React from "react";
import Quantity from "@/app/Components/Quantity";
import RatingStars from "@/app/Components/RatingStars";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const Sigmar = Sigmar_One({
  weight: "400",
  subsets: ["latin"],
});
const GetData = async (id) => {
  let Database = [];
  const querySnapshot = await getDocs(collection(db, "Jordans"));
  querySnapshot.forEach((doc) => {
    Database.push(doc.data());
  });
  const Filtro = Database.filter((filtra) => filtra.id == Number(id));
  return Filtro;
};
async function page({ params }) {
  const { id } = params;
  const Data = await GetData(id);

  return (
    <div className="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  h-full w-full  bg-white ">
      <div className="flex  lg:col-span-2 md:col-span-1   ">
        <PageCarrusel Data={Data[0]} />
      </div>

      <div className="flex flex-col break-words  text-black lg:pt-28 md:pt-28  sm:pb-10 xs:pb-10 px-10 text-justify gap-5 ">
        <div className="Carito flex flex-col gap-3 ">
          <p className="capitalize text-2xl font-bold">{Data[0].brand}</p>
          <p className="">Men's Shoe</p>
          <RatingStars />
          <Quantity Data={Data}/>
        </div>

        <p className={`${roboto.className} `}>
          Like Jordan himself, his eponymous footwear arrived with a bang,
          sharing its namesake’s tradition-breaking bravado. A black and red
          colorway violated the league’s uniform policy, earning a stern letter
          from league officials and generating a $5,000 fine each time the
          player wore the shoes on court. It is with this brazen charisma that
          the Air Jordan lineage was born.
        </p>

        <div className=" items-center justify-between hidden ">
          <div className="flex flex-col items-center">
            <p className="text-xl font-bold">{Data[0].brand.toUpperCase()}</p>
            <p className={` ${roboto.className}`}>Brand</p>
          </div>
          <div className="flex flex-col items-center">
            <p className={`text-3xl font-bold ${roboto.className}`}>
              {Data[0].number}
            </p>
            <p className={` ${roboto.className}`}>#</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-xl font-bold truncate max-w-5">
              {Data[0].color.replace("OG", "")}
            </p>
            <p className={` ${roboto.className}`}>Color</p>
          </div>

        </div>
        <div className="btns pt-10 grid grid-cols-2 items-center gap-5 ">
            <button className="bg-red-500 p-5 rounded-lg text-white  ">Buy Now</button>
            <button className="bg-white p-5 rounded-lg text-black ">Add to Favorite</button>

          </div>
      </div>
    </div>
  );
}

export default page;
