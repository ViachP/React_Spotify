import { useEffect, useRef } from "react";
import BaseToast from "./components/BaseToast";
import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
import TheRegistration from "./components/TheRegistration";
import TheSidebar from "./components/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebarOverlay";

function App() {
  const toastRef = useRef();
  const contentWrapperRef = useRef(null);
  let isScrollingEnabled = true;

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

  useEffect(() => {
    const contentWrapper = contentWrapperRef.current;
    contentWrapper.addEventListener("wheel", handleScrolling);

    return () => contentWrapper.removeEventListener("wheel", handleScrolling);
  });

  return (
    <>
      <div className="flex grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto" ref={contentWrapperRef}>
          <TheHeader />
          <TheMain showToast={showToast} toggleScrolling={toggleScrolling} />
        </div>
      </div>
      <TheRegistration />
      <BaseToast ref={toastRef} />
    </>
  );
}
export default App;
