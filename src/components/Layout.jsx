import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet /> {/* Render the current page component */}
      </div>
    </div>
  );
}

export default Layout;
