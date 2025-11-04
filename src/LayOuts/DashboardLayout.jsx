import React from "react";
import Sidebar from "../pages/DashBoard/widgets/Sidebar";
import Navbar from "../pages/DashBoard/widgets/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout d-flex gap-1">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className=" dashboard-main flex-grow-1 d-flex flex-column">
        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="dashboard-content p-4 flex-grow-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
