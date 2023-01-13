import React, { useRef, useState } from "react";
import PlaylistContextMenu from "./PlaylistContextMenu";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const PlaylistContextMenuItem = ({ children: label, subMenuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPossitionXClass, setMenuPossitionXClass] = useState('left-full');
  const [menuPossitionYClass, setMenuPossitionYClass] = useState('top-0');
  const menuItemRef = useRef(null);

  function getMenuPossitionXClass () {

    const menuItem = menuItemRef.current;
    const menuItemWidth = menuItem.offsetWidth;
    const windowWidth = window.innerWidth;
    const menuItemRightCoordX = menuItem.getBoundingClientRect().right;
    const shouldMoveMenuLeft = menuItemWidth > windowWidth - menuItemRightCoordX;

    return  shouldMoveMenuLeft ? 'right-full' : 'left-full';
  }

  function getMenuPossitionYClass () {

    const windowHeight = window.innerHeight;
    const menuItem = menuItemRef.current;
    const menuHeight = menuItem.offsetHeight * subMenuItems.length;
    const menuItemBottomCoordY = menuItem.getBoundingClientRect().bottom;
    const shouldMoveMenuUp = menuHeight > windowHeight - menuItemBottomCoordY;

    return  shouldMoveMenuUp ? 'bottom-0' : 'top-0';
  }

  function openMenu () {
    setIsMenuOpen(true);
    setMenuPossitionXClass(getMenuPossitionXClass());
    setMenuPossitionYClass(getMenuPossitionYClass());
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
            classes={`bg-[#282828] text-[#eaeaea] text-sm p-1 rounded shadow-xl cursor-default absolute ${menuPossitionYClass} ${menuPossitionXClass}`}
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
