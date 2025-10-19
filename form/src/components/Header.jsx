import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  return (
    <div className="bg-blue-400 h-[70px] mb-[50px] w-full p-2.5">
      <div className="flex justify-between items-center">
        <NavLink
          to="/"
          className=" w-[50px] h-[50px] rounded-full bg-amber-50"
        ></NavLink>
        <nav className="flex gap-4">
          <NavLink
            to="/"
            className=" h-8 text-[20px] hover:border-b-2 border-amber-500 font-medium"
          >
            form
          </NavLink>
          <NavLink
            to="posts"
            className="text-[20px] hover:border-b-2 border-amber-500 font-medium"
          >
            posts
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
