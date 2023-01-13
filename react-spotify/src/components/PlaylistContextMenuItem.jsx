import React, { useRef, useState } from "react";
import PlaylistContextMenu from "./PlaylistContextMenu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PlaylistContextMenuItem = ({ children: label, subMenuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPossitionClass, setMenuPossitionClass] = useState('left-full')
  const menuItemRef = useRef(null);

  function getMenuPossitionClass () {

    const menuItem = menuItemRef.current;
    const menuWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemEndCoordinate = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft = menuWidth > windowWidth - menuItemEndCoordinate;

    return  shouldMoveMenuLeft ? 'right-full' : 'left-full';
  }

  function openMenu () {
    setIsMenuOpen(true);
    setMenuPossitionClass(getMenuPossitionClass());
  }
  function closeMenu () {
    setIsMenuOpen(false);

  }

  if (subMenuItems) {
    return (
      <li className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu} ref={menuItemRef}>
        <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default flex justify-between items-center">
          {label} <ChevronRightIcon className="h-4 w-4" />
        </button>
        {isMenuOpen && (
          <PlaylistContextMenu
            menuItems={subMenuItems}
            classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute top-0 ${menuPossitionClass}`}
          />
        )}
      </li>
    );
  }

  return (
    <li>
      <button className="w-full p-3 text-left hover:text-white hover:bg-[#3e3e3e] cursor-default">
        {label}
      </button>
    </li>
  );
};

export default PlaylistContextMenuItem;
