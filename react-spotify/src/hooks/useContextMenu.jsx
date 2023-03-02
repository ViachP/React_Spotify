import { useState, useRef } from "react";
import usePosition from "./useContextMenuPosition";
import useClickAway from "./useClickAway";
import useEvent from "./useEvent";

function useContextMenu(items) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const move = usePosition(ref, isOpen);

  useClickAway(ref, close, isOpen);

  useEvent("keydown", handleEsc, isOpen);

  function handleEsc({ key }) {
    if (key === "Escape") close();
  }

  function open(event) {
    event.preventDefault();

    move(event.clientX, event.clientY);

    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return {
    open,
    close,
    isOpen,
    ref,
    items,
  };
}

export default useContextMenu;
