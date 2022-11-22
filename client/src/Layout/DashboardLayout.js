import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="md:flex relative min-h-screen ">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 p-5 md:ml-64">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
