import Link from "next/link";
import React from "react";
import { ICONSVG } from "../SVG/ICONSVG";
import { Bars3Icon,ShoppingCartIcon } from "@heroicons/react/24/solid";


function Header() {
  return (
    <header className="flex top-0 items-center w-full justify-between px-10 fixed py-3 z-20">
      
      <Bars3Icon className="lg:hidden md:hidden sm:flex xs:flex w-10 h-10 text-white"/>
      <ul className="flex items-center gap-5 text-white sm:hidden xs:hidden md:flex lg:flex ">
        {MenuA.map((item, index) => {
          return (
            <Link key={index} href={"/"}>
              {item.name}
            </Link>
          );
        })}
      </ul>

      <ul className="flex items-center ">
        <ICONSVG color={"#FFFFFF"} width={"66px"} height={"62px"} />
      </ul>

      
      <Bars3Icon className="lg:hidden md:hidden sm:flex xs:flex w-10 h-10 text-white"/>
      <ul className="flex items-center gap-5 text-white sm:hidden xs:hidden md:flex">
        {MenuB.map((item, index) => {
          return (
            <Link key={index} href={"/"}>
              {item.name}
            </Link>
          );
        })}
      </ul>
    </header>
  );
}

export default Header;

const MenuA = [
  { name: "Home", icon: "" },
  { name: "Store", icon: "" },
  { name: "Women", icon: "" },
  { name: "Collections", icon: "" },
];
const MenuB = [
  { name: "Contacts", icon: "" },
  { name: "Favoritos", icon: "" },
  { name: <ShoppingCartIcon className="w-5 h-5 text-white "/>, icon: ""},
  { name: <img class="inline object-cover w-10 h-10  rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>, icon: "" },
];
