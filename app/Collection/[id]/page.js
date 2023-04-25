import PageCarrusel from "@/app/Components/PageCarrusel";
import { db } from "@/app/Firebase/FireConfig";
import { collection, getDocs } from "firebase/firestore";
import { Inter, Roboto, Sigmar_One } from "next/font/google";
import React from "react";

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
    <div className="grid grid-cols-3 h-screen w-full bg-black">
      <div className="flex  col-span-2  ">
        <PageCarrusel Data={Data[0]} />
      </div>
      <div className="flex flex-col break-words  text-white pt-28 pr-5 text-justify gap-10 ">



        <p className={`${roboto.className} `}>
          Like Jordan himself, his eponymous footwear arrived with a bang,
          sharing its namesake’s tradition-breaking bravado. A black and red
          colorway violated the league’s uniform policy, earning a stern letter
          from league officials and generating a $5,000 fine each time the
          player wore the shoes on court. It is with this brazen charisma that
          the Air Jordan lineage was born.
        </p>

        <div className="flex items-center justify-between ">
          <p className="text-xl font-bold">{Data[0].brand.toUpperCase()}</p>

          <p className={`text-3xl font-bold ${roboto.className}`}>
            {Data[0].number}
          </p>
          <p className="text-xl font-bold truncate max-w-5">{Data[0].color.replace('OG', '') }</p>
        </div>
      </div>
    </div>
  );
}

export default page;
