import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[calc(100vh-235px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
