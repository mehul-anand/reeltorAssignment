import React from "react";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="p-4 sm:ml-64 bg-gray-50 dark:bg-gray-800">
          <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
