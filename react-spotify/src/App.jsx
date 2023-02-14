import { useState, useEffect, useRef } from "react";
import BaseModal from "./components/BaseModal";
import BasePopover from "./components/BasePopover";
import BaseToast from "./components/BaseToast";
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
import TheRegistration from "./components/TheRegistration";
import TheSidebar from "./components/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebarOverlay";

function App() {
  const [isModalOpen, setIsModalOpen] = useState();
  const popoverRef = useRef();
  const toastRef = useRef();
  const contentWrapperRef = useRef();
  let isScrollingEnabled = true;

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    contentWrapper.addEventListener("wheel", handleScrolling);

    return () => contentWrapper.removeEventListener("wheel", handleScrolling);
  });

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function showPopover(title, description, target) {
    popoverRef.current.show(title, description, target);
  }

  function showToast(message) {
    toastRef.current.show(message);
  }

  function toggleScrolling(isEnabled) {
    isScrollingEnabled = isEnabled;
  }

  function handleScrolling(event) {
    if (isScrollingEnabled) return;

    event.preventDefault();
    event.stopPrapagation();
  }

  return (
    <>
      <div className="flex grow overflow-auto">
        <TheSidebar showPopover={showPopover} />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain
            showToast={showToast}
            openModal={openModal}
            toggleScrolling={toggleScrolling}
          />
        </div>
      </div>
      <TheRegistration />
      <BaseToast ref={toastRef} />
      <BasePopover ref={popoverRef} />
      {isModalOpen && <BaseModal onClose={closeModal} />}
    </>
  );
}
export default App;
