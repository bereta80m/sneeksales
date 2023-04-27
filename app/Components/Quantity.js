import React from "react";
import { PlusSmallIcon, MinusSmallIcon } from "@heroicons/react/24/solid";

function Quantity({ Data }) {
  return (
    <>
      <div className="flex items-center gap-3 ">
        <p>Quantity</p>
        <div className="flex items-center border rounded-xl gap-3 px-2">
          <MinusSmallIcon className="h-5 w-5 cursor-pointer " />
          <span>1</span>
          <PlusSmallIcon className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <p className="text-3xl font-bold">${Data[0].price}</p>
    </>
  );
}

export default Quantity;
