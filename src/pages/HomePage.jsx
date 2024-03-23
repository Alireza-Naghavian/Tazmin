import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "../features/Home/Home";
import Footer from "../ui/Footer";

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
      <div className="border-t border-t-gray_base w-full mt-16 ">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
