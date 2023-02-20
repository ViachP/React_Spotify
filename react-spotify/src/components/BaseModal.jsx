import { useEffect, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function BaseModal({ onClose: handleClose }) {
  const ref = useRef();
  const contentRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      ref.current.classList.remove("opacity-0");
      contentRef.current.classList.remove("-translate-y-10");
    });

    function handleEsc({ key }) {
      if (key === "Escape") close();
    }

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  });

   function close() {
    ref.current.classList.add('opacity-0');
    contentRef.current.classList.add('-translate-y-10');

    setTimeout(handleClose, 500);
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 z-30 flex justify-center items-center opacity-0 transition-opacity duration-500"
      role="dialog"
      ref={ref}
      onClick={close}
    >
      <div
        className="relative bg-[#333] h-1/3 w-2/5 rounded-xl -translate-y-10 transition-transform duration-500"
        ref={contentRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="absolute right-0 p-3 text-neutral-500 hover:text-neutral-200"
          onClick={close}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
}

export default BaseModal;
