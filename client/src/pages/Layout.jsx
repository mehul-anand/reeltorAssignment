import React from "react";
import { Outlet } from "react-router-dom";
import Components from "../components";
const { Navbar, SideBar } = Components;

function Layout() {
  return (
    <>
      <Navbar />
      <SideBar outlet={<Outlet />} />
    </>
  );
}

export default Layout;
