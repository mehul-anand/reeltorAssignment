import React from "react";
import { Outlet } from "react-router-dom";
import Components from "../components";
const { Navbar, SideBar, Footer } = Components;

function Layout() {
  return (
    <>
      <Navbar />
      <SideBar outlet={<Outlet />} />
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
