import React from "react";
import { NavLink } from "react-router";
import MenuListComposition from "./Burger";
import useWindowWidth from "../hooks/useWindowWidth";
export default function Header() {
  const width = useWindowWidth();
  console.log(width);
  return (
    <div className="bg-blue-400 h-[70px] mb-[50px] w-full flex items-center justify-between p-3.5 ">
      <NavLink
        to="/"
        className=" w-[50px] h-[50px] rounded-full bg-amber-50"
      ></NavLink>
      <nav className="flex flex-col ">
        {width < 768 ? (
          <MenuListComposition />
        ) : (
          <div className="flex gap-[20px]">
            <NavLink to="/" className=" text-[20px]  font-medium">
              form
            </NavLink>
            <NavLink to="posts" className="text-[20px] font-medium">
              posts
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
}
