import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "../features/Home/Home";

function HomePage() {
  return (
    <div className="">
      <Header>
        <Outlet />
      </Header>
      {/* main wrapper */}
      <div className=" pt-12 xl:px-24 md:px-16 px-8 ">
      
          <Home>
            <Outlet />
          </Home>
     
      </div>
    </div>
  );
}

export default HomePage;
