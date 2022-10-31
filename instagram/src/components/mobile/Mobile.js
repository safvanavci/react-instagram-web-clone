import React from "react";
import CreateIcon from "../icons/CreateIcon";
import ExploreIcon from "../icons/ExploreIcon";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import avatar from "../../assets/avatar.jpg";
import { NavLink } from "react-router-dom";

export default function Mobile() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-border lg:hidden z-50">
      <div className="px-7 py-3 flex justify-between">
        <NavLink to={"/"}>
          <HomeIcon />
        </NavLink>
        <NavLink to={'search'}>
          <SearchIcon />
        </NavLink>
        <NavLink to={'create'}>
          <CreateIcon />
        </NavLink>
        <NavLink to={'explore'}>
          <ExploreIcon />
        </NavLink>
        <NavLink to={'profile'}>
          <div className="w-6 h-6 rounded-full overflow-hidden ">
            <img src={avatar} />
          </div>
        </NavLink>
      </div>
    </div>
  );
}
