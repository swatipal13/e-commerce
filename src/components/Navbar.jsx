import { MapPin } from "lucide-react";
import { FaCaretDown, FaShoppingCart, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = ({ location, getLocation, openDropDown,setOpenDropDown }) => {


  const handleOpenDropDown = () => {
    setOpenDropDown(!openDropDown)
  }


  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between align-center">
        {/* {logo section} */}
        <div className="flex gap-7 itmes-center">
          <Link to={"/"} className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Shop Me"
              className="w-[50px] h-[50px]"
            />
            <h1 className="font-semibold border-b-[3px] border-yellow-500">
              hoporia
            </h1>
          </Link>
          <div className="flex gap-1 text-m cursor-pointer text-gray-500 items-center relative">
            <MapPin className="text-yellow-500" />
            <span className="font-semibold " onClick={handleOpenDropDown}>
              {location ? (
                <div className="flex gap-1 text-sm">
                  <p>{location.county}</p>
                  <p>,</p>
                  <p>{location.state}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown />
          </div>
          {openDropDown ? (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white absolute top-18 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-1xl text-gray-800 flex justify-between cursor-pointer" >Change Address <span > <FaTimes onClick={handleOpenDropDown} /> </span> </h1>
              <button onClick={getLocation} className="border-0 rounded-md text-white bg-yellow-500 px-5 py-2 cursor-pointer hover:bg-orange-400">Detect My Location</button>
            </div>
          ) : null}
        </div>
        <div className="flex items-center"> 
          {/* menu section */}
          <nav className="flex gap-7 items-center">
            <ul className="flex gap-7 items-center text-m font-semibold">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "border-b-[3px] border-b-yellow-500"
                        : "text-black"
                    } cursor-pointer transition-all`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink
                  to={"/products"}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "border-b-[3px] border-b-yellow-500"
                        : "text-black"
                    }`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "border-b-[3px] border-b-yellow-500"
                        : "text-black"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    ` ${
                      isActive
                        ? "border-b-[3px] border-b-yellow-500"
                        : "text-black"
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link to={"/cart"}>
              <FaShoppingCart className="relative w-6 h-6" />
              <span className="bg-red-500 rounded-full top-3  text-white absolute text-sm w-4 h-4 flex items-center justify-center">
                0
              </span>
            </Link>
            <div>
              <SignedOut>
                <SignInButton className="border-0 rounded-md bg-yellow-500 text-white cursor-pointer px-3 py-1 font-semibold" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
