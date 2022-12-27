import React from "react";
import PlaylistContextSubmenu from "./PlaylistContextSubmenu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PlaylistContextMenuItem = ({ children: label, subMenuItems }) => {
  let classes = "";
  let buttonClassess =
    "w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default";
  let icon = null;
  let subMenu = null;

  if (subMenuItems) {
    classes = "relative";
    buttonClassess = `${buttonClassess} flex justify-between items-center`;
    icon = <ChevronRightIcon className="h-4 w-4" />
    subMenu = <PlaylistContextSubmenu menuItems={subMenuItems} />;
  }

  return (
    <li className={classes}>
      <button className={buttonClassess}>
        {label}
        {icon}
      </button>
      {subMenu}
    </li>
  );
};

export default PlaylistContextMenuItem;
