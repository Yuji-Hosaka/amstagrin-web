import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <>
      <div className="grid grid-cols-6 h-screen">
        <div className="col-span-1 bg-slate-400">
          <Sidebar />
        </div>
        <div className="col-span-5 bg-red-300">
          <Outlet />
        </div>
      </div>
    </>
  );
}
