import TheHeader from "./components/TheHeader";
import TheMain from "./components/TheMain";
import TheRegistration from "./components/TheRegistration";
import TheSidebar from "./components/TheSidebar";
import TheSidebarOverlay from "./components/TheSidebarOverlay";

function App() {
  return (
    <>
      <div className="flex flex-grow overflow-auto">
        <TheSidebar />
        <TheSidebarOverlay />
        <div className="flex-1 overflow-auto">
          <TheHeader />
          <TheMain />
        </div>
      </div>
      <TheRegistration />
    </>
  )
}
export default App;