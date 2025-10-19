import React from "react";
import { NavLink } from "react-router";
import MenuListComposition from "./Burger";
import useWindowWidth from "../hooks/useWindowWidth";
import Button from "@mui/material/Button";
export default function Header() {
  const width = useWindowWidth();
  console.log(width);
  return (
    <div className="bg-gray-500 h-[70px] mb-[50px] w-full flex items-center justify-between p-3.5 ">
      <NavLink
        to="/"
        className=" w-[50px] h-[50px] rounded-full bg-amber-50"
      ></NavLink>
      <nav className="flex flex-col ">
        {width < 768 ? (
          <MenuListComposition />
        ) : (
          <div className="flex gap-[20px]">
            <Button variant="contained" href="#outlined-buttons">
              <NavLink to="/" className=" text-[20px] font-medium">
                form
              </NavLink>
            </Button>

            <Button variant="contained" href="#outlined-buttons">
              <NavLink to="posts" className="text-[20px] font-medium">
                posts
              </NavLink>
            </Button>
          </div>
        )}
      </nav>
    </div>
  );
}
