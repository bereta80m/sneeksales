import Link from "next/link";
import React from "react";
import { ICONSVG } from "../SVG/ICONSVG";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="flex top-0 text-black items-center w-full justify-between px-10 sticky py-2  z-20">
      <ul className="flex items-center gap-5  sm:hidden xs:hidden md:flex lg:flex ">
        {MenuA.map((item, index) => {
          return (
            <Link key={index} href={item.routes}>
              {item.name}
            </Link>
          );
        })}
      </ul>

      <div className="dropdown lg:hidden md:hidden sm:flex xs:flex bg-transparent border-none ">
        <label tabIndex={0} className="btn m-1 focus:bg-transparent bg-transparent ">
          <Bars3Icon className="lg:hidden md:hidden sm:flex xs:flex w-10 h-10 text-black hover:text-white" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          {MenuA.map((item, index) => {
            return (
              <Link key={index} href={item.routes}>
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>

      <ul className="flex items-center ">
        <ICONSVG color={"#000"} width={"66px"} height={"62px"} />
      </ul>

      <div className="lg:hidden md:hidden dropdown dropdown-end sm:flex xs:flex bg-transparent border-none  ">
        <label
          tabIndex={0}
          className="btn m-1 bg-transparent border-none hover:bg-transparent"
        >
          <img
            class="inline object-cover w-10 h-10  rounded-full"
            src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Profile image"
          />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 gap-1 shadow bg-base-100 rounded-box w-52"
        >
          {MenuB.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.routes}
                className="hover:bg-slate-300 p-2 rounded-lg "
              >
                {item.name}
              </Link>
            );
          })}
        </ul>
      </div>

      <ul className="flex items-center gap-5  sm:hidden xs:hidden md:flex">
        {MenuB.map((item, index) => {
          return (
            <Link key={index} href={item.routes}>
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
  { name: "Home", icon: "",routes:"/" },
  { name: "Store", icon: "",routes:"/"  },
  { name: "Women", icon: "",routes:"/"  },
  { name: "Collections", icon: "",routes:"/"  },
];
const MenuB = [
  { name: "Contacts", icon: "",routes:"/"  },
  { name: "Favoritos", icon: "",routes:"/"  },
  { name: <ShoppingCartIcon className="w-8 h-8 text-black " />, icon: "",routes:"/"  },
  {name: "Login",icon: "",routes:"Login" },
];
