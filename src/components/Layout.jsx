import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <Header />  {/* Add Header at the top */}
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <Outlet /> {/* Render the current page component */}
        </div>
      </div>
      <Footer />  {/* Add Footer at the bottom */}
    </div>
  );
}

export default Layout;
