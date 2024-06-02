import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
function MainLayout() {
  return (
    <main className=" h-screen w-full font-inter">
      <NavBar />
      <div className="flex size-full flex-col">
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
