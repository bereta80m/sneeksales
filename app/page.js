import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Firebase/FireConfig";
import Link from "next/link";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Carrusel from "./Components/Carrusel";

const GetData = async () => {
  let Database = [];
  const querySnapshot = await getDocs(collection(db, "Jordans"));
  querySnapshot.forEach((doc) => {
    Database.push(doc.data());
  });
  return Database;
};

async function Home() {
  const Data = await GetData();
  return (
    <div className="grid lg:grid-rows-2 w-full  h-screen gap-5">

      <Carrusel />

      <div className="w-full z-20">
        <div className="Cards  grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 xs:justify-center  bg-white p-10 gap-5 z-10 ">

          {Data?.map((item, index) => {

            return (
              <Link key={index} href={`Collection/${item.id}`} className="flex flex-col ">
                <div className={`flex w-52 relative h-60 bg-slate-100 shadow-lg rounded-lg`}>
                  <AiOutlineHeart className="absolute w-5 h-5 right-0 m-3 z-10 " />
                  <div className="flex w-full h-full absolute justify-center items-center">
                    <Image
                      src={item.shoe}
                      alt=""
                      width={500}
                      height={500}
                      className="w-36 h-24  "
                    />
                  </div>
                </div>

                <div className="flex w-52  items-center justify-between ">

                  <div className="flex flex-col">
                    <p className="truncate overflow-hidden w-36 pl-1 ">
                      {`${item.title}`.split("/").shift()}
                    </p>
                    <p className="text-black/50 pl-1 ">Brand Jordan</p>
                  </div>
 
                  <div className="flex flex-col items-center ">
                    <p className="">{`$${item.price}`}</p>
                    <ShoppingBagIcon className="flex w-5 h-5"/>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;



