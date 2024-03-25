import React from "react";
import NewProject from "./NewProject";
import { Outlet } from "react-router-dom";
import Header from "../../pages/Header";
import Footer from "../../ui/Footer";




function OwnerLayout() {
  return (
    <div>
      {/* owner create project */}
      <div>
        <Header>
          <Outlet />
        </Header>
      </div>
      <Outlet/>
      <div className="border-t border-t-gray_base w-full mt-16 ">
        <Footer />
      </div>
    </div>
  );
}

export default OwnerLayout;
